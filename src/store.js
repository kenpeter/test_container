// store
import { createStore, applyMiddleware } from 'redux';

// thunk
import thunk from 'redux-thunk';

// root reducer
import rootReducer from './rootReducer';

// store
export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}
