import React, { useEffect, useState, Suspense, useContext } from "react";

import { useLocation, Link, useParams } from "react-router-dom";
import star from "../assets/start.png";
import direction from "../assets/Group .png";
import delivery from "../assets/delivery.svg";
import payment from "../assets/payment-method.svg";
import exchange from "../assets/transfer.svg";
import Header from "../common/Header";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const Footer = React.lazy(() => import("../components/Footer"));

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);

  const [pinCode, setPinCode] = useState("");
  const [productDetail, setProductDetail] = useState([]);
  const [isCheckPin, setIsCheckPin] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [items, setItems] = useState(1);

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddProductToCart = () => {
    if (!selectedVariant) {
      toast.error("Select variant first");
      return;
    }

    addToCart({ ...productDetail, quantity: items, size: selectedVariant.size });
  };

  const { id } = useParams();

  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.get(
        `https://tws-phoenix-inventory-backend.vercel.app/api/products/${id}`
      );
      setProductDetail(response.data);
    };

    getResponse();
  }, [id]);

  const handleDecrement = () => {
    if (items > 1) setItems(items - 1);
  };

  const handleIncrement = () => {
    setItems(items + 1);
  };

  const handleInputChange = (e) => {
    setPinCode(e.target.value);
  };

  const handleCheckPin = () => {
    if (isCheckPin) {
      setPinCode("");
      setIsCheckPin(false);
    } else if (pinCode.trim()) {
      setIsCheckPin(true);
    }
  };

  const [mainImage, setMainImage] = useState(productDetail?.image1);

  return (
    <div className="w-full h-screen">
      <Header />

      <div className="w-full px-8 lg:px-32 h-fit lg:flex mt-0 lg:mt-16">
        {/* ---------------- Product Images ---------------- */}
        <div className="w-full lg:w-1/2 h-full mt-4">
          {/* Main Image */}
          <div className="h-[400px]">
            <img
              className="h-[400px] w-auto m-auto object-contain cursor-pointer"
              src={mainImage || productDetail?.imageUrls?.[0]}
              alt="Product main view"
            />
          </div>

          {/* Thumbnails */}
          <div className="lg:h-[150px] flex justify-center gap-2 lg:gap-4 mt-4">
            {productDetail?.imageUrls?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product view ${index + 1}`}
                className={`h-[80px] lg:h-[100px] w-auto object-contain cursor-pointer transition-all duration-200 ${
                  mainImage === image ? "border-2 border-blue-500" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        {/* ---------------- Product Details ---------------- */}
        <div className="w-full lg:w-1/2 h-full">
          <div className="h-full">
            {productDetail && (
              <div key={productDetail.id} className="pr-0 mt-6">
                {/* Title */}
                <p className="font-rubik lg:text-h4-desktop text-body-mobile">
                  {productDetail.title}
                </p>

                {/* Description */}
                <p className="font-rubik text-[14px] mt-2 text-gray-600">
                  {productDetail.description}
                </p>

                {/* Ratings */}
                <p className="flex items-center gap-2 mt-4">
                  <img className="h-4 w-24" src={star} alt="" />
                  <span className="text-arrivals-rating font-light font-rubik text-[10px] mt-1">
                    2000
                  </span>
                </p>

                {/* Price */}
                <p className="mt-6 font-rubik">
                  <span className="font-medium text-black text-h4-mobile lg:text-h4-desktop">
                    ₹{productDetail.price}
                  </span>{" "}
                  <span className="text-gray-price text-[10px] line-through pl-4">
                    ₹{(Number(productDetail.price) * 1.5).toFixed(2)}
                  </span>{" "}
                  <span className="font-medium text-off-text text-subtext-mobile lg:text-subtext-desktop pl-3">
                    (35% OFF)
                  </span>
                </p>

                {/* Tax Info */}
                <p className="font-rubik text-tax-text text-[12px]">
                  {productDetail.chargeTax ? "Tax will be applied" : "Inclusive of all taxes"}
                </p>
              </div>
            )}
          </div>

          {/* ----------------------- VARIANTS ----------------------- */}
          {productDetail?.variants?.length > 0 && (
            <div className="mt-6">
              <p className="font-rubik text-[16px] font-medium">Available Sizes</p>

              <div className="flex gap-4 mt-3">
                {productDetail.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantSelect(variant)}
                    className={`px-5 py-2 rounded border text-sm font-rubik transition-all duration-200 ${
                      selectedVariant?.id === variant.id
                        ? "border-black bg-black text-white"
                        : "border-gray-400 text-gray-700 hover:border-black"
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>

              {selectedVariant && (
                <p className="text-[12px] mt-2 text-gray-600 font-rubik">
                  Selected Size: <span className="font-medium">{selectedVariant.size}</span>(
                  {selectedVariant.quantity} items left)
                </p>
              )}
            </div>
          )}

          {/* ----------------------- Quantity Section ----------------------- */}
          <div className="mt-4">
            {/* Desktop */}
            <div className="hidden lg:block">
              <p className="font-rubik text-quantity-text font-light text-[18px]">Quantity</p>

              <div className="mt-2 flex items-center gap-4">
                <div className="relative">
                  <button
                    onClick={handleDecrement}
                    className="absolute top-1/2 left-2 text-2xl transform -translate-y-1/2 text-quantity-value"
                  >
                    -
                  </button>

                  <input
                    className="border w-28 py-4 text-center rounded-[8px] text-xl text-quantity-value border-quantity-border"
                    type="text"
                    value={items}
                    readOnly
                  />

                  <button
                    onClick={handleIncrement}
                    className="absolute top-1/2 right-2 text-2xl transform -translate-y-1/2 text-quantity-value"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddProductToCart}
                  className="py-4 border px-8 bg-home-bg-black text-white font-rubik"
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              <div className="w-full m-auto flex justify-center items-center">
                <div className="w-2/5">
                  <p className="font-rubik text-quantity-text font-light text-h2-mobile">
                    Quantity
                  </p>
                </div>

                <div className="w-3/5">
                  <div className="relative">
                    <button
                      onClick={handleDecrement}
                      className="absolute top-1/2 left-4 text-h2-mobile transform -translate-y-1/2 text-quantity-value"
                    >
                      -
                    </button>

                    <input
                      className="border w-full py-4 text-center rounded-[8px] text-h2-mobile text-quantity-value border-quantity-border"
                      type="text"
                      value={items}
                      readOnly
                    />

                    <button
                      onClick={handleIncrement}
                      className="absolute top-1/2 right-4 text-h2-mobile transform -translate-y-1/2 text-quantity-value"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddProductToCart}
                className="w-full mt-4 m-auto flex py-4 border px-8 bg-home-bg-black text-white font-rubik"
              >
                ADD TO CART
              </button>
            </div>

            {/* Delivery */}
            <div className="mt-8">
              <h1 className="flex items-center gap-4 font-rubik font-medium lg:text-h4-desktop text-h4-mobile text-home-bg-black">
                <img className="w-4 h-6" src={direction} alt="" />
                Check for Delivery Details
              </h1>

              <div className="relative mt-4">
                <input
                  type="text"
                  value={pinCode}
                  onChange={handleInputChange}
                  placeholder="Enter your pincode"
                  className="w-full lg:w-2/3 border border-check-border py-4 rounded-[8px] placeholder:text-[18px] pl-4 font-rubik"
                />

                <button
                  onClick={handleCheckPin}
                  disabled={!pinCode.trim() && !isCheckPin}
                  className={`absolute right-4 lg:right-[35%] font-rubik text-[14px] top-1/2 -translate-y-1/2 ${
                    pinCode.trim() || isCheckPin
                      ? "text-home-bg-black cursor-pointer"
                      : "text-home-bg-black cursor-not-allowed"
                  }`}
                >
                  {!isCheckPin ? "Check" : "Change"}
                </button>
              </div>

              <p className="text-tax-text text-[9px] lg:text-subtext-desktop">
                Please enter PIN code to check delivery time & Pay on Delivery Availability
              </p>

              {isCheckPin && (
                <div className="mt-2 space-y-4">
                  <p className="flex items-center gap-6 font-rubik text-[16px]">
                    <img className="w-8" src={delivery} alt="" />
                    Get it by Fri, Jan 03
                  </p>

                  <p className="flex items-center gap-6 font-rubik text-[16px]">
                    <img className="w-8" src={payment} alt="" />
                    Pay on delivery available
                  </p>

                  <p className="flex items-center gap-6 font-rubik text-[16px]">
                    <img className="w-8" src={exchange} alt="" />
                    Easy 7 days return & exchange available
                  </p>
                </div>
              )}

              <div className="mt-4 font-rubik text-black text-[10px] lg:text-subtext-desktop">
                <p>100% Original Products</p>
                <p>Pay on delivery might be available</p>
                <p>Easy 30 days returns and exchanges</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ProductDetail;
