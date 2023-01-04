const {Schema, model} =require('mongoose')

const mernApp=new Schema({
    title:{
        type: String,
        required: true,
        minLength: 3
    },
    image:{
        type: String,
        required: true,
    },
    descr:{
        type: String,
        required: true,
    }

})

module.exports=model("mernApp", mernApp)