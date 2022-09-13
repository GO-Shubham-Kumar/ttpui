import authReducer from "./authReducer";
import initialConfigsReducers from "./initialConfigsReducers";

const rootReducers = {
    authReducer,
    intialConfigs : initialConfigsReducers
}
export {
    authReducer,
    initialConfigsReducers
}