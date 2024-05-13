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
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <button
        className={bemModifier(bem("button"), "left")}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <IconChevronLeft />
      </button>
      <span className={bem("text")}>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        className={bemModifier(bem("button"), "right")}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
      >
        <IconChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
