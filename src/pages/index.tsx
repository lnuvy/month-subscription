import Template from "@/components/layout/template";
import { useState } from "react";

const Home = () => {
  const [isList, setIsList] = useState(true);

  return (
    <>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
      <h1 className="fs-20">안녕</h1>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Template.default>{page}</Template.default>;
};

export default Home;
