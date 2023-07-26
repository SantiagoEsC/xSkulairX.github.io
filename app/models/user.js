const mongoose = require('mongoose')

const userScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        avatar: {
            type: String,
            default:  'https://image.com'
        },
        email:{
            type: String,
            unique:true,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    },

    {
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model('user', userScheme)