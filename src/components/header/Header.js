import React from "react";
import styled from "styled-components";

const FormattedHeader = styled.div`
  margin: 20px 0;
  font-size: ${props => props.size? props.size : '2rem'};
  font-family: 'AlverataBl';
`;

const Header = ({text, size}) => <FormattedHeader size={size}>{text}</FormattedHeader>;

export default Header;