import Template from "@/components/layout/template";
import { useState } from "react";

const Home = () => {
  const [isList, setIsList] = useState(true);

  return <>아ㅓㄴ녕하세요</>;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Template.default>{page}</Template.default>;
};

export default Home;
