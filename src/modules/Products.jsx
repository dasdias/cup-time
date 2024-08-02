import { Product } from "./Product"
import { useProducts } from "../context/ProductContext";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const category = searchParams.get("category");

  useEffect(() => {
    setCategory(category);
  });

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>

        <ul className="products__list">
          {products.map(item => (<Product key={item.id} data={item} />))}

        </ul>
      </div>
    </section>
  )
}