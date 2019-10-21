import saveToken from './saveToken';

const resfreshToken = (token) => (
    fetch("http://172.16.1.19/app/refreshToken.php",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({token})
        }
    ).then(res => res.text())
    .then(newToken => saveToken(newToken))
);

export default resfreshToken;