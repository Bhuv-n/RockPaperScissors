function getCompChoice(){
    let x;
    x=Math.floor(Math.random() * 3);
    if (x==0){
        return "Rock"
    }
    else if (x==1){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}
function playRound(player){
    let Computer=getCompChoice();
    if (player==0){
        if (Computer=="Rock"){
            document.querySelector("#comp").innerHTML = "✊";
            document.querySelector("#res").innerHTML = "It's a tie";
        }
        if (Computer=="Paper"){
            document.querySelector("#comp").innerHTML = "✋";
            document.querySelector("#res").innerHTML = "You lose";
        }
        if (Computer=="Scissors"){
            document.querySelector("#comp").innerHTML = "✌️";
            document.querySelector("#res").innerHTML = "You win";
        }
    }
    else if (player==2){
        if (Computer=="Scissors"){
            document.querySelector("#comp").innerHTML = "✌️";
            document.querySelector("#res").innerHTML = "It's a tie";
        }
        if (Computer=="Rock"){
            document.querySelector("#comp").innerHTML = "✊";
            document.querySelector("#res").innerHTML = "You lose";
        }
        if (Computer=="Paper"){
            document.querySelector("#comp").innerHTML = "✋";
            document.querySelector("#res").innerHTML = "You win";
        }
    }
    if (player==1){
        if (Computer=="Paper"){
            document.querySelector("#comp").innerHTML = "✋";
            document.querySelector("#res").innerHTML = "It's a tie";
        }
        if (Computer=="Scissors"){
            document.querySelector("#comp").innerHTML = "✌️";
            document.querySelector("#res").innerHTML = "You lose";
        }
        if (Computer=="Rock"){
            document.querySelector("#comp").innerHTML = "✊";
            document.querySelector("#res").innerHTML = "You win";
        }
    }
}
// function playRound(player,Computer){
//     let Computer=getCompChoice();
//     if (player.startsWith('r') || player.startsWith('R')){
//         if (Computer=="Rock"){
//             alert("Its a tie");
//         }
//         if (Computer=="Paper"){
//             alert("You lose");
//         }
//         if (Computer=="Scissors"){
//             alert("You win");
//         }
//     }
//     else if (player.startsWith('s') || player.startsWith('S')){
//         if (Computer=="Scissors"){
//             alert("Its a tie");
//         }
//         if (Computer=="Rock"){
//             alert("You lose");
//         }
//         if (Computer=="Paper"){
//             alert("You win");
//         }
//     }
//     if (player.startsWith('p') || player.startsWith('P')){
//         if (Computer=="Paper"){
//             alert("Its a tie");
//         }
//         if (Computer=="Scissors"){
//             alert("You lose");
//         }
//         if (Computer=="Rock"){
//             alert("You win");
//         }
//     }
// }
