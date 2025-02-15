export default function ReviewCard(props){
    return(
        <div className="reviewcard">
            <div className="image">
            <img src={props.image} alt="" />
            </div>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
        </div>
    )
}