import Owner from './components/Owner';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;

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
