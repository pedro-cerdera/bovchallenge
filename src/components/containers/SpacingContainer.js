import styled from 'styled-components/native';

const SpacingContainer = styled.View`
  flex: 1;
  margin: ${(props) => props.space}px;
`;

SpacingContainer.defaultProps = {
  space: 20,
};

export {SpacingContainer};
