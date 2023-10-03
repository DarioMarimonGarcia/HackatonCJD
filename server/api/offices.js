import data from 'public/data/offices.json';
export default () => {
    return JSON.parse(JSON.stringify(data));
}
