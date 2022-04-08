import React from "react";
import { BoatData } from "../../data/boatData";
import styled from "styled-components";
import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import LayaoutSimple from "../../components/LayaoutSimple";

const ListBoat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1024px;
  margin: auto;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const BoatItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoatDetail = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const BoatImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 160px;
  
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
              <Link href={`/boats/${boat.id}`} passHref>
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
