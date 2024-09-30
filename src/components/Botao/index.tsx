import styled from "styled-components";

interface BotaoProps {
    icon: string;
    onClick: () => void;
    ativo: boolean;
}

function Botao({ icon, onClick, ativo }: BotaoProps) {

    const BotaoEstilizado = styled.button`
        background-color: ${ativo? '#008080' : '#B0B0B0'};
        color: ${ativo? '#F8F8F8' : '#000000'};
        border-radius: 32px;
        width: 128px;
        height: 144px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
        font-size: 56px;
        box-sizing: border-box;
        &:hover{
            background-color: #008080;
            color: #F8F8F8;
        }
    `

    return (
        <BotaoEstilizado onClick={onClick}>
            <i className={icon}></i>
        </BotaoEstilizado>
    )
}

export default Botao;