import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { BurguerApi } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   
   // useEffect montagem - carrega os produtos da API e joga em productList

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

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)


   
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
