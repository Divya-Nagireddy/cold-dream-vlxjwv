import { useEffect, useState } from "react";
import { getData } from "../service/api";

export const useFetch = () => {
  /// ....
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getData();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [data]);
  return { data, loading };
};
