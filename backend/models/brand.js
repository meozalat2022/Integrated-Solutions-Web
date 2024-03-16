import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
