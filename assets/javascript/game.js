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
            attack: 10,
            img: "./assets/images/obiWan.jpg"
        },

        {
            name: "Yoda",
            id: "yoda",
            hp: 120,
            attack: 15,
            img: "./assets/images/yoda.jpg"
        },

        {
            name: "Darth Vader",
            id: "vader",
            hp: 150,
            attack: 20,
            img: "./assets/images/darthVader.jpg"

        },
        {
            name: "Death Star",
            id: "deathStar",
            hp: 190,
            attack: 25,
            img: "./assets/images/deathStar.jpg"
        },
        // {
        //     name: "jar jar",
        //     id: "jar",
        //     hp: 50,
        //     attack: 5,
        //     img: "./assets/images/obiWan.jpg"
        // }

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
                    "<img src='" + characters[i].img + "'/>" +
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
            $('#characters').hide();
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

        userCharacter.attack = 0;


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
        console.log('Defender var is: ' + defender);
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
        console.log('show defender' + defender.name);

        //attack button
        attack(userCharacter, defender);


    }

    //attack
    function attack(userCharacter, defender) {

        var userHp = userCharacter.hp;
        var defenderHp = defender.hp;
        var defenderAttack = defender.attack;

        $('#attack').on('click', function () {
            console.log('*******************************');
            console.log('Attack defender' + defender.name);
            console.log('*******************************');
            console.log('defender Selected value <= 0 ::::: ' + defenderSelected);
            console.log('defender hp: ' + defenderHp);

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

                $('#user-text').text('You attacked ' + defender.name + ' for ' + userCharacter.attack + ' damage.');
                $('#com-text').text(defender.name + ' attacked you for ' + defender.attack + ' damage.');

            }

            if (userCharacter.hp <= 0) {
                alert('you loose!');
                $('.container').append('<button id="restart" type="button">Restart</button>');
                restart();
            } else if (defenderHp <= 0) {

                console.log('defender Selected value <= 0 ::::: ' + defenderSelected);

                $('#com-text').append('You have defeated ' + defender.name + '. You can choose another character to attack.');

                $('#selected-enemy').remove();
                defenderSelected = false;
                getDefender();
                defenderHp = defender.hp;

            }
        });



    }

    function restart() {
        $('#restart').on('click', function () {
            location.reload();
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