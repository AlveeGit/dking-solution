import Girl from "../assets/images/pointing-girl.png";
import diamond from "../assets/images/icons/diamond.png";
import van from "../assets/images/icons/van.png";
import team from "../assets/images/icons/team.png";
import call from "../assets/images/icons/call.png";
import webDesign from "../assets/images/icons/web-design.png";
import mobile from "../assets/images/icons/mobile.png";

import api from "../assets/images/icons/api.png";
import game from "../assets/images/icons/game.png";
import user1 from "../assets/images/icons/user1.png";
import user2 from "../assets/images/icons/user2.png";
import user3 from "../assets/images/icons/user3.png";
import user4 from "../assets/images/icons/user4.png";


// Hero section info data list
const heroData = {
  // title: "Good For Our Customer Experience",
  // text: "We are the unique set-up,that is ready to challange knock out such a global problem as unemployment.",
  title: "Transforming Ideas Into Reality: Your Ultimate IT Solution",
  text: "Welcome to our digital playground where innovation meets execution. Explore our diverse range of IT solutions—from sleek web designs to immersive gaming experiences, we bring your ideas to life with expertise and creativity.",
  btnText: "More About Us",
  img: Girl,
};

// Team section info data list
const teamData = {
  title: "Our Journey: Crafting Tomorrow's Technology Today",
  text: "We're passionate innovators dedicated to turning ideas into reality. With expertise spanning web, mobile, and game design, we craft bespoke solutions tailored to your needs. Join us in shaping the future of IT",
  btntext: "Explore Features",
};

// Team card data
const teamCardData = [
  {
    id: 1,
    img: diamond,
    title: "We Deliver Excellence",
    text: "Excellence is our standard. Partner with us for innovative solutions that exceed expectations in every aspect of your IT projects.",
    btnText: "Learn More",
  },
  {
    id: 2,
    img: van,
    title: "Deliveries & Collections",
    text: "We excel in deliveries and collections. With precision and reliability, we ensure seamless transactions that keep your operations running smoothly",
    btnText: "Learn More",
    cardPosition: "down",
  },
  {
    id: 3,
    img: team,
    title: "Awesome Team",
    text: "Committed to excellence and fueled by innovation, we work together to deliver outstanding results. Be part of extraordinary with us.",
    btnText: "Learn More",
  },
  {
    id: 4,
    img: call,
    title: "24/7 We Work",
    text: "With round-the-clock dedication, our team ensures your projects never miss a beat. Trust us for relentless commitment and seamless support",
    btnText: "Learn More",
    cardPosition: "down",
  },
];
// Support section info data list
const supportData = {
  title: "Elevate Your Experience: Our Comprehensive Services",
  text: "Discover tailored solutions designed to meet your unique needs. From web development to mobile applications, game design to API services, our comprehensive range of services has you covered. Let us bring your vision to life with expertise, creativity, and unparalleled dedication to excellence.",
  btntext: "More About Us",
};
// Support card Data
const supportCardData = [
  {
    id: 1,
    img: webDesign,
    title: "Web Development",
    text: "Crafting immersive online experiences tailored to your brand's vision. From responsive designs to seamless functionality, we bring your website to life with expertise and precision..",
  },
  {
    id: 2,
    img: mobile,
    title: "Mobile Applications",
    text: "Elevating your brand's presence with innovative mobile solutions. Whether it's iOS or Android, our apps combine functionality and aesthetics for an exceptional user experience",
    cardPosition: "down",
  },
  {
    id: 3,
    img: game,
    title: "Game Design",
    text: "Igniting imagination with captivating game experiences. From concept to deployment, we create immersive worlds that engage and entertain, tailored to your audience and objectives.",
  },
  {
    id: 4,
    img: api,
    title: "API Services",
    text: "Powering seamless interactions and integrations. Our API solutions unlock new possibilities for your business, enabling efficient data exchange and seamless connectivity across platforms.",
    cardPosition: "down",
  },
];

// Success section info data list
const successData = {
  title: "Achievements & Success Stories",
  text: "Explore our track record of success and client satisfaction. Dive into stories of projects completed, challenges overcome, and goals exceeded. Discover how our expertise and dedication have led to tangible results and lasting partnerships.",
  btntext: "More About Us",
  clientCounter: "12K",
  clientStatus: "Happy Clients",
};

