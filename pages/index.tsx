import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainPageController from "../src/core/main_page/main_page_controller";

const Home: NextPage = () => {
  return (
    <>
      <MainPageController />
    </>
  );
};

export default Home;
