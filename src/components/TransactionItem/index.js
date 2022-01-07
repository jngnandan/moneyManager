// Write your code here

import React, { Component } from 'react'

export class TransactionItem extends Component {
    render(props) {
        const { transactionTypeOptions } = this.props
        const { optionId, displayText } = transactionTypeOptions
        return (
            <option value={displayText}>{displayText}</option>
        )
    }
}

export default TransactionItem
