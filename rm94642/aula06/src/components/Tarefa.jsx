import React from 'react'
import styled from 'styled-components'
import { DivTarefa } from './style/styled'

//Criando o modulo de estilos

export default function Tarefa() {
  return (
    <DivTarefa>
        <h2>Relatorio de vendas</h2>
        <p>Para : Departamento de vendas</p>
        <p>Levantar os valores das venda desse mes</p>
    </DivTarefa>
  )
}
