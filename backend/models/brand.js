import mongoose from "mongoose";
import Schema from "mongoose";
const brandSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  // products: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Product",
  //   },
  // ],
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
