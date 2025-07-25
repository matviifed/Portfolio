
import './App.css';
import './components/Header'
import { Header } from './components/Header';
import './sections/HeroSection'
import './sections/AboutSection'

import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'

function App() {
  return (
    <>
        <Header />
        <HeroSection />
        <AboutSection />
    </>
  );
}

export default App;
