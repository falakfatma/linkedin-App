import "./slider.css"

function Slider() {
  return (
    <div className="siderContainer">
      <div className="siderFeedComponentsCard card">
        <div className="profile">
          <div className="siderFeedComponentsCardProfileLogo">
          </div>
          <h3 className="sliderCardHeading">
            welcome
          </h3>
          <p className="paragraph">Add a photo</p>
        </div>
        <hr>
        </hr>
        <div>
          <p className="paragraph">
            Connection
          </p>
          <p className="paragraph">Connect with alumni
          </p>
        </div>
        <hr>
        </hr>
        <div>
          <p className="paragraph"> Access exclusive tools & insights
          </p>
          <p className="paragraph">Try Premium for free
          </p>
        </div>
        <hr>
        </hr>
         <div>
          <p className="paragraph"> 
            My items
          </p>
        </div>
      </div>
      <div className="siderCommunityComponentsCard card">
      </div>
    </div>
  )
}
export default Slider;