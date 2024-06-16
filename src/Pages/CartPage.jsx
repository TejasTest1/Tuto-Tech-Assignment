import React from 'react'
import { useSelector } from 'react-redux'
import ProductsComponent from '../Components/ProductsComponent';

const CartPage = () => {
    const data = useSelector(state => state.cart.data);
    console.log(data);

    return (
        <div className="products flex">
            {
                data.length > 0 ? 
                data.map((currElem, index) => {
                    const { category, seller, img, title, ogPrice, discountedPrice, id } = currElem;
                    return (
                        <ProductsComponent
                            key={index}
                            id={id}
                            category={category}
                            seller={seller}
                            img={img}
                            title={title}
                            ogPrice={ogPrice}
                            discountedPrice={discountedPrice}
                            buttonName={'Remove From'}
                        />
                    );
                }) : 
                <h2>Empty Cart</h2>
            }
        </div>
    );
}

export default CartPage;
