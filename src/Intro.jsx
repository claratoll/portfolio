/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import background from './assets/bakgrund.png';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div
      className='background'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>ClaraCode</h2>
      <p>{t('introclara')}</p>
      <p>{t('introforetag')}</p>
      <p>
        {t('pt')} <a href='https://claratoll.se'>claratoll.se</a>{' '}
        {t('membership')}{' '}
        <a href='https://strongandhappy.se'>strongandhappy.se</a>
      </p>
      <h2>{t('uppdrag')}</h2>
      <p>{t('app')}</p>
      <p>
        {t('wordpress')}{' '}
        <a href='https://strongandhappy.se'>strongandhappy.se</a>.
      </p>
      <p> {t('reactjs')}</p>
    </div>
  );
};

export default Intro;
