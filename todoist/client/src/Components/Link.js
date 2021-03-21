import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: flex;
  color: #49274a;
  font-weight:medium;
  text-decoration: none;
  font-size:20px;
  
  &:hover{

      color:black;
      font-size:23px;
    transition:500ms;
    text-decoration: underline red;
      
    
  }
`;
