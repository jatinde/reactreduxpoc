import React, {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export class ExpenseFormComponent extends Component {

    constructor(props) {
        super(props);
        console.log("props", props);
        /*        const now = moment();
                console.log(now.format("MMM Do, YYYY"));*/
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? props.expense.amount.toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        }
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onDescriptionChange(e) {
        const description =  e.target.value; ;
        this.setState(() => ({description}));
    }

    onNoteChange(e) {
        const note =  e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange(e) {
        const amount = e.target.value;
        if(amount.trim() === "" || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }
    }

    onSubmit(e) {
        e.preventDefault();

        if(!this.state.description && !this.state.amount) {
            const error = "Please Provide description and amount.";
            this.setState(() => ({error}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Description" autoFocus />
                    <input type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder="Amount"/>
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={createdAt => createdAt && this.setState({ createdAt })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note (Optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
