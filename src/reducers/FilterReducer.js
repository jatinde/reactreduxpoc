import {FILTERS_ACTION_CONSTANTS} from "../constants/constants";
import { filtersState } from '../state/FilterState'

export const filtersReducer = (state = filtersState, action) => {
    switch (action.type) {
        case FILTERS_ACTION_CONSTANTS.SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            }
        case FILTERS_ACTION_CONSTANTS.SORT_BY_DATE:
        case FILTERS_ACTION_CONSTANTS.SORT_BY_AMOUNT:
            return {
                ...state,
                sortBy: action.sortBy
            }
        case FILTERS_ACTION_CONSTANTS.SET_START_DATE:
            return {
                ...state,
                startDate: action.startDate
            }
        case FILTERS_ACTION_CONSTANTS.SET_END_DATE:
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}