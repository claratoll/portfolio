import './App.css';
import { useState } from 'react';
import Github from './Github';
import Intro from './Intro';
import Kontakt from './Kontakt';
import Tabata from './Tabata';
import Utbildning from './Utbildning';
import { useTranslation } from 'react-i18next';
import './i18n';
import MainQuest from './MainQuest';
import Tippappen from './Tippappen';
import StrongAndHappy from './StrongAndHappy';

function App() {
  const { i18n } = useTranslation();
  const [openWidget, setOpenWidget] = useState(null); // null = ingen öppen


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleWidget = (name) => {
    setOpenWidget(openWidget === name ? null : name);
  };


  return (
    <>
      <div className='heightimage languagebuttons'>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('sv')}>Svenska</button>
      </div>
      <Intro />
      <StrongAndHappy isOpen={openWidget === 'StrongAndHappy'}
        onToggle={() => toggleWidget('StrongAndHappy')} />
      <MainQuest
        isOpen={openWidget === 'MainQuest'}
        onToggle={() => toggleWidget('MainQuest')}
      />
      <Tippappen isOpen={openWidget === 'Tippappen'}
        onToggle={() => toggleWidget('Tippappen')} />
      <Tabata isOpen={openWidget === 'Tabata'}
        onToggle={() => toggleWidget('Tabata')} />
      <Github isOpen={openWidget === 'Github'}
        onToggle={() => toggleWidget('Github')} />
      <Utbildning isOpen={openWidget === 'Utbildning'}
        onToggle={() => toggleWidget('Utbildning')} />
      <Kontakt isOpen={openWidget === 'Kontakt'}
        onToggle={() => toggleWidget('Kontakt')} />
    </>
  );
}

export default App;
