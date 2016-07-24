const React = require('react');
const Carousel = require('react-bootstrap').Carousel

const SlideShow = React.createClass({
  getInitialState: function() {
    return {
      topics: ["renewable-energy, wearables, space, homebrew"]
    };
  },
  render () {
    return (
      <Carousel className="carousel-thing">
        <Carousel.Item>
          <Carousel.Caption>
            <h3 id="carousel-renewable">Let's Make<p id="carousel-text1">Renewables</p></h3>
          </Carousel.Caption>
            <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_fit,e_sharpen,h_800,q_100,w_1229/v1469382975/lakes-hd-wallpapers-awesome-beautiful-hd-high-quality-nature-desktop-widescreen-backgrounds_ogya4v.jpg" id="carousel-img1"></img>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3 id="carousel-wearable">Let's Make <p id="carousel-text2">Food</p></h3>
          </Carousel.Caption>
          <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_800,w_1229/v1469382309/free-food-wallpaper-hd-4_jjbzmd.jpg" id="carousel-img2"></img>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3 id="carousel-space">Let's Make <p id="carousel-text3">Space</p></h3>
          </Carousel.Caption>
            <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_800,w_1229/v1469382328/photo-1446776811953-b23d57bd21aa_abkuii.jpg" id="carousel-img3"></img>
        </Carousel.Item>
      </Carousel>
    )
  }
})

module.exports = SlideShow
