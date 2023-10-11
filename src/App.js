
import './App.css'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Brands from './components/Brands';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Services/>
      <CaseStudies/>
      <Brands/>
      <Footer/>
      {/* <main className ="container-fluid main p-0">
        
        {/* <Projects/> 
        <Contact/>
        <Footer/> 
      </main>*/}
      

    </div>
  );
}

export default App;
