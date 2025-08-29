import { TableIcon } from "../assets";
import React from "react";

interface Column {
  key: string;
  title: string;
  align?: "left" | "center" | "right";
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  title?: string;
  columns: Column[];
  data: { id: string | number; [key: string]: any }[];
  className?: string;
  striped?: boolean;
  onRowClick?: (id: string | number) => void;
  actions?: {
    label: string;
    onClick: (row: any) => void;
    variant?: "primary" | "secondary";
  }[];
  showPagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function CustomTable({
  title,
  columns,
  data,
  className = "",
  striped = true,
  onRowClick,
  actions = [],
  showPagination = true,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: TableProps) {
  return (
    <div
      className={`bg-[#1F242F] text-white rounded-lg shadow-md  ${className}`}
    >
      {title && (
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#344363] text-[#CACACA]">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-4 py-3 text-[16px] font-semibold whitespace-nowrap ${
                    column.width ? column.width : ""
                  } ${
                    column.align === "center"
                      ? "text-center"
                      : column.align === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      column.align === "center"
                        ? "justify-center"
                        : column.align === "right"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <img
                      src={TableIcon}
                      alt="icon"
                      className="w-4 h-4 shrink-0"
                    />
                    <span className="whitespace-nowrap text-[16px]">
                      {column.title}
                    </span>
                  </div>
                </th>
              ))}
              {actions.length > 0 && (
                <th className="px-4 py-3 text-[16px] font-semibold text-center bg-[#344363] whitespace-nowrap">
                  Действия
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick && onRowClick(row.id)}
                  className={`border-b border-gray-700 cursor-pointer ${
                    striped && rowIndex % 2 === 0
                      ? "bg-transparent"
                      : "bg-[#1F242F]"
                  }`}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`p-2 text-[#CACACA] text-[13px] ${
                        column.align === "center"
                          ? "text-center"
                          : column.align === "right"
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : row[column.key]}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="px-4 py-3 text-center bg-[#1F242F]">
                      {actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(row);
                          }}
                          className={`px-3 py-1 rounded text-sm ${
                            action.variant === "primary"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-orange-500 hover:bg-orange-600"
                          } text-white`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (actions.length > 0 ? 1 : 0)}
                  className="text-center py-12"
                >
                  <div className="text-gray-400 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Ma'lumot topilmadi</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showPagination && totalPages > 1 && (
        <div className="px-6 py-4 flex justify-between items-center bg-[#1F242F]">
          <button
            onClick={() => onPageChange && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:bg-gray-500"
          >
            &lt;
          </button>
          <span className="text-sm">
            {currentPage} из {totalPages}
          </span>
          <button
            onClick={() => onPageChange && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:bg-gray-500"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
