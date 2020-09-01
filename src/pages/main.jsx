import React, { useState } from "react";
import { Card, Button, notification } from "antd";
import bimbom from "../assets/tan_nan.mp3";
import errorMessage from "../utils/errorMessage";
import {
  Container,
  PanelTitle,
  CardItem,
  CardItemTitle,
  stylesLine,
} from "./styles";

export default function Main() {
  const [counterNormal, setCounterNormal] = useState(0);
  const [counterPreferencial, setCounterPreferencial] = useState(0);

  const audioplay = () => {
    const audio = new Audio(bimbom);
    return audio.play();
  };

  const handleCallPassword = ({ key }) => {
    if (key === "normal") {
      setCounterNormal(counterNormal + 1);
      audioplay();
    } else if (key === "preferencial") {
      setCounterPreferencial(counterPreferencial + 1);
      audioplay();
    } else {
      return notification.error(errorMessage);
    }
  };

  return (
    <Container>
      <Card
        style={stylesLine.card}
        title={<PanelTitle>Painel de Senhas</PanelTitle>}
        headStyle={stylesLine.headStyle}
        bodyStyle={stylesLine.bodyStyle}
        actions={[
          <Button
            style={{ width: "90%" }}
            type="primary"
            onClick={() => handleCallPassword({ key: "normal" })}
          >
            Normal
          </Button>,
          <Button
            style={{ width: "90%" }}
            type="primary"
            danger
            onClick={() => handleCallPassword({ key: "preferencial" })}
          >
            Preferencial
          </Button>,
        ]}
      >
        <CardItem>
          <CardItemTitle fontSize="50px" color="#1890ff">
            Normal
          </CardItemTitle>
          <CardItemTitle fontSize="150px" color="#1890ff">
            {counterNormal}
          </CardItemTitle>
        </CardItem>
        <CardItem>
          <CardItemTitle fontSize="50px" color="#ff4d4f">
            Preferencial
          </CardItemTitle>
          <CardItemTitle fontSize="150px" color="#ff4d4f">
            {counterPreferencial}
          </CardItemTitle>
        </CardItem>
      </Card>
    </Container>
  );
}
