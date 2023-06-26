import "./slider.css"
import groupsIcon from "./icon/groups.png"
import addIcon from "./icon/add.png"

function Slider() {
  return (
    <div className="siderContainer">
      <div className="siderFeedComponentsCard card">
        <div className="profile">
          <div className="siderFeedComponentsCardProfileLogo">
          </div>
          <h3 className="sliderCardHeading">
            Welcome
          </h3>
          <p className="paragraph blueSiderContainerParagraph">Add a photo</p>
        </div>
        <hr>
        </hr>
        <div>
          <p className="paragraph lightGreySiderContainerParagraph">
            Connection
          </p>
          <p className="paragraph">Connect with alumni
          </p>
        </div>
        <hr>
        </hr>
        <div>
          <p className="paragraph lightGreySiderContainerParagraph"> Access exclusive tools & insights
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
        <div>
          <p className="paragraph">Recent</p>
          <a href="#" className="anchorTagSlider" >
            <img src={groupsIcon} style={ {width: '30px'}}></img>
            <p className="paragraph truncate">UI/UX User Experience Interactive Designer / Wireframes</p>
          </a>
        </div>
        <div>
          <p className="paragraph blueSiderContainerParagraph">Groups</p>
          <a href="#" className="anchorTagSlider" >
            <img src={groupsIcon} style={ {width: '30px'}}></img>
            <p className="paragraph truncate">UI/UX User Experience Interactive Designer / Wireframes</p>
          </a>
          <p className="paragraph">See all</p>
        </div>
        <p className="paragraph row">
          <span className="paragraph blueSiderContainerParagraph">Events</span>
          <span className="icon">
            <img src={addIcon} style={ {width: '30px'}}></img>
          </span>
        </p>
        <p className="paragraph blueSiderContainerParagraph">Followed Hashtags</p>
        <p className="paragraph ">Discover more</p>

      </div>
    </div>
  )
}
export default Slider;