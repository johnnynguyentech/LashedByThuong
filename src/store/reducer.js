import * as actionTypes from './actions';

const initialState = {
    time: new Date(),
    name: "",
    phone: "",
    email: "",
    date1: "",
    date2: "",
    date3: "",
    appointmentFor: "",
    notes: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APPOINTMENT_TO_MODAL:
            return {
                ...state,
                name: action.name,
                phone: action.phone,
                email: action.email,
                date1: action.date1,
                date2: action.date2,
                date3: action.date3,
                appointmentFor: action.appointmentFor,
                notes: action.notes
            };
        default:
            return state;
    }
};

export default reducer;