import React from "react";
import Approutes from "../routes";
import { Suspense } from "react";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerDetails: {},
            transactionDetails : [],
            isLoading: false
        }
    }

    componentDidMount() {
        var customerID = sessionStorage.getItem('customerID');
        this.setState({ isLoading: true });
        fetch("http://localhost:4000/customerDetails", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', "Accept": 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ "customerid": customerID })
        }).then(response => {
            response.json().then(data => {
                this.setState({
                    customerDetails: data.customer,
                    transactionDetails: data.transaction,
                    isLoading: false
                });
            });
        })
    }
    renderTableData = () => {
         console.log(this.state.transactionDetails);
         //console.log(Object.keys(this.state.transactionDetails[0]))

        return this.state.transactionDetails.map((transaction, index) => {
           const { date, desc, amount } = transaction //destructuring
           return (
              <tr key={desc}>
                 <td>{date}</td>
                 <td>{desc}</td>
                 <td>{amount}</td>
              </tr>
           )
        })
     }

    render() {
        const { isLoading, customerDetails,transactionDetails } = this.state;
        if (isLoading) {
            return (
                <p>Data is loading...</p>
            )
        }
        return (

            <div>
                 <div id="user">
                    <h2>Welcome {customerDetails.name}</h2>
                    <p className = "last_login">Last login: {customerDetails.last_login}</p>
                </div>
                <hr/>
                <h3>Account Balance {customerDetails.balance}</h3>
                <table className="table table-bordered">
                <tr>
                    <td>Date</td>
                    <td>Desc</td>
                    <td>Amount</td>
                </tr>
                {this.renderTableData()}
                </table>
            </div>
        )
    }
}
export default Dashboard;