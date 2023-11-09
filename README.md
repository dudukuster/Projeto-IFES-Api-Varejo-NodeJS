# Projeto-IFES-Api-Varejo-NodeJS

# Projeto Node.js de Gerenciamento de Produtos e Usuários

Este é um projeto Node.js que oferece funcionalidades para gerenciar produtos e usuários. Ele inclui um sistema de autenticação de usuários com JWT (JSON Web Token) e oferece endpoints HTTP para criar, listar, atualizar, excluir produtos e gerenciar usuários.

## Pré-requisitos

- Node.js instalado na sua máquina.
- Banco de dados PostgreSQL configurado e acessível. Você pode ajustar as configurações de conexão no arquivo `db/db.js`.
- Dependências Node.js instaladas. Você pode instalá-las com o seguinte comando:

  ```bash
  npm install

# POST /add_produtos - Cria um novo produto:

{
  "nome": "Nome do Produto",
  "descricao": "Descrição do Produto",
  "preco": 10.99,
  "link": "URL_do_Produto"
}
# GET /produtos - Lista todos os produtos cadastrados.

# GET /produtos/:id - Lista um produto específico pelo ID.

# PUT /produtos/:id - Atualiza um produto existente:
{
  "nome": "Novo Nome",
  "descricao": "Nova Descrição",
  "preco": 19.99,
  "link": "Nova_URL_do_Produto"
}
# DELETE /produtos/:id - Exclui um produto pelo ID.

Usuários
# POST /usuarios/Cadastrar - Cria um novo usuário:
{
  "nome": "Nome do Usuário",
  "email": "email@exemplo.com",
  "senha": "senha_segura"
}
# GET /usuarios - Lista todos os usuários cadastrados (requer autenticação via JWT).

# GET /usuarios/:id - Lista um usuário específico pelo ID (requer autenticação via JWT).

# PUT /usuarios/:id - Atualiza um usuário existente:
{
  "nome": "Novo Nome",
  "email": "novo_email@exemplo.com",
  "senha": "nova_senha_segura"
}
# DELETE /usuarios/:id - Exclui um usuário pelo ID (requer autenticação via JWT).

# Autenticação
# POST /login - Verifica as credenciais do usuário e gera um token JWT para autenticação.
