import './App.css';
import splashImage from "./embeddeds/background.webp";
import TopBar from './components/TopBar';
import styled from 'styled-components';
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100vw;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${ splashImage });
  backgorund-color: #dfeed6;
  position : absolute;
  left: 0;
  top: 40px;
  right: 0;
  z-indez: -1;

`

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Splash/>
      <StoreListing/>
    </div>
  );
}

export default App;
