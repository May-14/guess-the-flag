const image = document.querySelector("img");
const highScore = document.querySelector("#highScore");
const userScore = document.querySelector("#userScore");
let flagNames = [
    "af", "al", "dz", "ad", "ao", "ag", "ar", "am", "au", "at", "az", "bs", "bh", "bd", "bb", "by", "be", "bz", "bj", "bt",
    "bo", "ba", "bw", "br", "bn", "bg", "bf", "bi", "kh", "cm", "ca", "cv", "cf", "td", "cl", "cn", "co", "km", "cg", "cd",
    "cr", "ci", "hr", "cu", "cy", "cz", "dk", "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee", "et", "fj", "fi", "fr",
    "ga", "gm", "ge", "de", "gh", "gr", "gd", "gt", "gn", "gw", "gy", "ht", "hn", "hu", "is", "in", "id", "ir", "iq", "ie",
    "il", "it", "jm", "jp", "jo", "kz", "ke", "ki", "kp", "kr", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt",
    "lu", "mk", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mr", "mu", "mx", "fm", "ma", "md", "mc", "mn", "me", "mz", "mm",
    "na", "nr", "np", "nl", "nz", "ni", "ne", "ng", "no", "om", "pk", "pw", "pa", "pg", "py", "pe", "ph", "pl", "pt", "qa",
    "ro", "ru", "rw", "kn", "lc", "vc", "ws", "sm", "st", "sa", "sn", "rs", "sc", "sl", "sg", "sk", "si", "sb", "so", "za",
    "ss", "es", "lk", "sd", "sr", "sz", "se", "ch", "sy", "tj", "tz", "th", "tl", "tg", "to", "tt", "tn", "tr", "tm", "tv",
    "ug", "ua", "ae", "gb", "us", "uy", "uz", "vu", "ve", "vn", "ye", "zm", "zw"
];
let flagNamesObject = {
    af: "Afghanistan", al: "Albania", dz: "Algeria", ad: "Andorra", ao: "Angola",
    ag: "Antigua and Barbuda", ar: "Argentina", am: "Armenia", au: "Australia",
    at: "Austria", az: "Azerbaijan", bs: "Bahamas", bh: "Bahrain", bd: "Bangladesh",
    bb: "Barbados", by: "Belarus", be: "Belgium", bz: "Belize", bj: "Benin",
    bt: "Bhutan", bo: "Bolivia", ba: "Bosnia",
    bw: "Botswana", br: "Brazil", bn: "Brunei Darussalam", bg: "Bulgaria",
    bf: "Burkina Faso", bi: "Burundi", kh: "Cambodia", cm: "Cameroon", ca: "Canada",
    cv: "Cabo Verde", cf: "Central African Republic", td: "Chad", cl: "Chile",
    cn: "China", co: "Colombia", km: "Comoros", cg: "Congo",
    cd: "D.R. of Congo", cr: "Costa Rica", ci: "Côte d'Ivoire",
    hr: "Croatia", cu: "Cuba", cy: "Cyprus", cz: "Czechia", dk: "Denmark",
    dj: "Djibouti", dm: "Dominica", do: "Dominican Republic", ec: "Ecuador",
    eg: "Egypt", sv: "El Salvador", gq: "Equatorial Guinea", er: "Eritrea",
    ee: "Estonia", et: "Ethiopia", fj: "Fiji", fi: "Finland", fr: "France",
    ga: "Gabon", gm: "Gambia", ge: "Georgia", de: "Germany", gh: "Ghana",
    gr: "Greece", gd: "Grenada", gt: "Guatemala", gn: "Guinea", gw: "Guinea-Bissau",
    gy: "Guyana", ht: "Haiti", hn: "Honduras", hu: "Hungary", is: "Iceland",
    in: "India", id: "Indonesia", ir: "Iran", iq: "Iraq",
    ie: "Ireland", il: "Israel", it: "Italy", jm: "Jamaica", jp: "Japan",
    jo: "Jordan", kz: "Kazakhstan", ke: "Kenya", ki: "Kiribati",
    kp: "North Korea", kr: "South Korea",
    kw: "Kuwait", kg: "Kyrgyzstan", la: "Laos",
    lv: "Latvia", lb: "Lebanon", ls: "Lesotho", lr: "Liberia", ly: "Libya",
    li: "Liechtenstein", lt: "Lithuania", lu: "Luxembourg",
    mk: "North Macedonia", mg: "Madagascar", mw: "Malawi", my: "Malaysia",
    mv: "Maldives", ml: "Mali", mt: "Malta", mh: "Marshall Islands",
    mr: "Mauritania", mu: "Mauritius", mx: "Mexico",
    fm: "Micronesia", ma: "Morocco",
    md: "Moldova, Republic of", mc: "Monaco", mn: "Mongolia",
    me: "Montenegro", mz: "Mozambique", mm: "Myanmar", na: "Namibia",
    nr: "Nauru", np: "Nepal", nl: "Netherlands", nz: "New Zealand",
    ni: "Nicaragua", ne: "Niger", ng: "Nigeria", no: "Norway", om: "Oman",
    pk: "Pakistan", pw: "Palau", pa: "Panama", pg: "Papua New Guinea",
    py: "Paraguay", pe: "Peru", ph: "Philippines", pl: "Poland",
    pt: "Portugal", qa: "Qatar", ro: "Romania", ru: "Russia",
    rw: "Rwanda", kn: "Saint Kitts and Nevis", lc: "Saint Lucia",
    vc: "Saint Vincent and the Grenadines", ws: "Samoa", sm: "San Marino",
    st: "Sao Tome and Principe", sa: "Saudi Arabia", sn: "Senegal",
    rs: "Serbia", sc: "Seychelles", sl: "Sierra Leone", sg: "Singapore",
    sk: "Slovakia", si: "Slovenia", sb: "Solomon Islands", so: "Somalia",
    za: "South Africa", ss: "South Sudan", es: "Spain", lk: "Sri Lanka",
    sd: "Sudan", sr: "Suriname", sz: "Eswatini", se: "Sweden",
    ch: "Switzerland", sy: "Syrian Arab Republic", tj: "Tajikistan",
    tz: "Tanzania", th: "Thailand", tl: "Timor-Leste",
    tg: "Togo", to: "Tonga", tt: "Trinidad and Tobago", tn: "Tunisia",
    tr: "Türkiye", tm: "Turkmenistan", tv: "Tuvalu", ug: "Uganda",
    ua: "Ukraine", ae: "United Arab Emirates",
    gb: "United Kingdom",
    us: "United States of America", uy: "Uruguay", uz: "Uzbekistan",
    vu: "Vanuatu", ve: "Venezuela", vn: "Viet Nam",
    ye: "Yemen", zm: "Zambia", zw: "Zimbabwe"
};


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
    image.src = "./resources/images/128x128/" + flagNames[randomIndexArray[index]] + ".png";
    image.alt = `Flag of ${[flagNamesObject[flagNames[randomIndexArray[index]]]]}`
    image.addEventListener("click", () => {
        if (image.alt.includes(flagNamesObject[flagNames[randomIndexArray[indexOfCorrectFlag]]])) {
            alert("Correct")
        } else {
            alert("Incorrect")
        }
    })
});


const h2 = document.createElement("h2");
const body = document.querySelector("body")
h2.textContent = `Choose the flag of ${flagNamesObject[flagNames[randomIndexArray[indexOfCorrectFlag]]]}`;
body.appendChild(h2)
