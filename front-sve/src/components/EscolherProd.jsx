import { useState } from "react";
import { Input, InputGroup } from 'rsuite';
import TagIcon from '@rsuite/icons/Tag';

// eslint-disable-next-line react/prop-types
const EscolherCodProd = ({onChange}) => {

    const [codigoProd, setCodigoProd] = useState(null)

    const handleProdChange = (value) => {
      setCodigoProd(value);
      onChange(value);
    };

    const styles = {
      width: 300,
      marginBottom: 10
    };
    
    return (
      <InputGroup inside style={styles}>
      <InputGroup.Addon>
        <TagIcon/>
      </InputGroup.Addon>
      <Input
        placeholder="Informe o código do produto:"
        size="lg"
        defaultValue={null}
        onChange={handleProdChange}
      />
    </InputGroup>
    )
}

export default EscolherCodProd;