import React from 'react';
import styled from 'styled-components';

function DeletarMensagem() {
    
    function deletarMensagemClicada()
    {
        alert('Falta implementar');
    }
    
    function fecharPopup()
    {
        document.getElementById('popup').style.display = 'none';
    }

    function mostrarPopup()
    {
        document.getElementById('popup').style.display = 'block';
    }

    const PopUp = styled.div`
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.5);
        padding-top: 60px;
    `

    const PopUpConteudo = styled.div`
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 50%;
        border-radius: 7px;
        display: flex;
        align-items: center;
        flex-direction: column;
    `

    const Botoes = styled.div`
        display: flex;
        gap: 10px;
    `

    const Botao = styled.button`
        background-color: #000000;
        border: none;
        color: #f6f6f6;
        width: 100px;
        height: 36px;
        border-radius: 5px;
    `

    return (
        <PopUp id='popup'>
            <PopUpConteudo>
                <h2>Você deseja apagar a mensagem?</h2>
                <Botoes>
                    <Botao onClick={fecharPopup}>Sim</Botao>
                    <Botao onClick={fecharPopup}>Não</Botao>
                </Botoes>
            </PopUpConteudo>
        </PopUp>
    );
}

export default DeletarMensagem