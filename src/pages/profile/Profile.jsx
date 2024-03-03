import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const follow1 = (a) => {
    alert("You have followed Akash Mandal");
    a.target.innerHTML = "followed";
    a.target.style["background-color"] = "lightgreen";
}

const Profile = () => {
    
    return (
        <div className="profile">
            <div className="images">
                <img
                    src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="cover"
                />
                <img
                    src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com" target="_blank">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <InstagramIcon fontSize="large" />
                        </a>
                        {/* <a href="http://facebook.com">
                            <TwitterIcon fontSize="large" />
                        </a> */}
                        <a href="https://in.linkedin.com/" target="_blank">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        {/* <a href="http://facebook.com">
                            <PinterestIcon fontSize="large" />
                        </a> */}
                    </div>
                    <div className="center">
                        <span>Paul Gathod</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>India</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>paul.walker</span>
                            </div>
                        </div>
                        <button onClick={follow1}>follow</button>
                    </div>
                    <div className="right">
                        <a href="mailto:paulGathod@gmail.com" style={{position:"relative",top:"3px",textDecoration:"none",color:"inherit"}}><EmailOutlinedIcon /></a>
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;