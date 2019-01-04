let transport= {
    0: { 
        "rute": "Brașov Zărnești",
        "stations": {
            0: {
                "station": "Brașov",
                "departure": {
                    0: [5,54],
                    1: [7,45],
                    2: [9,20],
                    3: [12,5],
                    4: [14,20],
                    5: [16,20],
                    6: [17,55],
                    7: [20,15],
                    8: [22,30]
                }
            },
            1: {
                "station": "Bartolomeu",
                "departure": {
                    0: [6,0],
                    1: [7,52],
                    2: [9,26],
                    3: [12,12],
                    4: [14,27],
                    5: [16,26],
                    6: [18,1],
                    7: [20,22],
                    8: [22,37]
                }
            },
            2: {
                "station": "Lustic H.",
                "departure": {
                    0: [6,8],
                    1: [8,0],
                    2: [9,35],
                    3: [12,21],
                    4: [14,35],
                    5: [16,34],
                    6: [18,10],
                    7: [20,31],
                    8: [22,46]
                }
            }
        }
    }
}



let station = [
    "Brașov",
    "Bartolomeu",
    "Lustic H.",
    "Cristian",
    "Râșnov",
    "Râșnov H.",
    "Tohanu Vechi Hc.",
    "G-ral T. Moșoiu Hc.",
    "Zărnești"
];

function stations(reverse){
    let s = [];
    for(let i = 0; i < station.length; i++){
        s.push(`<input type="radio" name="station" id="${i}"><label for="${i}">${station[i]}</label>`);
    }
    if(reverse)
        return s.reverse().join(" ");
    return s.join(" ");
}

let rute = 0;

document.getElementById("forward").addEventListener("click", function(){
    rute = 0;
    document.getElementById("stations").innerHTML = stations(false);
});

document.getElementById("backward").addEventListener("click", function(){
    rute = 1;
    document.getElementById("stations").innerHTML = stations(true);
});

document.getElementById("stations").innerHTML = stations(false);

function whatTime(stops){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    for (let s in stops) {
        if(h < stops[s][0]){
            return s;
        } else if( h == stops[s][0] && m < stops[s][1]){
            return s;
        }
    }
}



document.getElementsByName("station").forEach(station => {
    station.addEventListener("click", function(){

        let stops = transport[rute].stations[station.id].departure;
        let timeKey = whatTime(stops);
        
        let h = stops[timeKey][0];
        let m = stops[timeKey][1];    

        if(h < 10){
            h = "0" + h;
        }
        if(m < 10){
            m = "0" + m;
        }

        document.getElementById("train").innerHTML = h + ":" + m;
        // console.log(station.id);
    });
    
});

