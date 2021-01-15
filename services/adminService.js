const productTitleSchema = require("../models/productMain")
const productSubTitleSchema = require("../models/productSubMain")
const productListSchema = require("../models/productList")
const productInfoSchema = require("../models/productInfo")
const wereHouseSchema = require("../models/wereHouse")
const newsSchema = require("../models/news")


const createProductMain = async (data) => {
    const Main = new productTitleSchema(data)
    let promise = new Promise((res,rej)=>{
        Main.save(function(err,main){
            if(err) return console.log(err);
            res(main)
        })
    }) 
    return await promise
}

const createProductSubMain = async (data) => {
    const SubMain = new productSubTitleSchema(data)
    let promise = new Promise((res,rej)=>{
        SubMain.save(function(err,subMain){
            if(err) return console.log(err);
            res(subMain)
        })
    }) 
    return await promise
}

const createProductList = async (data) => {

   

    const List = new productListSchema({
        name:data.name,
        price:data.price,
        image:data.image[0],
        idProduct:data.idProduct,
        idSubProduct:data.idSubProduct
    })
    let promise = new Promise((res,rej)=>{
        List.save(function(err,product){
            if(err) return console.log(err);
            res(product)
        })
    })
     
    const wereHouse = new wereHouseSchema({name:data.name,idWereHouse:data.idWereHouse,count:'0',sell:'0'})
    wereHouse.save((err,wereHouse)=>{
        if(err) return console.log(err)
    })
    const productInfo = new productInfoSchema({
        name:data.name,
        price:data.price,
        info:data.info,
        producer:data.producer,
        properties:data.properties,
        images:data.image,
        idProduct:data.idProduct
    })
    productInfo.save((err,wereHouse)=>{
        if(err) return console.log(err)
    })
    
    return await promise
}

const checkIdProduct = async (id) => {
    let promise = new Promise((res,rej)=>{
        const productInfo = productInfoSchema
        productInfo.findOne({idProduct:id},function(err,user){
            if(err) return console.log(err);
            if(user === null) res({isExist:false})
            res({isExist:true})
        })
    }) 
    return await promise
}

const createNews = async (data) => {
    const News = new newsSchema(data)
    let promise = new Promise((res,rej)=>{
        News.save(function(err,news){
            if(err) return console.log(err);
            res(news)
        })
    }) 
    return await promise
}

const deleteNews = async (id) => {
    const News = newsSchema
    let promise = new Promise((res,rej)=>{
        News.findByIdAndDelete(id, function(err, news){ 
            if(err) return console.log(err);
            res(news);
        });
    }) 
    return await promise
}

const getAllProducts = async () => {
    let promise = new Promise((res,rej)=>{
        const Main = productTitleSchema
        let x = Main.aggregate([
              { "$lookup": {
                "from": "productSubTitle",
                "let": { "idSub": "$idProductTitle" },
                "pipeline": [
                  { "$match": { "$expr": { "$eq": ["$idProductTitle", "$$idSub"] }}},
                  { "$lookup": {
                    "from": "productList",
                    "let": { "listId": "$idProductSubTitle" },
                    "pipeline": [
                      { "$match": { "$expr": { "$eq": ["$idSubProduct", "$$listId"] }}},
                      
                      
                      { "$lookup": {
                        "from": "productInfo",
                        "let": { "productInfoId": "$idProduct" },
                        "pipeline": [
                          { "$match": { "$expr": { "$eq": ["$idProduct", "$$productInfoId"] }}}

                        ],
                        "as": "productDetail"
                      }},

                      { "$lookup": {
                        "from": "wereHouse",
                        "let": { "productInfoId": "$idProduct" },
                        "pipeline": [
                          { "$match": { "$expr": { "$eq": ["$idWereHouse", "$$productInfoId"] }}}

                        ],
                        "as": "productWereHouse"
                      }}


                    ],
                    "as": "product"
                  }}
                ],
                "as": "subTitle"
              }},
              
        ]).exec((e,r)=>{
            res(r)
        })
        
    }) 
    return await promise
}


const updateProductInfo = async (data) => {
    
    const List = productListSchema
    let promise = new Promise((res,rej)=>{
        List.findOneAndUpdate({idProduct:data.valueTreeUp},{name:data.values.name,price:data.values.price},{new:true , useFindAndModify: false},function(err,list){
            if(err) return console.log(err);
            
            res(list)
        })
    })
    const wereHouse = wereHouseSchema
    wereHouse.findOneAndUpdate({idWereHouse:data.valueTreeUp},{name:data.values.name,count:data.count},{new:true , useFindAndModify: false},function(err){
        if(err) return console.log(err);
        
    })

    const productInfo = productInfoSchema
        productInfo.findOneAndUpdate({idProduct:data.valueTreeUp},{
            name:data.values.name,
            price:data.values.price,
            info:data.values.info,
            producer:data.values.producer,
            properties:data.updateProperty,
        
        },{new:true , useFindAndModify: false},function(err){
            if(err) return console.log(err);
            
        })
    
    return await promise
}


const deleteProduct = async (id) =>{

    const List = productListSchema
    let promise = new Promise((res,rej)=>{
        List.findOneAndDelete({idProduct:id}, function(err, product){ 
            if(err) return console.log(err);
            res(product);
        });
    }) 
    return await promise
}

module.exports = {createProductMain,createProductSubMain,createProductList,checkIdProduct,createNews,deleteNews,getAllProducts,updateProductInfo,deleteProduct}