import { connect } from 'react-redux'
import {homeClickAction} from './home.action';
import Home from './Home';

const mapStateToProps = state => {
    return {
        homeClick: state.homeClick
    }
}

// const var
// dispatch
// return
// key
// data => { fire(actionCreator(data)) }
const mapDispatchToProps = dispatch => {
    return {
        homeClickAction: data => {
            dispatch(homeClickAction(data))
        }
    }
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer
