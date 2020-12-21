import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  flex: 1;
  flex-direction: row;
  margin-top: 40px;
`;

export const ProductList = styled(FlatList).attrs({
  numCollumns: 1,
})`
  flex: 1;
  padding: 40px 20px;
`;

export const Product = styled.View`
  background: #626878;
  border-radius: 25px;
  flex: 1;
  margin: 8px;
  padding: 32px 12px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  height: 150px;
  width: 90%;
`;

export const ProductTitle = styled.Text`
  color: #b9c0d2;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 3.5px;
  line-height: 40px;
  margin-top: 10px;
  text-align: center;
`;

export const PriceContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  padding: 24px 32px 4px;
`;

export const ProductPrice = styled.Text`
  color: #f3f9ff;
  font-size: 22px;
  font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
  align-items: center;
  background: #4f5564;
  border-radius: 100px;
  flex-direction: row;
  padding: 4px 8px;
`;

export const ProductButtonText = styled.Text`
  color: #b9c0d2;
  font-size: 12px;
  font-weight: 800;
  padding: 0 4px;
  text-transform: uppercase;
`;
