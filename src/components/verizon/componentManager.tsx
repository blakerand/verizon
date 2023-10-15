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
import CoverageMap from "./verizonComponents/ CoverageMap";

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
  }, [config]);

  return (
    <div className="flex flex-row space-x-4 mx-20 max-h-[550px] justify-center">
      {showSocialCard1 && <SocialCard1 />}
      {showSocialCard2 && <SocialCard2 />}
      {showSocialCard3 && <SocialCard3 />}
      {showPixel8Card && <Pixel8Card />}
      {showFiveGCard && <FiveGCard />}
      {showUltimatePlan && <UltimatePlanCard />}
      {showAppleOneActivation && <AppleOneActivationCard />}
      {showScreenRepair && <ScreenRepairCard />}
      {showChangeAddress && <ChangeAddressCard />}
      {showDataCard && <DataCard />}
      {showResetPasswordCard && <ResetPasswordCard />}
      {showS23Card && <S23Card />}
      {showCoverageMap && <CoverageMap />}
    </div>
  );
}

export default ComponentManager;
