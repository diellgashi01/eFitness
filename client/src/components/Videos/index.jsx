import React, { useEffect, useState } from 'react'

import { FaCode } from "react-icons/fa";
import { Card,  Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const { Title } = Typography;
const { Meta } = Card;
const mongoose = require("mongoose");
function Videos() {
	


    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])






    const renderCards = Videos.map((video, index) => {
		
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return  <Col lg={6} md={8} xs={24}>
          
            <div style={{ position: 'relative' }}>
                <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:8080/${video.thumbnail}`} />
                <div className=" duration"
                    style={{ bottom: 0, right:0, position: 'absolute', margin: '4px',
                    color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8,
                    padding: '2px 4px', borderRadius:'2px', letterSpacing:'0.5px', fontSize:'12px',
                    fontWeight:'500', lineHeight:'12px' }}>
                    <span>{minutes} : {seconds}</span>
                </div>
            </div><br />
            <Meta
               avatar={
                <Avatar src={video.writer} />
            }
                title={video.title}
            />
            <span>{video.writer} </span><br />
            <span style={{ marginLeft: '3rem' }}> {video.views}</span>
            - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
            
        </Col>

    })



    return (
        <div style={{ width: '30%', margin: '3rem auto' }}>
            <Title level={2} > Recommended </Title>
            <hr />

            <Row>
                {renderCards}
            </Row>
        </div>
    )
}

export default Videos