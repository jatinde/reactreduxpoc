import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import {setEndDateAction, setStartDateAction} from "../actions/FilterAction";

class DateRangeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }
        this.onDatesChange = this.onDatesChange.bind(this);
    }

    onDatesChange({startDate, endDate}) {
        this.props.dispatch(setStartDateAction({startDate}));
        this.props.dispatch(setEndDateAction({endDate}))
    }
    render () {
        return (
            <div>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={calendarFocused => this.setState({ calendarFocused })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

export const ConnectedDateRangeComponent = connect()(DateRangeComponent)