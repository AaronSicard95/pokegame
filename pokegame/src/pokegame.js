import Pokedex from "./pokedex";

function Game(props){
    let hand1 = [];
    let hand2 = [];
    for(let p of props.pokemon){
        if(hand1.length == 4){
            hand2.push(p);
        }else if(hand2.length == 4){
            hand1.push(p);
        }else{
            if(Math.floor(Math.random()*2) == 1){
                hand1.push(p);
            }else{
                hand2.push(p);
            }
        }
    }
    let total1 = 0;
    let total2 = 0;
    for(let p of hand1){
        total1 += p.base_experience;
    }
    for(let p of hand2){
        total2 += p.base_experience;
    }
    let winnerText = total1>=total2?"Hand 1 Wins!": "Hand 2 Wins!";
    return <div>
        <h1>{winnerText}</h1><br/>
        <h1>Hand 1 Total EXP: {total1}</h1>
        <div><Pokedex pokecards={hand1}/></div>
        <br/>
        <h1>Hand 2 Total EXP: {total2}</h1>
        <div><Pokedex pokecards={hand2}/></div>
    </div>
}

export default Game;