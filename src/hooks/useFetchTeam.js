import {useState} from 'react';
import {fetchContentful} from '../utils/contentful';

const useFetchTeam = () => {
  const [data, setData] = useState(null);

  async function fetchData(query) {
    const fetch = await fetchContentful(query);
    setData(fetch);

  }

  return {
    fetchData,
    data
  }
}

export default useFetchTeam;