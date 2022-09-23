import styles from "../../styles/Posts.module.scss";

export default function Activity1() {
  return (
    <div className={styles.container}>
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
