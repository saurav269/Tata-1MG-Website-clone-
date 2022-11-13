import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { ImageSlider } from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';
import { Heading, Modal } from '@chakra-ui/react';
import { HomePage } from './Components/HomePage';
import { Footer } from './Components/Footer';



function App() {
  return (
    <div className="App">
     <Navbar />
     <ImageSlider slides={SliderData} />
     <div className='div1'>
     <Heading fontSize='25px' color='grey' marginTop={'10px'}>
      Tata 1mg: India's Leading Online Pharmacy & Healthcare Platform
      </Heading>
      <HomePage />
      <Footer />
     </div>
     
    </div>
  );
}

export default App;
