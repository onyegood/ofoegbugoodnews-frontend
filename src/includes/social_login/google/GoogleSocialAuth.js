import React, { Component } from "react";
import {connect} from "react-redux";
import GoogleLogin from "react-google-login";
import axios from "axios";
import {baseURL} from "../../../services/baseURL";
import history from "../../../history";

class GoogleSocialAuth extends Component{

    state = {
        loginError: false
    }

    social = (res, type) => {
        let postData;
        if (type === 'google' && res.w3.U3) {
            postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            }
        }
    
    if(postData) {
        axios.post(baseURL + 'api/social', postData)
            .then(response => {
                let responseJson = response.data.social;
                localStorage.token = responseJson.token;
                sessionStorage.setItem("ud", JSON.stringify(responseJson));
                history.push("/user/dashboard");
            })
            .catch(
                error => {
                    console.log(error.response);
                }
            )
    } else { }

}


    render(){
        const responseGoogle = response => {
            this.social(response, 'google');
        };
        return (
            <GoogleLogin
                clientId="436455643660-thilov7982u9dvbjaksqp3uj9o8v3c82.apps.googleusercontent.com"
                buttonText="GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
        )
    }
}

export default GoogleSocialAuth;

