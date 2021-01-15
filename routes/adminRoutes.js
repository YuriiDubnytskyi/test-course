const { Router } = require('express');
const {createProductMain,
    createProductSubMain,
    createProductList,
    checkIdProduct,
    createNews,deleteNews,
    getAllProducts,updateProductInfo,
    deleteProduct} = require('../services/adminService.js');


const router = Router();

router.post('/createProductMain', (req, res) => {
    const productMain = {
        productTitle:req.body.productTitle,
        idProductTitle:req.body.idProductTitle,
    }
    const result = createProductMain(productMain).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:true,mess:'Fail Some Problem'});
        }
    })
})

router.post('/createProductSubMain', (req, res) => {
    const productSubMain = {
        productSubTitle:req.body.productSubTitle,
        idProductSubTitle:req.body.idProductSubTitle,
        idProductTitle:req.body.idProductTitle,
    }
    const result = createProductSubMain(productSubMain).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.status(400).json('error has occured');
        }
    })
})

router.post('/createProductInfo', (req, res) => {
    const productList = {
        name:req.body.data.name,
        price:req.body.data.price,
        info:req.body.data.info,
        producer:req.body.data.producer,
        properties:req.body.data.properties,
        idProduct:req.body.data.idProduct,
        idWereHouse:req.body.data.idWereHouse,
        idSubProduct:req.body.data.idSubProduct,
        image:req.body.data.image,
    }
    console.log(JSON.stringify(req.body.data.image))
    checkIdProduct(productList.idProduct).then(r=>{
        if(r.isExist){
            res.json({err:true,mess:'ID Product Exist'})
        }else{
            createProductList(productList).then((r)=>{
                if (r) {
                    res.json(r);
                } else {
                    res.json({err:true,mess:'error has occured'});
                }
            })
        }
    })
})

router.post('/createNews', (req, res) => {
    const news = {
        title:req.body.data.title,
        description:req.body.data.description,
        time:req.body.data.time
    }
    const result = createNews(news).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:true,mess:'Fail Some Problem'});
        }
    })
})

router.delete("/deleteNews/:id", function(req, res){
    const id = req.params.id;
    const result =  deleteNews(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:true,mess:'Fail Some Problem'});
        }
    })
});

router.post('/updateProductInfo', (req, res) => {
    
    const result = updateProductInfo(req.body.data).then((r)=>{
        
        if (r) {
            res.json(r);
        } else {
            res.json({err:true,mess:'Fail Some Problem'});
        }
    })
})

router.delete("/deleteProduct/:id", function(req, res){
    const id = req.params.id;
    const result =  deleteProduct(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:true,mess:'Fail Some Problem'});
        }
    })
});


router.get("/getProducts", function(req, res){
    const result =  getAllProducts().then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"User not found",status:500});
        }
    })
});


module.exports = router;