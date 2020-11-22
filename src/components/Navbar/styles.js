import styled from "styled-components";

export const VesselContainer = styled.div`
  height: 100px;
  width: 150;
  border: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  border-radius: 10px;
  margin-bottom: 1em;
`;

export const LeftAreaContainer = styled.div`
  width: 25%;
  height: 100%;
  & img {
    border-radius: 10px;
  }
  /* border: 1px solid; */
`;

export const MiddleAreaContainer = styled.div`
  width: 40%;
  height: 100%;
  text-align: center;
  /* border: 1px solid; */
`;

export const RightAreaContainer = styled.div`
  width: 32%;
  height: 100%;
  text-align: right;
  /* border: 1px solid; */
`;
