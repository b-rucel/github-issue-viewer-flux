import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
// import API from '../utils/WebAPIUtils';

// const ActionTypes = AppConstants.ActionTypes;

let _issues = {};


const IssueStore = Object.assign({}, EventEmitter.prototype, {
    getIssues() {
        return _issues;
    }
})


AppDispatcher.register(function(action) {
    switch(action.type) {



        default: {}
    }
})


export default IssueStore;