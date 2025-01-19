import downloadApple from '../../assets/images/download-apple.svg';
import downloadAndroid from '../../assets/images/download-android.svg';
import './Footer.css';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Inject Botpress scripts
    const botpressScript1 = document.createElement('script');
    botpressScript1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    botpressScript1.async = true;

    const botpressScript2 = document.createElement('script');
    botpressScript2.src =
      'https://files.bpcontent.cloud/2024/11/08/09/20241108094823-QLUN0NN2.js';
    botpressScript2.async = true;

    document.body.appendChild(botpressScript1);
    document.body.appendChild(botpressScript2);

    return () => {
      // Cleanup scripts
      document.body.removeChild(botpressScript1);
      document.body.removeChild(botpressScript2);
    };
  }, []);

  return (
    <footer className="footer fade-in">
      <ul className="footer__socials">
        <li>
          <a href="https://github.com/prem926" className="social-link">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      <div className="footer__copyright">
        <p>&copy; 2025 Jugadoo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
