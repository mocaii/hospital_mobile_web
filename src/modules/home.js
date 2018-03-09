//actions: 加多一个前缀主要是为了避免action与其它页面的action冲突
const INIT_NAV_LIST = 'home/INIT_NAV_LIST';
export const INIT_DISHESLIST_DATA = 'home/INIT_DISHESLIST_DATA';
export const INIT_HOUSE_DATA = 'home/INIT_HOUSE_DATA';
export const INIT_AD_DATA = 'home/INIT_AD_DATA';


//reducers
const initialState = {
    navList: [],
    dishesList: [],
    houseData: [],
    ad: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INIT_NAV_LIST:
            return {
                ...state,
                navList: action.data
            };

        case INIT_DISHESLIST_DATA:
            return{
                ...state,
                dishesList: action.data
            }
        case INIT_HOUSE_DATA:
            return{
                ...state,
                houseData: action.data
            }
        case INIT_AD_DATA:
            return{
                ...state,
                ad: action.data
            }
        
        default:
            return state
    }
}


export const dispatch_func = {
    getNavList: (data) => {
        return dispatch => {
            dispatch({
                type: INIT_NAV_LIST,
                data: data
            });
        }
    },

    getDishesList : (data) => {
        return dispatch => {
            dispatch({
                type: INIT_DISHESLIST_DATA,
                data: data
            })
        }
    },

    getHouseData :(data) => {
        return dispatch => {
            dispatch({
                type: INIT_HOUSE_DATA,
                data: data
            })
        }
    },

    getAdData :(data) => {
        return dispatch => {
            dispatch({
                type: INIT_AD_DATA,
                data: data
            })
        }
    }
}

