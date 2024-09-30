import styled, { ThemeProvider } from 'styled-components';
import ContainerBotoes from './components/ContainerBotoes';
import NavBar from './components/NavBar';
import Timer from './components/Timer';
import { useState } from 'react';

function App() {
  const [modoNoturno, setModoNoturno] = useState<boolean>(false);
  const [segundos, setSegundos] = useState<number>(600);
  const [Ativo, setAtivo] = useState<boolean>(false);
  const [audioAtual, setAudioAtual] = useState<HTMLAudioElement | null>(null);
  const [botaoAtivo, setBotaoAtivo] = useState<string | null>(null);

  const lightTheme = {
    background: '#F8F8F8',
    textColor: '#000000',
  };

  const darkTheme = {
    background: '#111111',
    textColor: '#FFFFFF',
  };

  const AppEstilizado = styled.div`
    background-color: ${({ theme }) => theme.background};
    min-height: 100vh;
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s ease, color 0.5s ease;
  `;

  const ContainerApp = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

  return (
    <ThemeProvider theme={modoNoturno ? darkTheme : lightTheme}>
      <AppEstilizado>
        <NavBar modoNoturno={modoNoturno} setModoNoturno={setModoNoturno} />
        <ContainerApp>
          <Timer 
            segundos={segundos} 
            setSegundos={setSegundos} 
            Ativo={Ativo} 
            setAtivo={setAtivo} 
          />
          <ContainerBotoes 
            audioAtual={audioAtual} 
            setAudioAtual={setAudioAtual} 
            botaoAtivo={botaoAtivo} 
            setBotaoAtivo={setBotaoAtivo} 
          />
        </ContainerApp>
      </AppEstilizado>
    </ThemeProvider>
  );
}

export default App;
