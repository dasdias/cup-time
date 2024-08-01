export const Order = () => {
  return (
    <div className="order">
      <div className="container order__container">
        <form className="form" method="POST" action="#" id="cartForm">
          <div className="form__tite">Доставка</div>
          <div className="form__group-input">
            <input className="form__tel" type="text" name="name" placeholder="Имя" />
            <input className="form__phone" type="tel" name="phone" placeholder="Телефон" />
            <input className="form__addr" type="text" name="Address" placeholder="Адрес" />
          </div>
          <div className="form__payment-title">Оплата:</div>
          <div className="form__group-radio">
            <label className="form__radio-label" htmlFor="cart-payment">
              <input className="form__payment" type="radio" name="payment" id="cart-payment" value="card" defaultChecked />
              <span></span>
              Картой
            </label>
            <label className="form__radio-label" htmlFor="cart-cash">
              <input className="form__cash" type="radio" name="payment" id="cart-cash" value="cash" />
              <span></span>
              Наличные
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}