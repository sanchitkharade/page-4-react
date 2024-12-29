
import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Header from './Component/Header';
import Section from './Component/Section';
import Footer from './Component/Footer';

function App() {
  return (
    <MantineProvider>
    <Header/>
    <Section/>
    <Footer/>
  </MantineProvider>
  );
}

export default App;
