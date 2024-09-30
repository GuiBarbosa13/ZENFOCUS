import Botao from "../Botao";
import { icons } from '../../types/Icons';
import styled from "styled-components";

const ContainerEstilizado = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;
    width: 480px;
`;

interface ContainerBotoesProps {
    audioAtual: HTMLAudioElement | null;
    setAudioAtual: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
    botaoAtivo: string | null;
    setBotaoAtivo: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ContainerBotoes({ audioAtual, setAudioAtual, botaoAtivo, setBotaoAtivo }: ContainerBotoesProps) {

    const tocarSom = (som: string, nomeBotao: string) => {
        if (botaoAtivo === nomeBotao) {
            if (audioAtual) {
                audioAtual.pause();
                audioAtual.currentTime = 0;
            }
            setBotaoAtivo(null); // Nenhum botão ativo
            setAudioAtual(null);
        } else {
            // Se houver um som já tocando, pause-o
            if (audioAtual) {
                audioAtual.pause();
                audioAtual.currentTime = 0;
            }

            // Cria uma nova instância de áudio para o som clicado
            const novoAudio = new Audio(som);
            novoAudio.play();

            // Atualiza o estado com o novo som que está tocando
            setAudioAtual(novoAudio);
            setBotaoAtivo(nomeBotao); // Define qual botão está ativo
        }
    };

    return (
        <ContainerEstilizado>
            {icons.map(icon =>
                <Botao
                    key={icon.name}
                    icon={icon.icon}
                    onClick={() => tocarSom(icon.som, icon.name)} ativo={botaoAtivo === icon.name}
                />
            )}
        </ContainerEstilizado>
    );
}
