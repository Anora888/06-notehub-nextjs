"use client";

import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}