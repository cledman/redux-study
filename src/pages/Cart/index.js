import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductConainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubTotalValue
} from './styles';

import formatValue from '../../utils/formatValue';

export default function Cart() {
  const [products, setProducts] = useState([{
      id: '1',
      title: 'Assinatura Trimestral',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
      quantity: 2,
      price: 150,
    },
    {
      id: '2',
      title: 'Assinatura Anual',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
      quantity: 2,
        price: 540,
    },
  ]);

  return (
    <Container>
      <ProductConainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>
                  <TotalContainer>
                    <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() =>{}}>
                  <FeatherIcon name="plus" color="#e83f5b" size={16} />
                </ActionButton>
                <ActionButton onPress={() =>{}}>
                  <FeatherIcon name="minus" color="#e83f5b" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductConainer>
    </Container>
  );
}
