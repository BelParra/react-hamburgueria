import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setVisible }) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.flexBox}>
         <div>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
         <div>
            <button onClick={() => setVisible(true)}>
               <MdShoppingCart size={21} />
               <span>0</span>
            </button>
         </div>
      </header>
   );
};
