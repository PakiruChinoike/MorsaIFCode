import { useEffect } from 'react';

export const handleFacebookLogin = () => {
    window.FB.login((response) => {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information.... ');
            window.FB.api('/me', (response) => {
                console.log('Good to see you, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
};

const initFacebookSDK = () => {
    window.fbAsyncInit = function() {
        window.FB.init({
            appId      : 'YOUR_APP_ID',
            cookie     : true,
            xfbml      : true,
            version    : 'v10.0'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};

export function FacebookSDKLoader() {
    useEffect(() => {
        initFacebookSDK();
    }, []);
    return null;
}