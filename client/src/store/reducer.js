const initState = {
    heroes: [],
    hero: null,
    filteredHeroes: [],
    myAvengers: []
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case 'FETCH_HEROES': 
            console.log(action.payload, 'masuk ke fetch heroes')
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes: action.payload
            }
        case 'FETCH_HERO':
            return {
                ...state,
                hero: action.payload
            }
        case 'FILTER_HEROES':
            // console.log(action.payload)
            return {
                ...state,
                filteredHeroes: action.payload
            }
        case 'ADD_HERO':
            return {
                ...state,
                myAvengers: [...state.myAvengers, action.payload]
            }
        case 'EXPELL_HERO':
            return {
                ...state,
                myAvengers: action.payload
            }
        default:
            return state
    }
}