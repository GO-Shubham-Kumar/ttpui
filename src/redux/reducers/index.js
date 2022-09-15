import authReducer from "./authReducer";
import initialConfigs from "./initialConfigsReducers";
import updateMainStateReducer from "./updateMainStateReducer";

const rootReducers = {
    authReducer,
    // intialConfigs : initialConfigsReducers,
}
export {
    authReducer,
    initialConfigs,
    updateMainStateReducer
}