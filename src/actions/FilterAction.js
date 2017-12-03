import {FILTERS_ACTION_CONSTANTS} from "../constants/constants";

export const setTextFilterAction = ({text = ""}) => ({
    type: FILTERS_ACTION_CONSTANTS.SET_TEXT_FILTER,
    text
});

export const sortByDateAction = () => ({
    type: FILTERS_ACTION_CONSTANTS.SORT_BY_DATE,
    sortBy: 'date'
});

export const sortByAmountAction = () => ({
    type: FILTERS_ACTION_CONSTANTS.SORT_BY_AMOUNT,
    sortBy: 'amount'
});

export const setStartDateAction = ({startDate = 0}) => ({
    type: FILTERS_ACTION_CONSTANTS.SET_START_DATE,
    startDate
});

export const setEndDateAction = ({endDate = 0}) => ({
    type: FILTERS_ACTION_CONSTANTS.SET_END_DATE,
    endDate
});