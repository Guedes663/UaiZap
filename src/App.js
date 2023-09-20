import React from 'react';
import './App.css';
import Chat from './components/Chat';
import styled from 'styled-components';
import Engrenagem from './assests/Engrenagem.png'

function App() {

  const TelaPrincipal = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: scroll;
  `

  const Header = styled.header`
    background-color: #7D7C7C;
    color: #F6F6F6;
    padding: 0.5% 0% 0.5% 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const Img = styled.img`
    width: 5%;

    @media (max-width: 768px) {
      width: 15%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      width: 8%;
    }
  `

  return (
    <TelaPrincipal>
      <Header>
        <h2>UaiZap</h2>
        <Img src={Engrenagem} alt="imagem de uma engrenagem" />
      </Header>

      <main>
        <Chat/>
      </main>

    </TelaPrincipal>
  );
}

export default App;