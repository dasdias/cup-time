import { Product } from "./Product"
const products = [
  {
    id: 1,
    title: "Кокосовая матча",
    image: "image/photo-2.jpg",
    price: 390,
  },
  {
    id: 2,
    title: "Зеленый индонезийский чай",
    image: "image/photo-3.jpg",
    price: 340,
  },
  {
    id: 3,
    title: "Черный чай из Эфиопии",
    image: "image/photo-4.jpg",
    price: 390,
  },
  {
    id: 4,
    title: "Черный чай из Калифорнии",
    image: "image/photo-5.jpg",
    price: 400,
  },
  {
    id: 5,
    title: "Органическая веганская матча",
    image: "image/photo-6.jpg",
    price: 400,
  },
  {
    id: 6,
    title: "Чай черный Лакандона",
    image: "image/photo-7.jpg",
    price: 390,
  },
]

export const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>

        <ul className="products__list">
          {products.map(item => (<Product key={item.id} {...item} />))}

        </ul>
      </div>
    </section>
  )
}