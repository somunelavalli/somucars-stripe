import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/mybookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/myprofile">Profile</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "orangered" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <Link to="/">SomuCars</Link>
              </h1>
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>{user.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div>{props.children}</div>
      <div className="footer text-center">
        <hr />
        <p>Designed and Developed By</p>
        <p>Somu N</p>
      </div>
    </div>
  );
}

export default DefaultLayout;
