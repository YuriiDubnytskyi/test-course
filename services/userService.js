const mongoose = require('mongoose');
const productTitleSchema = require("../models/productMain")
const productSubTitleSchema = require("../models/productSubMain")
const productListSchema = require("../models/productList")
const wereHouseSchema = require("../models/wereHouse")
const productInfoSchema = require("../models/productInfo")
const userSchema = require("../models/users")
const newsSchema = require("../models/news")
const buyListSellSchema = require("../models/buyList")

const db = mongoose.connection
const getProductAll = async () => {
    
    let promise = new Promise((res,rej)=>{
        const Main = productTitleSchema
        let x = Main.aggregate([
            {
                $lookup:
                {
                    from: 'productSubTitle',
                    localField: 'idProductTitle',
                    foreignField: 'idProductTitle',
                    as: 'subTitle'
                }
            }
        ]).exec((e,r)=>{
            res(r)
        })

    }) 
    return await promise
}
const getProductList = async (id) => {
    let promise = new Promise((res,rej)=>{
        const List = productListSchema
        List.find({idSubProduct:{ $in:`${id}`}}, function(err, list){ 
            if(err) return console.log(err);
            res(list);
        });
        
    }) 
    return await promise
}


const getProductListSearch = async (str) => {
    let promise = new Promise((res,rej)=>{
        const List = productListSchema
        List.find({name:{$regex:'.*'+str+'.*'}}, function(err, list){ 
            if(err) return console.log(err);
            console.log(str)
            res(list);
        });
        
    }) 
    return await promise
}


const getProductInfo = async (id) => {
    let promise = new Promise((res,rej)=>{
        const Product = productInfoSchema
        let x = Product.aggregate([ 
            { $match: { idProduct: id } },
            {
                $lookup:
                {
                    from: 'wereHouse',
                    localField: 'idProduct',
                    foreignField: 'idWereHouse',
                    as: 'count'
                }
            }
        ]).exec((e,r)=>{
            res(r)
        })
        
    }) 
    return await promise
}

const addProduct = async (id,newLikeProducts) =>{
    let promise = new Promise((res,rej)=>{
        const User = userSchema
        User.findOneAndUpdate({_id:id},{likeProducts:newLikeProducts},{new:true , useFindAndModify: false},function(err,user){
            if(err) return console.log(err);
            res(user)
        })
    }) 
    return await promise
}
const getProductsLikeOrBuy = async (ids) => {
    let promise = new Promise((res,rej)=>{
        const List = productListSchema
        // List.find({idProduct:{ $in:ids}}, function(err, list){ 
        //     if(err) return console.log(err);
        //     res(list);
        // });


        List.aggregate([ 
            { $match: { idProduct:{ $in:ids} } },
            {
                $lookup:
                {
                    from: 'wereHouse',
                    localField: 'idProduct',
                    foreignField: 'idWereHouse',
                    as: 'countOfProduct'
                }
            }
        ]).exec((e,r)=>{
            res(r)
        })
        
    }) 
    return await promise
}
const getNews = async () =>{
    let promise = new Promise((res,rej)=>{
        const News = newsSchema
        News.find({},((err,news)=>{
            if(err) return console.log(err);
            res(news)
        }))
    }) 
    return await promise
}

const createBuyListSell = async (email,product) => {
    let promise = new Promise((res,rej)=>{
        const BuyListSell = new buyListSellSchema({email,product,time:new Date()})
        BuyListSell.save((err)=>{
            if(err) return console.log(err);
        }) 
    }) 
    return await promise
}

const sellCountCalculate = async (products) => {
    const wereHouse = wereHouseSchema
    products.productsBucket.map((el)=>{
        wereHouse.find({idWereHouse:el.idProduct}, function(err, product){ 
            if(err) return console.log(err);
            let sell = Number(product[0].sell)
            let count = Number(product[0].count)
            sell+=el.count
            count-=el.count

            wereHouse.findOneAndUpdate({idWereHouse:el.idProduct},{count:count,sell:sell},{new:true , useFindAndModify: false},function(err){
                if(err) return console.log(err);
            })
        });
    })
}

const getProductsSell = async (email) => {
    let promise = new Promise((res,rej)=>{
        const BuyListSell = buyListSellSchema
        BuyListSell.find({email:{ $in:`${email}`}},(err,list)=>{
            if(err) return console.log(err);
            res(list)
        }) 
    }) 
    return await promise
}


module.exports = {getProductAll,getProductList,getProductInfo,addProduct,getProductsLikeOrBuy,getNews,getProductListSearch,createBuyListSell,sellCountCalculate,getProductsSell}