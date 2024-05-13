import { useMemo, useState } from "react";

type SortDirection = "ascending" | "descending";

interface UseSortProps<T> {
  data: T[];
  defaultField: keyof T;
  initialDirection?: SortDirection;
}

export function useSort<T>({
  data,
  defaultField,
  initialDirection = "ascending",
}: UseSortProps<T>) {
  const [sortField, setSortField] = useState<keyof T>(defaultField);
  const [sortDirection, setSortDirection] =
    useState<SortDirection>(initialDirection);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      const order = sortDirection === "ascending" ? 1 : -1;
      return (fieldA < fieldB ? -1 : 1) * order;
    });
  }, [data, sortField, sortDirection]);

  const handleSortChange = (field: keyof T) => {
    if (field === sortField) {
      setSortDirection((prevDirection) =>
        prevDirection === "ascending" ? "descending" : "ascending"
      );
    } else {
      setSortField(field);
      setSortDirection("ascending");
    }
  };

  return { sortedData, handleSortChange, sortField, sortDirection };
}
