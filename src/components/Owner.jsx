import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

`

const Owner = () => {
  return (
    <Section className='owner'>
        <Navbar />
    </Section>
  )
}

export default Owner