import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./servicesSection";
import Icon1 from '../../images/mobile-pay.png' 
import Icon2 from '../../images/savings.png' 
import Icon3 from '../../images/work-office.png' 

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help you reduce your fees and increase your overal revenue.
              We help you reduce your fees and increase your overal revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              Your phone/computer is your office.You can access your bank
              account online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premuim Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back
              Unlock our special membership card that returns 5% cash back
              today.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
