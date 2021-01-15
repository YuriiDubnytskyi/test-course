const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productTitleSchema = new Schema({
    productTitle:String,
    idProductTitle:{type:Schema.Types.String,ref:'productSubTitle'}
},{
    collection:"productTitle"
})

module.exports = mongoose.model('productTitle', productTitleSchema);