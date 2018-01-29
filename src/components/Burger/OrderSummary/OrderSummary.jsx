import React from 'react'

import Aux from '../../../hoc/Auxiliary'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {ingredientKey}
                    </span>
                    : {props.ingredients[ingredientKey]}
                </li>)
        })

    return (
        <Aux>
            <h3>Ordered Burger</h3>
            <p>Your Burger contains following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default orderSummary