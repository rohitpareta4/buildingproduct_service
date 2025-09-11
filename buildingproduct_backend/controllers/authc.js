import User from "../models/userM.js"
import bcrypt, { compareSync } from "bcryptjs"
import { generatetoken,generatetokenhospital } from "../lib/utils.js"
import adminH from "../models/Hospitaladmin.js"
// import { use } from "react"

export const signup=async(req,res)=>{
  try {
    const {email,password,fullname}=req.body
    if(!email || !password || !fullname){
        return res.status(400).json({message:"all fields must be required..."})
    }
     if(password.length<6){
        return res.status(400).json({message:"password must be at least 6 characters..."})
    }
    const userexists=await User.findOne({email})
    if(userexists){
        return res.status(400).json({message:'user already exists with this email...'})
    }
    const salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)

    const newuser=await User.create({
        email,
        password:hashpassword,
        fullname
    })
    if(newuser){
        generatetoken(newuser._id,res)

         await newuser.save()

            res.status(201).json({
                _id:newuser._id,
                email:newuser.email,
                fullname:newuser.fullname,
                profilepic:newuser.profilepic
            })


    }
   
     else{
            res.status(400).json({message:"invalid user data"})
        }

         console.log('newuser......',newuser)
  } catch (error) {
    console.log('error',error)
  }
}

export const login=async(req,res)=>{
  try {
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        res.status(400).json({message:'please do signup first'})
    }

     const ispassword=await bcrypt.compare(password,user.password)
        if(!ispassword){
           return res.status(400).json({message:"invalid credentials"});
        }
        const token=generatetoken(user._id,res)

    if(user){
      console.log('login is done.......')
      console.log('user is...........',user)
       return res.status(200).json({
        _id:user._id,
        email:user.email,
        fullname:user.fullname,
        profilepic:user.profilepic,
            token
       })
    }
    
  } catch (error) {
    console.log('error....',error)
  }
}

export const me=async(req,res)=>{
  try {
    return res.status(200).json(req.user)
  } catch (error) {
    console.log('error...',error)
  }
}

export const signupH=async(req,res)=>{
  try {
    const {email,password,fullname}=req.body
    if(!email || !password || !fullname){
        return res.status(400).json({message:"all fields must be required..."})
    }
     if(password.length<6){
        return res.status(400).json({message:"password must be at least 6 characters..."})
    }
    const userexists=await adminH.findOne({email})
    if(userexists){
        return res.status(400).json({message:'user already exists with this email...'})
    }
    const salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)

    const newuser=await adminH.create({
        email,
        password:hashpassword,
        fullname
    })
    if(newuser){
        generatetokenhospital(newuser._id,res)

         await newuser.save()

         console.log('newuserhospital...........',newuser)

            res.status(201).json({
                _id:newuser._id,
                email:newuser.email,
                fullname:newuser.fullname,
                profilepic:newuser.profilepic
            })

            

    }
   
     else{
            res.status(400).json({message:"invalid user data"})
        }

         console.log('newuser......',newuser)
  } catch (error) {
    console.log('error',error)
  }
}

export const loginH=async(req,res)=>{
  try {
    const {email,password}=req.body
    const user=await adminH.findOne({email})
    if(!user){
        res.status(400).json({message:'please do signup first'})
    }

     const ispassword=await bcrypt.compare(password,user.password)
        if(!ispassword){
           return res.status(400).json({message:"invalid credentials"});
        }
        const token=generatetokenhospital(user._id,res)

    if(user){
      console.log('login is done.......')
      console.log('userhospital is...........',user)
       return res.status(200).json({
        _id:user._id,
        email:user.email,
        fullname:user.fullname,
        profilepic:user.profilepic,
            token
       })
    }
    
  } catch (error) {
    console.log('error....',error)
  }
}

export const userme=async(req,res)=>{
  try {
    console.log('userme..............',req.user)
    return res.status(200).json(req.user)
  } catch (error) {
    console.log(error)
  }
}