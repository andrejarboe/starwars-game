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
    var defender;
    var userSelected = false;
    var defenderSelected = false;

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
            showUserFighter();
            //show enemies
            showEnemies();
        });
    }

    //show user fighter character function
    function showUserFighter() {
        characters.forEach(function (index) {
            if (index.id === userCharacter) {
                userCharacter = index;
                $('.your-character').append(
                    "<div id='user'>" +
                    userCharacter.name +

                    "<div id='userHp'>" + userCharacter.hp + "</div></div></div>"
                );
            }
        });

        console.log(userCharacter);
    }

    //show enemies 
    function showEnemies() {
        $('#enemies').append('<h3>Enemies Available to Attack</h3>');

        //loop through arr
        //if userCharacter id != arr index show enemy
        for (i = 0; i < characters.length; i++) {
            if (characters[i].id !== userCharacter.id) {
                $("#enemies").append(
                    "<div id='" + characters[i].id + "'class='box enemy'>" +
                    characters[i].name +
                    "<div class='hp'>" + characters[i].hp + "</div></div>"
                );
            }
        }

        getDefender();
    }

    //get defender
    function getDefender() {
        $('.enemy').click(function (event) {

            if (!defenderSelected) {
                defenderSelected = true;
                defender = $(this).attr('id');
                console.log('Defender is: ' + defender);
                //hide enemy
                $(this).hide();
                //show defender
                showDefender(defender);
            }

        });
    }

    //show defender
    function showDefender(defender) {
        console.log('*************************');
        console.log('showDefender();');
        console.log('*************************');

        characters.forEach(function (index) {
            if (index.id === defender) {
                defender = index;
                $('#defender').append(
                    "<div id='selected-enemy'>" +
                    defender.name +
                    "<div id='enemyHp'> Defender Hp:" + defender.hp + "</div></div>"
                );
            }
        });
        console.log(defender);

        //attack button
        attack(userCharacter, defender);

    }

    //attack
    function attack(userCharacter, defender) {
        var userHp = userCharacter.hp;
        var defenderHp = defender.hp;
        var defenderAttack = defender.attack;

        userCharacter.attack = 0;


        $('#attack').on('click', function () {
            if (userSelected && defenderSelected) {

                userCharacter.attack += 8;
                defenderHp -= userCharacter.attack;
                userCharacter.hp -= defenderAttack;

                console.log('Attack button clicked');
                console.log('User character: ' + userCharacter.name);
                console.log('User hp: ' + userCharacter.hp);
                console.log('User attack: ' + userCharacter.attack)
                console.log('Defender: ' + defender.name);
                console.log('Defender attack: ' + defender.attack);
                console.log('Defender hp: ' + defender.hp);
                console.log('********************************************');

                $('#userHp').text(userCharacter.hp);
                $('#enemyHp').text(defenderHp);

                if (defenderHp <= 0) {
                    $('#selected-enemy').hide();
                    defenderSelected = false;
                    getDefender();

                }


            }
        });
    }

    //start game
    function startGame() {
        //reset vars
        userSelected = false;
        defenderSelected = false;

        //run code
        displayCharacters();


    }

    /*Running code
     ******************************/
    startGame();


});