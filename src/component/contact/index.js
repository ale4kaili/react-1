import "./index.css";

import Heading from "../heading";

export default function Contact({img, name, rate, time, info, phone}) {
    return (
        <div className="contact">
            <div className="info">
                <div>
                    <img src={img} alt={name} className="avatar" />
                </div>
                <div  className="contact-user">
                    <div>
                        <Heading>Господар - {name}</Heading>      
                    </div>
                    <div className="contact-info">
                        <span className="sub-title">{phone}</span>

                        <span className="sub-title">{time}</span>

                        <span className="sub-title">
                            {rate}% швилкості відгуку
                        </span>
                    </div> 
                </div>
            </div>
            {info}          
        </div>
    )   
}