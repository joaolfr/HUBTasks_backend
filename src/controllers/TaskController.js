const User = require('../models/User');
const Task = require('../models/Task');

module.exports = {
    

    //LISTA TODAS AS TASKS DE UM USUÁRIO ESPECÍFICO
    async show(req, res){
        const { user_id } = req.headers;

        const task = await  Task.find({ user: user_id });


        return res.json(task);

    },

    //CRIAÇÃO DE UMA NOVA TASK
    async store(req, res){

        const { descricao, data_entrega } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: "User doesn't exists"}); 
        }

        const task = await Task.create({
            user: user_id,
            descricao,
            data_entrega
 
        }); 

        return res.json(task)
    },

    //ATUALIZAÇÃO DOS DADOS DE UMAS TASK
    async update(req, res){

        const task_id  = req.params.id;

        const task = await Task.findByIdAndUpdate(task_id, req.body, {new:true});

        return res.json(task)

    },
    //REMOÇÃO DE UMA TASK 
    async delete(req, res){
        const task_id = req.params.id;

        const task = await Task.findByIdAndDelete(task_id);

        return res.json(task);
    }

};