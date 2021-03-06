import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './sections/CheckBox';
import RadioBox from './sections/RadioBox';
import { brand, price } from './sections/Datas';
import SearchFeature from './sections/SearchFeature';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(9)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        brand: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)
        searchProduct(variables)//new

    }, [])

    const getProducts = (variables) => {
        Axios.get('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products]) //..Product means load previous data after clikc on load more
                        
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const searchProduct = (variables) => {//new
        Axios.post('/api/product/searchProduct', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products]) //..Product means load previous data after clikc on load more
                        
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true

        }
        searchProduct(variables)
        setSkip(skip)
    }


    const renderCards = Products.map((product, index) => {

        return <Col lg={80} md={8} xs={24}>
           <Link to={`/product/${product._id}`}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
                style={{ backgroundColor: '#e6f7ff' }}
            >
                
                <Meta
                
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
            </Link>
          
        </Col>
    })


    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        searchProduct(variables)
        setSkip(0)

    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        searchProduct(variables)
    }


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Happy Shopping !  </h2>
            </div>


            {/* Filter  */}

            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    <CheckBox
                        list={brand}
                        handleFilters={filters => handleFilters(filters, "brand")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox
                        list={price}
                        handleFilters={filters => handleFilters(filters, "price")}
                    />
                </Col>
            </Row>


            {/* Search  */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>

                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>


            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }


        </div>
    )
}

export default LandingPage
