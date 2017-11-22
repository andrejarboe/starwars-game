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
    var userSelected = false;

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
        //if userSelected is off
        if (!userSelected) {
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
            userSelected = true;
            //hide fighters
            $('.choose-char').hide();
            //show user fighter
            showUserFighter()
            //show enemies
            showEnemies();
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

    //show enemies 
    function showEnemies(){
        $('#enemies').append('<h3>Enemies Available to Attack</h3>');
        
        //loop through arr
        //if userCharacter id != arr index show enemy
        for(i=0; i<characters.length; i++){
            if(characters[i].id !== userCharacter.id){
                $("#enemies").append(
                    "<div id='" + characters[i].id + "'class='box choose-char'>" +
                    characters[i].name +
                    "<div class='hp'>" + characters[i].hp + "</div></div>"
                );
            }
        }

        
    }

    //start game
    function startGame() {
        //reset vars
        userSelected = false;

        //run code
        displayCharacters();

    }

    /*Running code
     ******************************/
    startGame();


});