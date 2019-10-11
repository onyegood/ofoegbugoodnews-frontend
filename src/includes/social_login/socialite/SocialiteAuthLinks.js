import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { baseURL } from '../../../services/baseURL';
class SocialiteAuthLinks extends Component{

    state = {}

    loginToGoogle = () => {
        axios.post(baseURL +'http://localhost:8000/login/google/callback/code=pDo6CTcEzjc3Ilx8Gwld7zTd')
        .then(response => {
            console.log('Hello Social Auth', response);
        })
        .catch(error => {
            console.log('Error', error.response.error);
        });
    }

    componentDidMount() {
        //this.loginToGoogle();
    }
    render(){
        return <div>
            <span onClick={this.loginToGoogle}>Login with Google</span>
        </div>
    }
}


export default SocialiteAuthLinks;

