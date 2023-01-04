// CRUD

const {Router} = require("express")
 const router=Router()

const {getAllProduct,
    getAllByIdsProduct, addProduct} = require("../controller/mernControllers")

 router.get('/', getAllProduct)

//  get one product

router.get("/:id", getAllByIdsProduct )

// post product
router.post("/add", addProduct)



 module.exports= router

