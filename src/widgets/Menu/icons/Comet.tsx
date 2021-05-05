import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
     <svg viewBox="0 0 24 24" {...props}>
    <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)">
      <path d="M163 194 l-33 -25 0 22 c0 21 -6 18 -50 -26 -59 -59 -68 -103 -25 -131 38 -25 70 -11 110 49 39 58 42 67 19 67 -13 0 -12 6 6 35 26 41 17 44 -27 9z m-48 -104 c0 -18 -6 -26 -23 -28 -27 -4 -40 22 -22 44 19 22 45 13 45 -16z" />
    </g>
  </svg>
  );
};

export default Icon;
