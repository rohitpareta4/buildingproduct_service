import User from "../models/userM.js"
import bcrypt, { compareSync } from "bcryptjs"
import { generatetoken,generatetokenhospital } from "../lib/utils.js"
import adminH from "../models/Hospitaladmin.js"
// import { use } from "react"
import hospitalInfo from "../models/hospital/hospitalinfo.js"


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

export const editprofile=async(req,res)=>{
  try {
    console.log("edit.......",req.body)
    const userId=req.user._id;
    const updateprofile={}
    if(req.body.fullname){
      updateprofile.fullname=req.body.fullname
    }
    if(req.file && req.file.filename){
      updateprofile.profilepic=req.file.filename
    }
    console.log("profile_pic.......",req.file.filename)
    // if(!profilepic){
    //   res.status(400).json("profile-pic is needed....")
    // }
  const editprofiles=await adminH.findByIdAndUpdate(userId,updateprofile,{new:true})
    console.log("Add_bio",editprofiles)
        res.status(200).json(editprofiles)
  

  } catch (error) {
    console.log(error)
  }
}

export const hospital_Info=async(req,res)=>{
  try {
    const {hospitalname,hospitaladdress,phonenumber,email,city,state,hospitalType,services,ambulanceAvailable,emergencyAvailable}=req.body

    const user=await adminH.findOne({email})

     if (!user) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // const ispassword=await bcrypt.compare(password,user.password)

    // if(!ispassword){
    //   res.status(401).json("password is Incorrect...")
    // }
    
    const hospitalinfo=await hospitalInfo.create({
      hospitalname,hospitaladdress,phonenumber,adminId:user._id,city,state,hospitalType,services,ambulanceAvailable,emergencyAvailable
    })
       console.log("hospitalinfo..............",hospitalinfo)
    res.status(200).json(hospitalinfo)
  
  
  } catch (error) {
    console.log(error)
  }
}

export const get_hospitalInfo=async(req,res)=>{
  try {
    const get_info=await hospitalInfo.findOne({adminId:req.user._id})
    console.log("get_info........",get_info)
    res.status(200).json(get_info)
  } catch (error) {
    
  }
}

