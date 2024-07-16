/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import background from './assets/desk.png';

const Kontakt = () => {
  const { t } = useTranslation();

  return (
    <div
      className='background'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2> {t('Kontakt')}</h2>

      <button onClick={() => (window.location = 'mailto:info@claratoll.se')}>
        {t('emailme')}
      </button>
    </div>
  );
};

export default Kontakt;
