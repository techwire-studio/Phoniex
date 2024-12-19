import award from "../assets/award.png";
import certificate1 from "../assets/certificate1.png"
import certificate2 from "../assets/certificate2.png"
import certificate3 from "../assets/certificate3.png"
import certificate4 from "../assets/certificate4.png"
import certificate5 from "../assets/certificate5.png"

import {motion} from "framer-motion"

const Awards = () => {
  return (
    <motion.div className="w-full mt-20 px-16 flex flex-col items-center">
      <motion.div
      initial={{opacity:0, }}
      whileInView={{opacity:1,}}
      transition={{duration:1}}
      viewport={{once:true, }} 
      >
        <img className="w-[300px]" src={award} alt="" />
      </motion.div>

      <motion.div
      initial={{opacity:0, }}
      whileInView={{opacity:1,}}
      transition={{duration:1}}
      viewport={{once:true, }} 
      className="font-rubik text-[14px] text-center px-28 mt-8 font-regular text-awards-text">
        <p>
          Our commitment to excellence is reflected in the numerous accolades
          and certifications we’ve achieved. Proudly certified with ISO
          standards,{" "}
        </p> <br />
        <p className="font-rubik ">
          we ensure the highest levels of quality, safety, and environmental
          responsibility in our products. Recognized for innovation and
          ergonomic design, our office chairs have set industry benchmarks,
          making us a trusted choice for businesses nationwide.
        </p> <br />
        <p>
          Our certifications validate our dedication to delivering only the
          best, while our awards highlight the impact we’ve made in redefining
          workplace comfort. From sustainable practices to cutting-edge designs,
          every recognition inspires us to keep raising the bar. Choose us for
          unmatched quality backed by trust and industry acclaim.
        </p>
      </motion.div>
      <motion.div
      initial={{opacity:0, }}
      whileInView={{opacity:1,}}
      transition={{duration:1}}
      viewport={{once:true, }} 
      className="mt-8 flex gap-10">
            <img className="w-24" src={certificate1} alt="" />
            <img className="w-24" src={certificate2} alt="" />
            <img className="w-24" src={certificate3} alt="" />
            <img className="w-24" src={certificate4} alt="" />
            <img className="w-24" src={certificate5} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Awards;
