import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/fawad1.jpg", name: "Shakil Khan" },
    { id: 2, image: "/images/fawad2.jpg", name: "Kartik Modi" },
    { id: 3, image: "/images/fawad3.jpg", name: "Ankit Goyal" },
    { id: 4, image: "/images/fawad4.jpg", name: "Rohit Sharma" },
    { id: 5, image: "/images/imran1.jpg", name: "Imran Khan" },
    { id: 6, image: "/images/imran2.jpg", name: "Dhruv Sharma" },
    { id: 6, image: "/images/imran3.jpg", name: "Nishant Garg" },
    { id: 7, image: "/images/profile.jfif", name: "Vishal Mittal" },
    { id: 8, image: "/images/fawad1.jpg", name: "Rajesh Kumar" },
    { id: 9, image: "/images/fawad2.jpg", name: "Akshit Garg" },
    { id: 10, image: "/images/fawad3.jpg", name: "Aryan Garg" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
