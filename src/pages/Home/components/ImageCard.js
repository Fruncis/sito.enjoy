import "./ImageCard.css"
import leafStatImage from "../../../assets/images/leaf-stat-image.png"




const ImageCard = ({image=leafStatImage, icon="fa-solid fa-leaf", header, children})=>{
    return(
        <div
            className="stat-test fade-in"
        >
            <div className="stat-text">
                <div className="stat-icon">
                    <i className={icon}></i>
                </div>
                <h3>{header}</h3>
                {children}
            </div>
            <div className="img-container">
                <img src={image} alt="immagine" className="img-stat border-radius" />
            </div>


        </div>
    )
}

export default ImageCard;