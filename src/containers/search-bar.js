import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import { bindActionCreators } from 'redux';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};

    // this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({term:e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
