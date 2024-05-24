import { useEffect, useState } from "react";
import "./App.css";
import productService from "./services/products";
import cartsService from "./services/carts";
import { getUsers } from "./services/users";
import BasicTable from "./components/BasicTable";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const data = await cartsService.getCarts();
        setCarts(data);
      } catch (error) {
        console.error("Error fetching carts:", error);
      }
    };

    fetchCarts();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} users={users} carts={carts} />}
        />
        <Route path="/products" element={<BasicTable products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
