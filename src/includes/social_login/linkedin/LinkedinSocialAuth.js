import React, { Component } from "react";
import LinkedIn from 'react-linkedin-login'
import axios from "axios";
import { Redirect } from 'react-router-dom';
import {baseURL} from "../../../services/baseURL";

class LinkedinSocialAuth extends Component{

    state = {
        loginError: false,
        redirect: false
    }

    social = (res, type) => {
        let postData;
        if (type === 'linkedin' && res.w3.U3) {
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
        axios.post(baseURL+'api/social/', postData)
            .then(response => {
                let responseJson = response.data.social;
                sessionStorage.setItem("userData", JSON.stringify(responseJson));
                this.setState({ redirect: true });
            })
            .catch(
                error => {
                    console.log(error.response.data.error);
                }
            )
    } else { }

}


    render(){

        if (this.state.redirect || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/social'} />)
        }

        const callbackLinkedIn = response => {
            console.log('Auth user', response);
            this.social(response, 'google');
        };

        return (
            <LinkedIn
                clientId='861a2n1lkxcir5'
                callback={callbackLinkedIn}
                text='LinkedIn' />
        )
    }
}


export default LinkedinSocialAuth;

