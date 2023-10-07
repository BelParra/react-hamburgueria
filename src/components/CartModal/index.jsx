import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";
import "../../styles/index.scss";


export const CartModal = ({ setVisible, cartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modal} role="dialog">
         <div className={styles.modalContent}>
            <div className={styles.headerCart}>
               <h2 className="Heading3">Carrinho de compras</h2>
               <button onClick={() => setVisible(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} />
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
