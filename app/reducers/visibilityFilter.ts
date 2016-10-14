export const visibilityFilter = (state = 'SHOW_ALL',action:any) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.payload;
        default:
            return state;
    }
}