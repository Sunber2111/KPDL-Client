import { GET_DATA_KMEAN } from '../constant/student'

const initialState = {
    data:[]
}

export default (state = initialState,{type,payload})=>{
    switch (type) {
        case GET_DATA_KMEAN:
            {
                return{
                    ...state,
                    data:payload    
                }
            }
        default:
            return {...state}
    }
}