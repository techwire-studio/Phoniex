import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Bulk from "../../components/Bulk";
import Footer from "../../components/Footer";
import star from "../../assets/start.png";
import drop from "../../assets/drop.png";
// import { getCategories } from "../../services/categoryService";
// import { getProducts } from "../../services/productService";
import red from "../../assets/red.png";
import gray from "../../assets/gray.png";
import yellow from "../../assets/yellow.png";
import blue from "../../assets/blue.png";
import green from "../../assets/green.png";
import Header from "../../common/Header";

import products from "../../products";
import { motion } from "framer-motion";

const BossProducts = () => {
  // const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [gamingCategory, setGamingCategory] = useState(null);
  // const [filteredProducts, setFilteredProducts] = useState([]);
 
  const [bossProducts, setBossProducts] = useState([]);
  const [isFilterDrop, setIsFilterDrop] = useState(false);

  const [rangeValue, setRangeValue] = useState(0);
  const minValue = 0;
  const maxValue = 30000;

  useEffect(() => {
    // Filter products by category "gaming"
    const filteredProducts = products.filter(
      (product) => product.category === "boss"
    );
    setBossProducts(filteredProducts);
  }, []);

  // const [sortOption, setSortOption] = useState("default");

  // const handleSortChange = (event) => {
  //   const selectedOption = event.target.value;
  //   setSortOption(selectedOption);

  //   let sortedProducts = [...filteredProducts];
  //   switch (selectedOption) {
  //     case "priceLowToHigh":
  //       sortedProducts.sort((a, b) => a.price - b.price);
  //       break;
  //     case "priceHighToLow":
  //       sortedProducts.sort((a, b) => b.price - a.price);
  //       break;
  //     case "ratingHighToLow":
  //       sortedProducts.sort((a, b) => b.rating - a.rating);
  //       break;
  //     case "ratingLowToHigh":
  //       sortedProducts.sort((a, b) => a.rating - b.rating);
  //       break;
  //     case "newestFirst":
  //       sortedProducts.sort(
  //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //       );
  //       break;
  //     default:
  //       break;
  //   }
  //   setFilteredProducts(sortedProducts);
  // };

  // useEffect(() => {
  //   const fetchProductsAndCategories = async () => {
  //     try {
  //       const fetchedCategories = await getCategories();
  //       const fetchedProducts = await getProducts();
  //       setCategories(fetchedCategories);
  //       setProducts(fetchedProducts);

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchProductsAndCategories();
  // }, []);

  // useEffect(() => {
  //   if (categories.length > 0 && products.length > 0) {
  //     const gamingCategory = categories.find(
  //       (category) => category.name.toLowerCase() === "gaming"
  //     );
  //     setGamingCategory(gamingCategory);

  //     if (gamingCategory) {
  //       const filtered = products.filter(
  //         (product) => product.categoryId === gamingCategory.id
  //       );
  //       setFilteredProducts(filtered);
  //       console.log(filteredProducts)
  //       console.log(filteredProducts.images)
  //     }
  //   }
  // }, [categories, products]);



  return (
    <div className="w-full h-screen">
      <Header />
      <div className=" w-full px-8 lg:px-16 h-fit flex flex-col lg:flex-row pt-10 lg:pt-20">
        <div className="hidden lg:block w-full lg:w-1/5 h-fit">
          <h1 className="font-rubik text-home-bg-black">
            Collections /{" "}
            <span className="text-text-light-gray">Gaming Chairs</span>
          </h1>
          <h1 className="mt-8 text-home-bg-black font-rubik text-[24px]">
            Filter by Price
          </h1>
          <input
            className="mt-4"
            type="range"
            min={minValue}
            max={maxValue}
            step="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
          />
          <p className="mt-2 text-text-light-gray font-rubik">
            Price: {minValue.toLocaleString()} - {rangeValue.toLocaleString()}
          </p>
          <p className="mt-4 font-rubik text-[24px]">Color</p>
          <div className="flex gap-2 mt-4">
            <img className="w-8 h-8" src={red} alt="" />
            <img className="w-8 h-8" src={gray} alt="" />
            <img className="w-8 h-8" src={yellow} alt="" />
            <img className="w-8 h-8" src={green} alt="" />
            <img className="w-8 h-8" src={blue} alt="" />
          </div>
        </div>

        <div className="w-full lg:w-4/5 h-fit">
          <div className="hidden lg:block py-0">
            <select
              id="sortBy"
              // value={sortOption}
              // onChange={handleSortChange}
              className="w-28 px-4 py-2 text-text-light-gray bg-drop-white"
            >
              <option value="default">Sort By</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
              <option value="ratingLowToHigh">Rating: Low to High</option>
              <option value="newestFirst">Newest First</option>
            </select>
          </div>
          {/* For Mobile */}
          <div className="w-full lg:hidden h-fit flex  justify-center items-center gap-4">
            <div className="w-3/4 h-full flex gap-2">
              
              <button
               
                className="border-2 border-black flex gap-2 items-center px-4 py-1"
              >
                <p className="text-subtext-mobile">Filter</p>
                <img className="w-2 h-2" src={drop} alt="" />
              </button>

              <button className="border-2 border-black flex gap-2 items-center px-4 py-1">
                <p className="text-subtext-mobile">Sort By</p>
                <img className="w-2 h-2" src={drop} alt="" />
              </button>
            </div>
            <div className="w-2/4 flex justify-center items-center  h-full">
              <p className="font-rubik text-body-mobile text-black text-opacity-50">
                1131 Products
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            {bossProducts.map((product) => (
              <div
                key={product.id}
                className="w-full py-4 flex flex-col justify-between h-full"
              >
                <div>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image1} alt="Product Image" />
                  </Link>
                </div>
                <div className="flex m-auto flex-col mx-0 lg:mx-8 text-left pr-0 mt-4 font-rubik font-medium">
                  <div>
                    <p className="text-subtext-mobile lg:text-subtext-desktop">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <img className="w-24 h-4" src={star} alt="Rating Stars" />
                    <p className="font-rubik text-[10px] mt-1 text-arrivals-rating font-light">
                      2000
                    </p>
                  </div>
                  <div className="mt-4 font-rubik">
                    <p className=" space-x-2 font-rubik">
                      <span className="text-[10px] line-through text-sub-text-best">
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          Number(product.price.replace(/,/g, ""))
                        )}
                        .00
                      </span>
                      <span className="text-black text-body-mobile lg:text-body-desktop">
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          Number(product.actualPrice.replace(/,/g, ""))
                        )}
                        .00
                      </span>
                    </p>
                  </div>
                </div>
                <div className="font-rubik text-subtext-mobile lg:text-subtext-desktop flex border border-home-bg-black w-fit m-auto px-4 lg:px-8 py-2 lg:py-4 mt-4 text-home-bg-black font-medium">
                  <button
                   
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Suspense>
        <Bulk />
        <Footer />
      </Suspense>
    </div>
  );
};

export default BossProducts;
