import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background: #e83f5b;
  border-radius: 10px;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 18px;
  position: absolute;
`;

export const CartPricing = styled.Text`
  padding: 20px;
`;

export const CartTotalPrice = styled.Text`
  color: #f3f3ff;
  font-size: 16px;
  font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const CartButtonText = styled.Text`
  color: #f3f9ff;
  flex: 1;
  font-weight: bold;
  margin-left: 15px;
  margin-right: auto;
`;
