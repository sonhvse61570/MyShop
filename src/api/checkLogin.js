const checkLogin = (token) => (
    fetch('http://172.16.1.19/app/check_login.php',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({token})
    })
    .then(res => res.json())
)

export default checkLogin;