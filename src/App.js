import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import ContactForm from './components/ContactForm.jsx';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
