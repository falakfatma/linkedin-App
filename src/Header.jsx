import "./Header.css"
import LinkdenIcon from "./icon/icon.png"
import homeIcon from "./icon/home.png"
import peopleIcon from "./icon/peopleIcon.png"
import bag from "./icon/bag.png"
import bell from "./icon/bell.png"
import user from "./icon/user.png"


function Header() {
  return (
    <div className="headerContainer">
      {/* Header Left */}

      <div className="HeaderSearchContainer">
        <div className="HeaderIcon">
          <img src={LinkdenIcon} alt="linkdin logo" style={{ width: '30px', }} />
        </div>
        <input type="text">
        </input>
      </div>

      {/* Header Right */}
      <div className="HeaderIconContainer">
        <div className="HeaderIconList">
          <div className="HeaderIcon">
            <img src={homeIcon} alt="Home logo" style={{ width: '30px', }} />
          </div>
          <div className="HeaderTitle">
            Home
          </div>
        </div>

        <div className="HeaderIconList">
          <div className="HeaderIcon">
            <img src={peopleIcon} style={{ width: '30px', }} />
          </div>
          <div className="HeaderTitle">
            My Network
          </div>
        </div>

        <div className="HeaderIconList">
          <div className="HeaderIcon">
            <img src={bag} alt="linkdin logo" style={{ width: '30px', }} />
          </div>
          <div className="HeaderTitle">
            Jobs
          </div>
        </div>

        <div className="HeaderIconList">

          <div className="HeaderIcon">
            <img src={bell} alt="linkdin logo" style={{ width: '30px', }} />
          </div>
          <div className="HeaderTitle">
            Notifications
          </div>
        </div>

        <div className="HeaderIconList">
          <div className="HeaderIcon">
            <img src={user} alt="linkdin logo" style={{ width: '30px', }} />
          </div>
          <div className="HeaderTitle">
            me
          </div>
        </div>

        <div className="HeaderIconList">
          <div className="HeaderIcon">
          </div>
          <div className="HeaderTitle">
            For Business
          </div>
        </div>

        <div className="HeaderIconList">
          <div className="HeaderTitle">
            Try Premium for free
          </div>
        </div>

      </div>
    </div>
  )
}
export default Header;