import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";
import "../../styles/index.scss";
import { useEffect } from "react";

export const CartModal = ({ setVisible, cartList, removeFromCart }) => {
   const total = cartList ? cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0) : 0;

   const handleClickOutside = (event) => {
      if (event.currentTarget === event.target) {
         setVisible(false);
      }
   };

   const handleEscape = (event) => {
      if (event.key === 'Escape') {
         setVisible(false);
      }
   };

   useEffect(() => {
      window.addEventListener('keydown', handleEscape);
      return () => {
         window.removeEventListener('keydown', handleEscape);
      };
   }, []);

   return (
      <div className={styles.modal} role="dialog" onClick={handleClickOutside} onKeyDown={handleEscape} tabIndex="-1">
         <div className={styles.modalContent}>
            <div className={styles.headerCart}>
               <h2 className="Heading3">Carrinho de compras</h2>
               <button onClick={() => setVisible(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.itemContainer}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.key} product={product} removeFromCart={removeFromCart} />
                  ))}
               </ul>
            </div>
            <div className={styles.footerContent}>
               <div className={styles.priceContent}>
                  <span className="Headline">Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <div className={styles.removeButton}>
                  <button className="Headline">Remover todos</button>
               </div>
            </div>
         </div>
      </div>
   );
};
