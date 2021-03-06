import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon, Alert } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Brands = [
    { key: 1, value: "Samsung" },
    { key: 2, value: "Huawei" },
    { key: 3, value: "Oppo" },
    { key: 4, value: "IPhone" },
    { key: 5, value: "LG" },
    { key: 6, value: "Nokia" },
    { key: 7, value: "Abans" }
]



function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [BrandValue, setBrandValue] = useState(1)
    const [Images, setImages] = useState([])

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onBrandsSelectChange = (event) => {
        setBrandValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !BrandValue || !Images) {
            return message.error('fill all the fields first!', 1.5, onclose)
        }

        const variables = {
           // writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            brand: BrandValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    message.success("Product Successfully Uploaded", 1.5, onclose)
                    props.history.push('/')
                } else {
                    message.error("Failed to upload Product", 1.5, onclose)
                }
            })

    }
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Product</Title>
            </div>
             <Form onSubmit={onSubmit} >
                   {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />
               <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <select onChange={onBrandsSelectChange}>
                    {Brands.map(item =>(
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                <br/>
                

               <Button onClick={onSubmit} type="primary" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UploadProductPage