// Client section info data list
const clientData = {
  title: "Client Testimonials",
  text: "Discover firsthand experiences and feedback from our valued clients. Hear what they have to say about their collaborations with us, our services, and the impact we've made on their projects and businesses.",
  btntext: "More About Us",
};

// Client card Data
const clientCardData = [
  {
    id: 1,
    img: user1,
    text: "Working with DKingSolution has been a game-changer for our online presence. Their web development team turned our vision into reality, delivering a sleek and user-friendly website that's exceeded our expectations.",
    name: "Mike Johnson",
    position: "Marketing Director,BrightIdeas Inc.",
  },
  {
    id: 2,
    img: user2,
    text: "Impressed by [Your Company Name]'s mobile app development expertise. Their team brought our app idea to life with precision and efficiency, delivering a product that's received rave reviews from our users",
    name: "Alex Ramirez",
    position: "CEO, Tech Innovations Inc.",
  },
  {
    id: 3,
    img: user3,
    text: "Collaborating with [Your Company Name] on our latest game project was a fantastic experience. Their game design team's creativity and attention to detail resulted in a captivating and immersive gaming experience that's been a hit with players.",
    name: "Emily Chen",
    position: "Lead Game Designer, PixelPlay Studios",
  },
  {
    id: 4,
    img: user4,
    text: "We rely on [Your Company Name]'s API services to streamline our data management processes, and they've consistently delivered exceptional results. Their expertise has enabled seamless integration across our platforms, saving us time and resources.",
    name: "David Patel",
    position: "CTO, Data Solutions Co.",
  },
];

// FAQ section data info list
const faqData = {
  title: "Answers to Your Questions",
  text: "Find answers to commonly asked questions about our services, processes, and more. Explore our FAQ section to get the information you need to make informed decisions and embark on a successful collaboration with us.",
};

// FAQ card Data
const faqCardData = [
  {
    id: "0",
    title: "1: What services do you offer?",
    text: "We offer a comprehensive range of services including web development, mobile app development, game design, API services, frontend and backend design, Unity game applications, cryptocurrency applications, and more. Whatever your digital needs, we have the expertise to fulfill them.",
  },
  {
    id: "1",
    title: "2: How long does it take to complete a project?",
    text: "Project timelines vary depending on the scope and complexity of the project. We work closely with our clients to establish realistic timelines during the initial consultation phase. Factors such as design revisions, feedback cycles, and development complexity all play a role in determining project timelines.",
  },
  {
    id: "2",
    title: "3: What is your pricing structure?",
    text: "Our pricing is tailored to each individual project based on factors such as scope, complexity, and timeline. We offer competitive rates and transparent pricing models to ensure our clients get the best value for their investment. Get in touch with us to discuss your project and receive a personalized quote.",
  },
  {
    id: "3",
    title: "4: How do you ensure the security of my project's data?",
    text: "We take the security of our clients' data very seriously. We employ industry-standard security protocols and best practices to safeguard your project's data against unauthorized access, breaches, and other threats. Additionally, we offer optional security audits and assessments to further enhance data security.",
  },
  {
    id: "4",
    title: "5: Can I see examples of your previous work",
    text: "Absolutely! We have a portfolio showcasing some of our previous projects across various industries and technologies. You can view our portfolio on our website or request specific examples relevant to your project during our initial consultation.",
  },
  {
    id: "5",
    title: "6: Do you provide ongoing support after the project is completed?",
    text: "Yes, we offer ongoing support and maintenance services to ensure your project continues to run smoothly long after it's launched. Whether you need technical support, updates, or enhancements, our dedicated support team is here to assist you every step of the way.",
  },
];

// Servive section data info list
const serviceData = {
  title: "Get in Touch",
  text: "Have a question or ready to start your next project? Reach out to us today! Our team is here to answer your inquiries, discuss your ideas, and provide personalized solutions tailored to your needs. Contact us via phone, email, or the contact form below, and let's begin the conversation.",
  btntext: "Get Started",
};

// Export All Data
export {
  heroData,
  teamData,
  teamCardData,
  supportData,
  supportCardData,
  successData,
  clientData,
  clientCardData,
  faqData,
  faqCardData,
  serviceData,
};
