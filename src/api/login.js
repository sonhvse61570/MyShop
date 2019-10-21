const login = (email, password) => (
    fetch("http://172.16.1.19/app/login.php",
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