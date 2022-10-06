import styles from "../../styles/Posts.module.scss";

export default function Activity1() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React 세미나 강의 제작</h1>
      <div className={styles.contents}>
        <p>
          교내 웹 개발 동아리인 <strong>EFUB</strong>에서 프론트엔드 리드로
          합격하여 한 번의 세미나를 준비하고 주최하였습니다.
          <br />
          저는 <strong>React 기초</strong>를 주제로 세미나를 준비하였고, 해당
          과정에서 부족했던 React 기초 지식을 재정립할 수 있었던 기회였습니다.
          이외에도 다른 리드분들이 준비하신 세미나를 통해 Router, Hooks 등
          다양한 개념에 대해 배울 수 있었습니다.
          <br />
          또한, 토이 프로젝트 및 웹 개발 프로젝트 진행 중 프론트엔드 인턴
          부원분들을 도와주며 저 역시 함께 성장할 수 있는 시간이었습니다.
        </p>
      </div>
      <h1 className={styles.category}>Contents</h1>
      <div className={styles.contents}>
        <h2>01. React란?</h2>
        <li>why React?</li>
        <li>React의 장점</li>
        <h2>02. React 개발 준비</h2>
        <li>패키지 설치</li>
        <li>프로젝트 생성</li>
        <li>Git 연결</li>
        <h2>03. React 특징1</h2>
        <li>Virtual Dom</li>
        <li>JSX</li>
        <li>Component & Props</li>
        <h2>04. React 특징2</h2>
        <li>함수형 vs 클래스형</li>
        <li>State</li>
        <li>Life Cycle</li>
      </div>
      <h1 className={styles.category}>Video</h1>
      <iframe
        width="600"
        height="360"
        src="https://www.youtube.com/embed/pKe66hwKAtQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
