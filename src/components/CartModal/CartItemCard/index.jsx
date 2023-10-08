import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <li>
         <div className={styles.itemFlex}>
            <div className={styles.imgContent}>
               <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.infoContainer}>
               <h3 className="Heading3">{product.name}</h3>
               <span className="Price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button aria-label="delete" title="Remover item" onClick={() => removeFromCart(product)}>
               <MdDelete size={21} />
            </button>
         </div>
      </li>
   );
};

