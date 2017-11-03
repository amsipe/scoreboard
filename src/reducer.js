import _ from 'lodash';

export default (state = {}, action) => {
    var newState = _.cloneDeep(state);
    var team = action.team;
    switch (action.type) {
        case 'INCREMENT' : 
            return {
                ...state,
                [action.team]: newState[team] += action.amount    
            }
        case 'SLIDER_CHANGE' :
            return {
                ...state,
                slider: action.amount
            }
        default: return state
    }
}