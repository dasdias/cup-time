import { products } from "../products"
import { CartItem } from "./CartItem"

export const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__container">
          <div className="cart__content">
            <h2 className="cart__title">Корзина (6)</h2>
            <ul className="cart__list">
              {products.map((item) => {
                return (
                  <CartItem key={item.id} {...item} />
                )
              })}
            </ul>
            {/* Order */}
          </div>
          <div className="cart__result-wrap">
            <div className="cart__result">
              <div className="cart__total">Итого: <br /> <span className="cart__price">2200 ₽</span></div>
              <button form="cartForm" className="cart__btn" type="submit">Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}