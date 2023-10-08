import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setVisible, cartList, setValue }) => {
   const [localValue, setLocalValue] = useState("");

   const handleInputChange = (e) => {
      setLocalValue(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setValue(localValue);
   };

   const totalItens = cartList.reduce((total, product) =>
      total + product.quantity, 0);
   return (
      <header className={styles.flexBox}>
         <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  value={localValue}
                  onChange={handleInputChange}
               />
               <button type="submit">
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
         <div>
            <button onClick={() => setVisible(true)}>
               <MdShoppingCart size={21} />
               <span>{totalItens}</span>

            </button>
         </div>
      </header>
   );
};
