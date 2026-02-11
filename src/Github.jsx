/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import background from './assets/cloud.png';
import { useTranslation } from 'react-i18next';

const Github = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <div
      className='background widget'
      onClick={onToggle}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>GitHub Projects</h2>
      {isOpen && (
      <p>
        {t('link')}{' '}
        <a href='https://github.com/claratoll'>{t('githubprofile')}</a>.
      </p>)}
      <p></p>
    </div>
  );
};

export default Github;
