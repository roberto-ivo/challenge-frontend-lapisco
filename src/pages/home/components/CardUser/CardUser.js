import React from "react";
import { Row, Col } from "reactstrap";
import { genderRefactoring } from "../../../../helpers/genderRefactoring";
import { Avatar } from "../Avatar";
import "./CardUser.css";

export const CardUser = ({ user }) => {
  return (
    <div className="Card">
      <Row className="Card-row">
        <Col sm={4} md={4} lg={4} xl={4} className="Card-avatar">
          <Avatar img={user.picture.large} />
        </Col>
        <Col sm={8} md={8} lg={8} xl={8} className="Card-column-infos">
          <strong className="Card-title">{`${user.name.first} ${user.name.last}`}</strong>
          <strong className="Card-subtitle">{`${genderRefactoring(
            user?.gender
          )} - ${user.dob.age} anos`}</strong>
          <strong className="Card-cellphone">{user.cell}</strong>
          <strong className="Card-email">{user.email}</strong>
        </Col>
      </Row>
    </div>
  );
};
