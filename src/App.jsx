import './App.css';
import { MainRoutes } from './routes/MainRoutes';
import { ColorModeProvider } from './context/ColorModeContext';
import { LanguageProvider } from './context/LanguageContext';
import { TextProvider } from './context/TextContext';

function App() {

  return (
    <>
      <div id="appBody">
      <LanguageProvider>
      <TextProvider>
        <ColorModeProvider>
          <MainRoutes />
        </ColorModeProvider>
      </TextProvider>
      </LanguageProvider> 
      </div>
    </>
  )
}

export default App
