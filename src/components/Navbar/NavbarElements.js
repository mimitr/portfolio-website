import styled from "styled-components";

// import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const NavLinks = styled(LinkScroll)`
  // color: #fff;
  display: flex;
  
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
