import {
  AiFillHome,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
} from "react-icons/ai";

export const BOTTOM_TABS = [
  {
    id: 1,
    title: "홈",
    path: "/",
    normal: <AiOutlineHome size={24} />,
    selected: <AiFillHome size={24} />,
  },
  {
    id: 2,
    title: "추가",
    path: "/add",
    normal: <AiOutlinePlusCircle size={24} />,
    selected: <AiFillPlusCircle size={24} />,
  },
  {
    id: 3,
    title: "내정보",
    path: "/my",
    normal: <AiOutlineInfoCircle size={24} />,
    selected: <AiFillInfoCircle size={24} />,
  },
];

export type TabTitles = typeof BOTTOM_TABS[number]["title"];
