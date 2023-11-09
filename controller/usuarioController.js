const Usuario = require("../model/usuarioModel");

const jwt = require("jsonwebtoken");

module.exports = class usuarioController{
  //Método Criar usuário
  static async UsuarioCreate(req,res){
  try{
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    await Usuario.create(usuario);
    res.json({message: "Usuário cadastrado com sucesso"});
  }catch(erro){
    res.status(500).json({error:"Erro ao criar usuário"});
  }
 }
  static async UsuarioListar(req, res) {
  try {
    // Adicione um log para indicar o início da consulta
    console.log("Iniciando a consulta de usuários...");

    const usuarios = await Usuario.findAll();

    // Adicione um log para mostrar a quantidade de usuários encontrados
    console.log(`Encontrados ${usuarios.length} usuários:`);
    console.log(usuarios);

    // Envie a resposta com a lista de usuários
    res.json(usuarios);
  } catch (error) {
    // Registre o erro no console
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ error: "Erro ao listar usuário" });
  }
}

  static async UsuarioUpdate(req,res){
    try{
      const id_usuario = req.params.id;
      let nome = req.body.nome;
      let email = req.body.email;
      let senha = req.body.senha;
      const usuario = {
        nome: nome,
        email: email,
        senha: senha
      };
      await Usuario.update(usuario, {where: {id_usuario:id_usuario}});
      res.json({message: "Cadastro atualizado com sucesso! Foram atualizadas as seguintes informações: ", dados: usuario});
    } catch(error) {
      res.status(500).json({error: "Erro ao atualizar as informações do usuário" })
    }
  }
  static async UsuarioDelete(req,res){
    try{
      const id_usuario = req.params.id;
      
      await Usuario.destroy({where:{id_usuario: id_usuario}});

      res.json({message: "Usuário excluído com sucesso"});      
    } catch(error){
      res.status(500).json({error: "Erro ao excluir usuário!"});
    }
  }
static async UsuarioVerificaLogin(req,res){
  var email = req.body.email;
  var senha = req.body.senha;

  const dados = {
    email: email,
    senha: senha
  };
  const Usuario = await Usuario.findOne({where: {email: email, senha: senha}}).then((usuario)=>{
    if(usuario!= undefined){
      const id = usuario.id_usuario;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300
      });
      return res.json({ auth: true, token: token});
    }else{
  res.status(402).json({message: "Erro ao logar no sistema"});
    }
  })
}
  static async verificaJWT(req, res, next){
    const token = req.headers['x-acess-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Nenhum token criado'});
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Falha na autenticação com o token'});

      req.userId = decoded.id;
      next();
    });
  }
}