import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CarouselComponent from '../Components/CarouselComponent';
import { productsData } from '../Utils/Utils';
import ProductsComponent from '../Components/ProductsComponent';
import FilterComponent from '../Components/FilterComponent';
import HeroComponent from '../Components/HeroComponent';

const ProductsPage = () => {
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sort, setSort] = useState('')
    const [filterVisibility, setFilterVisibility] = useState(false);
    const { products } = useParams();
    const category = products || 'Electronics';

    const handleSort = (e) => {
        let sortValue = e.target.value;
        console.log(e.target.value);
        setSort(sortValue)

        const sortByPrice = [...sortedProducts].sort((a, b) => {
            if (sortValue === 'Low') {
                return a.discountedPrice - b.discountedPrice;
            } else if (sortValue === 'High') {
                return b.discountedPrice - a.discountedPrice;
            }
            return 0;
        })

        setSortedProducts(sortByPrice)
    }

    const handleFilterVisibility = () => {
        setFilterVisibility(!filterVisibility)
    }

    useEffect(() => {
        const currentProducts = productsData.filter((elem) => elem.category === category);
        setSortedProducts(currentProducts)
    }, [category])

    useEffect(() => {
        const updateFilterVisibility = () => {
            console.log('Window width:', window.innerWidth);
            if (window.innerWidth <= 481) {
                console.log('Setting filter visibility to true');
                setFilterVisibility(true);
            } else {
                console.log('Setting filter visibility to false');
                setFilterVisibility(false);
            }
        };

        window.addEventListener('resize', updateFilterVisibility);
        updateFilterVisibility(); // Check initial window size

        return () => {
            window.removeEventListener('resize', updateFilterVisibility);
        };
    }, []);


    return (
        <>
            <main>

                <section className="heroSection">
                    <HeroComponent />
                </section>

                <section className='carouselSection'>
                    <CarouselComponent />
                </section>

                <section className="allFilters main">
                    <select name="sort" id="" className="sortBy" onChange={handleSort} value={sort}>
                        {
                            ['Sort', 'Low', 'High'].map((currElem, index) => {
                                return <option value={currElem} key={index}>{currElem === 'Low' ? 'Low To High' : currElem === 'High' ? 'High to Low' : 'Sort By'}</option>
                            })
                        }
                    </select>

                    <button type="button" onClick={handleFilterVisibility}>{`${filterVisibility? 'Apply': 'Remove'} Filters`}</button>
                </section>

                <section className="productsContainer flex main">

                    {
                        !filterVisibility &&
                        <div className="filterComponent">
                            <FilterComponent />
                        </div>
                    }


                    <div className="products flex">
                        {
                            sortedProducts.map((currElem, index) => {
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
                                        filterVisibility={filterVisibility}
                                        buttonName={'Add To'}
                                    />
                                );
                            })
                        }
                    </div>

                </section>

            </main>
        </>
    )
}

export default ProductsPage
