import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
const Addstory = () => {
  // alert("cc")
  var div = document.getElementById("uploader");
  var allstory = document.getElementsByClassName("story");
  console.log(allstory);
  for (var i = 0; i < allstory.length; i++) {
    allstory[i].style.display = "none";
  }
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "video/*";
  div.appendChild(input);
  input.click();
  var flag = false;
  //  alert(input.onchange);
  input.onchange = function () {

    flag = true;

    //alert(flag); 

    var video_url = URL.createObjectURL(this.files[0]);

    // alert(video_url);
    console.log(video_url);
    //  div.style.display="none"
    var videobox = document.getElementById("videobox");
    videobox.style.display = "block";
    var video_src = document.getElementById("video_source");
    video_src.src = video_url;
    videobox.load();
    videobox.play();

    var rbtn = document.getElementById("rbtn");
    // console.log(rbtn);
    rbtn.style.display = "block";

  }
  if (flag == false) {
    for (var i = 0; i < allstory.length; i++) {
      allstory[i].style.display = "block";
    }
  }
  //  console.log(div);

}
const pagereload = () => {
  // alert("f")
  //  location.reload();
  var rbtn = document.getElementById("rbtn");
  console.log(rbtn);
  rbtn.style.display = "none";
  var allstory = document.getElementsByClassName("story");
  for (var i = 0; i < allstory.length; i++) {
    allstory[i].style.display = "block";
  }
  var videobox = document.getElementById("videobox");
  videobox.style.display = "none";
}
const Stories = () => {



  const { currentUser } = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Paul Walker",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Leo Messi",
      img: "https://phantom-marca.unidadeditorial.es/f07a6e2a95fad43b461b40590225e38d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/31/16725192936240.jpg",
    },
    {
      id: 4,
      name: "John Alex",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">

      <div className="story" id="uploader">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button onClick={Addstory} >+</button>

      </div>

      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}

      <video id="videobox" controls style={{}}>
        <source id="video_source" />
      </video>
      <button id="rbtn" onClick={pagereload} style={{
        width: "40px", display: "none", backgroundColor: "cyan", borderRadius: "20px", textAlign: "inherit",
        border: "1px solid royalblue", cursor: "pointer", fontWeight: "bold",
      }}>Back</button>
    </div>
  )
}

export default Stories;