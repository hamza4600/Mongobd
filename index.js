const exrpress=require("express");
const app= exrpress()
const mongoose=require("mongoose");

const url="mongodb://localhost:27017/6pps"
// if we type mongoose.connect it will connect to mongodb://localhost:27017/
mongoose.Promise=global.Promise
async function One(){
    await mongoose.connect(url,
        {
        // useUrlParse:true,
        // useUnifiedTopology:true,
        // useFindandModify:false        
    }).then(()=>{
        console.log(`Connected to mongo BD `)
    }).catch((error)=>{
        console.log(`You are the In ${error}`)
    })
}
// connect to the local Mongo DB Host  we can now insert insert Data to Database but first we have to define the Schema  is like a small colector and Model is like a collections  
One()

//creata schema
const student=new mongoose.Schema({
    name:String,
    workout:Boolean,
    age:Number,
    address:String  
})
//creata Model
const Bigstudent=new mongoose.model("Bigstudnet",student);

const address=async()=>{
        // add a new Data to store
    const ss=new Bigstudent({
        name:"Hassan",
        workout:true,
        age:20,
        address:"London"
    })
// now promise to save the data
     await ss.save();

}// run and see the data base
// a1ddress()

// we can also define and add Data  in other way 

// this is a ew collection od student is pass in a Other function
const students=new mongoose.model("studnets",student);

async function Other(){
    const jj=await students.create({
        name:"Ammer",
        workout:true,
        age:30,
        address:"haripure"
    })
}   // this apporach is more easy we can easyly creat Model
Other()//

//How to get Data from the colection
async function Values(name){
    const kj= await name.find()
    console.log(kj)
}// pass name of collection   will return the array 
// Values(students)


// we can also finnt teh qury result we wanted 
async function Given(){
    const pl= await students.find({age:{$eq:30}}) 
    console.log(` values are `)
    console.log(pl)
}
Given()// only will show the Objects tha have  the Height of 18 or given all will be return

//eq mean equal and gte greatr than equal to  similarly ls : less than    more ne: not equal to 



/* isValidObejctId()  return  true if have same name , schema, collection and Obejct
MongoClientSession
Connection class have many Methods and events  like creataCollection delete model , drop dataBase , and many more 

COLLECTION  it is also a big habe many fucntions  documents  creatcollection delet inser index etc

QueryOptions   
SaveOptions
   SchemaTimestampsConfig 
*/

//web dev   cheat sheat 
