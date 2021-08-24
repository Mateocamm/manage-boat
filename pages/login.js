import React from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  
`;

const LoginForm = styled(Form)`
  max-width: 700px;
  padding: 20px;
  border: 1px solid #333;
`;

function login() {
  return (
    <LoginDiv>
      <LoginForm name="basic" layout="horizontal">
        <h2>Login</h2>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Submit
          </Button>
        </Form.Item>
      </LoginForm>
    </LoginDiv>
  );
}

export default login;
