import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import ThemeMode from './themeMode';

function App() {
  return (
    <ThemeMode>
      <Navbar />
      <Hero />
    </ThemeMode>
  );
}

export default App;
