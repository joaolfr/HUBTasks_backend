const mongoose = require('mongoose');

const TaskSchema = new  mongoose.Schema({

    descricao: String,
    data_entrega: Date,
    active:{type:Boolean, default:true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Task', TaskSchema ); 
 