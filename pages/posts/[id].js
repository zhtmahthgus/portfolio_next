import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import ImageSliders from "../../components/imageSlider";
import styles from "../../styles/Posts.module.scss";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={styles.title}>{postData.title}</h1>
      <div
        className={styles.contents}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      <h1 className={styles.category}>Video</h1>
      <iframe
        width="600"
        height="360"
        src={postData.video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <h1 className={styles.category}>Images</h1>
      <ImageSliders image={postData.image} />
      <a href={postData.link} className={styles.link}>
        Project Link
      </a>
    </div>
  );
}
