import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'Lange & Söhne',
        year: '1845',
        make: 'German',
        media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvysRX4M8vafZG3JFYfSGpFU7t_ROfhBxzRVzL9JfrR4icpjD0Tg',
        price: 'rs 7500'

    },
    {
        id: 2,
        name: 'Arnold & Son',
        year: '1968',
        make: 'swiss',
        media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVJ7QepLesBb62d1qlU2kWoPCmii2Nf5tu6V9GpPExKMWkHH-",
        price: 'rs 6000'

    },
    {
        id: 3,
        name: 'Baume et Mercier',
        year: '1980',
        make: 'swiss',
        media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LZhVl7H0I34zoIGERAfU8mFrSZI0LYWdkvwO6MkVQM-wMa-Q",
        price: 'rs 7200'
    },
    {
        id: 4,
        name: 'Bell & Ross',
        year: '1989',
        make: 'canada',
        media: "https://images-na.ssl-images-amazon.com/images/I/9161z0DpR6L._UY445_.jpg",
        price: 'rs 12000'
    },
    {
        id: 5,
        name: 'Breguet',
        year: '1998',
        make: 'Dodge',
        media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02ehmIeJGISDoSmUhGQV3TUz5ki9WxBB67j9y5zX6Ogxw0jKO6Q",
        price: 'rs 8000'
    }
];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/clocks" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/clocks/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
