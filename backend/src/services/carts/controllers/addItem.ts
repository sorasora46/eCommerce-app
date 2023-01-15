import { Request, Response } from "express";
import { Cart } from "../models/cart.model.js";
import { Product } from "../../products/models/product.model.js";
import mongoose from "mongoose";
import { Shop } from "../../shops/models/shop.model.js";

export const createCartItem = async (
  userId: string,
  productId: string,
  productAmount: number,
  status: string,
  pName: string,
  pPrice: number,
  pImage: string,
  shopId: string
) => {
  /** TODO:
   * 3. when payment success reduce the amount of products from shop
   */
  await mongoose.connect("mongodb://localhost:27018/eCommerce-app-db");

  // find owner of this product. might be use in the future
  // const { pOwnerId } = await Product.findOne({ productId: productId });
  // console.log(pOwnerId);

  // find the current amount of product. if current amount is less than the
  // amount user want to add, then refuse to add more or to the cart
  const { pAmount } = await Product.findOne({ productId: productId });
  if (pAmount < productAmount)
    throw new Error(
      "The product you're looking for is out of stock " +
        "or the amount of product you choose is exceed the current amount."
    );

  // check if the product already exist in the cart, then increase the amount
  const productExistInCart = await Cart.findOne({
    productId: productId,
    userId: userId,
  });
  if (productExistInCart) {
    productExistInCart.productAmount += productAmount;
    productExistInCart
      .save()
      .then()
      .catch((err) => console.log(err));
    return productExistInCart;
  }

  const shop = await Shop.findOne({ userId: shopId });

  // if product never exist in the cart, create new cart item
  // set status to be "waiting for payment" by default
  const newCartItem = await Cart.create({
    userId: userId,
    productId: productId,
    status: status,
    productAmount: productAmount,
    pName: pName,
    pImage: pImage,
    pPrice: pPrice,
    shopId: shopId,
    shopName: shop.name,
  });

  newCartItem
    .save()
    .then()
    .catch((err) => console.log(err));

  return newCartItem;
};

export const addItem = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      productId,
      productAmount,
      status,
      pName,
      pPrice,
      pImage,
      pOwnerId,
    } = req.body;

    const result = await createCartItem(
      userId,
      productId,
      productAmount,
      status,
      pName,
      pPrice,
      pImage,
      pOwnerId
    );
    return res.json(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
