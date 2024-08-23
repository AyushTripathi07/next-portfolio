export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Eager to learn New Technologies and Frameworks",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-black",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "videoframe_1238.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Expertise in ML and DevOps tools",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start text-black",
    img: "openai-img-2.png",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working on a Artificial Intelligence project using OpenAI.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "openai-img.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "JarvisAI Chatbot using OpenAI",
    des: "This React application is a user interface for interacting with Jarvis AI, a chatbot powered by OpenAI's API. The chatbot utilizes the OpenAI API key to facilitate frequent chat interactions with users.    ",
    img: "/jarvis-ai.png",
    iconLists: ["/re.svg", "/tail.svg", "/svg/skills/python.svg", "/openai.png", "/express.png"],
    link: "https://github.com/AyushTripathi07/JarvisAI.git",
    github: 'github.com/AyushTripathi07/JarvisAI.git'
  },
  {
    id: 2,
    title: "Image-Caption-Generator",
    des: "The Image Caption Generator App uses MobileNetV2 to extract image features and an LSTM model to generate descriptive captions. Users can upload an image, and the app quickly provides a caption that summarizes the content. It's built with TensorFlow and Streamlit for a simple and interactive experience.",
    img: "/image-caption.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/svg/skills/python.svg"],
    link: "https://github.com/AyushTripathi07/Image-Caption-Generator.git",
    github: 'github.com/AyushTripathi07/Image-Caption-Generator.git'
  },
  
];

export const achievements = [
  {
    description:
      "Led a team to secure the position of 2nd Winner in Smart India Hackathon 2023, organized by the Ministry of Education, with our innovative solution on developing a DNS resolution and filtering service using machine learning and threat intelligence feeds which was evaluated by ISRO.",
    name: "Smart India Hackathon 2023",
    position: "Team Leader",
    team : "Team Grey Matter",
    image : '/sih.png'
  },
  {
    description:
      "Led a team to secure the first position and emerge as winners of the national cybersecurity Hackathon KAVACH 2023, hosted by the Ministry of Education. Our accomplishment centered on the development of a solution for detecting phishing attempts through the utilization of Machine Learning and Threat Intelligence Feeds.",
    name: "KAVACH National Cyber-Security Hackathon 2023",
    position: "Team Leader",
    team : "Team Heisenberg",
    image : '/openai-img-1.png'

  },
  {
    description:
      "Contributed as a team member to victory in an intra-college hackathon focused on blockchain technology, competing against over 50 teams from across India. Developed a cutting-edge cross-country currency transfer and exchange application that leveraged React for the front end, MongoDB for the database, and integrated blockchain technology using Three.js and MetaMask. Our innovative solution in the fintech space highlighted secure and efficient currency exchanges, ultimately earning us the top prize in the competition.",
    name: "HackX NIET 2023",
    position: "Team Member",
    team : "Team Gavari",
    image : '/openai-img-1.png',

  },
  {
    description:
      "Participated in India’s first national-level VAPT exercise, organized by NCIIPC in collaboration with AICTE, which aimed to create a talented pool of ethical hackers and pen testers to identify vulnerabilities in critical information infrastructure systems. Successfully identified 6 out of 10 flags in this highly competitive Capture The Flag (CTF) event.",
    name: "Pentathon NCIIPC-AICTE 2024",
    position: "Team Member",
    team : "Team AVAA",
    image : '/openai-img-1.png',

  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Research Intern at ISRO",
    duration : "Feb 2024 - April 2024",
    desc: "Collaborated within a team to develop a ”DNS Filtering Service using Threat Intelligence feeds and AI/ML Techniques” aimed at enhancing cybersecurity measures.◦ Developed a Machine Learning Model which passively detects anomalies and malicious DNS traffic through the log files of DNS Traffic within an organization . Developed and configured a user friendly front-end interface for query viewing and statistical analysis for live DNS traffic and passive analysis.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AyushTripathi07", 
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AyushTr31492414", 
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ayush-tripathi07/", 
  },
];

