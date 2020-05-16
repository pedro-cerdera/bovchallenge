import React from 'react';
import styled from 'styled-components/native';

const Separator = styled.View`
  width: 10px;
`;

export const HorizontalList = styled.FlatList.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  keyExtractor: (item, index) => `${index}`,
  ItemSeparatorComponent: () => <Separator />,
}))`
  padding-horizontal: 20px;
  padding-bottom: 20px;
  flex-grow: 0;
`;
