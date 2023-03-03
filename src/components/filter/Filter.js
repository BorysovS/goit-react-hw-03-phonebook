import { FilterSection, FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, filter }) => {
  return (
    <FilterSection>
      <FilterLabel htmlFor="filter">
        Find contact by name
        <FilterInput
          name="filter"
          placeholder="Find"
          onChange={onChange}
          value={filter}
        />
      </FilterLabel>
    </FilterSection>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
