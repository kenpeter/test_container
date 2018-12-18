// init state
// action
export default (state = {homeClick: 0}, action) => {
    switch (action.type) {
        case 'HOME_CLICK_ACTION':

            console.log('-- reducer --');
            console.log(action);
            console.log(state);

            // we change state in reducer, by new obj
            let obj = Object.assign({}, state, {
                homeClick: action.payload
            });

            return obj;
        default:
            return state
    }
}