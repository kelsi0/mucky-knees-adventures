import React, {useEffect, useState} from 'react';
import SingleActivity from "./SingleActivity";
import useFetchActivities from '../../hooks/useFetchActivities';

const query = `
{
    activityCollection {
        items {
          title
          icon
          description
        }
    }
}`

const Activities = () => {
  const {data, fetchData} = useFetchActivities();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(query);
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  if (isLoading || !data) {
    return "Loading...";
  }

  return (
    <section className="page-section" id="Skills">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Activities</h2>
          <h3 className="section-subheading text-muted">All the things we do!</h3>
        </div>
        <div className="row text-center">
          {data.map((activity, index) => {
            return <SingleActivity {...activity} key={index}/>
          })}
        </div>
      </div>
    </section>
  );
}

export default Activities;