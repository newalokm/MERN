import React from "react";
import { useContext ,useState} from "react";
import { Context } from "../../index";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
        {/* <iframe src="https://www.chatbase.co/chatbot-iframe/F3Wnf9UJg1vewWrdGgVsk"
        title="Chatbot"
        width="400px"
        height="400px"
        frameborder="0"
        position= "relative"
        ></iframe>

        <script dangerouslySetInnerHTML={{
        __html: `
          window.embeddedChatbotConfig = {
            chatbotId: "F3Wnf9UJg1vewWrdGgVsk",
            domain: "www.chatbase.co"
          };
        `
      }} />
      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="F3Wnf9UJg1vewWrdGgVsk"
        domain="www.chatbase.co"
        defer
      /> */}
      </section>
    </>
  );
};

export default Home;