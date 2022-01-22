const exrpress=require("express")
const mongoose=require("mongoose");
const app=exrpress();


//function for databasconnect
function Main(){
    mongoose.connect("mongodb://localhost/testdb")
}
Main()
//defina schema
const uschema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String
})
//defina Model
const user=new mongoose.model("User",uschema)

// add data to the scheam and save data
async function Save(){
    const data= new user({
        name:"Hamza",
        age:25,
        city:"London"
    })
    await data.save().then(() => {
        console.log("Data is Save ")
    }).catch((err) => {
        console.log(`Tere is an error ${err}`)
    });//show if ther is an erro
    console.log(data)
}
Save()
// we can also add data to the scheam using ::const gaga=awaite user.create({name:"hamza",age:25})
// we can also mute the value that canot be chnage    we can also set min and max values  
// more example for schema 
// ALSO can defina custom Validator for us
const student= new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:10,
        max:70,
        validate:{
            validator:v=> v%2===0,
            message:props=>`${props.value} is not an even Number `
        }

    },
    class:String,
    city:String,
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    },
    updateAt:{
        type:Date,
        default:()=>Date.now()
    },
    email:{
        type:String,
        minlength:10,   // must be at least 10
        required:true ,
        uppercase:true
    },
    // defin a function with refers of id 
    bestFrind:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:{
        street:String,
        city:String
    }// we can also provide some stamet like Validations for a site 
})
//adding a method 
student.methods.sayHi=function(){
    console.log(`My name is ${this.name}`)
}
// add in mOdel 
const ten= new mongoose.model("classData",student)

// Sava data to Database
async function Gaga(){
    // connect to Data base
    mongoose.connect("mongodb://localhost/tens")

    try{
    const khan= await ten.create({
        name:"Hassan khan",
        age:18,
        class:"Best Class",
        email:"hamza@gmail.com",
        hobbies:["Playing ", "BodyBuilding"],
        address:{
            street:"Main street",
            city:"DenMark"
        }
    })
    console.log(khan)
}
    catch(e){
        console.log(e.message)
    }
}// we can also defin  schema inside a schema easily  nested in  for complex Obejcts 
Gaga()

//we wil also find the Obejcy like
async function find(){
    try{
        const opo= await ten.find({name:"Hassan khan"})
        console.log(opo)
        opo.sayHi() 
    }
    catch(e){
        console.log(`Data not found `)
        console.log(e)
    }
}
find( )

//  we can also find delet Object by similar functions we wante 
// we can also creat the Methos for the scahems we Have define 