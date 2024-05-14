import React from "react";
import { bemElement, bemModifier } from "@/utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";
import "./Pagination.scss";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const baseClassName = "pagination";
const bem = bemElement(baseClassName);

const Pagination: React.FC<PaginationProps> = ({
  className = "",
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage >= totalPages - 1;

  return (
    <div
      className={joinClassNames(baseClassName, className)}
      role="navigation"
      aria-label="Pagination"
    >
      <button
        className={bemModifier(bem("button"), { disabled: isPrevDisabled })}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isPrevDisabled}
        aria-label="Go to previous page"
      >
        <IconChevronLeft aria-hidden="true" />
      </button>
      <span className={bem("text")}>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        className={bemModifier(bem("button"), { disabled: isNextDisabled })}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isNextDisabled}
        aria-label="Go to next page"
      >
        <IconChevronRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default Pagination;
