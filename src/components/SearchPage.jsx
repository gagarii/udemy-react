import React, { Component } from 'react'; // React import
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import { startSearch } from '../actions/';

// Appクラスを定義
class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
  }

  render() {
    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm history={this.props.history} />
        <div className="result-area">
          <Map
            location={this.props.geocodeResult.location}
          />
          <div className="result-right">
            <GeocodeResult
              address={this.props.geocodeResult.address}
              location={this.props.geocodeResult.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable />
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ search: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.stirng,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

export default connect(mapStateToProps)(SearchPage);
