import React, {Component} from "react";

class AppModal extends Component {
    render() {
        return(
            <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    Modal body..
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        )
    }
}

export default AppModal;