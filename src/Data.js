import {FaPython, FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsMedium } from "react-icons/bs";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "AashviKothari"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+917021367883"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "aashvikothari78@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />,<FaPython/>]

export const experiences = [
  {
    id: 1,
    year: "2021",
    position: "Part Time - Quality Assurance Analyst",
    company: "Telus International, Nevada"
  },
  {
    di: 2,
    year: "2022",
    position: "Junior ReactJs Web Developer",
    company: "SIRPR DataScience Ltd."
  },
  {
    id: 3,
    year: "2022",
    position: "Content Writting Lead",
    company: "Intel AI Students Club"
  }
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Experience"
  },
  {
    id: 3,
    number: "6+",
    itemName: "Projects Performed"
  },
  {
    id: 4,
    number: "2",
    itemName: "Internship Completed"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Mumbai, India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "aashvikothari78@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-7021367883"
  }
]
