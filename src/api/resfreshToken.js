import saveToken from './saveToken';
import host from './host';
const resfreshToken = (token) => (
    fetch(`${host}refresh_token.php`,
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