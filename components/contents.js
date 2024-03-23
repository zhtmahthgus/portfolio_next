import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contents.module.scss";

const Content0 = (
  <div className={styles.content0}>
    <h1 className={styles.title}>SoHyun&apos;s Universe</h1>
    <p className={styles.animated}>
      *Please Put Your Mouse On Titles To See Details*
    </p>
    <div className={styles.content0Container}>
      <hr className={styles.planetLine} />
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="/2_sun.png"
            alt="안녕하세요"
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
            src="/2_mercury.png"
            alt="개발자 도구를 키셨나요"
            width={50}
            height={50}
          />
          <p className={styles.tooltipImageText}>
            직업
            <br />
            <br />
            애플리케이션 개발자
          </p>
        </div>
      </>
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="/2_venus.png"
            alt="아니면 또 이미지가 깨졌나요"
            width={100}
            height={100}
          />
          <p className={styles.tooltipImageText}>
            관심 영역
            <br />
            <br />
            Application 및 SW 시스템 기획, 개발
          </p>
        </div>
      </>
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="/2_earth.png"
            alt="제 코드 부끄럽네요"
            width={90}
            height={90}
          />
          <p className={styles.tooltipImageText}>
            취미
            <br />
            <br />
            걸어서 동네 탐방, 일기 작성
          </p>
        </div>
      </>
      <>
        <div className={styles.tooltipImage}>
          <Image
            className={styles.tooltipImagefile}
            src="/2_jupiter.png"
            alt="지구 다음은 화성인거 알아요"
            width={150}
            height={150}
          />
          <p className={styles.tooltipImageText}>
            Update Note
            <br />
            <br />
            v1.0.0 - 2022.10.10
            <br />
            v1.1.0 - 2024.03.23
          </p>
        </div>
      </>
    </div>
  </div>
);
const Content1 = (
  <div className={styles.container}>
    <p className={styles.category}>High School</p>
    <hr className={styles.line} />
    <div className={styles.content1Container}>
      <Image
        className={styles.profile}
        src="/3_gyfl.png"
        alt="GYFL Logo"
        width={75}
        height={75}
      />
      <div style={{ marginLeft: "10px" }}>
        <p className={styles.title}>고양외국어고등학교 일본어학과</p>
        <p className={styles.date}>2015.03 - 2018.02</p>
      </div>
    </div>
    <p className={styles.category}>University</p>
    <hr className={styles.line} />
    <div className={styles.content1Container}>
      <Image
        className={styles.profile}
        src="/3_ewha.png"
        alt="EWHA Logo"
        width={75}
        height={75}
      />
      <div style={{ marginLeft: "10px" }}>
        <p className={styles.title}>
          <strong>이화여자대학교</strong> 소프트웨어학부 컴퓨터공학전공
        </p>
        <p className={styles.date}>
          2019.03 - 2023.02
        </p>
      </div>
    </div>
  </div>
);
const Content2 = (
  <div className={styles.container}>
    <p className={styles.category}>Wonik Robotics</p>
    <hr className={styles.line} />
    <div className={styles.content1Container}>
      <Image
        className={styles.profile}
        src="/4_wonik.png"
        alt="Wonik Logo"
        width={75}
        height={75}
      />
      <div style={{ marginLeft: "10px" }}>
        <p className={styles.date}>
          2023.01 -
        </p>
        <p className={styles.title}>
          개발본부 어플리케이션팀
        </p>
      </div>
    </div>
  </div>
);
const Content3 = (
  <div className={styles.container}>
    <p className={styles.animated}>
      *Please Put Your Mouse On Titles To See Details*
    </p>
    <p className={styles.category}>Language</p>
    <hr className={styles.line} />
    <p className={styles.title}>Toeic 920</p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "18.6rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.date}>2022.03.13</p>
    <p className={styles.title}>Toeic Speaking IM3</p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "12rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.date}>2022.09.17</p>
    <p className={styles.category}>Coding Skills</p>
    <hr className={styles.line} />
    <p className={styles.title}>
      <span className={styles.tooltip}>
        HTML/CSS, JavaScript
        <span className={styles.tooltipText}>프로젝트 경험 다수, 업무 시 주 활용 언어</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "10rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.title}>
      <span className={styles.tooltip}>
        Python
        <span className={styles.tooltipText}>업무 시 부분 활용</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "7rem" }}>
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
      <div style={{ width: "5rem" }}>
        <div className={styles.graph} />
      </div>
    </div>
    <p className={styles.title}>
      <span className={styles.tooltip}>
        React
        <span className={styles.tooltipText}>팀 프로젝트 경험 다수</span>
      </span>
    </p>
    <div className={styles.graphWrapper}>
      <div style={{ width: "10rem" }}>
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
      <div style={{ width: "5rem" }}>
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
    <p className={styles.title}>Github, Figma, Jira, Slack, Notion</p>
  </div>
);
const Content5 = (
  <div className={styles.container}>
    <p className={styles.animated}>
      *Please Click Images To Go To Links*
    </p>
    <p className={styles.category}>Project Code</p>
    <hr className={styles.line} />
    <a href="https://github.com/zhtmahthgus">
      <Image
        className={styles.profile}
        src="/5_github.png"
        alt="GitHub Logo"
        width={90}
        height={48}
      />
    </a>
    <p className={styles.category}>Blog</p>
    <hr className={styles.line} />
    <a href="https://kimalgo.tistory.com/" style={{marginLeft: '20px'}}>
      <Image
        className={styles.profile}
        src="/5_tistory.png"
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
    { id: 2, title: "Careers", content: Content2 },
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
