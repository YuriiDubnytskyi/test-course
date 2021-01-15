const { Router } = require('express');
const {getProductAll,getProductList,getProductInfo,addProduct,getProductsLikeOrBuy,getNews,getProductListSearch,createBuyListSell,sellCountCalculate,getProductsSell} = require('../services/userService.js');
//validation to doconst mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const db = mongoose.connection
const router = Router();

router.get('/getProductAll', (req, res) => {


    const result =  getProductAll().then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"User not found"});
        }
    })
})

router.get('/getProductList/:id', (req, res) => {
    const id = req.params.id;
    const result =  getProductList(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})


router.post('/getProductListSearch/', (req, res) => {
    const str = req.body.str;
    const result =  getProductListSearch(str).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.get('/getProductInfo/:id', (req, res) => {
    const id = req.params.id;
    const result =  getProductInfo(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.put("/addProduct", (req, res)=>{
    const newLikeProducts = req.body.newLikeProducts
    const set = new Set(newLikeProducts)
    console.log([...set])
    const id = req.body.id;
    const result =  addProduct(id,[...set]).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"User not found",status:500});
        }
    })
});

router.post('/getProductsLike/', (req, res) => {
    const ids = req.body.ids;
    const result =  getProductsLikeOrBuy(ids).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.post('/getProductsBucket/', (req, res) => {
    const ids = req.body.ids;
    const result =  getProductsLikeOrBuy(ids).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.post('/buyProducts/', (req, res) => {
    const options = req.body.options;
    const products = req.body.products;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chatHi.help@gmail.com',
          pass: 'qwerty123456!@#Q' // naturally, replace both with your real credentials or an application-specific password
        }
      });
      
      const mailOptions = {
        from: 'chathi.help@gmail.com',
        to: `${options.user.email},chathi.help@gmail.com`,
        subject: 'Buy Check',
        html: `
        <p>Hi this is your check list</p>
        <p>Name ${options.user.name}</p>
        <p>Phone ${options.user.phone}</p>
        <p>Adress ${options.user.adress}</p>
        <p>Poshta ${options.user.postOffice}</p>
        <p>You Buy</p>
        ${
            products.productsBucket.map(el=>{
                return (`
                    <div>
                        <p>Name ${el.name}</p>
                        <p>Price ${el.price}</p>
                        <p>Count ${el.count}</p>
                        <a href=http://localhost:3000/product/:${el.idProduct}>More</a>
                    </div>
                    `
                )
            })
        }
        `
      };

      createBuyListSell(options.user.email,products.productsBucket)

      sellCountCalculate(products)

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            res.json({err:false,status:404,comment:"User not found"});
        } else {
            res.json({success:true});
        }
      });

})

router.get('/getNews', (req, res) => {
    const result =  getNews().then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"User not found"});
        }
    })
})


router.post('/sendText/', (req, res) => {
    const options = req.body.options;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chatHi.help@gmail.com',
          pass: 'qwerty123456!@#Q' // naturally, replace both with your real credentials or an application-specific password
        }
      });
      
      const mailOptions = {
        from: 'chathi.help@gmail.com',
        to: 'chathi.help@gmail.com',
        subject: 'Help',
        html: `
        <p>Hi Messsege</p>
        <p>Name ${options.user.name}</p>
        <p>Email ${options.user.email}</p>
        <p>Title: ${options.user.title}</p>
        <p>Text: ${options.user.text}</p>
        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            res.json({err:false,status:404,comment:"User not found"});
        } else {
            res.json({success:true});
        }
      });

})


router.get('/getCountSellProducts/:email', (req, res) => {
    const email = req.params.email;
    const result =  getProductsSell(email).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"With this Email not found products"});
        }
    })
})

router.get('/isAuth',(req,res)=>{
    console.log('Cookies: ', req.cookies)
      console.log('Signed Cookies: ', JSON.stringify(req.signedCookies))
    console.log(req.session.passport)
    if (req.session.passport.user)
        res.json(req.session.passport.user)
    res.json({status:400})
})


module.exports = router;