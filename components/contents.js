import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contents.module.scss";

const Content0 = (
  <div>
    <p className={styles.title}>2000.02.02</p>
  </div>
);
const Content1 = (
  <div>
    <p className={styles.title}>고양외국어고등학교</p>
    <p className={styles.date}>2015.03 - 2018.02</p>
    <p className={styles.title}>이화여자대학교</p>
    <p className={styles.date}>
      2019.03 - 2023.02{"("}예정{")"}
    </p>
  </div>
);
const Content2 = (
  <div>
    <p className={styles.title}>토익 920점</p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "18.6rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.date}>2022.03</p>
    <p className={styles.title}>토익 스피킹 IM3</p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "12rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.date}>2022.09</p>
  </div>
);
const Content3 = (
  <div>
    <p className={styles.animated}>
      *Please Put Your Mouse On Titles To See Details*
    </p>
    <p className={styles.category}>Coding Skills</p>
    <hr className={styles.line} />
    <p className={styles.title}>
      <span className={styles.tooltip}>
        HTML/CSS, JavaScript
        <span className={styles.tooltipText}>프로젝트 경험 다수</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "18rem" }}>
        <div className={styles.graph} />
      </div>
    </div>

    <p className={styles.title}>
      <span className={styles.tooltip}>
        Python, C, Java
        <span className={styles.tooltipText}>학업 레벨 수준</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "10rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.category}>Framework/Library</p>
    <hr className={styles.line} />
    <p className={styles.title}>
      <span className={styles.tooltip}>
        React
        <span className={styles.tooltipText}>팀 프로젝트 경험 다수</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "18rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.title}>
      <span className={styles.tooltip}>
        ReactNative, Django, Tensorflow,
        <span className={styles.tooltipText}>팀 프로젝트 경험 1회</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "10rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.title}>
      <span className={styles.tooltip}>
        Next.js
        <span className={styles.tooltipText}>개인 프로젝트 1회</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "5rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.category}>Deployment</p>
    <hr className={styles.line} />
    <p className={styles.title}>Github.io, Heroku, Netlify</p>
    <p className={styles.category}>Collaboration Tools</p>
    <hr className={styles.line} />
    <p className={styles.title}>Github, Slack, Notion</p>
  </div>
);
const Content5 = (
  <div className={styles.content5}>
    <a href="https://github.com/zhtmahthgus">
      <Image
        className={styles.profile}
        src="/GitHub-Logo.png"
        alt="GitHub Logo"
        width={85}
        height={48}
      />
    </a>
    <a href="https://kimalgo.tistory.com/">
      <Image
        className={styles.profile}
        src="/tistory.png"
        alt="Tistory Logo"
        width={48}
        height={48}
      />
    </a>
  </div>
);

export default function Contents({ allPostsData }) {
  const [option, setOption] = useState(0);
  const [isVisible, setIsVisible] = useState(1);
  const Content4 = (
    <div>
      <p className={styles.animated}>*Please Click Titles To See Details*</p>
      {allPostsData.map(({ id, date, title }) => (
        <div key={id}>
          <Link href={`/posts/${id}`}>
            <a className={styles.link}>{title}</a>
          </Link>
          <br />
          <p className={styles.date}>{date}</p>
        </div>
      ))}
      <p className={styles.category}>Activities</p>
      <hr className={styles.line} />
      <Link href={`/posts/activity1`}>
        <a className={styles.link}>React 세미나 강의 제작</a>
      </Link>
    </div>
  );
  const options = [
    { id: 0, title: "About Me", content: Content0 },
    { id: 1, title: "Graduation", content: Content1 },
    { id: 2, title: "Language", content: Content2 },
    { id: 3, title: "Skills", content: Content3 },
    { id: 4, title: "Projects", content: Content4 },
    { id: 5, title: "Links", content: Content5 },
  ];
  return (
    <div>
      {options.map((i) =>
        option === i.id ? (
          <button
            className={styles.optionButton_selected}
            key={i.id}
            onClick={() => {
              setOption(i.id);
              setIsVisible(!isVisible);
            }}
          >
            {i.title}
          </button>
        ) : (
          <button
            className={styles.optionButton}
            key={i.id}
            onClick={() => {
              setOption(i.id);
              setIsVisible(!isVisible);
            }}
          >
            {i.title}
          </button>
        )
      )}
      {options.map((i) =>
        option === i.id ? (
          <div key={i.id} className={styles.container}>
            {i.content}
          </div>
        ) : null
      )}
    </div>
  );
}
