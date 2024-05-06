// src/components/SearchBar.tsx
import React, { useState, FC } from "react";
import { IconSearch } from "@tabler/icons-react";
import { bemElement } from "@/utils/bem-class-names";
import { joinClassNames } from "@/utils/join-class-names";
import "./SearchBar.scss";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch: (query: string) => void;
}

const baseClassName = "search-bar";
const bem = bemElement(baseClassName);

const SearchBar: FC<SearchBarProps> = ({
  className = "",
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={joinClassNames(baseClassName, className)}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={bem("input")}
        placeholder={placeholder}
      />
      <button onClick={handleSearch} className={bem("search-button")}>
        <IconSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
