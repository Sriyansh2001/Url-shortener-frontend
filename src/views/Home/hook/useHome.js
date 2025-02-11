import { useState } from "react";
import { END_POINTS } from "../../../constants/endpoints";
import useApi from "../../../hooks/useApi";

export default function useHome() {
  const { data, loading, error, fetchData } = useApi({
    url: END_POINTS.CREATE_SHORT_URL,
    method: "POST",
  });
  const [inputUrl, setInputUrl] = useState("");

  const createShortUrl = () => {
    fetchData({ payload: { url: inputUrl } });
  };

  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  return { inputUrl, handleInputChange, createShortUrl, data, loading, error };
}
