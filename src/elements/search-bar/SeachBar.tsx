// src/elements/search-bar/SearchBar.tsx
import React, { FC } from "react";
import { IconSearch } from "@tabler/icons-react";
import { bemElement } from "@/utils/bem-class-names";
import { joinClassNames } from "@/utils/join-class-names";
import "./SearchBar.scss";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  searchQuery: string;
  onSearch: (query: string) => void;
}

const baseClassName = "search-bar";
const bem = bemElement(baseClassName);

const SearchBar: FC<SearchBarProps> = ({
  className = "",
  placeholder = "Search...",
  searchQuery,
  onSearch,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={joinClassNames(baseClassName, className)}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        className={bem("input")}
        placeholder={placeholder}
      />
      <button className={bem("search-button")}>
        <IconSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
