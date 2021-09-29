import chart from './charts';

const phones = {};

Object.getOwnPropertyNames(chart).forEach(name => {
    phones[name] = false;
});

export default {
    phones: phones,
    nightMode: false,
};
