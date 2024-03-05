import React from "react";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  const productsList = PRODUCTS.slice(0, 6);
  return (
    <div>
      <div className="mb-4 pl-2 flex justify-center md:justify-start">
        <h2 className="text-primary font-bold">Latest Products</h2>
      </div>
      <div className="flex items-center justify-center gap-4">
        {productsList.map((item) => (
          <div className="flex flex-col gap-1">
            <div className=" h-[200px] w-52 bg-white  flex justify-center">
              <Link className="" href={`./productDetails/:${item.id}`}>
                <Image
                  src={item.imageUrl}
                  // layout="fill"
                  // objectFit="cover"
                  width={500}
                  height={500}
                  className="h-full w-full"
                />
              </Link>
            </div>
            <Link href={`./productDetails/:${item.id}`}>
              <p className="bg-white text-center text-accent text-base font-bold">
                {item.price} $
              </p>
              <p className="bg-white text-center text-base font-semibold">
                {item.description}
              </p>
              <button className="bg-accent p-4 w-full rounded-b-lg text-white text-center -text-base font-semibold">
                Add To Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href={"/"}
          className=" p-2 hover:opacity-85 hover:text-slate-200 bg-accent text-base text-white rounded-lg"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

{
  /* <View>
  <View style={styles.cardView}>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", {
          itemId: item.id,
          catId: item.categoryId,
          productTitle: item.title,
        });
      }}
      style={styles.imageView}
    >
      <Image style={styles.image} source={{ uri: item.image }} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", {
          itemId: item.id,
          catId: item.categoryId,
          productTitle: item.title,
        });
      }}
      style={styles.priceView}
    >
      <View>
        <Text style={styles.price}> ج.م {item.price}</Text>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        !authUser
          ? setModalVisible(true)
          : dispatch(cartActions.addToCart(item, 1));
      }}
      style={styles.addToCartView}
    >
      <Text style={styles.renderAddToCart}>اضف للسلة</Text>
    </TouchableOpacity>
  </View>
</View>; */
}
export default ProductCard;
