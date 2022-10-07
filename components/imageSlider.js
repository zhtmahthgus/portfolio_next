import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/ImageSlider.module.scss";

const ImageSliders = ({ image }) => {
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
  };
  return image ? (
    <div className={styles.container}>
      <Slider {...settings}>
        {image.map((i, j) => (
          <div key={j} className={styles.content}>
            <Image
              src={i}
              alt="project image"
              layout="fill"
              placeholder="blur"
              blurDataURL="https://via.placeholder.com/600x300"
            />
          </div>
        ))}
      </Slider>
    </div>
  ) : null;
};

export default ImageSliders;
