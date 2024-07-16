/* eslint-disable react-hooks/exhaustive-deps */
import start from './assets/start.jpg';
import go from './assets/go.jpg';
import rest from './assets/rest.jpg';
import background from './assets/desk.png';
import { useTranslation } from 'react-i18next';

const Tabata = () => {
  const { t } = useTranslation();

  return (
    <div
      className='background'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>{t('Tabata')}</h2>
      <p>
        {t('tabataone')}{' '}
        <a href='https://play.google.com/store/apps/details?id=com.claratoll.tabatatimer'>
          {' '}
          Google Play
        </a>
        .
      </p>
      <div className='tabataimages'>
        <img src={start} alt='tabata screnshot' />
        <img src={go} alt='tabata screnshot' />
        <img src={rest} alt='tabata screnshot' />
      </div>
      <p>{t('tabatatwo')}</p>
    </div>
  );
};

export default Tabata;
