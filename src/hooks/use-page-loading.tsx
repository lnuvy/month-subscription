import { Router } from "next/router";
import { useEffect, useState } from "react";

const usePageLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = () => {
      console.log("start", start);
      setLoading(true);
    };

    const end = () => {
      console.log("end", end);
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return loading;
};

export default usePageLoading;
