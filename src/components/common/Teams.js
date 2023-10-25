import React, {useEffect, useState} from 'react';
import TeamItem from './TeamItem';
import useFetchTeam from '../../hooks/useFetchTeam';

const query = `
{
    teamMemberCollection {
      items {
      title
      role
      img {
        url
      }
    }
  },
  team (id: "6s1ev04tBdETjizvXIJ0XJ") {
    text
  }
}`

const Team = () => {
    const { data, fetchData } = useFetchTeam();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(query);
        setIsLoading(false);
    }, [fetchData]);

    if (isLoading || !data) {
        return "Loading...";
    }

    return(
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">My Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Each one invaluable!</h3>
                </div>
                <div className="row">
                    {data.teamMemberCollection.items.map((item, index) => {
                        return <TeamItem {...item} key ={index} />
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">{data.team.text}</p></div>
                </div>
            </div>
        </section>
    );
}

export default Team;