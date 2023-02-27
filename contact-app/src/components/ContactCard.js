import React from "react";

const CardContact = () => {
   
    return (
        <div className="item">
        <div className="content">
            <div className="header">{contact.name}</div>
            <div>{contact.email}</div>
        </div>
        <i className="trash alternate outline icons"></i>
    </div>
    );


};

export default ContactCard;
