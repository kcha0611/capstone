// const React = require('react');
// const Carousel = require('react-bootstrap').Carousel
// const StepIndex = require('./step_index');
// const StepStore = require('../stores/step_store')
// const StepActions = require('../actions/step_actions')
//
// const StepCarousel = React.createClass({
//   getInitialState: function() {
//     return {
//       direction: null,
//       index: 0,
//       steps: []
//     };
//   },
//   handleChange: function (currentIndex, e) {
//     this.setState({
//       direction: e.direction,
//       index: currentIndex,
//       steps: StepStore.all()
//     })
//   },
//   componentDidMount: function() {
//     this.stepListener = StepStore.addListener(this.handleChange)
//     StepActions.fetchAllSteps(parseInt(this.props.projectId))
//   },
//   render () {
//     return (
//       <div>
//         <Carousel>
//         {this.state.steps.map ((step) => {
//             return <StepIndexItem step={step}/>
//           <Carousel.item>
//             <img width={900} height={500} src={step.image_url} />
//             <Carousel.Caption>
//               <h3>{step.title}</h3>
//               <p>{step.description}</p>
//             </Carousel.Caption>
//           </Carousel.item>
//         })
//       }
//       </Carousel>
//     </div>
//     )
//   }
// })
//
// module.exports = StepCarousel;
