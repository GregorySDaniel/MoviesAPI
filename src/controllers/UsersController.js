const knex = require("../database/knex")
const AppError = require("../utils/AppError");
const { hash } = require("bcryptjs");


class UsersController{

  async create(request, response){
    
    const { name, email, password } = request.body;
    if(!name || !email){
      throw new AppError("Nome e email são obrigatórios");
    }

    const checkIfUserExist = await knex.select("*").from("users").where("email", email);
    if (checkIfUserExist.length>0){
      throw new AppError("Usuário já cadastrado");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name: name,
      email: email,
      password: hashedPassword
    });

    return response.status(201).json({
      message: "Usuário cadastrado com sucesso" 
    });
  }
}

module.exports = UsersController;