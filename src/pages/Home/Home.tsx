import zodiacWheel from '../../assets/images/zodiac-wheel.png';
import moonPhases from '../../assets/images/moon-phases.png';
import butterfly from '../../assets/images/butterfly.png';
import butterflyTwo from '../../assets/images/butterfly-2.png';
import moth from '../../assets/images/moth.png';

import Button from '../../components/Button/Button';

import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="home__first-section">
        <div className="home__info">
          <h1 className="home__logo">jugadoo</h1>
          <h2 className="home__heading">From pain points to planets—we spy, translate, predict!</h2>
          <p className="home__subheading">
          An AI-powered platform streamlining ad research, enabling multilingual content creation, and offering personalized spiritual guidance through advanced automation and insights.
          </p>
          <Button
            as="link"
            children="Learn More →"
            url={'/about'}
            target={'_self'}
            className="home__button"
          />
        </div>
        <img
          src={zodiacWheel}
          className="home__img--first-section invert"
          alt="Zodiac Wheel"
        ></img>
      </section>

      <section className="home__second-section">
        <h2 className="home__heading">What can you find on Jugadoo?</h2>
        <ul className="home__grid">
          <li className="home__list-item">
            <img src={moth} className="home__icon invert"></img>
            <h3>Zodiac Signs</h3>
            <p>
              Dive into the cosmic mysteries of astrology on our website.
              Explore your birth chart, discover the secrets of your sun, moon,
              and rising signs, and gain insights into your life's path based on
              the movements of celestial bodies. Unlock the power of the stars
              and navigate your destiny with our expert astrologers.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterfly} className="home__icon invert"></img>
            <h3>Tarot Cards</h3>
            <p>
              Unveil the enigmatic world of tarot on our website. Experience the
              art of divination through tarot card readings, learn the symbolism
              behind each card, and receive guidance on love, career, and
              spirituality. Our skilled tarot readers are here to help you
              uncover the hidden wisdom within the cards.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterflyTwo} className="home__icon"></img>
            <h3>Numerology</h3>
            <p>
              Unlock the mystical significance of numbers with our numerology
              resources. Explore the vibrations and energies associated with
              your name and birthdate, delve into the secrets of numerological
              calculations, and gain profound insights into your life's purpose.
              Join us on this journey of self-discovery.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterfly} className="home__icon invert"></img>
            <h3>Art Finder</h3>
            <p>
              Discover amazing artworks and artists tailored to your taste. 
              Experience art like never before by exploring a world full of
              creativity and inspiration.
            </p>
          </li>
          <li className="home__list-item">
            <img src={moth} className="home__icon invert"></img>
            <h3>Translation</h3>
            <p>
              Get your texts translated seamlessly across multiple languages.
              Break the language barrier and connect with the world more
              efficiently.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterflyTwo} className="home__icon"></img>
            <h3>Astrology</h3>
            <p>
              Explore astrological insights and predictions for your zodiac sign.
              Let the stars guide you with daily, weekly, and monthly forecasts.
            </p>
          </li>
        </ul>
        
      </section>
    </div>
  );
}
