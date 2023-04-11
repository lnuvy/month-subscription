import Template from "@/components/layout/template";
import React from "react";

const AddPage = () => {
  return <div>add</div>;
};

AddPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Template.default>{page}</Template.default>;
};

export default AddPage;
