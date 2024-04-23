import "./index.css";

import Box from "../box";

import Heading from "../heading";

export default function Additional({...list}) {
    return (
        <Box shadow>
            <Heading border>Додаткові властивості</Heading>
            <ul>
                <Item title="Правила дому" text={list.rules} />
                <Item title="Політика скасування" text={list.cancellation} />
                <Item title="Місцевий транспорт" text={list.transportation} />
                <Item title="Мова хосту" text={list.languages} />
                <Item title="Спеціальні пропозиції" text={list.offers} />
                <Item title="Інструкції щодо реєстрації" text={list.instructions} />
            </ul>
        </Box>
    );
}

function Item({title, text}) {
    return (
        <li className="list-item additional">
            <span className="room__title" style={{"text-align": "left"}}>{title}</span>
            <span className="room__info">{text}</span>
        </li>
    )
}
