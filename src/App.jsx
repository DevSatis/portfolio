import Owner from './components/Owner';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("../public/img/bg.jpeg");
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }

`

function App() {

  return (
    <Container >
      <Owner />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
