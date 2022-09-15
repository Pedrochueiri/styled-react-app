import React from 'react';
import Tarefa from '../tarefa/Tarefa';
import { DivLista } from '../../style/styled';
import { useState } from 'react';

export default function ListaTarefas() {

    const [tarefa, setTarefa] = useState([
      {
      titulo: 'Lista de Pagamento',
      setor: 'Dep. Vendas',
      descricao: 'Levantar os valores das vendas',
      },
      {
        titulo: 'Testes DEV',
        setor: 'Tecnologia',
        descricao: 'Testar aplicação',
      },
      {
        titulo: 'Design Página Web',
        setor: 'UX',
        descricao: 'Fazer o design da home',
      },
    ])

  return(
    <DivLista>
      {tarefa.map((tar,i)=>(
        <Tarefa
        key={i}
        titulo={tar.titulo}
        setor={tar.setor}
        descricao={tar.descricao}
        />
      ))}
    </DivLista>
  )
}

