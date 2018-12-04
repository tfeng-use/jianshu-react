import React, { Component } from 'react'
import Slider from "react-slick";

import { CarouselWrapper } from '../style'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux'

class CarouselList extends Component {
  render () {  
    var settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <CarouselWrapper>
        <Slider {...settings}>
          {
            this.props.carouselList.map((ele) => {
              return (
                <div key={ele.get('id')}>
                  <img src={ele.get('imgUrl')} alt=""/>
                </div>
              )
            })
          }
        </Slider>
      </CarouselWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  carouselList: state.get('home').get('carouselList')
})
export default connect(mapStateToProps, null)(CarouselList)