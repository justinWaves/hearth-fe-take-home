import { useMemo, useState } from "react";
import { IContact } from "@/types/types";

interface UsePaginationProps {
  data: IContact[];
  itemsPerPage: number;
}

interface PaginationResult {
  paginatedData: IContact[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export function usePagination({
  data,
  itemsPerPage,
}: UsePaginationProps): PaginationResult {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data.length, itemsPerPage]);

  const paginatedData = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage, data]);

  return { paginatedData, currentPage, setCurrentPage, totalPages };
}
