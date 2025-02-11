import { useState } from "react";
import { axiosPublicInstance } from "../service/axiosPublicInstance";

export default function useApi({ url, method = "GET" }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async ({ payload, header = {} }) => {
    const headers = {
      "Content-Type": "application/json",
      ...header,
    };
    setLoading(true);
    try {
      const response = await axiosPublicInstance({
        url,
        method,
        data: payload,
        headers,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
}
