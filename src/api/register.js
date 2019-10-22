import host from './host';
const register = (email, name, password) => (
    fetch(`${host}register.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(
            { name, email, password }
        )
    }).then(res => res.text())
);

module.exports = register;