$(document).ready(function () {
    // hold each characters attack and HP value
    //obi
    //yoda
    //vader
    //death star/final boss?
    // set users character to low attack
    // decrease users and hp
    // increase users attack 

    /*Global vars
     *********************************************************/
    var userChar;

    var characters = [{
            name: "Obi Wan Kenobi",
            hp: 100,
            attack: 10
        },

        {
            name: "Yoda",
            hp: 120,
            attack: 15
        },

        {
            name: "Darth Vader",
            hp: 150,
            attack: 20
        },
        {
            name: "Deathstar",
            hp: 190,
            attack: 25
        }

    ]

    /*Functions
     ******************************************************/
    //display characters on screen
    function displayCharacters() {
        console.log(characters.length);
        for (i = 0; i < characters.length; i++) {
            $("#characters").append(characters[i].name);
        }
    }

    /*Running code
     ******************************/
    displayCharacters();


});