// Write your code here

import React, { Component } from 'react'

export class MoneyDetails extends Component {
    render(props) {
        const { currentList, deleteTransaction } = this.props
        const { id, title, amount, type } = currentList

        const deleteItem = () => {
            deleteTransaction(id)
        }

        return (
            <div className='flex flex-row justify-around border-2 rounded border-gray-300 py-2 pl-3'>
                <p className='text-gray-400 w-16 text-center text-sm'>{title}</p>
                <p className='text-gray-400 w-16 text-center text-sm'>{amount}</p>
                <p className='text-gray-400 w-16 text-center text-sm'>{type}</p>
                <button onClick={deleteItem} className='text-gray-400 w-16 text-center text-sm px-2'>
                    <img className='h-5' src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" />
                </button>
            </div>
        )
    }
}

export default MoneyDetails
