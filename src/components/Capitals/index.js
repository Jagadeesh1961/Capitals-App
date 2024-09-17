import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapitalList = event => {
    this.setState({
      activeCapitalId: event.target.value,
    })
    console.log(event.target.value)
  }

  getCountry = activeCapitalId => {
    const countryName = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return countryName.country
  }

  render() {
    const {activeCapitalId} = this.state

    const countryName = this.getCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <div>
            <h1 className="heading">Countries and Capitals</h1>
            <select
              id="capitals"
              className="select-tag"
              value={activeCapitalId}
              onChange={this.onChangeCapitalList}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label-name" htmlFor="capitals">
              is capital of which country?
            </label>
            <p className="country">{countryName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
