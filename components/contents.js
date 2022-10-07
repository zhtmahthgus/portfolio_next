import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contents.module.scss";

const Content0 = (
  <div className={styles.content0}>
    <h1 className={styles.title}>SoHyun's Universe</h1>
    <p className={styles.animated}>
      *Please Put Your Mouse On Titles To See Details*
    </p>
    <div className={styles.content0Container}>
      <hr className={styles.planetLine} />
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="https://imgur.com/Otkn2rv.png"
            alt="Sun"
            width={200}
            height={200}
          />
          <p className={styles.tooltipImageText}>
            생일
            <br />
            <br />
            2000.02.02
          </p>
        </div>
      </>
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="https://imgur.com/3XjosRE.png"
            alt="Mercury"
            width={50}
            height={50}
          />
          <p className={styles.tooltipImageText}>
            취미
            <br />
            <br />
            산책, 운동, 게임, 퍼즐
          </p>
        </div>
      </>
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="https://imgur.com/BI1YgtG.png"
            alt="Venus"
            width={100}
            height={100}
          />
          <p className={styles.tooltipImageText}>
            목표
            <br />
            <br />
            엄청 능력 짱인 개발자라 모두가 모셔가고 싶은데 나는 몰라
          </p>
        </div>
      </>
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="https://imgur.com/kA678Bs.png"
            alt="Earth"
            width={90}
            height={90}
          />
          <p className={styles.tooltipImageText}>
            행복할 때
            <br />
            <br />
            내가 상상한 대로 화면이 완성되는 과정을 볼 때ㅎㅎ
          </p>
        </div>
      </>
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="https://imgur.com/WnlbltH.png"
            alt="지구 다음은 화성인거 알아요"
            width={150}
            height={150}
          />
          <p className={styles.tooltipImageText}>
            화날 때
            <br />
            <br />
            원인모를 오류.
          </p>
        </div>
      </>
    </div>
  </div>
);
const Content1 = (
  <div className={styles.container}>
    <div className={styles.content1Container}>
      <Image
        className={styles.profile}
        src="https://imgur.com/6WzsX1b.png"
        alt="GYFL Logo"
        width={75}
        height={75}
      />
      <div style={{ marginLeft: "10px" }}>
        <p className={styles.title}>고양외국어고등학교 일본어학과</p>
        <p className={styles.date}>2015.03 - 2018.02</p>
      </div>
    </div>
    <div className={styles.content1Container}>
      <Image
        className={styles.profile}
        src="https://imgur.com/j2WkQVC.png"
        alt="EWHA Logo"
        width={75}
        height={75}
      />
      <div style={{ marginLeft: "10px" }}>
        <p className={styles.title}>
          <strong>이화여자대학교</strong> 소프트웨어학부 컴퓨터공학전공
        </p>
        <p className={styles.date}>
          2019.03 - 2023.02{"("}예정{")"}
        </p>
      </div>
    </div>
  </div>
);
const Content2 = (
  <div className={styles.container}>
    <p className={styles.category}>English</p>
    <hr className={styles.line} />
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
  <div className={styles.container}>
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
        ReactNative, Django, Pytorch
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
  <div className={styles.container}>
    <div className={styles.content5}>
      <a href="https://github.com/zhtmahthgus">
        <Image
          className={styles.profile}
          src="https://imgur.com/9qW00rC.png"
          alt="GitHub Logo"
          width={85}
          height={48}
        />
      </a>
      <a href="https://kimalgo.tistory.com/">
        <Image
          className={styles.profile}
          src="https://imgur.com/uTYmQLd.png"
          alt="Tistory Logo"
          width={48}
          height={48}
        />
      </a>
    </div>
  </div>
);

export default function Contents({ allPostsData }) {
  const [option, setOption] = useState(0);
  const [isVisible, setIsVisible] = useState(1);
  const Content4 = (
    <div className={styles.container}>
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
      <p className={styles.category}>Toy Projects</p>
      <hr className={styles.line} />
      <p className={styles.title}>
        <span className={styles.tooltip}>
          Twitter 페이지 클론 코딩
          <span className={styles.tooltipText}>
            백엔드 팀과 협업하여 React로 글 등록, 삭제, 검색 기능 구현
          </span>
        </span>
      </p>
      <p className={styles.title}>
        <span className={styles.tooltip}>
          교내 랜덤 펜팔 앱 팀 프로젝트
          <span className={styles.tooltipText}>
            React-Native로 디자인한 화면 퍼블리싱
          </span>
        </span>
      </p>
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
        option === i.id ? <div key={i.id}>{i.content}</div> : null
      )}
    </div>
  );
}
