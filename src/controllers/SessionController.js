const User = require('../models/User'); 

module.exports = {

    //ROTA DE AUTENTICAÇÃO
    async show(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        //checando existência do usuário no banco
        if(!user){
             return res.status(400).send({ error: "User not found"});
        }

        //comparação entre senhas
        if(password !== user.password){

            return res.status(400).send({ error: "Invalid password"})
             
        }

        //não mostra a senha no retorno da requisição
        user.password = undefined;
        return res.json(user);
    },

    //ROTA DE CRIAÇÃO
    async store(req, res) {
        const {  nome, email, password } = req.body ; 

        let user = await User.findOne({ email })

        //evita a cricao de usuarios repetidos
        if(!user){  
            user = await User.create({ nome, email, password });
        }


        return res.json(user);
    }
} 