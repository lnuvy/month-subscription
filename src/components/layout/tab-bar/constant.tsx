import {
  AiFillHome,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
} from "react-icons/ai";

export const ICONS = [
  {
    id: 1,
    title: "홈",
    normal: <AiOutlineHome size={24} />,
    selected: <AiFillHome size={24} />,
  },
  {
    id: 2,
    title: "추가",
    normal: <AiOutlinePlusCircle size={24} />,
    selected: <AiFillPlusCircle size={24} />,
  },
  {
    id: 3,
    title: "내정보",
    normal: <AiOutlineInfoCircle size={24} />,
    selected: <AiFillInfoCircle size={24} />,
  },
];
