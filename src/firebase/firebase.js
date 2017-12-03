import * as firebase from 'firebase'
//import moment from 'moment';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDJi_Q4KH6Z7L9sK0vBhPQrwuDypvRlQs4",
    authDomain: "expensebook-d3638.firebaseapp.com",
    databaseURL: "https://expensebook-d3638.firebaseio.com",
    projectId: "expensebook-d3638",
    storageBucket: "expensebook-d3638.appspot.com",
    messagingSenderId: "625963852887"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// const expenses = [{
//         description: "Buy Food",
//         note: "Went to mall to buy grocery.",
//         amount: 2000,
//         createdAt: moment.now()
//     },
//     {
//         description: "Buy Clothes",
//         note: "Went to mall to buy clothes.",
//         amount: 5000,
//         createdAt: moment.now()
//     },
//     {
//         description: "Gas Bill",
//         note: "Paid monthly gas bill.",
//         amount: 5000,
//         createdAt: moment.now()
//     }];

// const saveExpenses = (expenses) => {
//     expenses.forEach((expense) => {
//         database.ref("expenses").push(expense);
//     });
// };
// //saveExpenses(expenses);
// const getExpensesArrayOnce = () => {
//     database.ref("expenses")
//         .on('value',
//             (snapshot) => {
//                 let expenses = [];
//                 snapshot.forEach((expense) => {
//                     expenses.push({
//                         id: expense.key,
//                         ...expense.val()
//                     })
//                 })
//                 console.log(expenses);
//                 return expenses;
//             }, (err) => console.log(err)
//             );

// }
// console.log(getExpensesArrayOnce());




