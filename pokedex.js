function Pokedex(props){
    return<div>
        {props.pokecards.map(p=>(<Pokecard name={p.name} type={p.type} base_experience={p.base_experience} id={p.id}/>))}
    </div>
}