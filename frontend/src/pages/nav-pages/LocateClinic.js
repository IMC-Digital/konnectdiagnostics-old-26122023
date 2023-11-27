import React from "react";
import { styled } from "styled-components";
// import ClinicData from "../../assets/data/ClinicData";
// import { IoIosCall, IoIosMail } from "react-icons/io";
// import { GoLocation } from "react-icons/go";
import LocateClinicGrid from "./LocateClinicGrid";

const LocateClinic = () => {
  return (
    <Wrapper>
      <div className="locate-clinic">
        <h1 className="title">Locate Nearest Centers </h1>
        <LocateClinicGrid />
      </div>
    </Wrapper>
  );
};

export default LocateClinic;
const Wrapper = styled.section`
  .locate-clinic {
    background-color: white;
    h1 {
      text-align: center;
      margin: 3rem 0;
      position: relative;
    }
  }
`;
