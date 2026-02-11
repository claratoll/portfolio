/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import start from './assets/start.jpg';
import go from './assets/go.jpg';
import rest from './assets/rest.jpg';
import background from './assets/desk.png';
import { useTranslation } from 'react-i18next';

const Tabata = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <div
      className='background widget'
      onClick={onToggle}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2 className='card'>{t('Tabata')}</h2>
      {isOpen && (<div>
      <p>
        {t('tabataone')}{' '}
        <a href='https://play.google.com/store/apps/details?id=com.claratoll.tabatatimer'>
          {' '}
          Google Play
        </a>
        .
      </p>
      <div className='heightimage'>
        <img src={start} alt='tabata screenshot' />
        <img src={go} alt='tabata screenshot' />
        <img src={rest} alt='tabata screenshot' />
      </div>
      <p>{t('tabatatwo')}</p>
      </div>)}
      <p></p>
    </div>
  );
};

export default Tabata;
