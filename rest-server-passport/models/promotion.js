var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	a = require('mongoose-currency').loadType(mongoose),
	promotion = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ""
    },
    price: {
        type: mongoose.Types.Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  },
	{
    	timestamps: true
	});

var promotion = mongoose.model('Promotion', promotion);
module.exports = promotion;