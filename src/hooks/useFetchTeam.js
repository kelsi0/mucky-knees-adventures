import { useState } from 'react';

const useFetchTeam = () => {
  const [data, setData] = useState(null);

  async function fetchData(query) {
    const response = await fetch('/.netlify/functions/contentful', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();
    setData(result);
  }

  return {
    fetchData,
    data
  }
}

export default useFetchTeam;