var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	leadership = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true
    }
  },
	{
    	timestamps: true
	});

var leadership = mongoose.model('Leadership', leadership);
module.exports = leadership;