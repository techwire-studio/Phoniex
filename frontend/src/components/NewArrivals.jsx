import chair1 from "../assets/chair1.png";
import star from "../assets/start.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const NewArrivals = () => {
  const collections = [
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
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
      <h1 className="text-center font-bold   font-tomorrow text-[48px]">
        NEW ARRIVALS
      </h1>

      <div className="flex w-full  px-4 gap-2 mt-8">
        <Swiper
          spaceBetween={16}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => {
            // Update progress bar width
            const progressBar = document.getElementById("custom-progress-bar");
            swiper.on("slideChange", () => {
              const progress =
                (swiper.activeIndex /
                  (swiper.slides.length - swiper.params.slidesPerView)) *
                100;

              progressBar.style.width = `${Math.min(progress, 100)}%`;
            });
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {collections.map((collection, index) => (
            <SwiperSlide key={index} className="">
              <motion.div
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:1}}
              viewport={{once:true,amount: 0.2 }}
              className="w-full border-2 h-fit py-4">
                {/* -----------------Div-1-1-------------------- */}
                <div className="w-fit h-fit px-4 py-0 border bg-discount-bg text-white font-rubik ml-4">
                  <p>{collection.discount}</p>
                </div>
                {/* -----------------Div-1-2-------------------- */}
                <div>
                  <img src={collection.image} alt="" />
                </div>
                {/* -----------------Div-1-3-------------------- */}
                <div className=" flex m-auto flex-col  mx-8 text-left pr-20 mt-4 font-rubik font-medium">
                  <div>
                    <p>{collection.description}</p>
                  </div>
                  <div className="mt-2 flex gap-4 ">
                    <div>
                      <img src={collection.image2} alt="" />
                    </div>
                    <div className="mt-1">
                      <p className="font-rubik text-arrivals-rating font-light">
                        {collection.rating}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 font-rubik">
                    <p className="text-[16px]">
                      <span className="line-through text-sub-text-best  text-[10px]">
                        {collection.price}
                      </span>
                      <span className="ml-2 text-black">
                        {collection.actualprice}
                      </span>
                    </p>
                  </div>
                </div>
                {/* -----------------Div-1-4-------------------- */}
                <div className="font-rubik flex  border-2 border-home-bg-black w-fit m-auto px-8 py-4 mt-4 text-home-bg-black font-medium">
                  <button>ADD TO CART</button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Progress Bar */}
      <div className="flex justify-center mt-16">
        <div className="w-[500px] h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            id="custom-progress-bar"
            className="h-full bg-black transition-all duration-300 ease-in-out"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
      <div className="flex m-auto justify-center mt-8">
        <button className="bg-home-bg-black text-white font-rubik px-20 py-4 font-medium text-[16px]">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
