import React from "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
// import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import C from "../../assets/c.png";
import { useState } from "react";
const LeftBar = () => {
 
    const content={
        myclass:"hide"
    };
    const [data,setdata]=useState(content);
    const toggle=()=>{
        var temp="";
        if(data.myclass=="hide")
        {
           temp={
            myclass:"show",
           }
        }
        else{
            temp={
                myclass:"hide"
            }
        };
        setdata(temp);
    }


    const contentG={
        myclass1:"hide"
    };
    const [dataG,setdataG]=useState(contentG);
    const toggleG=()=>{
        var temp="";
        if(dataG.myclass1=="hide")
        {
           temp={
            myclass1:"show",
           }
        }
        else{
            temp={
                myclass1:"hide"
            }
        };
        setdataG(temp);
    }

    const contentW={
        myclass2:"hide"
    };
    const [dataW,setdataW]=useState(contentW);
    const toggleW=()=>{
        var temp="";
        if(dataW.myclass2=="hide")
        {
           temp={
            myclass2:"show",
           }
        }
        else{
            temp={
                myclass2:"hide"
            }
        };
        setdataW(temp);
    }

    const contentUs={
        myclass2:"hide"
    };
    const [dataUs,setdataUs]=useState(contentUs);
    const toggleUs=()=>{
        var temp="";
        if(dataUs.myclass2=="hide")
        {
           temp={
            myclass2:"show",
           }
        }
        else{
            temp={
                myclass2:"hide"
            }
        };
        setdataUs(temp);
    }

    const contentCon={
        myclass2:"hide"
    };
    const [dataCon,setdataCon]=useState(contentCon);
    const toggleCon=()=>{
        var temp="";
        if(dataCon.myclass2=="hide")
        {
           temp={
            myclass2:"show",
           }
        }
        else{
            temp={
                myclass2:"hide"
            }
        };
        setdataCon(temp);
    }

    const contentCou={
        myclass2:"hide"
    };
    const [dataCou,setdataCou]=useState(contentCou);
    const toggleCou=()=>{
        var temp="";
        if(dataCou.myclass2=="hide")
        {
           temp={
            myclass2:"show",
           }
        }
        else{
            temp={
                myclass2:"hide"
            }
        };
        setdataCou(temp);
    }
    const contentt={
        myclass2:"hide"
    };
    const [datat,setdatat]=useState(contentt);
    const togglet=()=>{
        var temp="";
        if(datat.myclass2=="hide")
        {
           temp={
            myclass2:"show",
           }
        }
        else{
            temp={
                myclass2:"hide"
            }
        };
        setdatat(temp);
    }
    const contentk={
        myclass2:"hide"
    };
    const [datak,setdatak]=useState(contentk);
    const togglek=()=>{
        var temp="";
        if(datak.myclass2=="hide")
        {
           temp={
            myclass2:"show",
           }
        }
        else{
            temp={
                myclass2:"hide"
            }
        };
        setdatak(temp);
    }


    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img
                            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <span>Paul Walker</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt="" />
                        <span onClick={toggle} >Marketplace</span>
                       
                    </div>
                    <div id="market" className={data.myclass}>
                       <ul>
                        <li><a href="https://www.amazon.in/" target="_blank">Amazon</a></li>
                        <li><a href="https://www.flipkart.com/" target="_blank">Flipkart</a></li>
                        <li><a href="https://www.myntra.com/" target="_blank">Myntra</a></li>
                        
                       </ul>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span><b>Your Shortcuts</b></span>
                    <div className="item" id="item1">
                        <img src={Events} alt="" />
                        <a href="https://www.google.com/calendar" target="_blank" style={{textDecoration: 'none', color:'inherit'}} >
                        <p id="spa">Events</p>
                        </a>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span onClick={toggleG}>Gaming</span>
                    </div>
                    <div id="market" className={dataG.myclass1}>
                       <ul>
                        {/* <li><a href="https://www.similarweb.com/website/twitch.tv/" target="_blank">Twitch TV</a></li> */}
                        <li><a href="https://www.similarweb.com/website/chess.com/" target="_blank">Chess</a></li>
                        <li><a href="https://www.similarweb.com/website/fortnite.com/" target="_blank">Fortnite</a></li>
                        <li><a href="https://www.similarweb.com/website/xbox.com/" target="_blank">XBox</a></li>
                       </ul>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span onClick={toggleW}>Wallpapers</span>
                    </div>
                    <div id="market" className={dataW.myclass2}>
                       <ul>
                        {/* <li><a href="https://www.similarweb.com/website/twitch.tv/" target="_blank">Twitch TV</a></li> */}
                        <li><a href="https://unsplash.com/" target="_blank">Unplash</a></li>
                        <li><a href="https://in.pinterest.com/" target="_blank">Pinterest</a></li>
                        <li><a href="https://www.pexels.com/" target="_blank">Pixels</a></li>
                       </ul>
                    </div>

                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    {/* <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div> */}
                </div>
                <hr />
                <div className="menu">
                    <span><b>Others</b></span>
                    <div className="item">
                        <img src={Fund} alt="" />
                        <span onClick={togglek}>Kids Space</span>
                    </div>
                    <div id="market" className={datak.myclass2}>
                        <ul>
                            <li><a href="https://www.youtube.com/kids/">Youtube Kids</a></li>
                            <li><a href="https://pbskids.org/games">PBS kids Game</a></li>
                            <li><a href="https://www.funbrain.com/">FunBrain</a></li>
                        </ul>
                    </div>

                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span onClick={togglet}>Tutorials</span>
                    </div>
                    <div id="market" className={datat.myclass2}>
                        <ul>
                            <li><a href="https://www.geeksforgeeks.org/">GFG</a></li>
                            <li><a href="https://www.tutorialspoint.com/index.htm">TutorialPoint</a></li>
                            <li><a href="https://www.javatpoint.com/">JavatPoint</a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <img src={Courses} alt="" />
                        <span onClick={toggleCou}>Courses</span>
                    </div>
                    <div id="market" className={dataCou.myclass2}>
                        <ul>
                            <li><a href="https://infyspringboard.onwingspan.com/web/en/login">Infosys</a></li>
                            <li><a href="https://www.coursera.org/">Coursera</a></li>
                            <li><a href="https://www.freecodecamp.org/">freeCodecamp</a></li>
                        </ul>
                    </div>

                    <div className="item">
                        <img src={Groups} alt="" />
                        <span onClick={toggleUs}>About Us</span>
                    </div>
                    <div id="market" className={dataUs.myclass2}>
                       <p>
We're very sincere students with a straightforward vision. We believe that there is an amazing amount to be learned by working in a "real-world" web production environment, alongside other like-minded teens. <br />
We've had an amazing journey coming to where we are today.
</p>
                    </div>
                    <div className="item">
                        <img src={C} alt="" />
                        <span onClick={toggleCon}>Contact Us</span>
                    </div>
                    <div id="market" className={dataCon.myclass2}>
                        <ul>
                            <li><a href="mailto:feedbackLiteMedia@gmail.com">LM@gmail.com</a></li>
                            <li>litemedia.org.in</li>
                            <li>Mob:9577440078</li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    );
};
export default LeftBar