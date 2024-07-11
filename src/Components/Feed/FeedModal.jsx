import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(
    () => {
      async function fetchPhoto() {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
      }
      fetchPhoto();
    },
    [photo, request]
  );

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
