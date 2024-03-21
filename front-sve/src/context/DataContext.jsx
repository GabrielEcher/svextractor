import React, { createContext, useState } from 'react'


const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedVendedor, setSelectedVendedor] = useState(null);
    const [selectedTelevendas, setSelectedTelevendas] = useState(null);
    const [codigoCliente, setCodigoCliente] = useState(null);
    const [selectedTop, setSelectedTop] = useState(null);
    const [selectedMarca, setSelectedMarca] = useState(null);
    const [codigoProd, setCodigoProd] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedCid, setSelectedCid] = useState(null)
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [exporting, setExporting] = useState(false);
    const [fabricante, setFabricante] = useState(null)
    
    return (
        <DataContext.Provider
            value={{
                data, setData, loading, setLoading, selectedVendedor, setSelectedVendedor,
                selectedTelevendas, setSelectedTelevendas, codigoCliente, setCodigoCliente,
                selectedTop, setSelectedTop, selectedMarca, setSelectedMarca, codigoProd,
                setCodigoProd, selectedStatus, setSelectedStatus, selectedCid, setSelectedCid,
                startDate, setStartDate, endDate, setEndDate, exporting, setExporting, fabricante, setFabricante,
            }}>
            {children}
        </DataContext.Provider>

    )
}

export { DataContext, DataProvider };
