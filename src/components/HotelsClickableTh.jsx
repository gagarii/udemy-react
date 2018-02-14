import React from 'react';
import PropTypes from 'prop-types';

const HotelsClickableTh = ({ label, sortKey, isSelected, onSort }) => (
  <th
    onClick={() => onSort(sortKey)}
    className="hotels-clickable-th"
  >{label}{isSelected ? '▲' : ''}</th>
);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default HotelsClickableTh;
