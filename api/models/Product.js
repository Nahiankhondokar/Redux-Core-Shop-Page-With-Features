import mongoose from "mongoose";


// student shcema design 
const ProductSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'name feild is required'],
        trim : true
    }, 
    regular_price : {
        type : Number,
        required : [true, 'regular price feild is required']
    }, 
    sale_price : {
        type : Number,
    }, 
    stock : {
        type : Number,
    },
    rating : {
        type : Number,
    },
    photo : {
        type : String,
    },
    gallery : {
        type : Array,
    },
    category : {
        type : Array,
    },
    tag : {
        type : Array,
    }
}, {
    timestamps : true
});





// export default 
export default mongoose.model('products', ProductSchema);
