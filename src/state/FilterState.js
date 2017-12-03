import moment from 'moment'

export const filtersState = {sortBy: "date", text: "", startDate: moment().startOf('month'), endDate: moment().endOf('month')};