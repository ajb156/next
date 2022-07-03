import Head from "next/head";
import Link from "next/link";
import styles from "./MainLayout.module.css";
import { NavBar } from "../NavBar";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <html lang='es' />
        <title>Curso Next</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
