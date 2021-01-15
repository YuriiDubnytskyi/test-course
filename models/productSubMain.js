const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSubTitleSchema = new Schema({
    productSubTitle:String,
    idProductSubTitle:String,
    idProductTitle:{type:Schema.Types.String,ref:'productTitle'}
},{
    collection:"productSubTitle"
})

module.exports = mongoose.model('productSubTitle', productSubTitleSchema);