import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    display: 0,
  }

  leftArrow = () => {
    const {display} = this.state

    if (display > 0) {
      this.setState(prevState => ({display: prevState.display - 1}))
    }
  }

  rightArrow = () => {
    const {display} = this.state

    if (display < 3) {
      this.setState(prevState => ({display: prevState.display + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {display} = this.state

    return (
      <div className="background">
        <div className="main-div">
          <h1>Reviews</h1>
          <img
            src={reviewsList[display].imgUrl}
            className="img-deco"
            alt={reviewsList[display].username}
          />
          <div className="small-div">
            <button className="button-deco" type="button" testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                onClick={this.leftArrow}
              />
            </button>
            <p>{reviewsList[display].username}</p>
            <button className="button-deco" type="button" testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                onClick={this.rightArrow}
              />
            </button>
          </div>
          <p className="para-deco">{reviewsList[display].companyName}</p>
          <p className="para">{reviewsList[display].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
