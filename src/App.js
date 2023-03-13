import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/main'
import { Section } from './components/section/section'
import { Footer } from './components/footer/footer'
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scroll-behavior: none;
  &::-webkit-scrollbar{
    display: none;
  }
  color: white;
  background-image: url('./img/bg.jpeg');
  `

function App() {
  return (
    <Container className="App">
      <Header/>
      <Main/>
      <Section/>
      <Footer/>
    </Container>
  );
}

export default App;
