const image = document.querySelector("img");
const highScore = document.querySelector("#highScore");
const userCurrentScore = document.querySelector("#userScore");
let userCurrentScoreNumber = 0;
let highScoreNumber = 0;
const territoriesNamesObject = {
    ad: "Andorra", ae: "United Arab Emirates", af: "Afghanistan", ag: "Antigua and Barbuda", ai: "Anguilla",
    al: "Albania", am: "Armenia", ao: "Angola", aq: "Antarctica", ar: "Argentina", as: "American Samoa",
    at: "Austria", au: "Australia", aw: "Aruba", ax: "Åland Islands", az: "Azerbaijan", ba: "Bosnia and Herzegovina",
    bb: "Barbados", bd: "Bangladesh", be: "Belgium", bf: "Burkina Faso", bg: "Bulgaria", bh: "Bahrain", bi: "Burundi",
    bj: "Benin", bl: "Saint Barthélemy", bm: "Bermuda", bn: "Brunei", bo: "Bolivia", bq: "Caribbean Netherlands",
    br: "Brazil", bs: "Bahamas", bt: "Bhutan", bv: "Bouvet Island", bw: "Botswana", by: "Belarus", bz: "Belize",
    ca: "Canada", cc: "Cocos Islands", cd: "Democratic Republic of the Congo", cf: "Central African Republic",
    cg: "Republic of the Congo", ch: "Switzerland", ci: "Ivory Coast", ck: "Cook Islands", cl: "Chile", cm: "Cameroon",
    cn: "China", co: "Colombia", cr: "Costa Rica", cu: "Cuba", cv: "Cape Verde", cw: "Curaçao", cx: "Christmas Island",
    cy: "Cyprus", cz: "Czech Republic", de: "Germany", dj: "Djibouti", dk: "Denmark", dm: "Dominica", do: "Dominican Republic",
    dz: "Algeria", ec: "Ecuador", ee: "Estonia", eg: "Egypt", eh: "Western Sahara", er: "Eritrea", es: "Spain", et: "Ethiopia",
    eu: "European Union", fi: "Finland", fj: "Fiji", fk: "Falkland Islands", fm: "Micronesia", fo: "Faroe Islands", fr: "France",
    ga: "Gabon", gbEng: "England", gbNir: "Northern Ireland", gbSct: "Scotland", gbWls: "Wales", gb: "United Kingdom",
    gd: "Grenada", ge: "Georgia", gf: "French Guiana", gg: "Guernsey", gh: "Ghana", gi: "Gibraltar", gl: "Greenland",
    gm: "Gambia", gn: "Guinea", gp: "Guadeloupe", gq: "Equatorial Guinea", gr: "Greece", gs: "South Georgia and the South Sandwich Islands",
    gt: "Guatemala", gu: "Guam", gw: "Guinea-Bissau", gy: "Guyana", hk: "Hong Kong", hm: "Heard Island and McDonald Islands",
    hn: "Honduras", hr: "Croatia", ht: "Haiti", hu: "Hungary", id: "Indonesia", ie: "Ireland", il: "Israel", im: "Isle of Man",
    in: "India", io: "British Indian Ocean Territory", iq: "Iraq", ir: "Iran", is: "Iceland", it: "Italy", je: "Jersey",
    jm: "Jamaica", jo: "Jordan", jp: "Japan", ke: "Kenya", kg: "Kyrgyzstan", kh: "Cambodia", ki: "Kiribati", km: "Comoros",
    kn: "Saint Kitts and Nevis", kp: "North Korea", kr: "South Korea", kw: "Kuwait", ky: "Cayman Islands", kz: "Kazakhstan",
    la: "Laos", lb: "Lebanon", lc: "Saint Lucia", li: "Liechtenstein", lk: "Sri Lanka", lr: "Liberia", ls: "Lesotho",
    lt: "Lithuania", lu: "Luxembourg", lv: "Latvia", ly: "Libya", ma: "Morocco", mc: "Monaco", md: "Moldova", me: "Montenegro",
    mf: "Saint Martin", mg: "Madagascar", mh: "Marshall Islands", mk: "North Macedonia", ml: "Mali", mm: "Myanmar", mn: "Mongolia",
    mo: "Macau", mp: "Northern Mariana Islands", mq: "Martinique", mr: "Mauritania", ms: "Montserrat", mt: "Malta", mu: "Mauritius",
    mv: "Maldives", mw: "Malawi", mx: "Mexico", my: "Malaysia", mz: "Mozambique", na: "Namibia", nc: "New Caledonia", ne: "Niger",
    nf: "Norfolk Island", ng: "Nigeria", ni: "Nicaragua", nl: "Netherlands", no: "Norway", np: "Nepal", nr: "Nauru", nu: "Niue",
    nz: "New Zealand", om: "Oman", pa: "Panama", pe: "Peru", pf: "French Polynesia", pg: "Papua New Guinea", ph: "Philippines",
    pk: "Pakistan", pl: "Poland", pm: "Saint Pierre and Miquelon", pn: "Pitcairn", pr: "Puerto Rico", ps: "Palestine", pt: "Portugal",
    pw: "Palau", py: "Paraguay", qa: "Qatar", re: "Réunion", ro: "Romania", rs: "Serbia", ru: "Russia", rw: "Rwanda", sa: "Saudi Arabia",
    sb: "Solomon Islands", sc: "Seychelles", sd: "Sudan", se: "Sweden", sg: "Singapore", sh: "Saint Helena, Ascension and Tristan da Cunha",
    si: "Slovenia", sj: "Svalbard and Jan Mayen", sk: "Slovakia", sl: "Sierra Leone", sm: "San Marino", sn: "Senegal", so: "Somalia",
    sr: "Suriname", ss: "South Sudan", st: "Sao Tome and Principe", sv: "El Salvador", sx: "Sint Maarten", sy: "Syria", sz: "Eswatini",
    tc: "Turks and Caicos Islands", td: "Chad", tf: "French Southern Territories", tg: "Togo", th: "Thailand", tj: "Tajikistan", tk: "Tokelau",
    tl: "Timor-Leste", tm: "Turkmenistan", tn: "Tunisia", to: "Tonga", tr: "Turkey", tt: "Trinidad and Tobago", tv: "Tuvalu", tw: "Taiwan",
    tz: "Tanzania", ua: "Ukraine", ug: "Uganda", um: "United States Minor Outlying Islands", us: "United States", uy: "Uruguay", uz: "Uzbekistan",
    va: "Vatican City", vc: "Saint Vincent and the Grenadines", ve: "Venezuela", vg: "British Virgin Islands", vi: "U.S. Virgin Islands", vn: "Vietnam",
    vu: "Vanuatu", wf: "Wallis and Futuna", ws: "Samoa", xk: "Kosovo", ye: "Yemen", yt: "Mayotte", za: "South Africa", zm: "Zambia", zw: "Zimbabwe"
};

