import React, { useState} from "react";
import { BoatData } from "../../../data/boatData";
import styles from "../../../styles/Home.module.css";
import Calendar from "rc-year-calendar";
import styled from "styled-components";
import LayaoutSimple from "../../../components/LayaoutSimple";
import Image from "next/image";
import { Form, Input, Button, DatePicker, Select, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";

const BoatImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Headerboat = styled.div`
  position: relative;
  width: 100%;
`;

const TitleBoat = styled.h3`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  padding: 10px 20px;
  margin: 0;
  background-color: rgba(47, 131, 188, 0.7);
  color: #fafafa;
  letter-spacing: 2px;
  text-transform: uppercase;
  max-width: 80%;
  transition: 1s;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const RangePicker = styled(DatePicker.RangePicker)`
  width: 100%;
`;

const FormBooking = styled(Form)`
  max-width: 600px;
  margin:auto;
`;

function index({ boat }) {
  const currentYear = new Date().getFullYear();
  const [bookingVisible, setBookingVisible] = useState(false);

  return (
    <LayaoutSimple>
      <div className={styles.container}>
        <Headerboat>
          <BoatImage
            src={`${boat?.profilePicture}`}
            alt={boat?.name}
            width="1024"
            height="500"
          />
          <TitleBoat>{boat?.name}</TitleBoat>
        </Headerboat>

        <Calendar
          displayDisabledDataSource
          year="2022"
          style="background"
          minDate={new Date(currentYear, 0, 1)}
          maxDate={new Date(currentYear, 0, 365)}
        />
        <Button type="primary" size="large" block onClick={() => setBookingVisible(true)}>Request Booking</Button>
        <Modal
          title={`Request Booking ${boat?.name}`}
          placement="center"
          closable={true}
          onCancel={() => setBookingVisible(false)}
          onOk={() => setBookingVisible(false)}
          visible={bookingVisible}
          key="center"
          okText="Request"
          
        >
          <FormBooking layout="vertical">
            <Form.Item name="startDate" label="Dates">
              <RangePicker format="DD/MM/YYYY" size="large" block />
            </Form.Item>
            <Form.Item name="noPerson" label="No. Pax">
              <Input size="large" />
            </Form.Item>
            <Form.Item name="notes" label="Notes">
              <TextArea size="large" rows="5" />
            </Form.Item>
            
          </FormBooking>
        </Modal>
      </div>
    </LayaoutSimple>
  );
}

export default index;

export async function getServerSideProps(context) {
  const id = context.params.idBoat;

  const boat = BoatData.find((item) => item.id === Number(id))

  return {
    props: { boat: boat }, // will be passed to the page component as props
  };
}
