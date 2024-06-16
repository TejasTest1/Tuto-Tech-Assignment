import React, { useState } from 'react'
import '../Styles/FilterComponent.css'

import { IoMdAdd } from "react-icons/io";

const FilterComponent = () => {
    const [length, setLength] = useState(0);

    return (
        <div className='filters'>
            <div className="categoryFilter">
                <div className="filterTitle flex">
                    <h3>Categories</h3>
                    <IoMdAdd />
                </div>
                <div className="categories">
                    {
                        ['Tables', 'Lamps', 'Chairs', 'Sofas'].map((currElem, index) => {
                            return <h4 key={index}>{currElem}</h4>
                        })
                    }
                </div>
            </div>

            <div className="colorPriceFilter">
                <div className="colorsFilter">
                    <div className="filterTitle flex">
                        <h3>Colors</h3>
                        <IoMdAdd />
                    </div>
                    <div className="colors flex">
                        {
                            Array.from({ length: 6 }).map((currElem, index) => {
                                return <div className="color" key={index}>{currElem}</div>
                            })
                        }
                    </div>
                </div>

                <div className="priceFilter">
                    <div className="filterTitle flex">
                        <h3>Price Range</h3>
                        <IoMdAdd />
                    </div>

                    <div className="range flex">
                        <label htmlFor="price">{`$${length}`}</label>
                        <input
                            type="range"
                            name="range"
                            id='price'
                            min={0}
                            max={6000}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent
