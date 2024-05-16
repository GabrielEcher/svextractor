import React, { useContext } from 'react';
import ExcelJS from 'exceljs'
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

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

      const formattedStartDate = format(new Date(startDate), 'dd-MM-yy',);
      const formattedEndDate = format(new Date(endDate), 'dd-MM-yy',);

      a.download = `relatorio_vendas-${formattedStartDate} - ${formattedEndDate}.xlsx`;

      setTimeout(() => {
        a.click();
        setDisabled(false)
        setLoadingGlobal(false);
      }, 1000);


    } catch (err) {
      toast.error(`Erro ao exportar arquivo: ${err}`);
      setLoadingGlobal(false)
      setDisabled(false)
    } 

  }
  return exportData;
}