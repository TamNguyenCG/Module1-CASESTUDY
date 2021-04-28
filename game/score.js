function saveScoreArray(score){
    let user = [nameSave,score];
    localStorage.setItem(nameSave,JSON.stringify(user));
}

function loadScoreArray(){
    if(localStorage.hasOwnProperty(nameSave)){
        return JSON.parse(localStorage.getItem(nameSave))
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

