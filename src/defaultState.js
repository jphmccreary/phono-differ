import chart from './charts';

const phones = {};

Object.getOwnPropertyNames(chart).forEach(name => {
    phones[name] = false;
});

const state  = {
    phones: phones,
    nightMode: false,
}

export default state;
