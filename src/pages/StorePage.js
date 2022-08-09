import { useState, useEffect } from "react"
import { useGlobalContext } from "../store/context"
import axios from "axios"

// Link to the APi,
const url = "https://fakestoreapi.com/products"
const StorePage = () => {
  const { addItem } = useGlobalContext()

  const [data, setData] = useState()
  const [apiError, setApiError] = useState(false)
  // State change will trigger rerender

  const getData = async () => {
    await axios
      .get(url)
      .then((response) => {
        // adding the amount = 1 to each product, will use this to increase and decrease in quantity in shopping cart
        setData(
          response.data.map((product) => {
            return { ...product, amount: 1 }
          })
        )
        console.log(data)
      })
      .catch(() => {
        setApiError(true)
      })
  }

  // Triggers on pageLoad
  useEffect(() => {
    getData()
  }, [])

  if (data) {
    return (
      <div className="PageContainer">
        <h2 className="pageTitle">Store</h2>
        <div className="products">
          {data.map((product) => {
            const { id, title, image, description, price, rating } = product
            return (
              <div key={id} className="card">
                <img src={image} alt={title} />
                <h3>
                  {title.length > 26 ? title.substring(0, 26) + "..." : title}
                </h3>
                <p>{description.substring(0, 132)}...</p>
                <p>
                  {rating.rate} ({rating.count})
                </p>
                <button
                  onClick={() => {
                    // Adds object to cart and updates sum
                    addItem(product)
                  }}
                >
                  {price} Credits
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  } else if (apiError) {
    return <div>API ERROR</div>
  } else {
    return <div>LOADING...</div>
  }
}

export default StorePage
