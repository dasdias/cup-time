export const CartItem = ({ title, image, price }) => {
  return (
    <li className="cart__list-item">
      <article className="product cart-product">
        <img className="product__image" src={image} alt={title} />
        <div className="product__content">
          <h3 className="product__title">{title}</h3>
          <div className="cart-product__count">
            <button className="cart-product__minus"></button>
            <input className="cart-product__num" type="number" name="count" />
            <button className="cart-product__pluse"></button>
          </div>
          <div className="product__price">{price}&nbsp;₽</div>
        </div>
      </article>
    </li>
  )
}