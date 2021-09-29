import {
    TOGGLE_PHONE,
    TOGGLE_MANY_PHONES,
    TOGGLE_NIGHT_MODE,
} from './actions';

export const selectionReducer = function (state, action) {
    switch (action.type) {
        case TOGGLE_PHONE:
            const prevPhones = state.phones;
            const { phoneID } = action.payload;
            return {
                ...state,
                phones: {
                    ...prevPhones,
                    [phoneID]: !prevPhones[phoneID],
                }
            };
        case TOGGLE_MANY_PHONES:
            return {};
        case TOGGLE_NIGHT_MODE:
            return {};
        default:
            return state;
    }
}
