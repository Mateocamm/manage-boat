import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  box-shadow: 2px 0 10px rgba(100, 100, 100, 0.3);

  background-color: #006494;
`;

const Title = styled.h1`
  font-weight: 300;
  letter-spacing: 1px;
  color: #fff;

  a{
    color: #fff;
  }
`;

function Header() {
  return (
    <HeaderPage>
      <Title><Link href="/boats">Rent Boat Labuan Bajo</Link></Title>
    </HeaderPage>
  );
}

export default Header;
