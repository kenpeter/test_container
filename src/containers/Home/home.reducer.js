// init state
// action
export default (state = {}, action) => {
    switch (action.type) {
        case 'HOME_CLICK_ACTION':

            // test
            console.log('-- reducer --');
            console.log(action);

            return {
                result: action.payload
            }
        default:
            return state
    }
}