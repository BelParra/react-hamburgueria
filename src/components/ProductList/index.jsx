import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ productList, addToCart, searchValue }) => {
   const filteredProductList = productList.filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
   );
   return (
      <div className={styles.container}>
         <ul className={styles.flexList}>
            {filteredProductList.map((product) => (
               <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
         </ul>
      </div>
   );
};

