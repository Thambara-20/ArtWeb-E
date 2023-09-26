import mongoose from "mongoose";
const itemschema = (mongoose.Schema) ({
    name:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }

}) 
 
export default mongoose.model('item', itemschema);
