import { StarOutlined, PlusOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import React, { useState, useEffect} from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { ConfigConsumer } from 'antd/lib/config-provider';

const { Title } = Typography;
const { TextArea } = Input;

const Private = [
    { value: 0, label:'Private'},
    { value: 1, label:'Public'}
]

const Catogory = [
    { value: 0, label: "Film & Animation" },
    { value: 0, label: "Autos & Vehicles" },
    { value: 0, label: "Music" },
    { value: 0, label: "Pets & Animals" },
    { value: 0, label: "Sports" },
]

function UploadVideoPage() {

    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [privacy, setPrivacy] = useState(0)
    const [Categories, setCategories] = useState("Film & Animation")
    const [FilePath, setFilePath] = useState("")
    const [Duration, setDuration] = useState("")
    const [Thumbnail, setThumbnail] = useState("")


    const handleChangeTitle = ( event ) => {
        setTitle(event.currentTarget.value)
    }

    const handleChangeDecsription = (event) => {
        console.log(event.currentTarget.value)

        setDescription(event.currentTarget.value)
    }

    const handleChangeOne = (event) => {
        setPrivacy(event.currentTarget.value)
    }

    const handleChangeTwo = (event) => {
        setCategories(event.currentTarget.value)
    }

    const onSubmit = () => {
        
    }

    const onDrop = ( files ) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log(files)
        formData.append("file", files[0])

        
        axios.post('http://localhost:8080/api/video/uploadfiles', formData, config)
        .then(response=> {
            if(response.data.success){

                let variable = {
                    filePath: response.data.filePath,
                    fileName: response.data.fileName
                }
                setFilePath(response.data.filePath)

                //gerenate thumbnail with this filepath ! 
                 
                axios.post('http://localhost:8080/api/video/thumbnail', variable)
                .then(response => {
                    if(response.data.success) {
                        setDuration(response.data.fileDuration)
                        setThumbnail(response.data.thumbsFilePath)
                    } else {
                        alert('Failed to make the thumbnails');
                    }
                })


            } else {
                alert('failed to save the video in server')
            }
        })

    }

    return (
        <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2} > Upload Video</Title>
        </div>

        <Form onSubmit={onSubmit}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Dropzone 
                    onDrop={onDrop}
                    multiple={false}
                    maxSize={800000000}>
                    {({ getRootProps, getInputProps }) => (
                        <div style={{ width: '320px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <PlusOutlined type="plus" style={{ fontSize: '3rem' }} />

                        </div>
                    )}
                </Dropzone>

                {Thumbnail !== "" &&
                    <div>
                        <img src={`http://localhost:8080/${Thumbnail}`} alt="haha" />
                    </div>
                }
            </div>

            <br /><br />
            <label>Title</label>
            <br></br>
            <Input
                 onChange={handleChangeTitle}
                 value={title}
            />
            <br /><br />
            <label>Description</label>
            <br></br>
            <TextArea
                 onChange={handleChangeDecsription}
                 value={Description}
            />
            <br /><br />

            <select onChange={handleChangeOne}>
                {Private.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
            <br /><br />

            <select onChange={handleChangeTwo}>
                {Catogory.map((item, index) => (
                    <option key={index} value={item.label}>{item.label}</option>
                ))}
            </select>
            <br /><br />

            <Button type="primary" size="large" onClick={onSubmit}>
                Submit
            </Button>

        </Form>
    </div>
    )
}

export default UploadVideoPage
