import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  LogOut,
  ShoppingCart,
  ChevronDown,
  Package,
  MapPin,
  CreditCard,
  FileText,
  Settings
} from "lucide-react";
import axios from "axios";
import { API_URL } from "../common/constant";
import Header from "../common/Header";
import AuthContext from "../context/AuthContext";

// Reusable label/value row
const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col mb-4">
    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
      <Icon size={16} className="mr-2 text-gray-500" />
      {label}
    </label>

    <div className="px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-700">
      {value || "-"}
    </div>
  </div>
);

export default function ProfilePage() {
  const { verifyAuth, logout, email, name, phone, isLogin, clientId } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");

  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await verifyAuth();
      } catch {
        setError("Failed to verify authentication. Please log in again.");
      }
    };

    if (!isLogin) {
      checkAuth();
    }
  }, [verifyAuth, isLogin]);

  // Fetch orders (same as first code)
  useEffect(() => {
    const fetchOrders = async () => {
      if (!clientId) return;
      try {
        const response = await axios.get(`${API_URL}/orders`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        });
        setOrders(response.data);
      } catch (error) {
        setError("Could not fetch order history.");
        console.error(error);
      }
    };
    fetchOrders();
  }, [clientId]);

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrderId((prevId) => (prevId === orderId ? null : orderId));
  };

  const formatAddress = (address) => {
    if (!address || typeof address !== "object") return "Not Provided";

    const parts = [address.address, address.city, address.state];

    return parts.filter((part) => part).join(", ");
  };

  if (!isLogin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Not Authenticated</h2>
            <p className="text-gray-600 mb-6">Please log in to view your profile.</p>
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-blue-700 hover:bg-black text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="bg-gray-50 pt-10 px-2 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md border-r p-5 h-screen">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full mr-3">
              <User size={24} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">{name}</h2>
              <p className="text-xs text-gray-500">{email}</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                activeTab === "profile"
                  ? "bg-blue-50 text-blue-700 border-r-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Settings size={16} className="mr-2" />
              Profile Settings
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                activeTab === "orders"
                  ? "bg-blue-50 text-blue-700 border-r-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ShoppingCart size={16} className="mr-2" />
              Order History
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-10 mt-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {activeTab === "profile" ? "Profile Settings" : "Order History"}
          </h1>

          {/* PROFILE TAB */}
          {activeTab === "profile" ? (
            <div className="bg-white shadow-lg border rounded-lg p-6">
              <InfoRow icon={User} label="Full Name" value={name} />
              <InfoRow icon={Mail} label="Email" value={email} />
              <InfoRow icon={Phone} label="Phone Number" value={phone} />

              <button
                onClick={logout}
                className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md flex items-center justify-center gap-2"
              >
                <LogOut size={16} />
                Log Out
              </button>
            </div>
          ) : (
            /* ORDERS TAB */
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-600">View and track all your orders</p>
              </div>

              <div className="divide-y divide-gray-200">
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <div key={order.id || order.orderId} className="p-6">
                      {/* Header */}
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleOrderExpansion(order.id || order.orderId)}
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Order #{order.orderId}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Placed on{" "}
                            {new Date(order.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </p>
                        </div>

                        <div className="flex items-center">
                          <div className="text-right mr-4">
                            <p className="text-base font-bold text-gray-800">
                              ₹{Number(order.totalAmount).toFixed(2)}
                            </p>

                            <span
                              className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Shipped"
                                    ? "bg-blue-100 text-blue-800"
                                    : order.status === "Cancelled"
                                      ? "bg-red-100 text-red-800"
                                      : order.status === "Confirmed"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>

                          <ChevronDown
                            size={20}
                            className={`text-gray-500 transition-transform duration-300 ${
                              expandedOrderId === (order.id || order.orderId) ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* EXPANDED CONTENT */}
                      {expandedOrderId === order.id && (
                        <div className="mt-6 pt-4 border-t border-gray-200 animate-fade-in">
                          <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                            <Package size={16} className="mr-2 text-gray-500" />
                            Products
                          </h4>

                          <div className="space-y-3 mb-6 pl-6">
                            {order.products.map((product, i) => (
                              <div key={i} className="flex justify-between text-sm">
                                <div>
                                  <p className="font-medium text-gray-700">
                                    {product.title} ({product.variantSize})
                                  </p>
                                  <p className="text-xs text-gray-500">ID: {product.id}</p>
                                </div>

                                <p className="text-gray-600">Qty: {product.quantity}</p>
                              </div>
                            ))}
                          </div>

                          {/* Additional Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                            <div>
                              <h5 className="font-semibold text-gray-700 mb-1 flex items-center">
                                <MapPin size={14} className="mr-2 text-gray-500" />
                                Shipping Address
                              </h5>
                              <p className="text-gray-600 pl-6">
                                {formatAddress(order.shippingAddress)}
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-gray-700 mb-1 flex items-center">
                                <CreditCard size={14} className="mr-2 text-gray-500" />
                                Payment Status
                              </h5>
                              <p className="text-gray-600 pl-6">{order.paymentStatus}</p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-gray-700 mb-1 flex items-center">
                                <FileText size={14} className="mr-2 text-gray-500" />
                                Tracking ID
                              </h5>
                              <p className="text-gray-600 pl-6">
                                {order.trackingId || "Not available yet"}
                              </p>
                            </div>

                            <div className="md:col-span-2">
                              <h5 className="font-semibold text-gray-700 mb-1 flex items-center">
                                <FileText size={14} className="mr-2 text-gray-500" />
                                Invoice Number
                              </h5>
                              <p className="text-gray-600 pl-6">
                                {order.invoiceNumber || "Not available yet"}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center p-8">
                    <ShoppingCart size={40} className="mx-auto text-gray-300 mb-4" />
                    <h4 className="text-lg font-medium text-gray-800">No Orders Yet</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      When you place an order, it will appear here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
