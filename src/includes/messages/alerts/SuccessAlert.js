import React from "react";

const SuccessAlert = () => {
    return (
        <div className="alert alert-success alert-dismissible">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> Indicates a successful or positive action.
        </div>
    )
}

export default SuccessAlert;
