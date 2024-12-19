import { motion } from "framer-motion"
import bulk from "../assets/bulk.png";

const Bulk = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}} 
        className="mt-20 px-16 w-full flex">
      {/* ---------------------Left Div------------------------ */}
      <div className="w-1/2 py-8 mt-4">
        <p className="font-bold font-tomorrow text-[48px] text-home-bg-black">BULK ENQUIRY</p> <br /> <br />
        <p className="pr-0 text-[12px] text-home-bg-black font-light w-1/2 font-rubik">
          Looking to furnish your office or workspace with premium ergonomic
          chairs? We specialize in fulfilling corporate bulk orders with
          customized solutions tailored to your team’s comfort and productivity
          needs. Whether it’s a startup or a large organization, we’ve got you
          covered with competitive pricing and dedicated support.
        </p> <br /> <br />
        <a href="">
            <button className="bg-home-bg-black text-white font-medium font-rubik py-4 px-6">
            ENQUIRE NOW
            </button>
        </a>
      </div>
      {/* ---------------------Right Div----------------------------- */}
      <div className="w-1/2">
        <img src={bulk} alt="" />
      </div>
    </motion.div>
  );
};

export default Bulk;
