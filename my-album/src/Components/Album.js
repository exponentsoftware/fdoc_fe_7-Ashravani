import React, { Component } from 'react'
import "../App.css"
import { Card } from 'antd';
const { Meta } = Card;

export class Album extends Component {
    constructor(props) {
		super(props);
    }
    clickHandler = (e, props) => {
        {this.props.deleteFunc()}
        e.preventDefault()
    }
    render() {
        return (
            <div className = "card">
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoviegalleri.net%2F2018%2F06%2Fvijay-devarakonda-rashmika-mandanna-geetha-govindam-first-look-poster-hd.html&psig=AOvVaw0YErAYGeABXsN8jxxqQhaf&ust=1621660461506000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCemZWC2vACFQAAAAAdAAAAABAD" width="300" height="380" />}
                >
                    <Meta title= {this.props.album_title}/>
                    <h5>{this.props.artist}</h5>
                    <h5>{this.props.album_cover}</h5>
                </Card>
                <button onClick={this.clickHandler}>Delete</button>
            </div>
        )
    }
}

export default Album