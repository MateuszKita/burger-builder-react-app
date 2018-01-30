import React from 'react'

import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

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
            <p>Total price: <strong>{props.price.toFixed(2)}$</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType={"Danger"} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType={"Success"} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary