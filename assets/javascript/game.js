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
            id: "obi",
            hp: 100,
            attack: 10
        },

        {
            name: "Yoda",
            id: "yoda",

            hp: 120,
            attack: 15
        },

        {
            name: "Darth Vader",
            id: "vader",
            hp: 150,
            attack: 20
        },
        {
            name: "Death Star",
            id: "deathStar",
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
            $("#characters").append(
                "<div id='" + characters[i].id + "'class='box'>" + characters[i].name + "</div>"
            );
        }

        getUsercharacter();
    }

    //get user character
    function getUsercharacter() {
        $('.box').click(function (event) {
            userChar = $(this).attr('id');
            console.log('user is: ' + userChar);

        });
    }

    //start game
    function startGame() {
        displayCharacters();

    }

    /*Running code
     ******************************/
    startGame();


});