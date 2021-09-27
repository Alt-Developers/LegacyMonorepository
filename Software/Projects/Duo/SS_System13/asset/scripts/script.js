let playerCode = [];
let data;
let ps = [];
let pc = [];
let count = 0;
let asn = 0;
let dsn = 1;
let igp;
let index = 0;
let calculate;
let scoreData;
let codeIndex;
let reportList = [];
let playerAmountVerification;
let randomizationCount = 1;

const Playerlist = {
    "p4": 4,
    "TLK": 4,
    "LVI": 4,
    "KIN": 4,
    "NEO": 4,
    //Tier3 vvv
    "TCN": 3,
    "p3": 3,
    "RYU": 3,
    "RAN": 3,
    "VOR": 3,
    "POR": 3,
    "HRO": 3,
    "SKA": 3,
    //Tier2 vvv
    "p2": 2,
    "PAN": 2,
    "SEN": 2,
    "NUT": 2,
    "SHM": 2,
    "NTB": 2,
    "NLE": 2,
    //Tier1 vvv
    "p1": 1,
    "ZCH": 1,
    "BRY": 1
}


function getPlayerCode() {
    igp = Number(prompt("How many players are playing?"));
    console.log(`${igp} Player(s) is/are playing in this round`);
    if (igp % 2 != 0) {
        alert("Amount of player in \"ODD\" number which system can't handle");
        return (false);
    } else {
        alert("Successfully set number of players playing");
        playerCode = [];
    };
    while (index != igp) {
        playerCode.push(prompt("Insert playing player codenames."));
        console.log(`${playerCode} is/are in this matches`);
        index += 1;
    };
    return (playerCode);
};

function randomizer(array) {
    var currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    console.log("Retruned Array");
    return array;

};

function checkScore(mixedPlayers) {
    asn = dsn = 0;
    index = 0;
    codeIndex = 0;
    calculate = [];
    console.log("Debug Log1");
    index = mixedPlayers.length
    console.log("Debug Log2", index);
    while (index != 0) {
        calculate.push(Playerlist[playerCode[codeIndex]]);
        console.log("debugged log", calculate);
        index -= 1;
        codeIndex += 1;
    };
    codeIndex = 0;
    index = calculate.length;
    console.log(index);
    while (index != 0) {
        asn += calculate[codeIndex];
        index -= 1;
        codeIndex += 1;
        console.log(`Asn is now ${asn}`);
        dsn += calculate[codeIndex];
        index -= 1;
        codeIndex += 1;
        console.log(`Dsn is now ${dsn}`);
    }
    if ((asn + dsn) % 2 != 0) {
        alert("Team is impossible");
        return (false);
    }

    console.log(asn, dsn)

    if (asn === dsn) {
        scoreData = 1;
    } else if (asn == dsn) {
        scoreData = 4;
    } else {
        scoreData = 0;
    };
    console.log("returned scoreData");
    return {
        scoreData: scoreData,
        calculate: calculate,
        asn: asn,
        dsn: dsn
    };
};

function combine(mixedPlayers, playerScore) {
    indexCalculator = mixedPlayers.length;
    index = indexCalculator * 2;
    codeIndex = 0;
    while (index != 0) {
        reportList.push(mixedPlayers[codeIndex]);
        reportList.push(playerScore[codeIndex]);
        index -= 2;
        codeIndex += 1;
        console.log(reportList);
    }
    return (reportList);
}

function report(rpl, dScore, aScore) {
    // Defenders
    document.getElementById("d1").innerHTML = rpl[0];
    document.getElementById("d1s").innerHTML = rpl[1];

    document.getElementById("d2").innerHTML = rpl[4];
    document.getElementById("d2s").innerHTML = rpl[5];

    document.getElementById("d3").innerHTML = rpl[8];
    document.getElementById("d3s").innerHTML = rpl[9];

    document.getElementById("d4").innerHTML = rpl[12];
    document.getElementById("d4s").innerHTML = rpl[13];

    document.getElementById("d5").innerHTML = rpl[16];
    document.getElementById("d5s").innerHTML = rpl[17];

    document.getElementById("a1").innerHTML = rpl[2];
    document.getElementById("a1s").innerHTML = rpl[3];

    document.getElementById("a2").innerHTML = rpl[6];
    document.getElementById("a2s").innerHTML = rpl[7];

    document.getElementById("a3").innerHTML = rpl[10];
    document.getElementById("a3s").innerHTML = rpl[11];

    document.getElementById("a4").innerHTML = rpl[14];
    document.getElementById("a4s").innerHTML = rpl[15];

    document.getElementById("a5").innerHTML = rpl[18];
    document.getElementById("a5s").innerHTML = rpl[19];

    document.getElementById("as").innerHTML = aScore;
    document.getElementById("ds").innerHTML = dScore;
}

// Html will execute this function
function main() {
    alert("Launching System 13");
    playerCode = getPlayerCode();
    if (playerCode == false) {
        console.log("Cancel Successfully")
        return false;
    }
    checkScore(playerCode);
    mixedData = randomizer(playerCode);
    gdata = checkScore(mixedData);
    scoreData = gdata.scoreData;
    playerScoreMixed = gdata.calculate;
    dScore = gdata.dsn;
    aScore = gdata.asn;
    Number(scoreData);
    if (gdata == false) {
        return (false);
    }
    console.log(scoreData);
    if (scoreData === 0) {
        while (scoreData !== 1) {
            randomizationCount += 10
            mixedData = randomizer(mixedData);
            scoreData = checkScore(mixedData);
        }
    } else if (scoreData === 4) {
        console.log("Something Went Worng!");
    } else {
        console.log("Discovered Team");
    }
    console.log(mixedData, playerScoreMixed);
    rpl = combine(mixedData, playerScoreMixed);

    report(rpl, dScore, aScore);
    alert(`Discovered a team! with ${randomizationCount} time of randomisation`);
}