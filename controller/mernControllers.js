const mernApp=require("../models/mern.app.modal")

// method get
// desc get all mern product
const getAllProduct= async (req, res)=>{
    try{
        const travels=await mernApp.find();
        res.status(200).json({
            message: "became succes",
            travels: travels 
        })
    }catch(error){
        res.send(error)
    }
}

// method get
// desc get one mern product
const getAllByIdsProduct= async (req, res)=>{
    try{
        const travel=await mernApp.findById(req.params.id);
        if(!travel){
            return res.status(404).json({
                message: 'bad request'
            })
        }
       return res.status(200).json({
            message: 'became succesful',
            travel
        })
    }catch(error){
        res.send(error)
        console.log(error)
    }
}

// method: post
// desc post product

const addProduct= async (req, res)=>{
    try{
        const {title, image, descr}=req.body

        const newProduct=await mernApp.create({
            title,
            image,
            descr
        })
        res.status(201).json({
            message: "became succes",
            newProduct
        })
    }catch(error){
        res.send(error)
    }
}



module.exports={
    getAllProduct,
    getAllByIdsProduct,
    addProduct
}