import {
  Speed,
  WbIncandescent,
  RocketLaunch,
  HourglassBottom,
} from "@mui/icons-material";
import { services, servicesSoon } from "@/utils/servicesList";
import Image from "next/image";

const Techs = () => {
  return (
    <div className="w-9/12 mx-auto py-10">
      <h3 className="text-5xl pt-10 font-semibold text-center">
        <span className="border-b-4 border-primary-main">Tech Stack</span>
      </h3>
      <div className="flex flex-wrap gap-20 items-center justify-center mt-20">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-20 w-20 rounded-lg p-2 text-white">
              <Image src={item.icon} alt={item.title} width={64} />
            </div>
            <p className="text-xl font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
      <h6 className="text-3xl pt-10 font-semibold text-center my-10">
        Soon... <HourglassBottom className="text-3xl" />
      </h6>
      <div className="flex flex-wrap gap-20 items-center justify-center ">
        {servicesSoon.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-20 w-20 rounded-lg p-2 text-white">
              <Image src={item.icon} alt={item.title} width={64} />
            </div>
            <p className="text-xl font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
