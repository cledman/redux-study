import styled from 'styled-components/native';
import { FlatList, Image } from 'react-native';

export const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`;

export const ProductConainer = styled.View`
  background-color: #e83f5b;
  border-radius: 20px;
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 30px 30px;
`;

export const Product = styled.View`
  background-color: #fff;
  border-radius: 20px;
  flex: 1;
  flex-direction: row;
  margin: 5px;
  min-height: 130px;
  /*min-width: 350px;*/
  padding: 15px 10px;
`;

export const ProductImage = styled(Image).attrs({
  resizeMode: 'contain',
})`
  height: 92px;
  width: 100px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  color: #414756;
  font-size: 12px;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  color: #e83f5b;
  font-weight: bold;
  font-size: 16px;
  margin-top: 5px;
`;

export const ProductQuantity = styled.Text`
  color: #e83f5b;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
  margin-top: 5px;
`;

export const ActionContainer = styled.View`
  align-items: center;
  align-self: flex-end;
  font-weight: bold;
  justify-content: space-between;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 9px;
  margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
  align-items: center;
  background: #e83f5b;
  border: 10px;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 36px 40px;
  position: absolute;
`;

export const TotalProductsText = styled.Text`
  color: #fff;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
`;

export const SubTotalValue = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
