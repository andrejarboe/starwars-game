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
    var userCharacter;
    var userSeleted = false;

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
        //if userSeected is off
        if (!userSeleted) {
            for (i = 0; i < characters.length; i++) {
                $("#characters").append(
                    "<div id='" + characters[i].id + "'class='box choose-char'>" +
                    characters[i].name +
                    "<div class='hp'>" + characters[i].hp + "</div></div>"
                );
            }
        }

        getUserCharacter();
    }

    //get user character
    function getUserCharacter() {
        $('.box').click(function (event) {
            userCharacter = $(this).attr('id');
            console.log('user is: ' + userCharacter);
            userSeleted = true;
            //hide fighters
            $('.choose-char').hide();
            //show user fighter
            showUserFighter()
            //show enemanies
        });
    }

    //show user fighter character function
    function showUserFighter() {
        characters.forEach(function (index) {
            if (index.id === userCharacter) {
                userCharacter = index;
                $('.your-character').append(userCharacter.name);

            }
        });

        console.log(userCharacter);
    }

    //start game
    function startGame() {
        //reset vars
        userSeleted = false;

        //run code
        displayCharacters();

    }

    /*Running code
     ******************************/
    startGame();


});