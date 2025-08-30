export interface Column {
  key: string;
  title: string;
  align?: "left" | "center" | "right";
  width?: string;
  render?: (value: any, row: any, extra?: any) => React.ReactNode;
}

export interface TableProps {
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
  onHolatChange?: (id: number, newValue: string) => void;
}
