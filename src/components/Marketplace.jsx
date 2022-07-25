import React from "react";
import { goods } from "./List";
import {
  MainMiddle,
  CardWrapper,
  MarketTitle,
  Card,
  Locate,
  LocateCity,
  CardImg,
  CardText,
  ProductPrice,
  ProductName,
  ProductLocate,
} from "./Style";

export default function marketplace() {
  return (
    <MainMiddle className="animate__animated animate__fadeInUp">
      <MarketTitle>
        <h2>Today's picks</h2>
        <Locate>
          <i class="fa-solid fa-location-dot"></i>
          <LocateCity>Riga 30km</LocateCity>
        </Locate>
      </MarketTitle>
      <CardWrapper>
        <Card>
          <CardImg src={goods[0].img} />
          <CardText>
            <ProductPrice>{goods[0].narx}</ProductPrice>
            <ProductName>{goods[0].nomi}</ProductName>
            <ProductLocate>{goods[0].location}</ProductLocate>
          </CardText>
        </Card>
        <Card>
          <CardImg src={goods[1].img} />
          <CardText>
            <ProductPrice>{goods[1].narx}</ProductPrice>
            <ProductName>{goods[1].nomi}</ProductName>
            <ProductLocate>{goods[1].location}</ProductLocate>
          </CardText>
        </Card>
        <Card>
          <CardImg src={goods[2].img} />
          <CardText>
            <ProductPrice>{goods[2].narx}</ProductPrice>
            <ProductName>{goods[2].nomi}</ProductName>
            <ProductLocate>{goods[2].location}</ProductLocate>
          </CardText>
        </Card>
        <Card>
          <CardImg src={goods[3].img} />
          <CardText>
            <ProductPrice>{goods[3].narx}</ProductPrice>
            <ProductName>{goods[3].nomi}</ProductName>
            <ProductLocate>{goods[3].location}</ProductLocate>
          </CardText>
        </Card>
        <Card>
          <CardImg src={goods[4].img} />
          <CardText>
            <ProductPrice>{goods[4].narx}</ProductPrice>
            <ProductName>{goods[4].nomi}</ProductName>
            <ProductLocate>{goods[4].location}</ProductLocate>
          </CardText>
        </Card>
        <Card>
          <CardImg src={goods[5].img} />
          <CardText>
            <ProductPrice>{goods[5].narx}</ProductPrice>
            <ProductName>{goods[5].nomi}</ProductName>
            <ProductLocate>{goods[5].location}</ProductLocate>
          </CardText>
        </Card>
      </CardWrapper>
    </MainMiddle>
  );
}
