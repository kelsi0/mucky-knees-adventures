import React, {useEffect, useState} from 'react';
import useFetchHero from '../hooks/useFetchHero';

import Header from '../components/common/Header';
import Team from '../components/common/Teams';

const query = `
{	
	heroCollection (where: {title: "About Mucky Knees Adventures!"}) {
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

const About = () => {
    const { data, fetchData } = useFetchHero();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchData(query);
      setIsLoading(false);
      // eslint-disable-next-line
    }, []);
    
    if (isLoading || !data) {
    return "Loading...";
    }

    return(
        <div className="custom-content-div">
            <Header
                title={data.title}
                subtitle={data.subtitle}
                buttonText="Tell me more"
                link="/services"
                showButton={false}
                image={data.bannerImage.url}
            />

            <section>
                <Team />
            </section>
        </div>
    );
}

export default About;