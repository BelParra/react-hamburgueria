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


   const addToCart = (product) => {
      const existingProduct = cartList.find(item => item.id === product.id);

      if (existingProduct) {
         existingProduct.quantity += 1;
      } else {
         product.quantity = 1;
         cartList.push(product);
      }

      setCartList([...cartList]);
      localStorage.setItem('cart', JSON.stringify(cartList));
   };

   const removeFromCart = (productToRemove) => {
      setCartList((prevCartList) => {
         const newCartList = prevCartList.map(product => {
            if (product.id === productToRemove.id) {
               return { ...product, quantity: product.quantity - 1 };
            } else {
               return product;
            }
         });

         const finalCartList = newCartList.filter(product => product.quantity > 0);
         localStorage.setItem('cart', JSON.stringify(finalCartList));
         return finalCartList;
      });
   };



   return (
      <>
         <Header setVisible={setVisible} cartList={cartList} />
         <main>
            <ProductList productList={productList} addToCart={addToCart}/>
            {isVisible ? <CartModal setCartList={setCartList} cartList={cartList} setVisible={setVisible} removeFromCart={removeFromCart} /> : null}
         </main>
      </>
   );
};
