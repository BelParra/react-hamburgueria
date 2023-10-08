import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { BurguerApi } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isVisible, setVisible] = useState(false);

   useEffect(() => {
      const getProducts = async () => {
         try {
            const response = await BurguerApi.get("/products");
            setProductList(response.data);
         } catch (error) {
            console.log("deu ruim!");
         }
      };
      getProducts();
   }, []);

   useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
         setCartList(JSON.parse(savedCart));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartList));
   }, [cartList]);

   const addToCart = (product) => {
      const productWithKey = { ...product, key: crypto.randomUUID() };
      setCartList([...cartList, productWithKey]);
   };

   const removeFromCart = (productToRemove) => {
      setCartList(cartList.filter((product) => product !== productToRemove));
   };

   return (
      <>
         <Header setVisible={setVisible} cartList={cartList} />
         <main>
            <ProductList productList={productList} addToCart={addToCart} />
            {isVisible ? <CartModal cartList={cartList} setVisible={setVisible} removeFromCart={removeFromCart} /> : null}
         </main>
      </>
   );
};
