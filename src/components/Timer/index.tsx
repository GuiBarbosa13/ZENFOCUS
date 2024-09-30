import { useEffect } from 'react';
import styled from 'styled-components';
import SomFim from '../../assets/sons/Som de fim do timer.mp3';

interface TimerProps {
    segundos: number;
    setSegundos: React.Dispatch<React.SetStateAction<number>>;
    Ativo: boolean; // Adicionando Ativo como prop
    setAtivo: React.Dispatch<React.SetStateAction<boolean>>; // Adicionando setAtivo como prop
}

export default function Timer({ segundos, setSegundos, Ativo, setAtivo }: TimerProps) {
    // Função que converte os segundos em minutos e segundos
    const formatarTempo = (segundos: number) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
    };

    useEffect(() => {
        let intervalo: number | undefined;

        if (Ativo && segundos > 0) {
            intervalo = window.setInterval(() => {
                setSegundos((prevSeconds) => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        clearInterval(intervalo);
                        const audio = new Audio(SomFim);
                        audio.play();
                        return 0; // Garante que os segundos sejam 0
                    }
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalo);
        };
    }, [Ativo, segundos, setSegundos]);

    const toggle = () => {
        setAtivo(!Ativo);
    };

    const reset = () => {
        setSegundos(600);
        setAtivo(false);
    };

    const ContainerTimer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 480px;
        height: 351px;

        h1 {
            font-size: 128px;
            margin: 0;
            color: ${({ theme }) => theme.textColor}; // Usando a cor do tema
        }

        div {
            display: flex;
            gap: 32px;
        }

        button {
            background-color: transparent;
            border: none;
            font-size: 64px;
            cursor: pointer;
            color: ${({ theme }) => theme.textColor}; // Usando a cor do tema

            &:hover {
                color: #008080;
            }
        }
    `;

    return (
        <ContainerTimer>
            <h1>{formatarTempo(segundos)}</h1>
            <div>
                <button onClick={toggle}>
                    {Ativo ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                </button>
                <button onClick={reset}><i className="bi bi-stop-fill"></i></button>
            </div>
        </ContainerTimer>
    );
};
