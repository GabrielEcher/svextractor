// useFetchApi.js
import { useContext } from 'react';
import { api_db } from '../services/api';
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';

export function useFetchApi() {
    const { setData, setLoading, selectedVendedor,
        selectedTelevendas,
        codigoCliente,
        startDate,
        endDate,
        selectedTop,
        codigoProd,
        selectedMarca,
        selectedStatus,
        selectedCid,
        fabricante,
        divisao, } = useContext(DataContext);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await api_db.get(
                `/vendas/${selectedVendedor}/${selectedTelevendas}/${codigoCliente}/${startDate}/${endDate}/${selectedTop}/${codigoProd}/${selectedMarca}/${selectedStatus}/${selectedCid}/${fabricante}/${divisao}`,
            );
            
            setData(response.data);

            toast.success('Vendas obtidas com sucesso!');
            
            setLoading(false);
        } catch (error) {
            if (error.request.status === 404) {
                toast.error('Erro ao consultar dados, verifique os campos preenchidos! (os campos de data devem ser preenchidos)');
            } else if (error.request.status === 0) {
                toast.error('Problema ao comunicar-se com a API, acione o suporte!');
            } else if (error.request.status === 401) {
                toast.error('Sua sessão expirou, faça login novamente!')
            } else if (error.request.status === 500 || error.request.status === 502) {
                toast.error('Problema ao comunicar-se com a API, tente fazer login novamente!')
            }
            setLoading(false);
        }
    };

    return fetchData;
}
