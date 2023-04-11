import Template from "@/components/layout/template";
import Home from "@/components/pages/home";

const HomePage = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Template.default>{page}</Template.default>;
};

export default HomePage;
