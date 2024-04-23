import "./index.css";

import Box from "../box";

import Heading from "../heading";

import { Fragment } from "react";

import ListItem from "../list-item";

export default function Attractions({list}) {
    return (
        <Box shadow>
            <Heading border>Пам'ятки поблизу</Heading>
            <div>
                {list.map(({id, ...rest}) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </Box>
    );
}

function Item({name, link}) {
    return (
        <ul>
            <ListItem>
                <a href={link} alt={name}>{name}</a>
            </ListItem>
        </ul>
    );
}
