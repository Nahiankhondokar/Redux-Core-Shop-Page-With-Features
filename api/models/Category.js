import mongoose from "mongoose";


// student shcema design 
const CategorySchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'name feild is required'],
        trim : true
    }, 
    slug : {
        type : String
    },
    photo : {
        type : String
    }
}, {
    timestamps : true
});





// export default 
export default mongoose.model('categories', CategorySchema);
