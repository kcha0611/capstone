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
      <Carousel>
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
            <img src="http://wallpaperbeta.com/wallpaper_3840x2160/galaxy_planet_star_space_ultra_3840x2160_hd-wallpaper-184743.jpg" id="carousel-img3"></img>
        </Carousel.Item>
      </Carousel>
    )
  }
})

module.exports = SlideShow
