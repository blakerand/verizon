import React, { useState, useEffect } from "react";
import UltimatePlanCard from "./verizonComponents/UltimatePlanCard";
import AppleOneActivationCard from "./verizonComponents/AppleOneActivationCard";
import ScreenRepairCard from "./verizonComponents/ScreenRepairCard";
import ChangeAddressCard from "./verizonComponents/ChangeAddress";
import DataCard from "./verizonComponents/DataCard";
import ResetPasswordCard from "./verizonComponents/ResetPasswordCard";
import S23Card from "./verizonComponents/S23Card";
import SocialCard1 from "./verizonComponents/SocialCard1";
import SocialCard2 from "./verizonComponents/SocialCard2";
import SocialCard3 from "./verizonComponents/SocialCard3";
import Pixel8Card from "./verizonComponents/Pixel8Card";
import FiveGCard from "./verizonComponents/FiveGCard";
import Iphone15Card from "./verizonComponents/iphone15Card";
import CoverageMap from "./verizonComponents/ CoverageMap";
import { motion, AnimatePresence } from "framer-motion";
import { chatComponentVariants } from "@/components/animations";

function ComponentManager({ config }) {
  const [showUltimatePlan, setShowUltimatePlan] = useState(config.ultimatePlan);
  const [showAppleOneActivation, setShowAppleOneActivation] = useState(
    config.appleOneActivation
  );
  const [showScreenRepair, setShowScreenRepair] = useState(config.screenRepair);
  const [showChangeAddress, setShowChangeAddress] = useState(
    config.changeAddress
  );
  const [showDataCard, setShowDataCard] = useState(config.dataCard);
  const [showResetPasswordCard, setShowResetPasswordCard] = useState(
    config.resetPasswordCard
  );
  const [showS23Card, setShowS23Card] = useState(config.s23Card);
  const [showSocialCard1, setShowSocialCard1] = useState(config.socialCard1);
  const [showSocialCard2, setShowSocialCard2] = useState(config.socialCard2);
  const [showSocialCard3, setShowSocialCard3] = useState(config.socialCard3);
  const [showPixel8Card, setShowPixel8Card] = useState(config.pixel8Card);
  const [showFiveGCard, setShowFiveGCard] = useState(config.fiveGCard);
  const [showCoverageMap, setShowCoverageMap] = useState(config.coverageMap);
  const [showiphone15Card, setShowiphone15Card] = useState(config.iphone15Card);
  const [firstComponentRendered, setFirstComponentRendered] = useState(false);

  useEffect(() => {
    setShowUltimatePlan(config.ultimatePlan);
    setShowAppleOneActivation(config.appleOneActivation);
    setShowScreenRepair(config.screenRepair);
    setShowChangeAddress(config.changeAddress);
    setShowDataCard(config.dataCard);
    setShowResetPasswordCard(config.resetPasswordCard);
    setShowS23Card(config.s23Card);
    setShowSocialCard1(config.socialCard1);
    setShowSocialCard2(config.socialCard2);
    setShowSocialCard3(config.socialCard3);
    setShowPixel8Card(config.pixel8Card);
    setShowFiveGCard(config.fiveGCard);
    setShowCoverageMap(config.coverageMap);
    setShowiphone15Card(config.iphone15Card);
  }, [config]);

  return (
    <motion.div className="flex flex-row w-full justify-center space-x-4 h-96 2xl:h-[450px] ">
      {showSocialCard1 &&  <motion.div className="w-1/4" initial="hidden"
      animate={showSocialCard1 ? "visible" : "hidden"}
      variants={chatComponentVariants}>  <SocialCard1 /></motion.div>}
      {showSocialCard2 &&  <motion.div className="w-1/4" initial="hidden"
      animate={showSocialCard2 ? "visible" : "hidden"}
      variants={chatComponentVariants}> <SocialCard2 /></motion.div>}
      {showSocialCard3 &&  <motion.div className="w-1/4" initial="hidden"
      animate={showSocialCard3 ? "visible" : "hidden"}
      variants={chatComponentVariants}> <SocialCard3 /></motion.div>}
      {showPixel8Card &&  <motion.div className="w-1/4" initial="hidden"
      animate={showPixel8Card ? "visible" : "hidden"}
      variants={chatComponentVariants}> <Pixel8Card /></motion.div>}
      {showFiveGCard &&  <motion.div className="w-1/4" initial="hidden"
      animate={showFiveGCard ? "visible" : "hidden"}
      variants={chatComponentVariants}> <FiveGCard /></motion.div>}
      {showUltimatePlan &&  <motion.div className="w-1/4" initial="hidden"
      animate={showUltimatePlan ? "visible" : "hidden"}
      variants={chatComponentVariants}> <UltimatePlanCard /></motion.div>}
      {showAppleOneActivation &&  <motion.div className="w-1/4" initial="hidden"
      animate={showAppleOneActivation ? "visible" : "hidden"}
      variants={chatComponentVariants}> <AppleOneActivationCard /></motion.div>}
      {showScreenRepair &&  <motion.div className="w-1/4" initial="hidden"
      animate={showScreenRepair ? "visible" : "hidden"}
      variants={chatComponentVariants}> <ScreenRepairCard /></motion.div>}
      {showChangeAddress &&  <motion.div className="w-1/4" initial="hidden"
      animate={showChangeAddress ? "visible" : "hidden"}
      variants={chatComponentVariants}> <ChangeAddressCard /></motion.div>}
      {showDataCard &&  <motion.div className="w-1/4" initial="hidden"
      animate={showDataCard ? "visible" : "hidden"}
      variants={chatComponentVariants}> <DataCard /></motion.div>}
      {showResetPasswordCard &&  <motion.div className="w-1/4" initial="hidden"
      animate={showResetPasswordCard ? "visible" : "hidden"}
      variants={chatComponentVariants}> <ResetPasswordCard /></motion.div>}
      {showS23Card &&  <motion.div className="w-1/4" initial="hidden"
      animate={showS23Card ? "visible" : "hidden"}
      variants={chatComponentVariants}> <S23Card /></motion.div>}
      {showCoverageMap &&  <motion.div className="w-1/4" initial="hidden"
      animate={showCoverageMap ? "visible" : "hidden"}
      variants={chatComponentVariants}> <CoverageMap /></motion.div>}
   </motion.div> 
  );
}

export default ComponentManager;
