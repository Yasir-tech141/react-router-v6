import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'

export default function Products() {
  const [products] = useContext(DataContext)
  console.log(products)
    return (
        <div className="products">
          {
            products.map(products =>(
                      <div className="card" key={products.id}>
                    <Link to={`/products/${products.id}`}>
                      <img src={products.images[0]} alt="" />
                      </Link>
                      <div className="box">
                        <h3 title={products.title}>
                          <Link to={`/products/${products.id}`}>{products.title}</Link>
                        </h3>
                        <p>{products.description}</p>
                        <h4>${products.price}</h4>
                        <button>Add to Cart</button>
                      </div>
                  </div>
               
            ))
          }
     </div>
    )
}
