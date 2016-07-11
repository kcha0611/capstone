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
            <h3 id="carousel-renewable">Let's Make<p id="carousel-text1">Renewable Energy</p></h3>
          </Carousel.Caption>
            <img src="https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg" id="carousel-img1"></img>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3 id="carousel-wearable">Let's Make <p id="carousel-text2">Food</p></h3>
          </Carousel.Caption>
          <img src="http://tremendouswallpapers.com/wp-content/uploads/2014/12/free-food-wallpaper-hd-4.jpg" id="carousel-img2"></img>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3 id="carousel-space">Let's Make <p id="carousel-text3">Space</p></h3>
          </Carousel.Caption>
            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=2f2e6bcdf177c3a825a4e78c3936ca7b" id="carousel-img3"></img>
        </Carousel.Item>
      </Carousel>
    )
  }
})

module.exports = SlideShow
