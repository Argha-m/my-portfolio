import React from 'react';
import '../../assets/css/banner.css';
import bannerImage from '../../assets/images/banner-image.jpg';

export default class Banner extends React.Component {
    render(props){
        return(
            <div className="app-banner">
                <div className="banner-image">
                    <img src={bannerImage} alt="" />
                </div>
                <div className="banner-content">
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        )
    }
}