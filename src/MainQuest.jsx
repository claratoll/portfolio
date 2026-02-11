/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import background from './assets/house.png';
import { useTranslation } from 'react-i18next';
import backgroundImage from './assets/mainquestbackground.jpg';
import room from './assets/mainquestroom.png';
import welcome from './assets/welcomemainquest.png';


const MainQuest = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <div
      className='background widget'
      onClick={onToggle}
      style={{
        backgroundImage: `url(${background})`, cursor: 'pointer'
      }}
    >
      <h2>MainQuest.se</h2>

      {isOpen && (<div>
        <p>{t('mainquest')}</p>
        <div className='wideimage'>
          <img src={welcome} alt='mainquest' />
        </div>
        <p>
          <a href='https://play.google.com/store/apps/details?id=se.mainquest.app'>
            {' '}
            Google Play
          </a>
          .

          <a href='https://apps.apple.com/us/app/main-quest/id6756628930'>
            {' '}
            App Store
          </a>
          .

          <a href='https://mainquest.se/'>
            {' '}
            Website
          </a>
          .
        </p>

        <div className='heightimage'>
          <img src={backgroundImage} alt='app screenshot' />
          <img src={room} alt='app screenshot' />
        </div>
        <p>  </p>
      </div>)}
      <p></p>
    </div>
  );
};

export default MainQuest;
