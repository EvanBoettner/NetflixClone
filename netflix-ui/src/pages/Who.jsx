import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Who() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="profiles" onClick={() => navigate("/")}>
        <div className="div">
          <h1 className="h1">Who is watching?</h1>
        </div>
        <div className="user1">
          <span>Nani?</span>
        </div>
        <div className="user2">
          <span>Very Metal</span>
        </div>
        <div className="user3">
          <span>Grand Master</span>
        </div>
        <div className="user4">
          <span>Hello Guys</span>
        </div>
      </div>
      <div className="button">
        <button className="butt">Manage Profiles</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
`;
