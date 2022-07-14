import styled from "styled-components";
import { StyledHeader } from "./styles/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <h1>Gateway Growhouse</h1>
    </StyledHeader>
  );
}

// import styled from "styled-components";

// function Header() {
//   const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
//   `;

//   const Wrapper = styled.section`
//     padding: 4em;
//     background: papayawhip;
//   `;

//   return (
//     <Wrapper>
//       <Title>
//         <h1>Gateway Growhouse</h1>
//       </Title>
//     </Wrapper>
//   );
// }

export default Header;
