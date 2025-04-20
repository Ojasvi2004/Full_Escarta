import { createContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const Shopcontext = createContext();
export const backendAPI = import.meta.env.VITE_BACKEND_API;

const ShopcontextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const [search, setsearch] = useState('');
  const [showsearch, setshowsearch] = useState(false);
  const [cartitems, setcartitems] = useState({});
  const [TotalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);

  const [place_Total, setplace_Total] = useState();
  const [token, settoken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  );
  const [Total, setTotal] = useState(0);
  const [cartData, setcartData] = useState([]);

  const getProductData = async (params) => {
    try {
      const response = await axios.get(backendAPI + '/api/product/list');

      if (response.data.success) {
        setproducts(response.data.allProduct);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductData();
    getUserCart(token);
  }, []);

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Please select a size');
      return;
    }

    let cartData = structuredClone(cartitems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size]++;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setcartitems(cartData);

    if (token) {
      try {
        const response = await axios.post(
          backendAPI + '/api/cart/add',
          { itemId, size },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendAPI + '/api/cart/get',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
       
        setcartitems(response.data.cartData);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const UpdateQuantity = async (item_id, size, quantity) => {
    const temp = structuredClone(cartitems);
    temp[item_id][size] = quantity;
    setcartitems(temp);


    if (token) {
      try {
        const response = await axios.post(
          backendAPI + '/api/cart/update',
          { item_id, size, quantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let cartcount = 0;

    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        try {
          if (cartitems[items][item] > 0) {
            cartcount += cartitems[items][item];
          }
        } catch (error) { }
      }
    }
    setTotalItems(cartcount);
  };

  useEffect(() => {
 
    getCartCount();
  }, [cartitems]);

  const DeleteFromCart = async (item_id, size, quantity) => {
    let cartData = structuredClone(cartitems);

    if (cartData[item_id] && cartData[item_id][size]) {
      delete cartData[item_id][size];
    }
    if (Object.keys(cartData[item_id]).length === 0) {
      delete cartData[item_id];
    }
    setcartitems(cartData);

    
    if (token) {
      try {
        const response = await axios.post(
          backendAPI + '/api/cart/delete',
          {itemId:item_id, size },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    navigate,
    Total,
    setTotal,
    cartData,
    setcartData,
    cartitems,
    addToCart,
    setcartitems,
    getCartCount,
    TotalItems,
    DeleteFromCart,
    UpdateQuantity,
    backendAPI,
    token,
    settoken,
  };

  return <Shopcontext.Provider value={value}>{children}</Shopcontext.Provider>;
};
export { ShopcontextProvider };

export default ShopcontextProvider;
