function parsePokemon(urlPath) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlPath, true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 400) {
            var pokemonObjects = JSON.parse(xhttp.responseText).objects[0].pokemon;
            var pokemonList = document.getElementById("pokemon-list");

            for (var i in pokemonObjects) {
                var paragraph = document.createElement("p");
                var pTextNode = document.createTextNode(pokemonObjects[i].name);
                paragraph.appendChild(paragraph);
            }
        }

    }
xhttp.send();
};
parsePokemon("pokemon.json");