const image = document.querySelector("img");
const highScore = document.querySelector("#highScore");
const userCurrentScore = document.querySelector("#userScore");
let userCurrentScoreNumber = 0;
let highScoreNumber = 0;

const territoriesNamesObject = {
    af: "Afghanistan", ax: "Åland Islands", al: "Albania", dz: "Algeria", as: "American Samoa", ad: "Andorra",
    ao: "Angola", ai: "Anguilla", aq: "Antarctica", ag: "Antigua and Barbuda", ar: "Argentina", am: "Armenia",
    aw: "Aruba", au: "Australia", at: "Austria", az: "Azerbaijan", bs: "Bahamas", bh: "Bahrain", bd: "Bangladesh",
    bb: "Barbados", by: "Belarus", be: "Belgium", bz: "Belize", bj: "Benin", bm: "Bermuda", bt: "Bhutan",
    bo: "Bolivia (Plurinational State of)", bq: "Bonaire, Sint Eustatius and Saba", ba: "Bosnia and Herzegovina",
    bw: "Botswana", bv: "Bouvet Island", br: "Brazil", io: "British Indian Ocean Territory", bn: "Brunei Darussalam",
    bg: "Bulgaria", bf: "Burkina Faso", bi: "Burundi", kh: "Cambodia", cm: "Cameroon", ca: "Canada", cv: "Cabo Verde",
    ky: "Cayman Islands", cf: "Central African Republic", td: "Chad", cl: "Chile", cn: "China", cx: "Christmas Island",
    cc: "Cocos (Keeling) Islands", co: "Colombia", km: "Comoros", cg: "Congo", cd: "Congo, Democratic Republic of the",
    ck: "Cook Islands", cr: "Costa Rica", ci: "Côte d'Ivoire", hr: "Croatia", cu: "Cuba", cw: "Curaçao", cy: "Cyprus",
    cz: "Czechia", dk: "Denmark", dj: "Djibouti", dm: "Dominica", do: "Dominican Republic", ec: "Ecuador", eg: "Egypt",
    sv: "El Salvador", gq: "Equatorial Guinea", er: "Eritrea", ee: "Estonia", et: "Ethiopia", fk: "Falkland Islands (Malvinas)",
    fo: "Faroe Islands", fj: "Fiji", fi: "Finland", fr: "France", gf: "French Guiana", pf: "French Polynesia",
    tf: "French Southern Territories", ga: "Gabon", gm: "Gambia", ge: "Georgia", de: "Germany", gh: "Ghana",
    gi: "Gibraltar", gr: "Greece", gl: "Greenland", gd: "Grenada", gp: "Guadeloupe", gu: "Guam", gt: "Guatemala",
    gg: "Guernsey", gn: "Guinea", gw: "Guinea-Bissau", gy: "Guyana", ht: "Haiti", hm: "Heard Island and McDonald Islands",
    va: "Holy See", hn: "Honduras", hk: "Hong Kong", hu: "Hungary", is: "Iceland", in: "India", id: "Indonesia",
    ir: "Iran (Islamic Republic of)", iq: "Iraq", ie: "Ireland", im: "Isle of Man", il: "Israel", it: "Italy",
    jm: "Jamaica", jp: "Japan", je: "Jersey", jo: "Jordan", kz: "Kazakhstan", ke: "Kenya", ki: "Kiribati",
    kp: "Korea (Democratic People's Republic of)", kr: "Korea, Republic of", kw: "Kuwait", kg: "Kyrgyzstan",
    la: "Lao People's Democratic Republic", lv: "Latvia", lb: "Lebanon", ls: "Lesotho", lr: "Liberia", ly: "Libya",
    li: "Liechtenstein", lt: "Lithuania", lu: "Luxembourg", mo: "Macao", mk: "North Macedonia", mg: "Madagascar",
    mw: "Malawi", my: "Malaysia", mv: "Maldives", ml: "Mali", mt: "Malta", mh: "Marshall Islands", mq: "Martinique",
    mr: "Mauritania", mu: "Mauritius", yt: "Mayotte", mx: "Mexico", fm: "Micronesia (Federated States of)",
    ma: "Morocco", md: "Moldova, Republic of", mc: "Monaco", mn: "Mongolia", me: "Montenegro", ms: "Montserrat",
    mz: "Mozambique", mm: "Myanmar", na: "Namibia", nr: "Nauru", np: "Nepal", nl: "Netherlands", nc: "New Caledonia",
    nz: "New Zealand", ni: "Nicaragua", ne: "Niger", ng: "Nigeria", nu: "Niue", nf: "Norfolk Island",
    mp: "Northern Mariana Islands", no: "Norway", om: "Oman", pk: "Pakistan", pw: "Palau", ps: "Palestine, State of",
    pa: "Panama", pg: "Papua New Guinea", py: "Paraguay", pe: "Peru", ph: "Philippines", pn: "Pitcairn",
    pl: "Poland", pt: "Portugal", pr: "Puerto Rico", qa: "Qatar", re: "Réunion", ro: "Romania",
    ru: "Russian Federation", rw: "Rwanda", bl: "Saint Barthélemy", sh: "Saint Helena, Ascension and Tristan da Cunha",
    kn: "Saint Kitts and Nevis", lc: "Saint Lucia", mf: "Saint Martin (French part)", pm: "Saint Pierre and Miquelon",
    vc: "Saint Vincent and the Grenadines", ws: "Samoa", sm: "San Marino", st: "Sao Tome and Principe",
    sa: "Saudi Arabia", sn: "Senegal", rs: "Serbia", sc: "Seychelles", sl: "Sierra Leone", sg: "Singapore",
    sx: "Sint Maarten (Dutch part)", sk: "Slovakia", si: "Slovenia", sb: "Solomon Islands", so: "Somalia",
    za: "South Africa", gs: "South Georgia and the South Sandwich Islands", ss: "South Sudan", es: "Spain",
    lk: "Sri Lanka", sd: "Sudan", sr: "Suriname", sj: "Svalbard and Jan Mayen", sz: "Eswatini", se: "Sweden",
    ch: "Switzerland", sy: "Syrian Arab Republic", tw: "Taiwan, Province of China", tj: "Tajikistan",
    tz: "Tanzania, United Republic of", th: "Thailand", tl: "Timor-Leste", tg: "Togo", tk: "Tokelau", to: "Tonga",
    tt: "Trinidad and Tobago", tn: "Tunisia", tr: "Turkey", tm: "Turkmenistan", tc: "Turks and Caicos Islands",
    tv: "Tuvalu", ug: "Uganda", ua: "Ukraine", ae: "United Arab Emirates", gb: "United Kingdom of Great Britain and Northern Ireland",
    us: "United States of America", um: "United States Minor Outlying Islands", uy: "Uruguay", uz: "Uzbekistan",
    vu: "Vanuatu", ve: "Venezuela (Bolivarian Republic of)", vn: "Viet Nam", vg: "Virgin Islands (British)",
    vi: "Virgin Islands (U.S.)", wf: "Wallis and Futuna", eh: "Western Sahara", ye: "Yemen", zm: "Zambia", zw: "Zimbabwe"
};


