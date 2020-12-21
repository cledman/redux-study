import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; // or any other locale you need

const formatValue = (value) =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value != null ? value : 0);

export default formatValue;
