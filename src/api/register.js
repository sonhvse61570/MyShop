const register = (email, name, password) => (
    fetch('http://192.168.0.199/app/register.php', {
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