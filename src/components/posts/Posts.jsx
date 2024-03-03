import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Paul Gathod",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Chill With Friends❤️❤️✌🏼",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Ankur Vishwakarma",
      userId: 2,
      profilePic:
        "https://phantom-marca.unidadeditorial.es/f07a6e2a95fad43b461b40590225e38d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/31/16725192936240.jpg",
      desc: "Happy Bithday to You Abhishek Thakur,Sir🙏🏼🙏🏼🙏🏼. Lots of love to you sir for guide us through our learing journey. Thank  you❤️❤️❤️.",
    },
    {
      id: 3,
      name: "Abiram Sharma",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Tour To Hilll🏔️⛰️",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcatalog.wlimg.com%2F4%2F385927%2Fsmall-images%2Fhill-stations-tour-41744.jpg&tbnid=UWlYlSbDaAhGNM&vet=12ahUKEwjfk6jzsYD-AhXUmmMGHXUjC8EQMygDegUIARC9AQ..i&imgrefurl=http%3A%2F%2Fwww.sribalajitourstravels.co.in%2Fhill-stations-tour.htm&docid=XYOPlkriTiHX1M&w=350&h=350&q=tour%20to%20hill&ved=2ahUKEwjfk6jzsYD-AhXUmmMGHXUjC8EQMygDegUIARC9AQ",
    },
    {
      id: 4,
      name: "Paul Walker",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Outing with Frinends😍😍",
      img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "Akhil Sharma",
      userId: 5,
      profilePic:
        "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Bought a new Flower Vase",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;