import getCurrentTime from '../utils/getCurrentTime.js'
import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from './actionTypes.js'

export function addCurrentTime() {
    return {
        type: ADD_CURRENT_TIME,
        payload: getCurrentTime(),
    }
}
export function clearAllTime() {
    return {
        type: CLEAR_ALL_TIMES,
    }
}
