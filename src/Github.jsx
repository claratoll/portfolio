/* eslint-disable react-hooks/exhaustive-deps */
import background from './assets/cloud.png';
import { useTranslation } from 'react-i18next';

const Github = () => {
  const { t } = useTranslation();

  return (
    <div
      className='background'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>GitHub Projects</h2>
      <p>
        {t('link')}{' '}
        <a href='https://github.com/claratoll'>{t('githubprofile')}</a>.
      </p>
    </div>
  );
};

export default Github;
