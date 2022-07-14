import styled from "styled-components";
import Button from "../Button";

export const StyledButton = styled(Button)`
  /* background-color: ${(props) => props.backgroundColor}; */
  background-color: ${({ theme }) => theme.colors};
  width: 200px;
  height: 100px;
  color: red;
  font-size: 40px;
  &:hover {
    background-color: coral;
    color: green;
    /* & label {
      color: green;
    } */
  }
`;

export const ButtonLabel = styled.label`
  font-size: 20px;
  color: white;
`;

// import styled from "styled-components";

// export const Button = styled.button`
//   background-color: ${(props) => props.backgroundColor};

//   &:hover {
//     background-color: coral;
//     & label {
//       color: green;
//     }
//   }
// `;

// export const ButtonLabel = styled.label`
//   font-size: 1.5em;
//   color: white;
// `;
