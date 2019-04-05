import React, { Component } from 'react';
import './CoolTable.css';

export class CoolTable extends Component {

    state = { sortKey: 'city' };

    sortFunction = (city1, city2) => city1[this.state.sortKey] > city2[this.state.sortKey] ? 1 : -1;

    setSortKey = sortKey => {
        this.setState({ sortKey });
    }

    renderCity = city => {
        return (
            <div className='coolRow'>
                <div onClick={() => this.setSortKey('city')}>{city.city}</div>
                <div onClick={() => this.setSortKey('weather')}>{city.weather}</div>
                <div onClick={() => this.setSortKey('temp')}>{city.temp}C</div>
                <div onClick={() => this.setSortKey('numidity')}>{city.numidity}%</div>
            </div>
        )
    }

    render() {
        return (
            <div className='coolTable'>
                <div className='coolHeader coolRow'>
                    {this.props.headers.map(header => <div>{header}</div>)}
                </div>
                {this.props.cities.sort(this.sortFunction).map(city => this.renderCity(city))}
            </div>
        )
    }
}