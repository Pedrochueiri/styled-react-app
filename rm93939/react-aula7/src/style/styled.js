import styled from 'styled-components'

export const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .btnTarefa{
        display: block;
        height: 5vh;
        margin: auto 1vw;
        border-radius: 5px;
        padding: 1vh 2vw;
        display: block;
        border: solid 2px #00ff00;
        color: #00ff00;
        font-size: 1.5rem;

    }

`

export const DivTarefa = styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;
    h2, p {
        padding-bottom: 10px ;
    }
`
export const Botao = styled.div`
    border-radius: 5px;
    padding: 1vh 2vw;
    margin: auto;
    display: block;
    border: solid 2px #00ff00;
    color: #00ff00;
    font-size: 1.5rem;
`