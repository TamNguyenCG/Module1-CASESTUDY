function saveScoreArray(score){
    let user = [name,score];
    localStorage.setItem(name,JSON.stringify(user));
}

function loadScoreArray(){
    if(localStorage.hasOwnProperty(name)){
        return JSON.parse(localStorage.getItem(name))
    }else{
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

