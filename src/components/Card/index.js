import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function CardComponent({ children, title, contentCard }) {
  return (
    <div>
      <Card style={{ boxShadow: "1px 6px 5px 1px rgba(138,138,138,1)" }}>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText className="mb-2 text-muted">{contentCard}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
