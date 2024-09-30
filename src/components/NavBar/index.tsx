import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface NavBarProps {
    modoNoturno: boolean;
    setModoNoturno: Dispatch<SetStateAction<boolean>>;
}

const HeaderEstilizado = styled.header`
    max-width: 100%;
    margin-bottom: 48px;
    display: flex;
    justify-content: end;
    font-size: 56px;
    padding: 32px 68px 0 0;
    background-color: ${({ theme }) => theme.background}; // Usando cor de fundo do tema
    color: ${({ theme }) => theme.textColor}; // Usando cor de texto do tema

    i {
        transition: color 0.3s ease; // Mantendo a transição suave
        cursor: pointer;

        &:hover {
            color: #008080; // Cor do ícone ao passar o mouse
        }
    }
`;

export default function NavBar({ modoNoturno, setModoNoturno }: NavBarProps) {
    return (
        <HeaderEstilizado>
            <i className={modoNoturno?'bi bi-brightness-high-fill':'bi bi-moon-fill'} onClick={() => setModoNoturno(!modoNoturno)}></i>
        </HeaderEstilizado>
    );
}
