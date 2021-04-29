const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;

const verifyCallback = (username,password,done) =>{

    
}
const strategy = new LocalStrategy()



 passport.use();