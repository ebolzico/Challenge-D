const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPass: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
})

//Create a VIRTUAL id in stead of _id
userSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

userSchema.set('toJSON',{
virtuals:true,
});

exports.User = mongoose.model('User', userSchema)