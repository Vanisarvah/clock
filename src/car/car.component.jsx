import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Car extends Component {
    render(){
      console.log(this.props);
        // Get data from route props
        const clocks = this.props.data;
        // Map through clocks and return linked clocks
        const carNode = clocks.map((car) => {
            return (
                 <Link
                    to={"/clocks/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>clocks page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car