const countriesNamesObject = {
    af: "Afghanistan", al: "Albania", dz: "Algeria", ad: "Andorra", ao: "Angola", ag: "Antigua and Barbuda",
    ar: "Argentina", am: "Armenia", au: "Australia", at: "Austria", az: "Azerbaijan", bs: "Bahamas",
    bh: "Bahrain", bd: "Bangladesh", bb: "Barbados", by: "Belarus", be: "Belgium", bz: "Belize", bj: "Benin",
    bt: "Bhutan", bo: "Bolivia (Plurinational State of)", ba: "Bosnia and Herzegovina", bw: "Botswana",
    br: "Brazil", bn: "Brunei Darussalam", bg: "Bulgaria", bf: "Burkina Faso", bi: "Burundi", kh: "Cambodia",
    cm: "Cameroon", ca: "Canada", cv: "Cabo Verde", cf: "Central African Republic", td: "Chad", cl: "Chile",
    cn: "China", co: "Colombia", km: "Comoros", cg: "Congo", cd: "Congo, Democratic Republic of the",
    cr: "Costa Rica", ci: "Côte d'Ivoire", hr: "Croatia", cu: "Cuba", cy: "Cyprus", cz: "Czechia", dk: "Denmark",
    dj: "Djibouti", dm: "Dominica", do: "Dominican Republic", ec: "Ecuador", eg: "Egypt", sv: "El Salvador",
    gq: "Equatorial Guinea", er: "Eritrea", ee: "Estonia", et: "Ethiopia", fj: "Fiji", fi: "Finland",
    fr: "France", ga: "Gabon", gm: "Gambia", ge: "Georgia", de: "Germany", gh: "Ghana", gr: "Greece",
    gd: "Grenada", gt: "Guatemala", gn: "Guinea", gw: "Guinea-Bissau", gy: "Guyana", ht: "Haiti",
    hn: "Honduras", hu: "Hungary", is: "Iceland", in: "India", id: "Indonesia", ir: "Iran (Islamic Republic of)",
    iq: "Iraq", ie: "Ireland", il: "Israel", it: "Italy", jm: "Jamaica", jp: "Japan", jo: "Jordan", kz: "Kazakhstan",
    ke: "Kenya", ki: "Kiribati", kp: "Korea (Democratic People's Republic of)", kr: "Korea, Republic of",
    kw: "Kuwait", kg: "Kyrgyzstan", la: "Lao People's Democratic Republic", lv: "Latvia", lb: "Lebanon",
    ls: "Lesotho", lr: "Liberia", ly: "Libya", li: "Liechtenstein", lt: "Lithuania", lu: "Luxembourg",
    mk: "North Macedonia", mg: "Madagascar", mw: "Malawi", my: "Malaysia", mv: "Maldives", ml: "Mali",
    mt: "Malta", mh: "Marshall Islands", mr: "Mauritania", mu: "Mauritius", mx: "Mexico", fm: "Micronesia (Federated States of)",
    ma: "Morocco", md: "Moldova, Republic of", mc: "Monaco", mn: "Mongolia", me: "Montenegro", mz: "Mozambique",
    mm: "Myanmar", na: "Namibia", nr: "Nauru", np: "Nepal", nl: "Netherlands", nz: "New Zealand", ni: "Nicaragua",
    ne: "Niger", ng: "Nigeria", no: "Norway", om: "Oman", pk: "Pakistan", pw: "Palau", pa: "Panama",
    pg: "Papua New Guinea", py: "Paraguay", pe: "Peru", ph: "Philippines", pl: "Poland", pt: "Portugal",
    qa: "Qatar", ro: "Romania", ru: "Russian Federation", rw: "Rwanda", kn: "Saint Kitts and Nevis",
    lc: "Saint Lucia", vc: "Saint Vincent and the Grenadines", ws: "Samoa", sm: "San Marino",
    st: "Sao Tome and Principe", sa: "Saudi Arabia", sn: "Senegal", rs: "Serbia", sc: "Seychelles",
    sl: "Sierra Leone", sg: "Singapore", sk: "Slovakia", si: "Slovenia", sb: "Solomon Islands",
    so: "Somalia", za: "South Africa", ss: "South Sudan", es: "Spain", lk: "Sri Lanka", sd: "Sudan",
    sr: "Suriname", sz: "Eswatini", se: "Sweden", ch: "Switzerland", sy: "Syrian Arab Republic", tj: "Tajikistan",
    tz: "Tanzania, United Republic of", th: "Thailand", tl: "Timor-Leste", tg: "Togo", to: "Tonga",
    tt: "Trinidad and Tobago", tn: "Tunisia", tr: "Türkiye", tm: "Turkmenistan", tv: "Tuvalu", ug: "Uganda",
    ua: "Ukraine", ae: "United Arab Emirates", gb: "United Kingdom of Great Britain and Northern Ireland",
    us: "United States of America", uy: "Uruguay", uz: "Uzbekistan", vu: "Vanuatu", ve: "Venezuela (Bolivarian Republic of)",
    vn: "Viet Nam", ye: "Yemen", zm: "Zambia", zw: "Zimbabwe"
};



