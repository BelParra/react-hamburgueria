import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setVisible, cartList }) => {

   const totalItens = cartList.reduce((total, product) =>
      total + product.quantity, 0);
   return (
      <header className={styles.flexBox}>
         <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={() => setVisible(true)}>
               <MdShoppingCart size={25} color="#BDBDBD" />
               <span>{totalItens}</span>

            </button>
         </div>
      </header>
   );
};
