import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ productList, addToCart }) => {
   return (
      <div className={styles.container}>
         <ul className={styles.flexList}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
         </ul>
      </div>
   );
};

