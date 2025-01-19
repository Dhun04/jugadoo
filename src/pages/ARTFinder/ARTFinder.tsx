import React, { useState } from 'react';

interface LangflowClientConfig {
    baseURL: string;
    applicationToken: string;
}

interface Headers {
    [key: string]: string;
}

interface InitiateSessionResponse {
    outputs: Array<{ outputs: Array<{ artifacts: { stream_url: string } }> }>;
}

class LangflowClient {
    private baseURL: string;
    private applicationToken: string;

    constructor({ baseURL, applicationToken }: LangflowClientConfig) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }

    async post(endpoint: string, body: any, headers: Headers = { "Content-Type": "application/json" }): Promise<any> {
        headers["Authorization"] = `Bearer ${this.applicationToken}`;
        headers["Content-Type"] = "application/json";
        const url = `${this.baseURL}${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body),
            });

            const responseMessage = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
            }
            return responseMessage;
        } catch (error: any) {
            console.error('Request Error:', error.message);
            throw error;
        }
    }

    async initiateSession(
        flowId: string,
        langflowId: string,
        inputValue: string,
        inputType = 'chat',
        outputType = 'chat',
        stream = false,
        tweaks: Record<string, any> = {}
    ): Promise<InitiateSessionResponse> {
        const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
        return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks });
    }

    handleStream(
        streamUrl: string,
        onUpdate: (data: any) => void,
        onClose: (message: string) => void,
        onError: (error: Event) => void
    ): EventSource {
        const eventSource = new EventSource(streamUrl);

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        eventSource.onerror = (event) => {
            console.error('Stream Error:', event);
            onError(event);
            eventSource.close();
        };

        eventSource.addEventListener('close', () => {
            onClose('Stream closed');
            eventSource.close();
        });

        return eventSource;
    }

    async runFlow(
        flowIdOrName: string,
        langflowId: string,
        inputValue: string,
        inputType = 'chat',
        outputType = 'chat',
        tweaks: Record<string, any> = {},
        stream = false,
        onUpdate: (data: any) => void,
        onClose: (message: string) => void,
        onError: (error: Event) => void
    ): Promise<any> {
        try {
            const initResponse = await this.initiateSession(
                flowIdOrName,
                langflowId,
                inputValue,
                inputType,
                outputType,
                stream,
                tweaks
            );

            console.log('Init Response:', initResponse);

            if (
                stream &&
                initResponse &&
                initResponse.outputs &&
                initResponse.outputs[0].outputs[0].artifacts.stream_url
            ) {
                const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
                console.log(`Streaming from: ${streamUrl}`);
                this.handleStream(streamUrl, onUpdate, onClose, onError);
            }
            return initResponse;
        } catch (error: any) {
            console.error('Error running flow:', error);
            onError(new Error('Error initiating session'));
        }
    }
}

const MainApp: React.FC = () => {
    const flowIdOrName = '04aa3e79-f602-4e06-9c4c-2b0b1c10911f';
    const langflowId = 'da6a9de9-e025-4aee-a12f-8b75a4790d4f';
    const applicationToken = 'AstraCS:CJAMciyYLWchfXGDMOqwAhwW:8059f83d2d22dfad15c68d07b95a0044222f5e6dfafc0b09875e42f19248d4e7';

    const langflowClient = new LangflowClient({
        baseURL: 'https://api.langflow.astra.datastax.com',
        applicationToken,
    });

    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleRunFlow = async () => {
        const tweaks = {
            "ChatInput-GZq9u": {},
            "StructuredOutputComponent-ohVz0": {},
            "GroqModel-CezgT": {},
            "SubFlow-OMiUu": {},
            "FilterData-uidyk": {},
            "ParseData-8mHEG": {},
            "FilterData-2sT1V": {},
            "ParseData-K6x7q": {},
            "TextOutput-lifT7": {},
            "TextOutput-FYht9": {},
            "ParseData-hZDuV": {},
            "ChatOutput-v5gtx": {},
        };

        try {
            const response = await langflowClient.runFlow(
                flowIdOrName,
                langflowId,
                inputValue,
                'chat',
                'chat',
                tweaks,
                false,
                (data) => console.log('Received:', data.chunk),
                (message) => console.log('Stream Closed:', message),
                (error) => console.log('Stream Error:', error)
            );

            if (response && response.outputs) {
                const flowOutputs = response.outputs[0];
                const firstComponentOutputs = flowOutputs.outputs[0];
                const output = firstComponentOutputs.outputs.message;

                setOutputValue(output.message.text);
                console.log('Final Output:', output.message.text);
            }
        } catch (error: any) {
            console.error('Main Error', error.message);
        }
    };

    return (
        <div className="main-app">
            <h1>Langflow Client</h1>
            <div>
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your input here..."
                    rows={5}
                    style={{ width: '100%', marginBottom: '10px' }}
                />
            </div>
            <button onClick={handleRunFlow} style={{ marginBottom: '10px' }}>Run Flow</button>
            <div>
                <textarea
                    value={outputValue}
                    readOnly
                    placeholder="Output will appear here..."
                    rows={5}
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
};

export default MainApp;