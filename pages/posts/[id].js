import Head from "next/head";
import { useState } from "react";
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

const Description = ({ data }) => {
  return (
    <>
      <h1 className={styles.category}>Description</h1>
      <p className={styles.description}>{data.description}</p>
    </>
  );
};

const Detail = ({ data }) => {
  return (
    <>
      <h1 className={styles.category}>Detail</h1>
      <div
        className={styles.contents}
        dangerouslySetInnerHTML={{ __html: data.contentHtml }}
      />
    </>
  );
};

const Video = ({ data }) => {
  return (
    <>
      <h1 className={styles.category}>Video</h1>
      <iframe
        width="600"
        height="360"
        src={data.video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </>
  );
};

const Images = ({ data }) => {
  return (
    <>
      <h1 className={styles.category}>Images</h1>
      <ImageSliders image={data.image} />
    </>
  );
};

const Link = ({ data }) => {
  return (
    <>
      <h1 className={styles.category}>Link</h1>
      <a href={data.link} className={styles.link}>
        Project Link
      </a>
    </>
  );
};
export default function Post({ postData }) {
  const [option, setOption] = useState(0);
  const PageContent = [
    { id: 0, title: "Description", content: <Description data={postData} /> },
    { id: 1, title: "Detail", content: <Detail data={postData} /> },
    { id: 2, title: "Video", content: <Video data={postData} /> },
    { id: 3, title: "Images", content: <Images data={postData} /> },
    { id: 4, title: "Link", content: <Link data={postData} /> },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={styles.title}>{postData.title}</h1>
      <div className={styles.buttonContainer}>
        {PageContent.map((i) =>
          option === i.id ? (
            <div key={i.id}>
              <button
                className={styles.optionButton_selected}
                onClick={() => {
                  setOption(i.id);
                }}
              />
              <span className={styles.optionTitle_selected}>{i.title}</span>
            </div>
          ) : (
            <div key={i.id}>
              <button
                className={styles.optionButton}
                key={i.id}
                onClick={() => {
                  setOption(i.id);
                }}
              />
              <span className={styles.optionTitle}>{i.title}</span>
            </div>
          )
        )}
      </div>
      {PageContent.map((i) =>
        option === i.id ? (
          <div key={i.id} className={styles.contentContainer}>
            {i.content}
          </div>
        ) : null
      )}
    </div>
  );
}
