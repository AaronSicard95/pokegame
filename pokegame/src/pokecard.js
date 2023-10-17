function Pokecard(props){
    let imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return <div style={{backgroundColor: "grey", margin: "20px", padding: "10px", display: "inline-block"}}>
        <p>
            {props.name}<br/>
            <img src={imgurl}></img><br/>
            Type: {props.type}<br/>
            EXP: {props.base_experience}
        </p>
    </div>
}
export default Pokecard;