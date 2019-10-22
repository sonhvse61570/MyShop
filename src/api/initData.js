import host from './host';
const initData = () => (
    fetch(`${host}`)
    .then(res => res.json())
);

export default initData;