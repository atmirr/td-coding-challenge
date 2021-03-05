import { useEffect, useState } from 'react';

function useFetchData(endpoint) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(endpoint);
      // Set the error if the status code was higher than 400
      if (res.status >= 400) {
        setError(res.statusText);
      } else {
        const response = await res.json();
        setError(null);
        setData(response);
      }
    };

    fetchData();
  }, []);

  return { data, error };
}

export default useFetchData;
