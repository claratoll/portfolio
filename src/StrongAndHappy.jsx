/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import background from './assets/strongandhappy.png';
import { useTranslation } from 'react-i18next';

const StrongAndHappy = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <div
      className='background widget'
      onClick={onToggle}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>StrongAndHappy.se</h2>

      {isOpen && (<div>
        <p>{t('strongandhappy')}</p>
        <p>{t('strongandhappy2')}</p>
        <p>

          <a href='https://strongandhappy.se/'>
            {' '}
            strongandhappy.se
          </a>
          .
        </p>

      </div>)}
      <p></p>
    </div>
  );
};

export default StrongAndHappy;
