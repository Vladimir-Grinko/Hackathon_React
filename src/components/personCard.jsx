import React from "react";
import PropTypes from "prop-types";
import Badge from "./badge";

const PersonCard = ({ person, onBookmark }) => {
    return (
        <div className="card col-3 me-2" style={{ width: "18rem" }}>
            <img
                src={person.image}
                className="card-img-top"
                alt={`${person.firstName} ${person.lastName}`}
            />
            <div className="card-body">
                <Badge context={person.firstName + person.lastName} color={person.color} status={person.teamLeader}/>
            </div>
            <div className="card-body">
                <a href={"/person/" + person._id} className="card-link">Подробнее</a>
                <a href="#" onClick={() => onBookmark(person._id)} className="card-link">Избранное</a>
            </div>
        </div>
    );
};

PersonCard.propTypes = {
    person: PropTypes.object.isRequired,
    onBookmark: PropTypes.func.isRequired
};

export default PersonCard;
