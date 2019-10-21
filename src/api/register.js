const register = (email, name, password) => (
    // 192.168.0.199
    fetch('http://172.16.1.19/app/register.php', {
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