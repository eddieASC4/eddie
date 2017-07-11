myPokemonRoster = ["ivysaur","venuaur","pidgey","beedrill","unown"];
var firstToFight = "venuaur";
var secondToFight = "ivysaur";
myPokemonRoster.pop();
myPokemonRoster.push("murkrow");
myPokemonRoster.push("quagsire");
myPokemonRoster.length;
var RosterSize = myPokemonRoster.length;
for (var i=0; i < 5; i++){
    console.log(myPokemonRoster[i]);
}
for (var i=5; i<5; i++){
    console.log(myPokemonRoster)[i];
}
