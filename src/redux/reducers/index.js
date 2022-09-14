import authReducer from "./authReducer";
import intialConfigs from "./initialConfigsReducers";
import updateMainStateReducer from "./updateMainStateReducer";

const rootReducers = {
    authReducer,
    // intialConfigs : initialConfigsReducers,
}
export {
    authReducer,
    intialConfigs,
    updateMainStateReducer
}