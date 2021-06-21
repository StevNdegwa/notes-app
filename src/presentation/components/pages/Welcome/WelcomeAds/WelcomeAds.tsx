import { motion } from "framer-motion";
import bg from "./images/honeycomb-bee.png";
import { WelcomeAdsWrapper } from "./styles";

export const WelcomeAds = () => {
  return (
    <WelcomeAdsWrapper
      as={motion.div}
      animate={{
        width: ["90%", "100%"],
      }}
    >
      <img src={bg} alt="Cool Graphic " />
    </WelcomeAdsWrapper>
  );
};
