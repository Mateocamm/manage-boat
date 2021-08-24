import React from "react";
import { BoatData } from "../../data/boatData";
import styled from "styled-components";
import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import LayaoutSimple from "../../components/LayaoutSimple";

const ListBoat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: auto;
  padding: 20px 0;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const BoatItem = styled.div`
width: 100%;
  max-width: 320px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    max-width: 100%;
    box-shadow: initial;
  }
`;

const BoatDetail = styled.div`
  width: 90%;
  padding: 10px;
`;

const BoatImage = styled(Image)`
  width: 100%;
  height: 100%;
  
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 280px;
  height: 160px;
  border-radius: 10px;
  box-shadow: 2px 0 10px rgba(100, 100, 100, 0.3);

  @media (max-width: 800px) {
    width: 90%;
    height: 200px;
    box-shadow: initial;
    object-fit: cover;
  }
`;

function index() {
  return (
    <LayaoutSimple>
      <ListBoat>
        {BoatData.map((boat) => (
          <BoatItem>
            <ImageWrapper>
              <BoatImage
                src={boat.profilePicture}
                layout="fill"
                alt={boat.name}
              />
            </ImageWrapper>
            <BoatDetail>
              <h2>{boat.name}</h2>
              <p>Capacity: {boat.maxPerson} Person</p>
              <Link href={`/boats/${boat.id}`}>
                <Button icon={<CalendarOutlined />}>View Calendar</Button>
              </Link>
            </BoatDetail>
          </BoatItem>
        ))}
      </ListBoat>
    </LayaoutSimple>
  );
}

export default index;
