import React from "react";
import chair1 from "../assets/chair1.png";
import star from "../assets/start.png";
import sold from "../assets/image 158.png";
import { motion } from "framer-motion";

const BestSellers = () => {
  const collections = [
    {
      image1: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      image1: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      image1: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
  ];

  return (
    <div className="mt-20">
      <div className="w-full flex">
        {/* --------------------Left Div-------------------- */}
        <div className="w-3/5 py-8 px-8 bg-home-bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white font-bold font-tomorrow text-[48px]">
              BEST SELLERS
            </h1>
          </motion.div>

          {/* Grid layout for collections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
          >
            {collections.map((collection, index) => (
              <motion.div key={index} className="w-full h-fit py-4">
                <div>
                  <img src={collection.image1} alt="" />
                </div>
                {/* -----------------Div-1-3-------------------- */}
                <div className="flex m-auto flex-col mx-8 text-left pr-0 mt-4 font-rubik font-medium">
                  <div>
                    <p className="text-white">{collection.description}</p>
                  </div>
                  <div className="mt-2 flex gap-4 ">
                    <div>
                      <img src={collection.image2} alt="" />
                    </div>
                    <div className="mt-1">
                      <p className="font-rubik  text-arrivals-rating font-light">
                        {collection.rating}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 font-rubik">
                    <p className="text-[16px] text-white">
                      <span className="line-through font-light text-[10px] text-sub-text-best">
                        {collection.price}
                      </span>
                      <span className="ml-2">{collection.actualprice}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-16">
            <button className="bg-home-bg font-rubik font-medium px-20 py-6 text-home-bg-black">
              EXPLORE
            </button>
          </motion.div>
        </div>

        {/* --------------------Right Div--------------------------- */}
        <div className="w-2/5 py-8 px-8 bg-home-bg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-tomorrow font-bold text-[32px]">
              TODAY’S TOP SELLING
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="w-fit h-fit px-4 py-0 border bg-discount-bg text-white font-rubik ml-4 absolute right-24 top-8">
                <p>SOLD OUT</p>
              </div>
            <div className="mt-4">
              
              <img
                className="h-[500px] w-[350px] py-4 m-auto"
                src={sold}
                alt=""
              />
            </div>
            <div className="m-auto w-[350px] font-rubik font-medium text-home-bg-black">
              <div>
                <p>
                  SmileSellers Hector High Back Multi-Purpose Gaming Chair,
                  Mesh..
                </p>{" "}
              </div>
              <div>
                <p className="text-[16px] text-home-bg-black mt-2">
                  <span className="line-through font-light text-[10px] text-sub-text-best ">
                    Rs. 15,995.00
                  </span>
                  <span className="ml-2 text-black">Rs. 15,995.99</span>
                </p>
              </div>
            </div>
          </motion.div>
          <div className="mt-12 flex justify-center">
            <button className="bg-home-bg-black  text-white font-rubik font-medium px-20 py-6">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
