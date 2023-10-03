import data from 'public/data/aboutProductInfo.json';
export default () => {
    return JSON.parse(JSON.stringify(data));
}
