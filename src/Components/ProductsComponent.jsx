import React from 'react'
import '../Styles/ProductsComponent.css'

import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Features/CartSlice';

const ProductsComponent = ({ id, seller, img, title, ogPrice, discountedPrice, filterVisibility, buttonName }) => {

    const dispatch = useDispatch();

    const handleCart = () => {
        const product = { id, seller, img, title, ogPrice, discountedPrice };
        console.log('product', product);
        dispatch(buttonName === 'Remove From' ? removeFromCart(product) : addToCart(product))
    }
    return (
        <div className={!filterVisibility ? 'product shrink' : 'product'}>

            <div className="productImg">
                <img src={img} alt={title} />
            </div>

            <div className="productBoody flex">
                <div className="productDetails">
                    <img src={seller} alt="seller logo" />
                    <h3>{title}</h3>
                    <h5>{`Original Price $${ogPrice}`}</h5>
                    <h4>${discountedPrice}</h4>
                </div>

                <div className="productControl flex">
                    <button type="button">View</button>
                    <button type="button" onClick={handleCart}>{`${buttonName} Cart`}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsComponent
