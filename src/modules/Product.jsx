export const Product = ({ title, image, price }) => {
  return (
    <li className="products__item">
      <article className="product products-product">
        <img className="product__image" src={image} alt={title} />
        <div className="product__content">
          <h3 className="product__title">{title}</h3>
          <div className="product__price">{price} ₽</div>
        </div>
      </article>
    </li>
  )
}