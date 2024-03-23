import mongoose from "mongoose";
import Schema from "mongoose";
const categorySchema = new mongoose.Schema({
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

const Category = mongoose.model("Category", categorySchema);

export default Category;
