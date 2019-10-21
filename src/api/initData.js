const initData = () => (
    fetch('http://172.16.1.19/app/') // 192.168.0.199
    .then(res => res.json())
);

export default initData;