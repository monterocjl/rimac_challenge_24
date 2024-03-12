import { DesktopSteps } from "./components/DesktopSteps/Component";
import { MobileSteps } from "./components/MobileSteps/Component";
import { StepsProps } from "./interfaces";
import "./styles.scss";

export const Steps = ({ step }: StepsProps) => {
  return (
    <div className='steps-container'>
      <DesktopSteps step={step} />
      <MobileSteps step={step} />
    </div>
  );
};
