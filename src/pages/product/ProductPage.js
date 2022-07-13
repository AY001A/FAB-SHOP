import React, { useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import Slider from '../../components/slider/Slider'
import ProductCard from '../../components/cards/product-card/ProductCard'
import ProductFormModal from '../../components/modal/ProductFormModal'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../services/slices/cartSlice'
import { useGetProductById } from '../../hook/useProducts'
import Currency from '../../components/currency/Currency'
import { mock_top_deals } from '../../api/products'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

const ProductPage = ({ product }) => {
  const { productId, title } = useParams()
  const dispatch = useDispatch()

  const { Items } = useSelector(state => state.cart)

  const { data, status, error } = useGetProductById(productId)

  const prod = data?.data

  console.log('prod', prod.ProductStore)

  const handleAddtocart = product => {
    const inCart = Items.filter(id => id.ProductId === product.Id)

    !inCart.length
      ? dispatch(
          addToCart({
            BaseAmount: Number(prod?.Price),
            ProductId: prod?.Id,
            Name: prod?.Name,
            Image: prod?.ImagesUrls[0],
            TotalAmount: Number(prod?.Price),
          })
        )
      : toast.info('product already in cart')
  }
  const [openModal, setOpenModal] = useState(false)

  if (status === 'loading')
    return (
      <div className='text-center w-100 m-5 p-4 '>
        <Spinner className='text-primary' animation='border' />
      </div>
    )

  if (status === 'success')
    return (
      <div className='product-wrapper'>
        <h2 className='product-name'>{prod?.Name}</h2>
        <div className='product-details-wrapper'>
          <div className='product-image-wrapper'>
            <img
              src={prod?.ImagesUrls[0]}
              className='product-image'
              alt={prod?.Name}
            />
          </div>

          <div className='product-info-wrapper'>
            <p className='product-description'>{prod?.Description}</p>

            <h2 className='product-price-mobile'>
              <Currency>{prod?.Price}</Currency>
            </h2>
            <p className='product-detail'>Product detail</p>
            <ul>
              <li>Color: {prod?.MetaData[0].Value}</li>
              <li>Weight: {prod?.MetaData[1].Value}kg</li>
              <li>
                {prod?.ProductStore.OutOfStock ? 'Out Of Stock' : 'Available'}{' '}
              </li>
            </ul>
          </div>

          <div className='product-button-card'>
            {prod?.Kind === 'Direct' ? (
              <div className='product-price '>
                <p>price: </p>
                <h2>
                  <Currency>{prod?.Price}</Currency>
                </h2>
              </div>
            ) : (
              <p>
                <strong>PRICE:</strong> Price will be shared as per measurement
              </p>
            )}

            {prod?.Kind === 'Direct' ? (
              <>
                <button
                  className='btn-cart btn btn-primary '
                  onClick={() => handleAddtocart(prod)}
                >
                  Add to cart
                </button>
                {/* <button className="btn btn-outline-primary">Buy now</button> */}
              </>
            ) : (
              <button
                className='btn-cart btn btn-primary '
                onClick={() => setOpenModal(true)}
              >
                Request Price
              </button>
            )}

            <ProductFormModal
              show={openModal}
              onHide={() => setOpenModal(false)}
            />
          </div>
        </div>

        {prod?.Kind === 'Direct' ? (
          <>
            <button
              className='btn-cart bm btn btn-primary '
              onClick={() => handleAddtocart(prod)}
            >
              Add to cart
            </button>
            {/* <button className="btn bm btn-outline-primary">Buy now</button> */}
          </>
        ) : (
          <button
            className='btn-cart bm btn btn-primary'
            onClick={() => setOpenModal(true)}
          >
            Place Order
          </button>
        )}

        <div className='product-featured-services'></div>

        <p className='mt-5 you-may-like'>
          <strong>You may also like</strong>
        </p>

        <Slider withButton={false}>
          {mock_top_deals.map(prod => (
            <ProductCard
              className={'m-2'}
              id={prod.Id}
              description={prod.Description}
              title={prod.Name}
              image={prod.ImagesUrls[0]}
              price={prod.Price}
              key={prod.Id}
            />
          ))}
        </Slider>
      </div>
    )
}

export default ProductPage
