import React from 'react';
import TeamItem from './TeamItem';

import img1 from '../../assets/img/team/TeamIcon.jpeg';

const team = [
    {title: 'Paul Brighouse', role: 'The Human', img: img1, github: "", facebook: "", linkedin: ""},
    {title: 'Person 1', role: 'Person 1', img: img1, twitter: '', facebook: '', linkedin: ''},
    {title: 'Person 2', role: 'Person 2', img: img1, twitter: '', facebook: '', linkedin: ''}
]

const Team = () => {
    return(
        // <!-- Team-->
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">My Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Each one invaluable!</h3>
                </div>
                <div className="row">
                    {team.map((item, index) => {
                        return <TeamItem {...item} key ={index} />
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Text about the team</p></div>
                </div>
            </div>
        </section>
    );
}

export default Team;