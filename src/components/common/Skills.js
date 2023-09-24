import React from 'react';
import SingleSkills from "./SingleSkills";

const skills = [
    {title: 'Climbing', description: "We offer indoor climbing", icon: 'fa-campground'},
    {title: 'Bushcraft', description: "We offer indoor bushcraft", icon: 'fa-cloud-sun'},
    {title: 'Outdoor Activities', description: 'We offer outdoor activities', icon: 'fa-mountain'}
]

const Skills = () => {
    return(
        // <!-- Skills-->
        <section className="page-section" id="Skills"> 
        {/* Change this in CSS */}
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Activities</h2>
                    <h3 className="section-subheading text-muted">All the things we do!</h3>
                </div>
                <div className="row text-center">
                    {skills.map((skill, index) => {
                        return <SingleSkills {...skill} key = {index} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;