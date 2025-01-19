// import React, { useState } from "react";
// import "./soulbuddy.css"

// const SoulBuddy: React.FC = () => {
//   const [formData, setFormData] = useState({
//     birth_date: "",
//     birth_time: "",
//     latitude: "",
//     longitude: "",
//     timezone: "",
//   });
//   const [result, setResult] = useState<string>("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://127.0.0.1:5000/get_horoscope", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       setResult(JSON.stringify(data, null, 2));
//     } catch (error) {
//       setResult(`Error: ${error}`);
//     }
//   };

//   return (
//     <div className="soulbuddy-container">
//       <h1 className="soulbuddy-title">SoulBuddy</h1>
//       <form className="soulbuddy-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="birth_date">Birth Date:</label>
//           <input type="date" id="birth_date" name="birth_date" onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="birth_time">Birth Time:</label>
//           <input type="time" id="birth_time" name="birth_time" onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="latitude">Latitude:</label>
//           <input type="text" id="latitude" name="latitude" placeholder="Latitude" onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="longitude">Longitude:</label>
//           <input type="text" id="longitude" name="longitude" placeholder="Longitude" onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="timezone">Timezone:</label>
//           <input type="text" id="timezone" name="timezone" placeholder="Timezone" onChange={handleChange} required />
//         </div>
//         <button className="submit-button" type="submit">Get Horoscope</button>
//       </form>
//       <pre className="result-display">{result}</pre>
//     </div>
//   );
// };

// export default SoulBuddy;

import React, { useState } from 'react';
import './soulbuddy.css';
import { motion } from 'framer-motion';

const AstrologicalGuidance: React.FC = () => {
    const [userData, setUserData] = useState({
        name: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        birthHour: '',
        birthMinute: '',
        city: '',
        country: '',
        gender: ''
    });
    const [predictions, setPredictions] = useState<any>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const fetchPredictions = async () => {
        // Simulate API fetch
        const simulatedData = {
            career: {
                suitableCareers: ["Technology", "Finance", "Creative Arts"],
                peakPeriods: ["2024-2025", "2027-2028"],
                confidenceScore: 95
            },
            health: {
                focusAreas: ["Fitness", "Mental health"],
                confidenceScore: 93
            },
            relationships: {
                loveLife: "Strong romantic connection in 2024",
                confidenceScore: 91
            }
        };
        setPredictions(simulatedData);
    };

    // New feature: Daily Astro Insights
    const getDailyInsights = () => {
        return {
            message: "Today is a great day for introspection and setting new goals.",
            luckyNumber: 7,
            luckyColor: "Blue"
        };
    };

    // New feature: Personal Growth Tracker
    const getGrowthTracker = () => {
        return {
            goals: ["Meditate for 10 minutes", "Learn a new skill", "Reflect on personal growth"],
            progress: "You are making steady progress! Keep going."
        };
    };

    // New feature: Visualization of Chakra Health
    const getChakraVisualization = () => {
        return [
            { chakra: "Crown", status: "Opening", animation: "crown-opening" },
            { chakra: "Heart", status: "Expanding", animation: "heart-expanding" },
            { chakra: "Root", status: "Grounding", animation: "root-grounding" }
        ];
    };

    const chakraVisualizations = getChakraVisualization();

    return (
        <div className="astro-app">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="astro-header"
            >
                <h1>AI-Powered Astrological Guidance</h1>
            </motion.div>

            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="astro-form"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={userData.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="birthYear"
                    placeholder="Birth Year"
                    value={userData.birthYear}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="birthMonth"
                    placeholder="Birth Month"
                    value={userData.birthMonth}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="birthDay"
                    placeholder="Birth Day"
                    value={userData.birthDay}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="birthHour"
                    placeholder="Birth Hour"
                    value={userData.birthHour}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="birthMinute"
                    placeholder="Birth Minute"
                    value={userData.birthMinute}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={userData.city}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={userData.country}
                    onChange={handleInputChange}
                />
                <button onClick={fetchPredictions}>Generate Predictions</button>
            </motion.div>

            {predictions && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="predictions-section"
                >
                    <h2>Predictions</h2>
                    <p>Career Paths: {predictions.career.suitableCareers.join(', ')}</p>
                    <p>Health Focus Areas: {predictions.health.focusAreas.join(', ')}</p>
                    <p>Relationship Insights: {predictions.relationships.loveLife}</p>
                </motion.div>
            )}

            <motion.div
                className="daily-insights"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <h3>Daily Astro Insights</h3>
                <p>{getDailyInsights().message}</p>
                <p>Lucky Number: {getDailyInsights().luckyNumber}</p>
                <p>Lucky Color: {getDailyInsights().luckyColor}</p>
            </motion.div>

            <motion.div
                className="growth-tracker"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
            >
                <h3>Personal Growth Tracker</h3>
                <ul>
                    {getGrowthTracker().goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                    ))}
                </ul>
                <p>{getGrowthTracker().progress}</p>
            </motion.div>

            <motion.div
                className="chakra-visualizations"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                <h3>Chakra Visualizations</h3>
                {chakraVisualizations.map((chakra, index) => (
                    <div key={index} className={`chakra ${chakra.animation}`}>
                        <p>{chakra.chakra} Chakra: {chakra.status}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AstrologicalGuidance;
