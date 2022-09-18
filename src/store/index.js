import { configureStore } from '@reduxjs/toolkit';
import { 
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
} from "react-redux"
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();

export default store;