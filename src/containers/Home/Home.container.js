import React, {Component} from 'react';
import { connect } from 'react-redux'
import {homeClickAction} from './home.action';
import Home from './Home';

// NOTE: for state.reducer.var
const mapStateToProps = state => {
    return {
        homeClick: state.homeReducer.homeClick
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

export default HomeContainer;
