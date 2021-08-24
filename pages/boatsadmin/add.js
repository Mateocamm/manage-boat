import { Form, Input, Button } from "antd";
import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import { SaveOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Conteiner = styled.div`
  max-width: 600px;
  background-color: #fafafa;
  border: 1px solid rgba(255,255,255,0.3);
  padding:10px;
`;

function add() {
  return (
    <LayoutAdmin>
      <h2>Add New Boat</h2>
      <Conteiner>
      <Form layout="vertical" >
        <Form.Item name="name" label="Boat Name">
          <Input size="large" />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <Input size="large" />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input size="large" />
        </Form.Item>
        <Form.Item name="instagram" label="Instagram">
          <Input size="large" />
        </Form.Item>
        <Form.Item name="contact" label="Contact Person">
          <Input size="large" />
        </Form.Item>

        <Button icon={<SaveOutlined />} size="large" type="primary" block>
          Save
        </Button>
      </Form>
      </Conteiner>
    </LayoutAdmin>
  );
}

export default add;
