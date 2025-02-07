const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullname:{
    firstname:{
      type:String,
      required:true,
      minlength:[3, 'First Name must be at lease contains 3 characters'],
    },
    lastname:{
      type:String,
      minlength:[3, 'First Name must be at lease contains 3 characters'],
    }
  },

  email:{
    type:String,
    required:true,
    unique:true,
    minlength:[5,'Email must be at least 5 characters']
  },
  password:{
    type:String,
    required:true,
    minlength:[6, 'Password must be at least 6 characters'],
    select:false,
  },
  socketId:{
    type:String
  },  
},{timestamps:true});


// Methods for User Authentication
userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
}

userSchema.methods.comparePassword = async function (password){
  return await bcrypt.compare(password, this.password);
}

// Hashing the password before saving it to the database
userSchema.statics.hashedPassword =async function(password){
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;