import profile from "../../assets/profile.jpg";
import Insta from "../../assets/insta.png"
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import Medium from "../../assets/medium.png"
import Facebook from "../../assets/fb.png"

const data = {
  profileImage: profile,
  name: "What about me?",
  description: `Hi, I am Abdullah and Welcome to my website 😊<br/> A Final Year Undergraduate Computer Science Student at <i><b>National University of Computer and Emerging Sciences FAST, Islamabad.</b></i>`,
  socialLinks: [
    { name: "Instagram", url: "https://www.instagram.com/al__yaan", icon: Insta },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aliananwar72/", icon: Linkedin },
    { name: "Facebook", url: "https://www.facebook.com/alian.anwar.1", icon: Facebook} ,
    { name: "Github", url: "https://github.com/AlianAnwar72", icon: Github },
    { name: "Medium", url: "https://medium.com/@Alian.Anwar.72", icon: Medium }
  ]
};

export default data;
