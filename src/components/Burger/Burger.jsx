import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(transformedIngredientKey => {
            return [...Array(props.ingredients[transformedIngredientKey])].map((_, index) => {
                return <BurgerIngredient key={transformedIngredientKey + index} type={transformedIngredientKey} />
            })
        })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger