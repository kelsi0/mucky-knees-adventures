import React, {useEffect, useState} from 'react';
import useFetchHero from '../hooks/useFetchHero';

// Re-Usabled components
import Header from '../components/common/Header';
import Skills from "../components/common/Skills";

const query = `
{	
	heroCollection (where: {title: "Mucky Knees Adventures"}) {
  	items {
    	title,
      subtitle,
      bannerImage {
        title
        url
      },
      button
  	}
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
                image={data.bannerImage.url}
            />
            <Skills />
        </div>
    );
}

export default Home;
