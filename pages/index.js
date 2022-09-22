import Head from "next/head";
import Image from "next/image";
import Contents from "../components/contents";
import Sliders from "../components/slider";
import { getSortedPostsData } from "../lib/posts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useScrollSnap from "react-use-scroll-snap";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";

gsap.registerPlugin(ScrollTrigger);

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const revealRef = useRef();
  const scrollRef = useRef();
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 10 });
  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `section`,
          trigger: revealRef.current,
          toggleActions: "restart none restart none",
        },
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={scrollRef}>
      <Head>
        <title>KimSH Portfolio</title>
        <meta name="description" content="Next.js로 제작된 포트폴리오입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.pagebg}></div>
        <div className={styles.animationwrapper}>
          <div className={`${styles.particle} ${styles.particle1}`}></div>
          <div className={`${styles.particle} ${styles.particle2}`}></div>
        </div>
        <h1 ref={revealRef}>KimSH&apos;s Portfolio</h1>
        <div>
          <Image
            className={styles.profile}
            src="/profile.png"
            alt="Next.js Logo"
            width={125}
            height={125}
          />
        </div>
        <Sliders />
      </div>
      <div className={styles.contentContainer}>
        <Contents allPostsData={allPostsData} />
      </div>
    </div>
  );
}
