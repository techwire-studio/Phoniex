import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import { AnimatePresence, motion } from "framer-motion";
import close from "../../assets/close black.svg";
import black from "../../assets/black.png";
import brown from "../../assets/brown.png";
import blue2 from "../../assets/blue.png";
import cherry_red from "../../assets/cherry_red.png";
import grey from "../../assets/grey.png";
import maroon from "../../assets/maroon.png";
import off_white from "../../assets/off_white.png";
import { useCart } from "../../context/CartContext";

const GamingProducts = () => {
  const { addToCart } = useCart();
  const [gamingProducts, setGamingProducts] = useState([]);
  const [isFilterDrop, setIsFilterDrop] = useState(false);
  const [isSortBy, setIsSortBy] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [rangeValue, setRangeValue] = useState(0);
  const minValue = 0;
  const maxValue = 30000;

  // Fetch products dynamically
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/all-products",
          {
            params: { page: 1, limit: 100 }, // Adjust limit as needed
          }
        );
        const filteredProducts = response.data.products;
        setGamingProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Sort products
  useEffect(() => {
    const sortProducts = () => {
      const sorted = [...gamingProducts];

      switch (sortOption) {
        case "Alphabetically, A-Z":
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Alphabetically, Z-A":
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "Price, low to high":
          sorted.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        case "Price, high to low":
          sorted.sort((a, b) => Number(b.price) - Number(a.price));
          break;
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

  // Handle body overflow for filter/sort dropdowns
  useEffect(() => {
    document.body.style.overflow = isSortBy ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSortBy]);

  useEffect(() => {
    document.body.style.overflow = isFilterDrop ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterDrop]);

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full px-8 lg:px-16 h-fit flex flex-col lg:flex-row pt-10 lg:pt-20">
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
            <img className="w-8 h-8" src={red} alt="Red" />
            <img className="w-8 h-8" src={gray} alt="Gray" />
            <img className="w-8 h-8" src={yellow} alt="Yellow" />
            <img className="w-8 h-8" src={green} alt="Green" />
            <img className="w-8 h-8" src={blue} alt="Blue" />
          </div>
        </div>

        <div className="w-full lg:w-4/5 h-fit">
          <div className="hidden lg:block py-0">
            <select
              id="sortBy"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-28 px-4 py-2 text-text-light-gray bg-drop-white"
            >
              <option value="">Sort By</option>
              <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
              <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
              <option value="Price, low to high">Price, low to high</option>
              <option value="Price, high to low">Price, high to low</option>
            </select>
          </div>
          {/* Mobile Filter/Sort */}
          <div className="w-full lg:hidden h-fit flex justify-center items-center gap-4">
            <div className="w-3/4 h-full flex gap-2">
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
                        <p className="text-h2-mobile">Filters</p>
                        <img
                          onClick={() => setIsFilterDrop(false)}
                          className="w-6 cursor-pointer"
                          src={close}
                          alt="Close"
                        />
                      </div>
                      <div className="mt-4 cursor-pointer">
                        <p className="text-h4-mobile">Colors</p>
                        <div className="mt-4 space-y-4">
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="Black" />
                            <p className="font-rubik text-body-mobile">Black(12)</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={brown} alt="Brown" />
                            <p className="font-rubik text-body-mobile">Brown(2)</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={blue2} alt="Blue" />
                            <p className="font-rubik text-body-mobile">Blue(12)</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={cherry_red} alt="Cherry Red" />
                            <p className="font-rubik text-body-mobile">Cherry Red(24)</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={grey} alt="Grey" />
                            <p className="font-rubik text-body-mobile">Grey(12)</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={maroon} alt="Maroon" />
                            <p className="font-rubik text-body-mobile">Maroon(12)</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={off_white} alt="Off White" />
                            <p className="font-rubik text-body-mobile">Off White(12)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsFilterDrop(true)}
                className="border-2 border-black flex gap-2 items-center px-2 py-1"
              >
                <p className="text-subtext-mobile">Filter</p>
                <img className="w-3 h-3" src={drop} alt="Dropdown" />
              </button>
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
                        <p className="text-h2-mobile font-rubik">Sort By</p>
                        <img
                          onClick={() => setIsSortBy(false)}
                          className="w-6 cursor-pointer"
                          src={close}
                          alt="Close"
                        />
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
                onClick={() => setIsSortBy(true)}
                className="border-2 border-black flex gap-2 items-center px-2 py-1"
              >
                <p className="text-subtext-mobile">Sort By</p>
                <img className="w-3 h-3" src={drop} alt="Dropdown" />
              </button>
            </div>
            <div className="w-2/4 flex justify-center items-center h-full">
              <p className="font-rubik text-body-mobile text-black text-opacity-50">
                {gamingProducts.length} Products
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
                    <img
                      src={product.imageUrls?.[0] || "https://via.placeholder.com/150"}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <div className="flex m-auto flex-col mx-0 lg:mx-8 text-left pr-0 mt-4 font-rubik font-medium">
                  <div>
                    <p className="text-subtext-mobile lg:text-subtext-desktop">
                      {product.title}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <img className="w-24 h-4" src={star} alt="Rating Stars" />
                    <p className="font-rubik text-[10px] mt-1 text-arrivals-rating font-light">
                      2000
                    </p>
                  </div>
                  <div className="mt-4 font-rubik">
                    <p className="space-x-2 font-rubik">
                      <span className="text-[10px] line-through text-sub-text-best">
                        ₹{new Intl.NumberFormat("en-IN").format(Number(product.price) + 500)}.00
                      </span>
                      <span className="text-black text-body-mobile lg:text-body-desktop">
                        ₹{new Intl.NumberFormat("en-IN").format(Number(product.price))}.00
                      </span>
                    </p>
                  </div>
                </div>
                <div className="font-rubik text-subtext-mobile lg:text-subtext-desktop flex border border-home-bg-black w-fit m-auto px-4 lg:px-8 py-2 lg:py-4 mt-4 text-home-bg-black font-medium">
                  <button
                    onClick={() => {
                      addToCart(product);
                      alert(`${product.title} has been added to the cart!`);
                    }}
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

export default GamingProducts;