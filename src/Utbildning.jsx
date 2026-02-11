/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import background from './assets/coffee.png';

const Utbildning = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <div
      className='background widget'
      onClick={onToggle}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>{t('Education')}</h2>
      {isOpen && (<div>
      <p>{t('examen')}</p>
      <p>
        {t('language')}{' '}
        <a href='https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mobilapplikationsutvecklare-distans/'>
          {t('utbildningen')}
        </a>
        .{' '}
      </p>
      <p>{t('java')}</p>
      <p>{t('introjava')}</p>
      <p>{t('dynamicweb')}</p>
      <p>
        {t('othereducation')}{' '}
        <a href='https://claratoll.se/mina-utbildningar/'> {t('här')}</a>.
      </p>

      </div>)}
      <p></p>
    </div>
  );
};

export default Utbildning;
