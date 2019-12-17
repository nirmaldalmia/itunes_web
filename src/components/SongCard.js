import React, { Component } from 'react'
import { Card } from 'antd';
import './SongCard.scss'
import { Animated } from "react-animated-css";

const { Meta } = Card;

export default class SongCard extends Component {
    render() {
        const item = this.props.item
        return (
            <Card
                hoverable
                className='card'
                cover={
                    <Animated animationIn="fadeIn" isVisible >
                        <img alt="example" src={item.artworkUrl100} className='albumArt' />
                    </Animated>
                }
            >
                <Meta title={item.collectionName} style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '5px' }} />
            </Card>
        )
    }
}
