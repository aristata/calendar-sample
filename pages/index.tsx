import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/calendar");
  }, [router]);

  return <div>Hello world</div>;
};

export default Home;