const countriesNamesObject = {
    af: "Afghanistan", al: "Albania", dz: "Algeria", ad: "Andorra", ao: "Angola", ag: "Antigua and Barbuda",
    ar: "Argentina", am: "Armenia", au: "Australia", at: "Austria", az: "Azerbaijan", bs: "Bahamas", bh: "Bahrain",
    bd: "Bangladesh", bb: "Barbados", by: "Belarus", be: "Belgium", bz: "Belize", bj: "Benin", bt: "Bhutan",
    bo: "Bolivia", ba: "Bosnia and Herzegovina", bw: "Botswana", br: "Brazil", bn: "Brunei Darussalam", bg: "Bulgaria",
    bf: "Burkina Faso", bi: "Burundi", cv: "Cabo Verde", kh: "Cambodia", cm: "Cameroon", ca: "Canada", cf: "Central African Republic",
    td: "Chad", cl: "Chile", cn: "China", co: "Colombia", km: "Comoros", cg: "Congo", cr: "Costa Rica", hr: "Croatia", cu: "Cuba",
    cy: "Cyprus", cz: "Czech Republic", cd: "Democratic Republic of the Congo", dk: "Denmark", dj: "Djibouti", dm: "Dominica",
    do: "Dominican Republic", ec: "Ecuador", eg: "Egypt", sv: "El Salvador", gq: "Equatorial Guinea", er: "Eritrea", ee: "Estonia",
    et: "Ethiopia", fj: "Fiji", fi: "Finland", fr: "France", ga: "Gabon", gm: "Gambia", ge: "Georgia", de: "Germany", gh: "Ghana",
    gr: "Greece", gd: "Grenada", gt: "Guatemala", gn: "Guinea", gw: "Guinea-Bissau", gy: "Guyana", ht: "Haiti", hn: "Honduras",
    hu: "Hungary", is: "Iceland", in: "India", id: "Indonesia", ir: "Iran", iq: "Iraq", ie: "Ireland", il: "Israel", it: "Italy",
    jm: "Jamaica", jp: "Japan", jo: "Jordan", kz: "Kazakhstan", ke: "Kenya", ki: "Kiribati", kw: "Kuwait", kg: "Kyrgyzstan", lv: "Latvia",
    lb: "Lebanon", ls: "Lesotho", lr: "Liberia", ly: "Libya", lt: "Lithuania", lu: "Luxembourg", mg: "Madagascar", mw: "Malawi",
    my: "Malaysia", mv: "Maldives", ml: "Mali", mt: "Malta", mh: "Marshall Islands", mr: "Mauritania", mu: "Mauritius", mx: "Mexico",
    fm: "Micronesia", mc: "Monaco", mn: "Mongolia", me: "Montenegro", ma: "Morocco", mz: "Mozambique", mm: "Myanmar", na: "Namibia",
    nr: "Nauru", np: "Nepal", nl: "Netherlands", nz: "New Zealand", ni: "Nicaragua", ne: "Niger", ng: "Nigeria", no: "Norway", om: "Oman",
    pk: "Pakistan", pw: "Palau", pa: "Panama", pg: "Papua New Guinea", py: "Paraguay", pe: "Peru", ph: "Philippines", pl: "Poland",
    pt: "Portugal", qa: "Qatar", ro: "Romania", ru: "Russian Federation", rw: "Rwanda", kn: "Saint Kitts and Nevis", lc: "Saint Lucia",
    vc: "Saint Vincent and the Grenadines", ws: "Samoa", sm: "San Marino", st: "Sao Tome and Principe", sa: "Saudi Arabia", sn: "Senegal",
    rs: "Serbia", sc: "Seychelles", sl: "Sierra Leone", sg: "Singapore", sk: "Slovakia", si: "Slovenia", sb: "Solomon Islands", za: "South Africa",
    ss: "South Sudan", es: "Spain", lk: "Sri Lanka", sd: "Sudan", sr: "Suriname", sz: "Eswatini", se: "Sweden", ch: "Switzerland", sy: "Syria",
    tj: "Tajikistan", tz: "Tanzania", th: "Thailand", tl: "Timor-Leste", tg: "Togo", to: "Tonga", tt: "Trinidad and Tobago", tn: "Tunisia",
    tr: "Turkey", tm: "Turkmenistan", tv: "Tuvalu", ug: "Uganda", ua: "Ukraine", ae: "United Arab Emirates", gb: "United Kingdom",
    us: "United States", uy: "Uruguay", uz: "Uzbekistan", vu: "Vanuatu", ve: "Venezuela", vn: "Vietnam", ye: "Yemen", zm: "Zambia", zw: "Zimbabwe"
};

