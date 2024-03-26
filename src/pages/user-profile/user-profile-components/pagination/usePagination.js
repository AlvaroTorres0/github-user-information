import { useState, useMemo } from "react";

export function usePagination({ arrayItems, itemsPerPage }) {
  const [page, setPage] = useState(1);
  const [perPage] = useState(itemsPerPage);

  const totalPages = useMemo(() => {
    return arrayItems ? Math.ceil(arrayItems.length / perPage) : 0;
  }, [arrayItems, perPage]);

  const indexOfLastItem = page * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = useMemo(() => {
    return arrayItems
      ? arrayItems.slice(indexOfFirstItem, indexOfLastItem)
      : [];
  }, [arrayItems, indexOfFirstItem, indexOfLastItem]);

  const handlePaginate = (newPage) => {
    setPage(newPage);
  };

  const handlePrevPaginate = () => {
    if (page > 1) {
      handlePaginate(page - 1);
    }
  };

  const handleNextPaginate = () => {
    if (page < totalPages) {
      handlePaginate(page + 1);
    }
  };

  return {
    currentItems,
    handlePrevPaginate,
    handleNextPaginate,
    currentPage: page,
    totalPages,
  };
}
