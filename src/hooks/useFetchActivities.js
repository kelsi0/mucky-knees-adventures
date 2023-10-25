import {useState} from 'react';
import {fetchContentful} from '../utils/contentful';

const useFetchActivities = () => {
  const [data, setData] = useState(null);

  async function fetchData(query) {
    const fetch = await fetchContentful(query);
    setData(fetch.activityCollection.items);
  }

  return {
    fetchData,
    data
  }
}

export default useFetchActivities;