import "./index.css";

export default function ListItem({children, imageSrc, title, className, show}) {
    show = typeof(show) === "undefined" ? true : show; 
    return (
       <li className={`${className ? className : "list-item"} ${show ? "" : "list-item__hide"} `}>
            {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />} 
            <div className="list-item__block">
                {title && <strong className="list-item__title">{title}</strong>}
                <div className="list-item__content">{children}</div>
            </div>
            
       </li>
    );
}