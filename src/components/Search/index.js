import React from "react";
import { filterData } from "../../redux/app/appActions";
import { Container, Input, StyledSearch } from "./styles";

const Search = ({ value, data, dispatch }) => {
  const handleChange = (e) => {
    dispatch(filterData(data, e.target.value));
  };
  return (
    <Container data-testid="search">
      <Input
        aria-label="search"
        name="search"
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
