import { Table } from "antd";
import classNames from "classnames";
import ResizeObserver from "rc-resize-observer";
import React, { useEffect, useRef, useState } from "react";
import { VariableSizeGrid as Grid } from "react-window";

const VirtualTable = (props) => {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const widthColumnCount = columns.filter(({ width }) => !width).length;
  const mergedColumns = columns.map((column) => {
    if (column.width) {
      return column;
    }
    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
    };
  });
  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, "scrollLeft", {
      get: () => {
        if (gridRef.current) {
          return gridRef.current?.state?.scrollLeft;
        }
        return null;
      },
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft,
          });
        }
      },
    });
    return obj;
  });
  const resetVirtualGrid = () => {
    gridRef.current?.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    });
  };
  useEffect(() => resetVirtualGrid, [tableWidth]);
  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid border-2"
        columnCount={mergedColumns.length}
        columnWidth={(index) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1 ? width - scrollbarSize - 1 : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div
            className={classNames("virtual-table-cell border-2 border-lime-200", {
              "virtual-table-cell-last": columnIndex === mergedColumns.length - 1,
            })}
            style={style}
          >
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
          </div>
        )}
      </Grid>
    );
  };
  return (
    <>       
    <div className="container">
    <div className="w-full px-4 pt-36">
      <div className="mx-auto mb-10">
        <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">KEGIATAN</h1>
      </div>
    </div>
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      } }
    >
      <Table
        {...props}
        className="virtual-table bg-blue-100"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }} />
    </ResizeObserver>
    </div>
    </>
  );
};

// Usage
const columns = [
  {
    title: "No",
    dataIndex: "No",
    width: 50,
  },
  {
    title: "Kegiatan",
    dataIndex: "kegiatan",
    width: 250,
  },
  {
    title: "Tgl Awal",
    dataIndex: "tgl_awal",
    width: 100,
  },
  {
    title: "Tgl Akhir",
    dataIndex: "tgl_akhir",
    width: 100,
  },
  {
    title: "Lokasi",
    dataIndex: "lokasi",
    width: 200,
  },
  {
    title: "Kota",
    dataIndex: "kota",
    width: 100,
  },
  {
    title: "Sertifikat Attendance",
    dataIndex: "sertif_hadir",
    width: 100,
  },
  {
    title: "Sertifikat Kelulusan",
    dataIndex: "sertif_lulus",
    width: 100,
  },
];
const data = Array.from(
  {
    key: '1',
    No: '1',
    kegiatan: 'PELATIHAN DAN SERTIFIKASI TEKNISI MUDA JARINGAN KOMPUTER', 
    tgl_awal: '23/03/2021',
    tgl_akhir: '25/03/2021',
    lokasi: 'HOTEL GRAND CORDELLA BANDUNG',
    kota: 'BANDUNG',
    sertif_hadir: 'DOWNLOAD',
    sertif_lulus: '',
  },
);
const App = () => (
  <VirtualTable
    columns={columns}
    dataSource={data}
    scroll={{
      y: 300,
      x: "100vw",
    }}
  />
);
export default App;
