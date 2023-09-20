import React from 'react';
import styled from 'styled-components';
import PapelDeParede from '../assests/PapelDeParede.jpg.webp';

function Chat() {

    let contador = 0;

    function enviarMensagem() 
    {
        const chat = document.getElementById("mensagens");
        const usuario = document.getElementById("usuario");
        const mensagem = document.getElementById("mensagem");
        const titulo = document.createElement("h4");
        const paragrafo = document.createElement("p");
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        
        if( mensagem.value !== '' && usuario.value !== '' && ( usuario.value !== 'eu' && usuario.value !== 'Eu' && usuario.value !== 'eU' && usuario.value !== 'EU' ))
        {
            titulo.textContent = `${usuario.value}:`;
            paragrafo.textContent = mensagem.value;
            div.id = contador++;
            paragrafo.addEventListener('dblclick', () => {
                const confirmacao = window.confirm("Tem certeza que deseja deletar essa mensagem?");

                if(confirmacao)
                {
                    div.remove();
                }
            });
            div.className = "div-mensagem";
            div.appendChild(titulo);
            div.appendChild(paragrafo);
            chat.appendChild(div);
            chat.scrollTop = chat.scrollHeight;
            mensagem.value = '';
        }
        else if( mensagem.value !== '' && usuario.value !== '' && ( usuario.value === 'eu' || usuario.value === 'Eu' || usuario.value === 'eU' || usuario.value === 'EU' ))
        {
            paragrafo.textContent = mensagem.value;
            div2.id = contador++;
            paragrafo.addEventListener('dblclick', () => {
                const confirmacao = window.confirm("Tem certeza que deseja deletar essa mensagem?");

                if(confirmacao)
                {
                    div.remove();
                }
            });
            div.className = "div-mensagem";
            div2.className ="div-mensagem-eu";
            div2.appendChild(div);
            div.appendChild(paragrafo);
            chat.appendChild(div2);
            chat.scrollTop = chat.scrollHeight;
            mensagem.value = '';
        }
    }

    function verificaBotao(event) {
        if (event.key === 'Enter') {
            enviarMensagem();
        }
    }

    const Conteudo = styled.div`
        display: flex;
        flex-direction: column;
        background-image: url(${PapelDeParede});
        height: 100vh;
        align-items: center;
    `

    const Mensagens = styled.div`
        height: 80%;
        width: 51%;
        background-color: #F6F6F6;
        overflow-y: auto;
        margin-top: 1%;
    `

    const Inputs = styled.div`
        display: flex;
        justify-content: center;
        width: 51%;
    `

    const InputUsuario = styled.input`
        height: 80%;
        width: 25%;
    `

    const InputMensagem = styled.input`
        height: 80%;
        width: 85%;
    `

    const Botao = styled.button`
        background-color: #000000;
        border: none;
        color: #f6f6f6;
        width: 6.25rem;
        height: 2.25rem;
        border-radius: 0.313rem;
    `
    
    return (
        <Conteudo>
            <Mensagens id='mensagens' />
            <Inputs>
                <InputUsuario type="text" placeholder="Usuário" id="usuario" onKeyPress={ verificaBotao } />
                <InputMensagem type="text" placeholder="Mensagem" id="mensagem" onKeyPress={ verificaBotao } />
                <Botao onClick={() => enviarMensagem()}>Enviar</Botao>
            </Inputs>
        </Conteudo>
    );
}

export default Chat