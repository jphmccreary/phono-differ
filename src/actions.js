export const TOGGLE_PHONE = 'TOGGLE_ONE_PHONE';
export const TOGGLE_MANY_PHONES = 'TOGGLE_MANY_PHONES';
export const TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE';

export function togglePhone (phoneID) {
    return {
        type: TOGGLE_PHONE,
        payload: {
            phoneID: phoneID,
        },
    };
}

export function toggleManyPhones (phoneIDList) {
    return {
        type: TOGGLE_MANY_PHONES,
        payload: {
            phoneIDList: phoneIDList,
        },
    };
}

export function toggleNightMode () {
    return {
        type: TOGGLE_NIGHT_MODE,
    }
}
