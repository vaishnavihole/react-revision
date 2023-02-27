import React from "react";

class  AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                    <labels>Name</labels>
                    <input type="text" name="name" placeholder="Name" />
                    </div>

                    <div className="field">
                    <labels>Email</labels>
                    <input type="text" name="email" placeholder="Email" />
                    </div>
                </form>
            </div>
        )
    }
} 
         


export default AddContact;