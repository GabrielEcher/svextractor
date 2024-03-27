import { useState, useContext, useEffect } from "react";
import { DataContext } from '../context/DataContext'
import { Statistic } from 'antd'

export const Statistics = () => {

    const { data } = useContext(DataContext);
    const [totalFat, setTotalFat] = useState(0);
    const [totalPed, setTotalPed] = useState(0);
    const [aFat, setAFat] = useState(0);
    const [totalPedU, setTotalPedU] = useState(0);

    useEffect(() => {
        const calculateTotalByKey = (key) => {
            if (data.length > 0) {
                let sum = 0;
                data.forEach(item => {
                    if (key in item) {
                        sum += item[key];
                    }
                });
                return sum;
            } else {
                return 0;
            }
        };

        const keyFat = 'valor_liquido_total_nota';
        const keyPed = 'valor_liquido_total_pedido';
        setTotalFat(calculateTotalByKey(keyFat));
        setTotalPed(calculateTotalByKey(keyPed));
        setAFat(totalPed - totalFat)
    }, [data, totalFat, totalPed]);

    useEffect(() => {
        const calculateTotalByKey = (key) => {
            if (data.length > 0) {
                const contador = {};
                data.forEach(item => {
                    if (key in item) {
                        const valor = item[key];
                        if (!Object.values(contador).includes(valor)) {
                            contador[valor] = 1;
                        } else {
                            let valorUnico = true;
                            Object.keys(contador).forEach(chave => {
                                if (chave !== valor && contador[chave] === 1) {
                                    valorUnico = false;
                                }
                            });
                            if (valorUnico) {
                                contador[valor]++;
                            }
                        }
                    }
                });
                let somaTotal = 0;
                for (const chaveContador in contador) {
                    somaTotal += contador[chaveContador];
                }
                return somaTotal;
            } else {
                return 0;
            }
        };
        setTotalPedU(calculateTotalByKey('codigo_newsales'))

    }, [data]);

    if (data.length > 0) {
        return (
            <div style={{ display: 'flex', gap: '100px', marginLeft: '15px' }}>
                <Statistic
                    title="TOTAL FATURADO:"
                    value={totalFat}
                    prefix='R$'
                    decimalSeparator="."
                    precision={2} />
                <Statistic
                    title="TOTAL:"
                    value={totalPed}
                    prefix='R$'
                    decimalSeparator="."
                    precision={2} />
                <Statistic
                    title="A FATURAR:"
                    value={aFat}
                    prefix='R$'
                    decimalSeparator="."
                    precision={2} />
                <Statistic
                    title="PEDIDOS:"
                    value={totalPedU}
                />
            </div>
        );
    } else {
        return
    }

}