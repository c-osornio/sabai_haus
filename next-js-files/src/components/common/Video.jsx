import React from 'react'
import CountUp from 'react-countup';
function Video() {
  return (
    <div className="home-one-video mb-120"   >
    <div className="video-area">
      <video autoPlay loop="loop" muted preload="auto">
        <source src="https://demo.egenslab.com/download/hotel-room-2021-11-03-20-39-09-utc.mp4" type="video/mp4" />
      </video>
      <div className="our-activitys">
        <div className="booking counter-item d-flex align-items-center">
          <div className="number counter">
            <h2 className="odometer" data-odometer-final={10}><CountUp start={0} end={10}/></h2>
          </div>
          <div className="contents">
            <p>Booking <br />Of Month</p>
          </div>
        </div>
        <div className="visitors counter-item d-flex align-items-center">
          <div className="number counter">
            <h2 className="odometer" data-odometer-final={50}><CountUp start={0} end={50}/></h2>
          </div>
          <div className="contents">
            <p>Visitors Visit <br />Daily.</p>
          </div>
        </div>
        <div className="satisfied-gest counter-item d-flex align-items-center">
          <div className="number counter d-flex align-items-center">       
            <h2 className="odometer" data-odometer-final="1.5"><CountUp start={0} decimals={1.5} end={1.6} preserveValue={true}/></h2>
            <span>K</span>
          </div>
          <div className="contents">
            <p>Satisfied <br />Guest.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Video