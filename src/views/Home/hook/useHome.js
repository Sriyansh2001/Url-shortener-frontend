import { useEffect, useState } from "react";
import { END_POINTS } from "../../../constants/endpoints";
import useApi from "../../../hooks/useApi";
import { useFireworks } from "../../../provider/FireworkProvider";

export default function useHome() {
  const { data, loading, error, fetchData } = useApi({
    url: END_POINTS.CREATE_SHORT_URL,
    method: "POST",
    onSuccess: () => startFireworks(),
  });
  const [inputUrl, setInputUrl] = useState("");
  const [createdUrl, setCreatedUrl] = useState("");
  const { startFireworks } = useFireworks();

  useEffect(() => {
    if (data?.shortUrl) {
      setCreatedUrl(data.shortUrl);
    }
  }, [data]);

  const removeCreatedUrl = () => {
    setCreatedUrl("");
  };

  const createShortUrl = () => {
    fetchData({ payload: { url: inputUrl } });
  };

  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  return {
    inputUrl,
    createdUrl,
    handleInputChange,
    createShortUrl,
    data,
    loading,
    removeCreatedUrl,
    error,
  };
}
