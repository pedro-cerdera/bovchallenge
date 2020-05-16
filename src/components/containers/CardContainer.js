import styled from 'styled-components/native';
import StyleGuide from '../../styleguide';

export const CardContainer = styled.View`
  background-color: ${StyleGuide.colors.white}66;
  box-shadow: 0 3px 3px #222222;
  elevation: 1;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  flex: 1;
  align-items: center;
  padding: ${(props) => (props.verticalSpacing ? 20 : 0)}px 0;
  justify-content: space-between;
`;
