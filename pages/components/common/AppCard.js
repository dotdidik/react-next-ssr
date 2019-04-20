import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const AppCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.gambar} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.content}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default AppCard;