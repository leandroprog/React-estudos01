import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButtion } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButtion disabled>
          <FaPlus color="#fff" size={14} />
        </SubmitButtion>
      </Form>
    </Container>
  );
}
