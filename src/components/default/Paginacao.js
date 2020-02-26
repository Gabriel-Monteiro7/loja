import React from "react";

// import { Container } from './styles';
import StylesPaginacao from "../../styles/paginacao";
export default function components({ page, handlePageUpdate }) {
  return (
    <StylesPaginacao className="container">
      <ul className="pagination pagination-sm justify-content-end">
        <li className={`page-item ${page > 1 ? "disabled" : ""}disabled`}>
          <span
            className="page-link"
            onClick={() => {
              handlePageUpdate(page - 1);
            }}
          >
            Previous
          </span>
        </li>
        {page !== 1 && (
          <>
            <li className="page-item">
              <span
                className="page-link"
                onClick={() => {
                  handlePageUpdate(1);
                }}
              >
                1
              </span>
            </li>
            <span className="mx-2">...</span>
          </>
        )}

        <li className="page-item active">
          <span className="page-link">
            {page}
            <span className="sr-only">(current)</span>
          </span>
        </li>
        <li
          className="page-item"
          onClick={() => {
            handlePageUpdate(page + 1);
          }}
        >
          <span className="page-link">{page + 1}</span>
        </li>
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => {
              handlePageUpdate(page + 1);
            }}
          >
            Next
          </span>
        </li>
      </ul>
    </StylesPaginacao>
  );
}
