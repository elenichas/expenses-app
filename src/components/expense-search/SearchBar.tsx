import React, { FC, ChangeEvent } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"; // Import the custom CSS for styling

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <h3 className="my-3">Search for Expense</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          placeholder="Search for an expense by description..."
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={handleInputChange}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
