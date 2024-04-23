import "./index.css";

import Box from "../box";

import ListItem from "../list-item";

import Heading from "../heading";

import poolIcon from "./pool.svg";
import gymIcon from "./gym.svg";
import breakfastIcon from "./breakfast.svg";
import wifiIcon from "./wi-fi.svg";
import parkingIcon from "./parking.svg";
import petsIcon from "./pets.svg";
import airportIcon from "./airport.svg";
import conciergeIcon from "./concierge.svg";
import roomServiceIcon from "./roomService.svg";
import childIcon from "./child.svg";

export default function Amenities({list}) {
    return (
        <Box shadow>
            <Heading border>Зручності</Heading>

            <List {...list}/>
        </Box>
    );
}

function List({
    hasPool,
    hasGym,
    hasFreeBreakfast,
    hasFreeWiFi,
    hasParking,
    hasPetsAllowed,
    hasAirportShuttle,
    hasConciergeService,
    hasRoomService,
    hasChildFriendly,
}) {
    return (
        <ul>
            <ListItem show={hasPool} imageSrc={poolIcon}>
                <span>
                    {hasPool} Басейн 
                </span>
            </ListItem>

            <ListItem show={hasGym} imageSrc={gymIcon}>       
                <span>
                    {hasGym} Спортивний зал
                </span>
            </ListItem>

            <ListItem show={hasFreeBreakfast} imageSrc={breakfastIcon}>               
                <span>
                    {hasFreeBreakfast} Безкоштовний сніданок
                </span>
            </ListItem>
             
            <ListItem show={hasFreeWiFi} imageSrc={wifiIcon}>                
                <span> 
                    {hasFreeWiFi} Безкоштовний Wi-fi
                </span>
            </ListItem>

            <ListItem show={hasParking} imageSrc={parkingIcon}>                
                <span> 
                    {hasParking} Безкоштовний вуличний паркінг
                </span>
            </ListItem>

            <ListItem show={hasPetsAllowed} imageSrc={petsIcon}>                
                <span> 
                    {hasPetsAllowed} Дозволено розміщення з домашніми тваринами
                </span>
            </ListItem>

            <ListItem show={hasAirportShuttle} imageSrc={airportIcon}>                
                <span> 
                    {hasAirportShuttle} Трансфер до/з аеропорту
                </span>
            </ListItem>

            <ListItem show={hasConciergeService} imageSrc={conciergeIcon}>                
                <span> 
                    {hasConciergeService} Консьєрж-сервіс
                </span>
            </ListItem>

            <ListItem show={hasRoomService} imageSrc={roomServiceIcon}>                
                <span> 
                    {hasRoomService} Обслуговування номерів
                </span>
            </ListItem>

            <ListItem show={hasChildFriendly} imageSrc={childIcon}>                
                <span> 
                    {hasChildFriendly} Підходить для дітей
                </span>
            </ListItem>
        </ul>
    );
}
