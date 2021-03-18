import { apiGET } from "../../utils/api";

const GET_USERS = "USERS/GET_USERS";
const INC_NUMBER = "USERS/INC_NUMBER";
const DEC_NUMBER = "USERS/DEC_NUMBER";
const MULTIPLICATION = "USERS/MULTIPLICATION";

export default function reducer(state = {dataTable : []}, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, dataTable: action.payload };
        case INC_NUMBER:
            return state + action.payload;
        case DEC_NUMBER:
            return state - action.payload;
        case MULTIPLICATION:
            return state*action.payload;
        default:
            return state;
    }
}


export const incrementProcessing = (payload) => (
    {
        type: INC_NUMBER,
        payload
    }
)

export const decrementProcessing = (payload) => (
    {
        type: DEC_NUMBER,
        payload
    }
)


export const multiplicationProcess = (payload) => (
    {
        type: MULTIPLICATION,
        payload
    }
)

export function getUsers(data) {
    return { type: GET_USERS, payload: data};
}

export const UserActions = {
    getUsers: function(query = "") {
        console.log("query", query);
        //this is redux-thunk
        return function (dispatch) {
            // apiGET("https://604767bbb801a40017ccc169.mockapi.io/api/v1/users").then(
            apiGET(
                `https://5d371ebf86300e0014b64ae7.mockapi.io/api/v1/users${query}`
                ).then((data) => {
                    console.log("data", data);
                    dispatch(getUsers(data));
                }
            )
        };
    },
};