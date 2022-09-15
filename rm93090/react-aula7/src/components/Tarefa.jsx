import React from 'react';
import styled from 'styled-components'

const DivTarefa = styled.div`
    background-color: #ffb;
`

function Tarefa() {
    return (
        <DivTarefa>
            <h2>Relatório de vendas</h2>
            <p>Para: Departamento de vendas</p>
            <p>Levantar os valores das vendas desse mês</p>
        </DivTarefa>
    )
}

export default Tarefa;