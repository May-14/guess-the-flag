image = document.querySelector("img");
let allCountriesString = "af al dz ad ao ag ar am au at az bs bh bd bb by be bz bj bt bo ba bw br bn bg bf bi kh cm ca cv cf td cl cn co km cg cd cr ci hr cu cy cz dk dj dm do ec eg sv gq er ee et fj fi fr ga gm ge de gh gr gd gt gn gw gy ht hn hu is in id ir iq ie il it jm jp jo kz ke ki kp kr kw kg la lv lb ls lr ly li lt lu mk mg mw my mv ml mt mh mr mu mx fm ma md mc mn me mz mm na nr np nl nz ni ne ng no om pk pw pa pg py pe ph pl pt qa ro ru rw kn lc vc ws sm st sa sn rs sc sl sg sk si sb so za ss es lk sd sr sz se ch sy tj tz th tl tg to tt tn tr tm tv ug ua ae gb us uy uz vu ve vn ye zm zw"
let flagNames = allCountriesString.split(" ")


images = document.querySelectorAll("img");
let randomIndexArray = [];
function generateUniqueRandomIndex() {
    let randomIndex = Math.floor((Math.random() * 5 + 1));
    while (randomIndexArray.includes(randomIndex)) {
        randomIndex = Math.floor((Math.random() * 5 + 1));
    }
    randomIndexArray.push(randomIndex);
    return randomIndex;
}
images.forEach(image => {
    let indexChosen = generateUniqueRandomIndex();
    image.src = "./resources/images/128x128/" + flagNames[indexChosen] + ".png";
});
