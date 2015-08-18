import React from 'react';

import IssueStore from '../stores/IssueStore';
import IssueActions from '../actions/IssueActions';

console.log(IssueStore);
console.log(IssueActions);


class Main extends React.Component {
    render() {
        return (
            <div>Main - Class</div>
        )
    }
}

export default Main;