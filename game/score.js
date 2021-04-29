function saveScoreArray(score) {
    let user = [nameSave, score];
    localStorage.setItem('nameSave', JSON.stringify(user));
}

function loadScoreArray() {
    let str = "";
    if (localStorage.hasOwnProperty('nameSave')) {
        JSON.parse(localStorage.getItem('nameSave'));
        str += "<li>"
        str += nameSave + " -- score: " + score
        str += "</li>"
        return str;
    } else {
        return [];
    }
}

/*
function saveScore(score){
    localStorage.setItem('score',score);
}

function loadScore(){
    if(localStorage.hasOwnProperty('score')){
        return localStorage.getItem('score');
    }else{
        return 0;
    }
}
*/