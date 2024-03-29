"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cart/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ id, imageUrl, title, price, key, promotionRate }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div key={key}>
      <div className="flex flex-col gap-1">
        <div className=" h-[200px] w-52 bg-white  flex justify-center">
          <Link className="" href={`/productDetails/:${id}`}>
            <Image
              src={imageUrl}
              // layout="fill"
              // objectFit="cover"
              width={500}
              height={500}
              className="h-full w-full"
            />
          </Link>
        </div>
        <Link href={`/productDetails/:${id}`}>
          <p className="bg-white text-center text-accent text-base font-bold">
            {price} $
          </p>
          <p className="bg-white text-center text-base font-semibold">
            {title}
          </p>
        </Link>
        <button
          onClick={() => {
            !currentUser
              ? toast.success("You Need to Login First", {
                  hideProgressBar: false,
                })
              : dispatch(
                  addToCart({
                    productId: id,
                    title: title,
                    price: price,
                    promotionRate: promotionRate,
                    imageUrl: imageUrl,
                    quantity: 1,
                  })
                );
          }}
          className="bg-accent p-4 w-full rounded-b-lg text-white text-center -text-base font-semibold hover:bg-black"
        >
          Add To Cart
        </button>
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
