import styles from "./styles.module.scss";
import "../../../styles/index.scss";

export const ProductCard = ({ product }) => {
    return (
        <li className={styles.flexCard}  tabIndex={0}>
            <div className={styles.headerCard}>
                <img src={product.img} alt={product.name} />
            </div>
            <div>
                <h3 className="Heading3">{product.name}</h3>
                <span className="Caption">{product.category}</span>
                <span className="Price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button className="btn-medium">Adicionar</button>
            </div>
        </li>
    );
};