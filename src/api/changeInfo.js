import host from './host';
const changeInfo = (token, name, address, phone) => (
    fetch(`${host}change_info.php`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({token, name, phone, address})
    })
    .then(res => res.json())
)

export default changeInfo;