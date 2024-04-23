import {Fragment} from "react";

import Heading from '../heading';

import Box from '../box'

import "./index.css";

export default function Review({list}) {
    return (
        <div className="room__block">
            <Heading border>Відгуки клієнтів</Heading>
        
            <div className="room__list">
                {list.map(({id, ...rest}) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

function Item({guestName, rating, review}) {
    return (
        <Box className="room">
            <span className="review__title--row">
                <span className="room__title">{guestName}</span>
                <span className="room__rating">Рейтинг: {rating}</span>
            </span>
            <div>
                <span className="room__review">{review}</span>
            </div>
        </Box>
    )
}