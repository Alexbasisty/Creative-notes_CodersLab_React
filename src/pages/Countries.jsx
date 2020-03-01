import React, {Component} from "react";
import { Link } from "react-router-dom";

class Countries extends Component {
    state = {
        countryData: [],
        countrySearch: ''
    };

    handleSearch = (event) => {
        this.setState({
            countrySearch: event.target.value
        })
    };

    handleSubmit = (event) => {
       event.preventDefault();
        fetch(`https://restcountries.eu/rest/v2/name/${this.state.countrySearch}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    countryData: data
                })
            })
    };

    componentDidMount() {

    }

  render() {
    const [...countries] = this.state.countryData;
    return (
        <>
          <form>
            <input onChange={this.handleSearch} type="text" value={this.state.countrySearch} placeholder="enter your country" />
            <button onClick={this.handleSubmit}>Search</button>
          </form>
          <ul>
            {countries.map((country, index) => (
                <li key={country.population}>
                  <p>{country.name}</p>
                  <p>Currency: {country.currencies[0].name} ({country.currencies[0].code}, {country.currencies[0].symbol})</p>
                  <p>Capital of {country.name}: {country.capital}</p>
                  <p>Official language: {country.languages[0].name}</p>
                  <img src={country.flag} alt='country flag' style={{
                    width: '200px'
                  }}/>
                </li>
            ))}
          </ul>
          <Link to="/">Back to start</Link>
        </>
    );
  }
}

export default Countries;