import "./Work.css";
import { HiDesktopComputer } from "react-icons/hi";
import "aos/dist/aos.css";
import WorkCard from "./WorkCard";
function Work() {
  return (
    <div className="work">
      <h1 className="title">
        <HiDesktopComputer className="icon" />
        WORK
      </h1>
      <div className="card">
        <WorkCard
          viewUrl="https://trendytresure.netlify.app"
          codeUrl="https://github.com/Ahishree29/Treandytreasure"
          projectImg="./e-com.png"
          projectName="Trendy Treasure"
          content=" Trendy Treasure is an inclusive e-commerce platform offering a
            diverse range of clothing for men, women, boys, and girls. Users can
            explore products and sign in to access the shopping cart feature,
            receiving a welcome email upon registration. The platform enables
            seamless shopping experiences, allowing users to add items to their
            cart and proceed to order, followed by prompt order confirmation
            emails, ensuring a smooth purchasing journey."
        />
        <WorkCard
          viewUrl="https://chatapp-s1qq.onrender.com/"
          codeUrl="https://github.com/Ahishree29/ChatSwiftly"
          projectImg="./chat app.jpg"
          projectName="ChatSwiftly"
          content="ChatSwiftly is a real-time chatting web application designed to
    provide users with a seamless and intuitive chatting experience.
      With its modern and responsive interface, ChatSwiftly allows users
      to connect with each other instantly, facilitating both one-on-one
         and group conversations. Built with React.js, Tailwind CSS, and
        powered by Node.js Express for the backend, ChatSwiftly leverages
      Socket.IO for real-time communication and JWT for authentication.
       Cloudinary is used for profile picture uploads, while MongoDB serves
         as the database for storing user information and chat data.
     "
        />
      </div>
    </div>
  );
}
export default Work;
