import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Bulk from "../../components/Bulk";
import Footer from "../../components/Footer";
import star from "../../assets/start.png";
import drop from "../../assets/dropdown.svg";

import red from "../../assets/red.png";
import gray from "../../assets/gray.png";
import yellow from "../../assets/yellow.png";
import blue from "../../assets/blue.png";
import green from "../../assets/green.png";
import Header from "../../common/Header";

import products from "../../products";
import { AnimatePresence, motion } from "framer-motion";
import close from "../../assets/close black.svg";
import black from "../../assets/black.png";
import brown from "../../assets/brown.png"
import blue2 from "../../assets/blue.png"
import cherry_red from "../../assets/cherry_red.png"
import grey from "../../assets/grey.png"
import maroon from "../../assets/maroon.png"
import off_white from "../../assets/off_white.png"
import { useCart } from "../../context/CartContext";

const GamingProducts = () => {


  const {addToCart} = useCart()

  const [gamingProducts, setGamingProducts] = useState([]);
  const [isFilterDrop, setIsFilterDrop] = useState(false);
  const [isSortBy, setIsSortBy] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const [rangeValue, setRangeValue] = useState(0);
  const minValue = 0;
  const maxValue = 30000;

 

  // First useEffect - only run once to filter gaming products
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === "gaming"
    );
    setGamingProducts(filteredProducts);
  }, []);

  useEffect(() => {
    const sortProducts = () => {
      const sorted = [...gamingProducts];

      switch (sortOption) {
        case "Alphabetically, A-Z":
          sorted.sort((a, b) => a.description.localeCompare(b.description));
          break;

        case "Alphabetically, Z-A":
          sorted.sort((a, b) => b.description.localeCompare(a.description));
          break;

        case "Price, low to high":
          sorted.sort(
            (a, b) =>
              Number(a.actualPrice.replace(/,/g, "")) -
              Number(b.actualPrice.replace(/,/g, ""))
          );
          break;

        case "Price, high to low":
          sorted.sort(
            (a, b) =>
              Number(b.actualPrice.replace(/,/g, "")) -
              Number(a.actualPrice.replace(/,/g, ""))
          );
          break;

        // If it's "Best Seller", "Features", or date options,
        // we'll need additional data fields to implement these
        default:
          return sorted;
      }
      return sorted;
    };

    if (gamingProducts.length > 0) {
      const sortedProducts = sortProducts();
      setGamingProducts(sortedProducts);
    }
  }, [sortOption, gamingProducts.length]);

  useEffect(() => {
    if (isSortBy) {
      // Prevent scrolling on the body when cart is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when cart is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSortBy]);

  useEffect(() => {
    if (isFilterDrop) {
      // Prevent scrolling on the body when cart is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when cart is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterDrop]);

  // const handleAddToCart = (product) => {
  //   addToCart(product);
  //   alert(`${product.description} has been added to the cart!`);
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
              {/* Filter By */}
              <AnimatePresence>
                {isFilterDrop && (
                  <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-10 bg-black bg-opacity-50"
                  >
                    <div className="w-full h-fit py-10 bg-white px-8">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-h2-mobile">Filters</p>
                        </div>
                        <div>
                          <img
                            onClick={() => setIsFilterDrop(false)}
                            className="w-6 cursor-pointer"
                            src={close}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-4 cursor-pointer">
                        <p className="text-h4-mobile">Colors</p>
                        <div className="mt-4 space-y-4">
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Black(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={brown} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Brown(2)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={blue2} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Blue(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={cherry_red} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Cherry Red(24)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={grey} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Grey(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={maroon} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Maroon(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={off_white} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Off White(12)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsFilterDrop(true);
                }}
                className="border-2 border-black flex gap-2 items-center px-2 py-1"
              >
                <p className="text-subtext-mobile">Filter</p>
                <img className="w-3 h-3" src={drop} alt="" />
              </button>
              {/* Sort By */}
              <AnimatePresence>
                {isSortBy && (
                  <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-10 bg-black bg-opacity-50"
                  >
                    <div className="w-full h-fit py-10 bg-white px-8">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-h2-mobile font-rubik">Sort By</p>
                        </div>
                        <div>
                          <img
                            onClick={() => setIsSortBy(false)}
                            className="w-6 cursor-pointer"
                            src={close}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-8 ml-2">
                        <ul className="font-roboto text-body-mobile space-y-4 cursor-pointer">
                          {[
                            "Best Seller",
                            "Features",
                            "Alphabetically, A-Z",
                            "Alphabetically, Z-A",
                            "Price, low to high",
                            "Price, high to low",
                            "Date, old to new",
                            "Date, new to old",
                          ].map((option, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSortOption(option);
                                setIsSortBy(false);
                              }}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsSortBy(true);
                }}
                className="border-2 border-black flex gap-2 items-center px-2 py-1"
              >
                <p className="text-subtext-mobile">Sort By</p>
                <img className="w-3 h-3" src={drop} alt="" />
              </button>
            </div>
            <div className="w-2/4 flex justify-center items-center  h-full">
              <p className="font-rubik text-body-mobile text-black text-opacity-50">
                1131 Products
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            {gamingProducts.map((product) => (
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
                  // onClick={() => handleAddToCart(product)}
                  >ADD TO CART</button>
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

export default GamingProducts;
