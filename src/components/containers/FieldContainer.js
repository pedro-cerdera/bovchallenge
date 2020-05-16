import styled from 'styled-components/native';

const FieldContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: ${(props) => (props.circle ? props.size / 2 : 5)}px;
  padding: ${(props) => props.space}px;
  ${(props) =>
    props.square || props.circle
      ? `
    width: ${props.size}px;
    height: ${props.size}px;
  `
      : ''}
`;

FieldContainer.defaultProps = {
  space: 10,
};

export {FieldContainer};
