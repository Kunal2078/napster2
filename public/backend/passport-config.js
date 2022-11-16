// const { authenticate } = require("passport")

 const localstrategy= require("passport-local").Strategy
 const bcrypt = require('bcrypt')

 function initialize(passport,getUserByEmail,getUserById){
    const authenticateUser= async (email,password,done)=>{
        const user =getUserByEmail(email)
        if(user==null){
            return done(null, false,{message:"no user with that email"})
        }

        try {
            if(await bcrypt.compare(password,user.password)){
                return done(null ,user)
            } 
            else{
                return done(null , false,{messge:'password is wrong'})
            }
            
        } catch (e) {
            return done(e)
            
        }
    }
passport.use(new localstrategy({usernameField:"email"},
authenticateUser))
passport.serializeUser((user,done)=>done(null,user.id))
passport.deserializeUser((id,done)=>{
    return done(null,getUserById(id))
})
 }

 module.exports = initialize