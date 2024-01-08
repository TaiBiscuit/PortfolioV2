import './App.css';
import { MainRoutes } from './routes/MainRoutes';
import { ColorModeProvider } from './context/ColorModeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  return (
    <>
      <div id="appBody">
      <LanguageProvider>
      <ColorModeProvider>
        <MainRoutes />
      </ColorModeProvider>
      </LanguageProvider> 
      </div>
    </>
  )
}

export default App
