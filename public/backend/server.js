if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const mongoose= require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true
}).then( ()=>{
    console.log('conneted')
})
.catch((e)=>{
    console.log('error')
})
// const db =mongoose.connection
// db.on('error',error => console.error(error))
// db.once('open',() => console.log('connected to moongose')) 


const express= require('express');
const app =express();
var path = require('path')
var engine = require('consolidate');
const bcrypt=require('bcrypt')
const passport=require('passport')
const flash =require('express-flash')
const session =require('express-session')
const initializepassport =require('./passport-config');
 const methodOverride=require('method-override')
initializepassport(
    passport,
    email =>users.find(user => user,email ===email),
    id =>users.find(user => user,id ===id)
    )

const users=[] 
app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'))
app.use('/js',express.static(__dirname +'public/js'))
app.use('/img',express.static(__dirname +'public/img'))
app.set('views', __dirname + '/views')
app.engine('html', engine.mustache)
app.set('view engine', 'html')
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialised: false

}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.get("/",(req,res)=>{
    res.render('Home.html')
})
app.get("/Napster",(req,res)=>{
    res.render('Home.html')
})
app.get("/sign-up",(req,res)=>{
    res.render('signup.html')
    
})
app.post('/sign-up',async(req,res)=>{
  try{
const hashedpassword= await bcrypt.hash(req.body.password,10)
users.push({
    id:Date.now().toString(),
    email:req.body.email,
    password:hashedpassword
})
res.redirect('/sign-in')
  }
  catch{
res.redirect('/sign-up')
  }
  console.log(users)
})
app.get("/Untitled-1",checkAuthenticated,(req,res)=>{
    res.render('Untitled-1.html')
    
})
app.get("/sign-in",(req,res)=>{
    res.render('Sign In.html')
   
})
app.post('/sign-in',checkNotAuthenticated,passport.authenticate('local',{
    successRedirect:'/Untitled-1',
    failureRedirect:'/sign-in',
    failureFlash: true
}))
app.delete('/logout',(req,res)=>
{
    req.logOut
    res.redirect("/sign-in")
})
function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/sign-in')
}
function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
      return  res.redirect('/')
    }
    next()
}  
app.listen(process.env.PORT || 3000)  