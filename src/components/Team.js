import React, {Component} from 'react';
import Animate from './Animation'


class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
            teamMembers : []
        }
    }
    componentDidMount() {
        fetch("http://localhost:4000/team", {
            method: "GET",
            headers: { 'Content-Type': 'application/json', "Accept": 'application/json', 'Access-Control-Allow-Origin': '*' },
        }).then(response => {
            response.json().then(data => {
               // console.log(data);
                this.setState({teamMembers : data})
            })
        });
    }
    render() {
        var result = this.state.teamMembers || [];
      //console.log("Result",result);
     const resp = result.map(item=> <li>{item.name}</li>);

        return (
            <div id="team" style={{"display":"flex"}}>
                
                <div>
                <p>Welcome Team</p>
                <hr/>
                    <ul>{resp}</ul>

                </div>
                <div id="animatedDiv">
                <Animate/>
                </div>
            </div>
        )
    }
}

export default Team;