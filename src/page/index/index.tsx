import React from "react";
import styled from "styled-components";

// import { BigNumber as BN, ethers } from "ethers";
// import web3 from "src/utils/web3.js";
import { isMobile } from "src/helpers/utilities";

const MobileBox = styled.div`
  background: #fbfafc;
  padding: 0 22px;
`;

export default function Home() {
  return <>{isMobile() ? <MobileBox>1 </MobileBox> : <>·1</>}</>;
}
