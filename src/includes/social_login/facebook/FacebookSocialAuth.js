import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import { baseURL } from "../../../services/baseURL";
import history from "../../../history";

class FacebookSocialAuth extends Component {

    state = {
        loginError: false
    }

    social = (res, type) => {
        let postData;
        if (type === 'facebook' && res.email) {
            postData = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.picture.data.url
            };
        }

        if (postData) {
            axios.post(baseURL + '/api/social', postData)
                .then(response => {
                    let responseJson = response.data.social;
                    localStorage.token = responseJson.token;
                    sessionStorage.setItem("ud", JSON.stringify(responseJson));
                    history.push("/user/dashboard");
                })
                .catch(
                    error => {
                        console.log(error.response.data.error);
                    }
                )
        } else { }

    }
    render() {
        const responseFacebook = response => {
            this.social(response, 'facebook');
        };

        return (
            <div>
            <FacebookLogin
                appId="1253749501424128"
                autoLoad={true}
                buttonText="FACEBOOK"
                fields="name,email,picture"
                callback={responseFacebook} />
        </div>
    )
    }
}

export default FacebookSocialAuth;