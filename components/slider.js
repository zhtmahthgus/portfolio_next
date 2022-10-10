import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Slider.module.scss";

const Sliders = () => {
  const [isVisible, setIsVisible] = useState(0);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.content}>
          <h2>안녕하세요, 김소현의 포트폴리오입니다:{")"}</h2>
          <p>
            이 사이트는 개인 포트폴리오를 위해 Next.js로 제작한 웹사이트 입니다.
            저의 정보를 더 알고싶으시다면 아래로 스크롤해주세요.
          </p>
        </div>
        <div className={styles.content}>
          <h2>하나하나 쌓아, 나아가는 개발자</h2>
          <p>
            우연한 계기로 코딩에 대한 매력을 느낀 후 컴퓨터 공학 전공으로
            진학하여 개발자의 꿈을 키워나갔습니다. 특히 웹 프론트엔드 개발자를
            목표로 한걸음씩 나아가고 있습니다. 항상 어떠한 경험이든 배우려는
            자세로 임하고 있습니다.
          </p>
        </div>
        <div className={styles.content}>
          <button
            className={styles.Contactbutton}
            onClick={() => setIsVisible((prev) => !prev)}
          >
            Contact
          </button>
        </div>
      </Slider>
      {isVisible ? (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button
              className={styles.Closebutton}
              onClick={() => setIsVisible(0)}
            >
              X
            </button>
          </div>
          <div className={styles.modalContent}>Email: 02sh02@naver.com</div>
        </div>
      ) : null}
    </div>
  );
};

export default Sliders;
