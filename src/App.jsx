import './App.css';
import Github from './Github';
import Intro from './Intro';
import Kontakt from './Kontakt';
import Tabata from './Tabata';
import Telgenytt from './Telgenytt';
import Utbildning from './Utbildning';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className='tabataimages languagebuttons'>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('sv')}>Svenska</button>
      </div>
      <Intro />
      <Kontakt />
      <Telgenytt />
      <Tabata />
      <Github />
      <Utbildning />
      <Kontakt />
    </>
  );
}

export default App;
