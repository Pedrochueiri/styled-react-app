import React from 'react'
import styled from 'styled-components'

const DivTarefa = styled.div`
    background-color: #ffb;
`

export default function Tarefa() {
  return (
    <DivTarefa>
        <h2>Relatorio de Vendas</h2>
        <p>Para: Departamento de vendas</p>
        <p>Levantar os valores de vendas desse mês</p>
    </DivTarefa>
  )
}
