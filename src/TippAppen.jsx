/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import background from './assets/lakers.png';
import { useTranslation } from 'react-i18next';
import ett from './assets/tippaett.png';
import tippatva from './assets/tippatva.png';
import tre from './assets/tippatre.png';

const Tippappen = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <div
      className='background widget'
      onClick={onToggle}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="overlay"></div>

      <h2>{t('Tippappen')}</h2>
      {isOpen && (<div>
        <p>{t('tippappen')}</p>
        <p>
          <a href='https://play.google.com/store/apps/details?id=se.claratoll.tippa'>
            {' '}
            Google Play
          </a>
          .

          <a href='https://apps.apple.com/se/app/tippappen/id6749705950'>
            {' '}
            App Store
          </a>
          .
        </p>
        <div className='heightimage'>
          <img src={ett} alt='app screenshot' />
          <img src={tippatva} alt='app screenshot' />
          <img src={tre} alt='app screenshot' />
        </div>

      </div>)}
      <p></p>
    </div>
  );
};

export default Tippappen;
