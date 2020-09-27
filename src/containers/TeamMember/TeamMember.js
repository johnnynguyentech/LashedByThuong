import React, { Component } from 'react';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import axios from '../../axios-appt';

import './TeamMember.css';


class TeamMember extends Component {
    state = {
        appts: []
    }
    
    componentDidMount() {
        axios.get('/appointments.json').then(response => {
            console.log(response);
            const results = [];
            for (let key in response.data) {
                results.unshift({
                    ...response.data[key],
                    id: key
                })
            }
            this.setState({appts: results},
                function(){
                    console.log(this.state.appts);
                }
            )
        })
    }

    render () {
        // let tableItem = null;
        // for ( let i=0; i < this.state.appts.length; i++ ) {
        //     tableItem += <tr>
        //                     <td> {this.state.appts[i].time} </td> 
        //                     <td> {this.state.appts[i].name} </td> 
        //                     <td> {this.state.appts[i].phone} </td> 
        //                     <td> {this.state.appts[i].email} </td> 
        //                     <td> {this.state.appts[i].date1} </td> 
        //                     <td> {this.state.appts[i].date2} </td> 
        //                     <td> {this.state.appts[i].date3} </td> 
        //                     <td> {this.state.appts[i].appointmentFor} </td> 
        //                     <td> {this.state.appts[i].notes} </td>
        //                  </tr>;
        // }
        // const tableRows = <> + {tableItem} + </>;
        // const tableItem = <>
        //                         <tr>
        //                             <td> test1 </td> 
        //                             <td> test</td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test12</td>
        //                         </tr>  
        //                         <tr>
        //                             <td> test1 </td> 
        //                             <td> test</td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test </td> 
        //                             <td> test12</td>
        //                         </tr>
        //                  </>
        //                 ;
        
        return (
            <div className="TeamMember"> 
                <TitleLabel>TEAM MEMBER</TitleLabel>
                <h3 id="greeting">Welcome Team Member!</h3>   
                <center>
                    <div className="container">
                        <table className="table" id="order_table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Booked Date</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date 1</th>
                                    <th scope="col">Date 2</th>
                                    <th scope="col">Date 3</th>
                                    <th scope="col">Appointment For</th>
                                    <th scope="col">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {tableRows} */}
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        );
    }
}

export default TeamMember;