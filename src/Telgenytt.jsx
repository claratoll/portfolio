/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import background from './assets/cloud.png';
import telgenytt from './assets/telgenytt.png';

const Telgenytt = () => {
  const { t } = useTranslation();

  return (
    <div
      className='background'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>{t('Konsult')}</h2>
      <p>{t('Telgenytt')}</p>
      <p>{t('telgenytttwo')}</p>
      <div className='tabataimages'>
        <img src={telgenytt} alt='Telgenyttappen' />
      </div>
    </div>
  );
};

export default Telgenytt;
