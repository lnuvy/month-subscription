import React from "react";

const Home = () => {
  return (
    <div className="shadow-lg w-full radius-4 bd-colors-base-100">
      내부
      {Array.from({ length: 100 }).map(() => (
        <h1 className="fs-20">123</h1>
      ))}
    </div>
  );
};

export default Home;
