export const initialState={
    showNav:false
}
export const reducer=(state,action)=>{
    switch(action.type){
        case "SET_NAV":
            return {
                ...state,
                showNav:action.showNav
            }
    }
}