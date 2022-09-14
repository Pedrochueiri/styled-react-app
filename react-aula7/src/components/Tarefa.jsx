import React from 'react'
import styled from 'styled-components'

//CRAINDO O MODULO DE ESTILOS
const DivTarefa = styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;

    h2,p{
        padding-bottom: 10px;
    }
    
`

export default function Tarefa() {
  return (
    <DivTarefa>
        <h2>Relatorio de vendas</h2>
        <p>Para: Departamento de vendas</p>
        <p>Levantar os valores das vendas desse mês.</p>
    </DivTarefa>
  )
}