import { Navigate, Route, Routes } from "react-router-dom"
import { Promo } from "./Promo"
import { Cart } from "./Cart"
import { Order } from "./Order"
import { Products } from "./Products"

export const Main = () => {
  return (

    <main className="main">
      <Routes >
        <Route path="/" element={
          <Navigate to="/products?categry=tea" />
        } />
        <Route path="/products" element={
          <>
            <Promo />
            <Products />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Cart />
            <Order />
          </>
        } />
      </Routes>
    </main>
  )
}