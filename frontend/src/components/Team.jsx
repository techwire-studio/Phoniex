import comma from "../assets/“.png";
import flipkart from "../assets/Flipkart 1.png";
import bhive from "../assets/bhive.png";
import Toi from "../assets/TOI.png";
import team1 from "../assets/team1.png";
import { motion } from "framer-motion"

const Team = () => {
  return (
    <div className="mt-20 px-16 w-full flex ">
      {/* -------------------LEFT DIV---------------------------- */}
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      viewport={{once:true}}
      className="w-1/2  py-12 mt-8">
        <div>
          <p className="font-rubik text-[32px] text-home-bg-black font-medium">
            Loved by teams, remote <br /> workers & press.
          </p>{" "}
          <br /> <br />
          <img src={comma} alt="" /> <br />
          <p className="w-1/2 text-[12px]  font-rubik font-light text-home-bg-black">
            Pheonix is now selling directly to individuals, as well as working
            with Flipkart, Bhive and other companies to outfit home offices for
            employees who may never work in an office five days a week again.
          </p>
        </div>
        <div className="flex gap-14 mt-16">
          <img className="w-28" src={flipkart} alt="" />
          <img className="w-28" src={bhive} alt="" />
          <img className="w-28" src={Toi} alt="" />
        </div>
      </motion.div>
      {/* -------------------Right DIV---------------------------- */}
      <div className="w-1/2  grid grid-cols-2 gap-8 ">
        {/* =============1=========== */}
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className=" border flex flex-col  items-center px-8 py-8 ">
          <img className="w-12" src={team1} alt="" />
          <p className="mt-6 text-[14px] font-rubik font-medium text-home-bg-black">Ahmed Ali</p>
          <p className="mt-2 text-[12px] font-rubik font-light text-team-company">
            Operations at Flipkart
          </p>
          <p className="text-center mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
            We chose these ergonomic chairs for our new corporate office, and
            they exceeded all expectations. Not only are they stylish and
            durable, but they’ve also significantly improved our employees'
            posture and energy levels.
          </p>
        </motion.div>
        {/* ================2============== */}
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className=" border flex flex-col  items-center px-8 py-8 ">
          <img className="w-12" src={team1} alt="" />
          <p className="mt-6 text-[14px] font-rubik font-medium text-home-bg-black">Ahmed Ali</p>
          <p className="mt-2 text-[12px] font-rubik font-light text-team-company">
            Operations at Flipkart
          </p>
          <p className="text-center mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
            We chose these ergonomic chairs for our new corporate office, and
            they exceeded all expectations. Not only are they stylish and
            durable, but they’ve also significantly improved our employees'
            posture and energy levels.
          </p>
        </motion.div>
        {/* ================3============== */}
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className=" border flex flex-col  items-center px-8 py-8 ">
          <img className="w-12" src={team1} alt="" />
          <p className="mt-6 text-[14px] font-rubik font-medium text-home-bg-black">Ahmed Ali</p>
          <p className="mt-2 text-[12px] font-rubik font-light text-team-company">
            Operations at Flipkart
          </p>
          <p className="text-center mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
            We chose these ergonomic chairs for our new corporate office, and
            they exceeded all expectations. Not only are they stylish and
            durable, but they’ve also significantly improved our employees'
            posture and energy levels.
          </p>
        </motion.div>
        {/* ================4============== */}
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className=" border flex flex-col  items-center px-8 py-8 ">
          <img className="w-12" src={team1} alt="" />
          <p className="mt-6 text-[14px] font-rubik font-medium text-home-bg-black">Ahmed Ali</p>
          <p className="mt-2 text-[12px] font-rubik font-light text-team-company">
            Operations at Flipkart
          </p>
          <p className="text-center mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
            We chose these ergonomic chairs for our new corporate office, and
            they exceeded all expectations. Not only are they stylish and
            durable, but they’ve also significantly improved our employees'
            posture and energy levels.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
