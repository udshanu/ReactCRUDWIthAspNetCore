import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";

//Call the "fetchAll" action creator here

const DCandidates = (props) => {
    useEffect(() => {
        props.fetchAllDCandidates()
    }, [])
    return (
        <div>From DCandidates</div>
    )
}

const mapStateToProps = state => {
    return {
        dCandidateList: state.dCandidate.list
    }
}

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(DCandidates);
