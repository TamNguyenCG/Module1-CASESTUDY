
function saveScoreArray(score) {
    let user = [nameSave, score];
    localStorage.setItem('SnakeSave', JSON.stringify(user));
}

function loadScoreArray() {
    let str = "";
    if (localStorage.hasOwnProperty('SnakeSave')) {
        JSON.parse(localStorage.getItem('SnakeSave'));
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