let territoriesNamesArray = Object.keys(territoriesNamesObject);

const countriesNamesArray = Object.keys(countriesNamesObject);

console.log(countriesNamesArray.length)
console.log(territoriesNamesArray.length)

let flagNamesObject = countriesNamesObject;
let flagNames = countriesNamesArray;


images = document.querySelectorAll("img");

let randomIndexArray = [];
let indexOfCorrectFlag = undefined;
let loopIteration = 0
function generateUniqueRandomIndex() {
    let randomIndex = Math.floor((Math.random() * flagNames.length));
    while (randomIndexArray.includes(randomIndex)) {
        randomIndex = Math.floor((Math.random() * flagNames.length));
    }
    randomIndexArray.push(randomIndex);
}

function generateIndexOfCorrectFlag() {
    indexOfCorrectFlag = Math.floor(Math.random() * 4)
}

generateIndexOfCorrectFlag()
images.forEach((image, index) => {
    generateUniqueRandomIndex()
    image.src = "./resources/images/4x3/" + flagNames[randomIndexArray[index]] + ".svg";
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
            image.src = "./resources/images/4x3/" + flagNames[randomIndexArray[index]] + ".svg";
            image.alt = `Flag of ${[flagNamesObject[flagNames[randomIndexArray[index]]]]}`
        })
        h2.textContent = `Choose the flag of ${flagNamesObject[flagNames[randomIndexArray[indexOfCorrectFlag]]]}`;
    })
});


const h2 = document.querySelector("h2");
const body = document.querySelector("body")
h2.textContent = `Choose the flag of ${flagNamesObject[flagNames[randomIndexArray[indexOfCorrectFlag]]]}`;
