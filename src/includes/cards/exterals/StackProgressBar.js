import React, {Component} from "react";
import { Link } from "react-router-dom";
import classes from "../../general/css/LayoutStyle.css";
import {connect} from "react-redux";
class MyInfoCard extends Component {
    state = {
        stacks: []
    }
    render(){

        const { stacks, isLoading } = this.props;

        if (isLoading) {
            return <p>loading...</p>
        }
        return (
            <div>
                <div className={classes.MyInfoContainer}>
                     
                     <h4>My Stack</h4>
                      <hr/>
                      {stacks.map(stack => (
                          stack.active === '1' ? 
                          <div key={stack.id}>
                                <p><i className="fa fa-code" /> {stack.title}</p>
                                <div className="progress" style={{height: '20px'}}>
                                    <div className="progress-bar" 
                                    style={{width: `${stack.rate}%`, backgroundColor: '#263948'}}>
                                    {stack.rate}
                                </div>
                            </div>
                        </div> : ''))}
              </div>
           </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        stacks: state.stacks.stacks,
        isLoading: state.profile.isLoading
    }
}
export default connect(mapStateToProps)(MyInfoCard);