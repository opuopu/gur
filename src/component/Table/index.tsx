/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider, Table } from "antd";
import { TablePaginationConfig } from "antd";
interface ScrollProps {
  x?: number;
  y?: number | "max";
}
interface GuruTableProps {
  loading: boolean;
  onTableChange?: () => void;
  column: any;
  data: any[];
  style?: React.CSSProperties;
  pageSize?: number;
  total?: number;
  pagination?: false | TablePaginationConfig | undefined;
  theme?: Record<string, any>;
  scroll?: ScrollProps;
}

const GuruTable = ({
  loading,
  onTableChange,
  column,
  data,
  style,
  pagination = false,
  theme,
  scroll,
}: GuruTableProps) => {
  return (
    <ConfigProvider theme={theme}>
      <Table
        style={style}
        loading={loading}
        columns={column}
        dataSource={data}
        pagination={pagination}
        onChange={onTableChange}
        scroll={scroll}
      ></Table>
    </ConfigProvider>
  );
};

export default GuruTable;
