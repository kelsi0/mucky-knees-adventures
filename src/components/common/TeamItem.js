import React from 'react';

const TeamItem = ({ img, title, role, github, facebook, linkedin }) => {
    return(
        <div className="col-lg-4">
        <div className="team-member">
            <img className="mx-auto rounded-circle" src={img} alt="" />
            <h4>{title}</h4>
            <p className="text-muted">{role}</p>
            {github ?? <a className="btn btn-dark btn-social mx-2" href={github}><i className="fab fa-github"></i></a>}
            {facebook ?? <a className="btn btn-dark btn-social mx-2" href={facebook}><i className="fab fa-facebook-f"></i></a>}
            {linkedin ?? <a className="btn btn-dark btn-social mx-2" href={linkedin}><i className="fab fa-linkedin-in"></i></a>}
        </div>
    </div>
    );
}
export default TeamItem;