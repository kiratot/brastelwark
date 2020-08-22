import React from "react";
import { filterData, loadMoreFiltered } from "../../redux/app/appActions";
import { Container, Input, StyledSearch } from "./styles";

const Search = ({ value, data, dispatch }) => {
  const handleChange = (e) => {
    dispatch(filterData(data, e.target.value));
    if (value === 0 && e.target.value.length > 0) dispatch(loadMoreFiltered());
  };
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />
      <StyledSearch />
    </Container>
  );
};

export default Search;
