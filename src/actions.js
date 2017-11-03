export function increment(amount,team){
    return {
        type: 'INCREMENT',
        amount,
        team
    }
}

export function sliderChange(amount){
    return {
        type: 'SLIDER_CHANGE',
        amount
    }
}