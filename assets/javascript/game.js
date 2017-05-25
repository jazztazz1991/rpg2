var characters ={
    maz: { 
        name: "Maz", 
        hp: 100, 
        atk: 10, 
        power: 10, 
        defAtk: 15, 
        image: $("<img>"), 
        image2: $("<img>") 
    },
    finn: { 
        name: "Finn",
        hp: 120, 
        atk: 9, 
        power: 9, 
        defAtk: 15,
        image: $("<img>"),
        image2: $("<img>")
        },
    kylo: { 
        name: "Kylo", 
        hp: 150, 
        atk: 8, 
        power: 8, 
        defAtk: 15,
        image: $("<img>"),
        image2: $("<img>")
    },
    rey: { 
        name: "Rey", 
        hp: 200, 
        atk: 7, 
        power: 7, 
        defAtk: 15,
        image: $("<img>"),
        image2: $("<img>")
    },
}
var character, enemy = { hp: 0, defAtk: 0};

// add class to object images
characters.maz.image.addClass("maz");
characters.finn.image.addClass("finn");
characters.kylo.image.addClass("kylo");
characters.rey.image.addClass("rey");
// add image to object images
characters.maz.image.attr("src", "assets/images/maz.jpg");
characters.finn.image.attr("src", "assets/images/finn.jpg");
characters.kylo.image.attr("src", "assets/images/kylo.jpg");
characters.rey.image.attr("src", "assets/images/rey.jpg");
// add class to object image2
characters.maz.image2.addClass("maz2");
characters.finn.image2.addClass("finn2");
characters.kylo.image2.addClass("kylo2");
characters.rey.image2.addClass("rey2");
// add image to object image2
characters.maz.image2.attr("src", "assets/images/maz.jpg");
characters.finn.image2.attr("src", "assets/images/finn.jpg");
characters.kylo.image2.attr("src", "assets/images/kylo.jpg");
characters.rey.image2.attr("src", "assets/images/rey.jpg");

//display object images into selection
$("#selectImage").append(characters.maz.image, characters.finn.image, characters.kylo.image, characters.rey.image);

//selection of character if charaChosen is false
$(".maz").on("click", function(){
    $("#selectImage").addClass("hide");
    $("#charaChosen").append(characters.maz.image2);
    $("#enemy1").append(characters.finn.image2);
    $("#enemy2").append(characters.kylo.image2);
    $("#enemy3").append(characters.rey.image2);
    character = characters.maz;
})
$(".finn").on("click", function(){
    $("#selectImage").addClass("hide");
    $("#charaChosen").append(characters.finn.image2);
    $("#enemy4").append(characters.maz.image2);
    $("#enemy2").append(characters.kylo.image2);
    $("#enemy3").append(characters.rey.image2);
    character = characters.finn;
})
$(".kylo").on("click", function(){
    $("#selectImage").addClass("hide");
    $("#charaChosen").append(characters.kylo.image2);
    $("#enemy1").append(characters.finn.image2);
    $("#enemy4").append(characters.maz.image2);
    $("#enemy3").append(characters.rey.image2);
    character = characters.kylo;
})
$(".rey").on("click", function(){
    $("#selectImage").addClass("hide");
    $("#charaChosen").append(characters.rey.image2);
    $("#enemy1").append(characters.finn.image2);
    $("#enemy2").append(characters.kylo.image2);
    $("#enemy4").append(characters.maz.image2);
    character = characters.rey;
})

//Select which enemy to attack
$("#enemy1").on("click", function(){
    $("#def").append(characters.finn.image2);
    document.getElementById("enemyName").innerHTML = characters.finn.name;
    document.getElementById("enemyHp").innerHTML = characters.finn.hp;
    enemy = characters.finn;
})
$("#enemy2").on("click", function(){
    $("#def").append(characters.kylo.image2);
    document.getElementById("enemyName").innerHTML = characters.kylo.name;
    document.getElementById("enemyHp").innerHTML = characters.kylo.hp;
    enemy = characters.kylo;
})
$("#enemy3").on("click", function(){
    $("#def").append(characters.rey.image2);
    document.getElementById("enemyName").innerHTML = characters.rey.name;
    document.getElementById("enemyHp").innerHTML = characters.rey.hp;
    enemy = characters.rey;
})
$("#enemy4").on("click", function(){
    $("#def").append(characters.maz.image2);
    document.getElementById("enemyName").innerHTML = characters.maz.name;
    document.getElementById("enemyHp").innerHTML = characters.maz.hp;
    enemy = characters.maz;
})

//fight button
$("#btnClick").on("click", function(){
   if( character.hp >= 0 ){
       if( enemy == characters.maz && enemy.hp > 0 ){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.power;
            character.power += character.atk;
            document.getElementById("enemyHp").innerHTML = characters.maz.hp;
            if( enemy.hp <= 0 ){
                $(".maz2").hide();
            }
        }
        if( enemy == characters.finn && enemy.hp > 0 ){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.power;
            character.power += character.atk;
            document.getElementById("enemyHp").innerHTML = characters.finn.hp;
            if( enemy.hp <= 0 ){
                $(".finn2").hide();
                enemy = "";
            }
        }
       if( enemy == characters.kylo && enemy.hp > 0 ){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.power;
            character.power += character.atk;
            document.getElementById("enemyHp").innerHTML = characters.kylo.hp;
            if( enemy.hp <= 0 ){
                $(".kylo2").hide();
            }
        }
       if( enemy == characters.rey && enemy.hp > 0 ){
            character.hp -= enemy.defAtk;
            enemy.hp -= character.power;
            character.power += character.atk;
            document.getElementById("enemyHp").innerHTML = characters.rey.hp;
            if( enemy.hp <= 0 ){
                $(".rey2").hide();
            }
        }
   }
    else{
        alert("You Lost");
    }
})