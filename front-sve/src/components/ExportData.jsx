import React, { useContext } from 'react';
import ExcelJS from 'exceljs'
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';

export function useExportToXls() {
  const { data, startDate, endDate, setLoadingGlobal, setDisabled } = useContext(DataContext);

  const exportData = async () => {
    try {
      setLoadingGlobal(true);
      setDisabled(true)
      if (!data.length) {
        toast.error("Nenhum dado para exportar");
      }
      
      // eslint-disable-next-line no-inner-declarations
      function addRows(row) {
        const values = columns.map(column => row[column])
        worksheet.addRow(values);
      }

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet 1');

      const columns = Object.keys(data[0]);
      worksheet.addRow(columns);

      data.forEach(addRows);

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `relatorio_vendas-${startDate}-${endDate}.xlsx`;

      setTimeout(() => {
        a.click();
        setDisabled(false)
        setLoadingGlobal(false);
      }, 1000);


    } catch (err) {
      toast.error("Error exporting to XLS:", err);
      setLoadingGlobal(false)
      setDisabled(false)
    } 

  }
  return exportData;
}