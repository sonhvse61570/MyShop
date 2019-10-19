const initData = () => (
    fetch('http://192.168.0.199/app/')
    .then(res => res.json())
);

export default initData;