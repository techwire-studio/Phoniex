import React from "react";
import search from "../assets/icon.png";
import user from "../assets/user 1.png";
import home from "../assets/home-bg.webp";
import { Suspense } from "react"
import { motion} from "framer-motion"



const NewArrivals = React.lazy(()=> import('./NewArrivals'))
const BestSellers = React.lazy(()=> import('./BestSellers'))
const Collection = React.lazy(()=> import('./Collection'))
const Team = React.lazy(()=> import('./Team'))
const Bulk = React.lazy(()=> import('./Bulk'))
const WhyChooseUs = React.lazy(()=> import('./WhyChooseUs'))
const Awards = React.lazy(()=> import('./Awards'))

const Home = () => {
  return (
    <div className="w-full h-screen">
      {/* ---------------------------------DIV 1-------------------------------------------- */}
      <div className="bg-home-bg w-full h-fit text-center py-4">
        <p className="font-rubik font-light text-[16px]">
          SHOP NOW AND GET 10% OFF - USE CODE (FIRSTBUY)
        </p>
      </div>
      {/* ---------------------------------DIV 2-------------------------------------------- */}
      <div className="w-full h-fit flex bg-home-bg-black py-8">
        {/* ===========Div 2-1 ============ */}
        <div className="w-2/5  text-white font-rubik flex pl-16 items-center">
          <nav className="gap-8 flex text-[16px]">
            <a href="">Shop By</a>
            <a href="">Collections</a>
            <a href="">Track Order</a>
            <a href="">FAQs</a>
            <a href="">Contact Us</a>
          </nav>
        </div>
        {/* ===========Div 2-2 ============ */}
        <div className="w-1/5  flex justify-center items-center ">
          <p className="font-tomorrow font-bold text-white text-[22px]">
            PHEONIX
          </p>
        </div>
        {/* ===========Div 2-3 ============ */}
        <div className="w-2/5   text-white pr-16   font-rubik">
          <nav className="flex justify-end gap-8">
            <a href="">
              <img className="w-6" src={search} alt="" />
            </a>
            <a href="">
              <img className="w-6" src={user} alt="" />
            </a>
            <a href="">
              <img className="w-6" src={search} alt="" />
            </a>
          </nav>
        </div>
      </div>
      {/* ---------------------------------DIV 3-------------------------------------------- */}
      <div className="w-full relative">
        <div className="w-full h-fit relative">
          <img src={home} alt="" />
        </div>
        <motion.div
        
        className="w-2/5 top-1/2 absolute   transform  -translate-y-1/2  ml-20  px-8">
          <motion.p
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}}
          viewport={{once:true}}
          className="text-[48px] font-rubik font-bold text-white">
            INDIA’s #1 Ergonomic Office Chairs
          </motion.p>{" "}
          <br />
          <motion.p 
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}}
          viewport={{once:true}}
          className="text-white font-tomorrow text-[16px] pr-24">
            Experience unparalleled comfort and support designed for your
            workday. Discover the style and ergonomics, crafted just for you!
          </motion.p>{" "} <br />
          <br />
          <motion.button
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}}
          viewport={{once:true}}
          className="bg-home-bg px-8 py-4 text-home-bg-black font-rubik">
            SHOP NOW
          </motion.button>
        </motion.div>
      </div>
      <Suspense >
            <NewArrivals />
            <BestSellers />
            <Collection />
            <Team />
            <Bulk />
            <WhyChooseUs />
            <Awards />
      </Suspense>
    </div>
  );
};

export default Home;
