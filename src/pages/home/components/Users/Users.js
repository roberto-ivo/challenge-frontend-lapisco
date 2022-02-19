import React from "react";
import { Row, Col } from "reactstrap";
import { CardUser } from "../CardUser/CardUser";

export const Users = ({ data }) => {
  var usersRow = [];

  const objectsByCol = 3;

  const viewCardUsers = (dataPlot, valueCol, index) => {
    return (
      <Row key={index} style={{ margin: "20px 10px" }}>
        {dataPlot.map((userPlot, indexPlot) => {
          return (
            <Col
              style={{ padding: "0px 10px" }}
              sm={valueCol}
              md={valueCol}
              lg={valueCol}
              xl={valueCol}
              key={`${index.toString()}-${indexPlot.toString()}`}
            >
              <CardUser user={userPlot} />
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <>
      {data.map((user, index) => {
        if (usersRow.length === objectsByCol)
          usersRow.splice(0, objectsByCol + 1);
        usersRow.push(user);
        const valueCol = 12 / objectsByCol;
        if (usersRow.length === objectsByCol) {
          return viewCardUsers(usersRow, valueCol, index);
        } else if (data.length < objectsByCol && index === data.length - 1) {
          return viewCardUsers(usersRow, valueCol, index);
        } else if (
          data.length % objectsByCol !== 0 &&
          index === data.length - 1
        ) {
          return viewCardUsers(usersRow, valueCol, index);
        } else return null;
      })}
    </>
  );
};
