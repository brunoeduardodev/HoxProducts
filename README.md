Desenvolver uma tela de autenticação fake, o login pode ser feito com e-mail/senha fixos, porém as rotas devem ser privadas e as requests à API devem simular o envio do token JWT, que também poderá ser fake/random.
Desenvolver um CRUD de produto, ou seja, criar uma tela de listagem, de criação e de edição com os seguintes campos:

- Nome
- Data de fabricação
- Produto perecível (bool)
- Data de validade
- Preço

Seguir as seguintes regras de negócio:

- A data de validade somente será preenchida caso o produto seja perecível.
- A data de fabricação nunca deve ser maior que a data de validade
- Preço deverá ser em reais (R$)
- A tela de listagem deverá ter a possibilidade de ordenação dos campos e com uma paginação de 10 produtos por página.
- A organização, layout e estilo das telas fica a critério do desenvolvedor.

O backend deve ser simulado com json-server, que cria uma API REST fake, se preferir pode ser feito com node.js com o banco de dados de preferência.
O teste deve ser feito necessariamente com React/Redux, utilizar Redux Sagas é opcional porém é um adicional.
