import React, { Suspense, lazy, useState } from "react";
const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));
import arrow from "../assets/arrow down.svg";
import arrow2 from "../assets/back.svg"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import pinterest from "../assets/pinterest.png"
import twitter from "../assets/twitter.png"

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordialDatas = [
    {
      title: "How do I search for chairs in the app?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "How do I place an order?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "Is there a cash-on-delivery (COD) option?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "Can I track my order?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "What is your return policy?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "When will I receive my refund?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "How can I contact customer support?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "How long does delivery take?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
    {
      title: "Can I see customer reviews and ratings for the chairs?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto a voluptates non dolores. Reprehenderit recusandae blanditiis a cupiditate porro dolorum officia, obcaecati eveniet libero, laborum consectetur atque hic saepe.",
    },
  ];

  return (
    <Suspense>
      <Header />
      <div className="w-full px-8 h-fit">
        {accordialDatas.map((data, index) => (
          <div className="" key={index}>
            {/* <button onClick={() => toggleAccordion(index)}> */}
              <div onClick={() => toggleAccordion(index)} className="w-full flex place-items-start cursor-pointer">
                <div className="w-11/12  h-fit py-4 flex justify-start">
                  <ul className="">
                    <li className="text-body-mobile">{`${index+1}. ${" "} ${data.title}`}</li>
                  </ul>
                </div>
                <div className="w-1/12 h-full py-5 flex justify-end">
                  <img className="w-4 h-4" src={arrow} alt="" />
                </div>
              </div>
            {/* </button> */}
            <div>
              {activeIndex === index && (
                <div className="w-full">
                  <p className="font-rubik text-subtext-mobile pb-2">{data.content}</p>
                  
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full px-8 h-fit text-center mt-10">
          <p className="font-roboto font-extrabold text-h4-mobile">Subscribe to our emails</p>
          <p className="text-subtext-mobile font-roboto px-4 mt-4">Be the first to know about the new products and exclusive offers.</p>
          <div className="mt-4 relative">
            <input
            placeholder="Email"
            type="text"
            className="w-full border rounded-[20px] py-2 placeholder:text-black placeholder:text-opacity-50 placeholder:font-rubik pl-6 placeholder:text-body-mobile"
            />
            <img className="w-4 h-4 rotate-180 absolute top-3 right-4" src={arrow2} alt="" />
          </div>
      </div>
      <div className="w-full px-8 mt-8">
          <p className="font-roboto text-h4-mobile font-extrabold">Follow Us</p>
          <div className="flex mt-4 gap-2">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={pinterest} alt="" />
              <img src={twitter} alt="" />
          </div>

          <div className="mt-8">
            <p className="font-roboto font-extrabold text-h4-mobile">My Account</p>
            <ul className="font-roboto font-normal text-subtext-mobile mt-4 space-y-4">
              <li>Account</li>
              <li>order history</li>
              <li>Return Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="font-roboto font-extrabold text-h4-mobile">Our Legals</p>
            <ul className="font-roboto font-normal text-subtext-mobile mt-4 space-y-4">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Track Order</li>
              <li>Store Location</li>
            </ul>
          </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default FAQs;
