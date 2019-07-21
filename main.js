var allActs = [];   // Array of all clothes changing actions

var changeClothes = function(eleID, imgSrc) {

    let img = document.getElementById(eleID);
    
    let action = {
        targetID: eleID,
        prevSrc: img.src
    };
    allActs.push(action);
    
    img.setAttribute('src', imgSrc);

}

function undo() {
    if (allActs.length > 0) {
        let action = allActs.pop();
        changeClothes(action.targetID, action.prevSrc);
        allActs.pop(); // Adds same - so remove after adding again
    }
}

function changeBody(imgSrc) {
    let img = document.getElementById("cmain");
    img.setAttribute('src', imgSrc);
}

var reset = function() {
    document.getElementById('c0').setAttribute('src', ' ');
    document.getElementById('c1').setAttribute('src', ' ');
    document.getElementById('c2').setAttribute('src', ' ');
    document.getElementById('c3').setAttribute('src', ' ');
    document.getElementById('c4').setAttribute('src', ' ');
}
