import React, {useEffect, useState} from 'react';
import useFetchHero from '../hooks/useFetchHero';

// Re-Usabled components
import Header from '../components/common/Header';
import Activities from "../components/common/Activities";

const query = `
{	
  hero (id: "5VmotV19JolV1p4tTNBHhw") {
    title,
    subtitle,
    button
  }
}`

const Home = () => {
    const { data, fetchData } = useFetchHero();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchData(query);
      setIsLoading(false);
    }, [fetchData]);

    if (isLoading || !data) {
    return "Loading...";
    }

    return(
        <div className="custom-content-div">
            <Header
                title={data.title}
                subtitle={data.subtitle}
                buttonText="Tell me more "
                link="/skill"
                showButton={false}
            />
            <Activities />
        </div>
    );
}

export default Home;
