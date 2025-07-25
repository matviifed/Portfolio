
import './App.css';
import './components/Header'
import { Header } from './components/Header';
import './sections/HeroSection'
import './sections/AboutSection'
import './sections/ToolsSection'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ToolsSection from './sections/ToolsSection';

function App() {
  return (
    <>
        <Header />
        <HeroSection />
        <AboutSection />
        <ToolsSection />
    </>
  );
}

export default App;