let territoriesNamesArray = Object.keys(territoriesNamesObject);

const countriesNamesArray = Object.keys(countriesNamesObject);


let flagNamesObject = countriesNamesObject;
let flagNames = countriesNamesArray;


images = document.querySelectorAll("img");

let randomIndexArray = [];
let indexOfCorrectFlag = undefined;
let loopIteration = 0
function generateUniqueRandomIndex() {
    let randomIndex = Math.floor((Math.random() * 193));
    while (randomIndexArray.includes(randomIndex)) {
        randomIndex = Math.floor((Math.random() * 193));
    }
    randomIndexArray.push(randomIndex);
}

function generateIndexOfCorrectFlag() {
    indexOfCorrectFlag = Math.floor(Math.random() * 4)
}

generateIndexOfCorrectFlag()
images.forEach((image, index) => {
    generateUniqueRandomIndex()
    image.src = "./resources/images/png1000px/" + flagNames[randomIndexArray[index]] + ".png";
    image.alt = `Flag of ${[flagNamesObject[flagNames[randomIndexArray[index]]]]}`
    image.addEventListener("click", () => {
        if (image.alt.includes(flagNamesObject[flagNames[randomIndexArray[indexOfCorrectFlag]]])) {
            userCurrentScoreNumber += 1;
            userCurrentScore.textContent = "Score: " + userCurrentScoreNumber
            if (userCurrentScoreNumber > highScoreNumber) {
                highScoreNumber += 1;
                highScore.textContent = "High Score: " + highScoreNumber
            }
        } else {
            userCurrentScoreNumber = 0;
            userCurrentScore.textContent = "Score: " + userCurrentScoreNumber
        }
        randomIndexArray = [];
        generateIndexOfCorrectFlag()
        images.forEach((image, index) => {
            generateUniqueRandomIndex()
            image.src = "./resources/images/png1000px/" + flagNames[randomIndexArray[index]] + ".png";
            image.alt = `Flag of ${[flagNamesObject[flagNames[randomIndexArray[index]]]]}`
        })
        h2.textContent = `Choose the flag of ${flagNamesObject[flagNames[randomIndexArray[indexOfCorrectFlag]]]}`;
    })
});


const h2 = document.querySelector("h2");
const body = document.querySelector("body")
h2.textContent = `Choose the flag of ${flagNamesObject[flagNames[randomIndexArray[indexOfCorrectFlag]]]}`;
