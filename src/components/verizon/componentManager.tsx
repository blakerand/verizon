import React, { useState } from 'react';


import UltimatePlanCard from './verizonComponents/UltimatePlanCard';
import AppleOneActivationCard from './verizonComponents/AppleOneActivationCard';
import ScreenRepairCard from './verizonComponents/ScreenRepairCard';



function ComponentManager({ config }) {
  const [showUltimatePlan, setShowUltimatePlan] = useState(config.ultimatePlan);
  const [showAppleOneActivation, setShowAppleOneActivation] = useState(config.appleOneActivation);
  const [showScreenRepair, setShowScreenRepair] = useState(config.screenRepair);

  return (
    <div className="flex space-x-4 max-w-full mx-10 ">
      {showUltimatePlan && <UltimatePlanCard />}
      {showAppleOneActivation && <AppleOneActivationCard />}
      {showScreenRepair && <ScreenRepairCard />}
    </div>
  );
}

export default ComponentManager;
