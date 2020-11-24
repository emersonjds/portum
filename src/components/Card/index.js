import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export default function CardComponent({
  children,
  title,
  contentCard,
  bkgColor,
}) {
  return (
    <div>
      <Card
        style={{
          boxShadow: "1px 6px 5px 1px rgba(138,138,138,1)",
          backgroundColor: bkgColor,
        }}
      >
        <CardBody>
          <CardTitle tag="h5" style={{ color: "#000", textAlign: "center" }}>
            {title}
          </CardTitle>
          <CardText className="mb-2 text-muted">{contentCard}</CardText>
          {children}
        </CardBody>
      </Card>
    </div>
  );
}
