import Template from "@/components/layout/template";

const MyPage = () => {
  return <div>MyPage</div>;
};

MyPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Template.default>{page}</Template.default>;
};

export default MyPage;
