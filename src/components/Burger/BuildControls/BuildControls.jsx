import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    }, {
        label: 'Bacon',
        type: 'bacon'
    }, {
        label: 'Cheese',
        type: 'cheese'
    }, {
        label: 'Meat',
        type: 'meat'
    }
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(control => (<BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]} />))}
    </div>
)

export default buildControls