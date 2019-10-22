import host from './host';
const login = (email, password) => (
    fetch(`${host}login.php`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({email, password})
        }
    ).then(res => res.json())
);
export default login;