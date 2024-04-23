import "./index.css";

import Box from "../box";

import ListItem from "../list-item";

import Heading from "../heading";

import guestsIcon from "./guests.svg";
import bedroomsIcon from "./bedrooms.svg";
import bedsIcon from "./beds.svg";
import bathsIcon from "./baths.svg";

export default function Properties({list}) {
    return (
        <Box shadow>
            <Heading border>Деталі властивості:</Heading>

            <List {...list}/>
        </Box>
    );
}

function List({guests, bedrooms, beds, baths}) {
    return (
        <ul>
            <ListItem imageSrc={guestsIcon}>
                <span>
                    {guests} гості
                </span>
            </ListItem>

            <ListItem imageSrc={bedroomsIcon}>            
                <span>
                    {bedrooms} спальня
                </span>
            </ListItem>

            <ListItem imageSrc={bedsIcon}>                
                <span>
                    {beds} ліжко
                </span>
            </ListItem>
             
            <ListItem imageSrc={bathsIcon}>                
                <span>{baths} ванна кімната</span>
            </ListItem>
        </ul>
    );
}
