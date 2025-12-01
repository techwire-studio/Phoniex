import { createContext, useState, useEffect } from "react";
import { API_URL } from "../common/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [clientId, setClientId] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [pwd, setPwd] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await verifyAuth();
      } catch (error) {
        console.error("Auth verification failed:", error);
      }
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/clients/login`,
        {
          email,
          password
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      setIsLogin(true);
      setClientId(response.data.id);
      setEmail(response.data.email);
      setName(response.data.name);
      setPhone(response.data.phone);
    } catch (e) {
      console.error("Login failed:", e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const verifyAuth = async () => {
    const response = await axios.get(`${API_URL}/clients/verify-token`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.data.isAuthenticated && response.data.client) {
      setIsLogin(response.data.isAuthenticated);
      setEmail(response.data.client.email);
      setName(response.data.client.name);
      setClientId(response.data.client.id);
      setPhone(response.data.client.phoneNumber);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${API_URL}/clients/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      setIsLogin(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setEmail(null);
      setName(null);
      setPhone(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        verifyAuth,
        logout,
        email,
        setEmail,
        name,
        phone,
        loading,
        isLogin,
        clientId,
        pwd,
        setPwd
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
