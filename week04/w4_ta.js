document.getElementById('tbl').addEventListener('touchend', onClk, false);
//document.getElementById('rst').addEventListener('click')
let turn = 0;
function onClk(e){
    console.log(e.target);
    if(turn % 2 == 0){
        e.target.innerHTML = "X";
        turn+=1;
    }
    else {
        e.target.innerHTML = "0";
        turn+=1;
    }

}

function reset(){
    let tb = document.getElementById("tbl");
    for(i = 0, n = tb.rows.length; i<n; i++){
        for(c = 0, m = tb.rows[i].cells.length; c < m; c++){
            tb.rows[i].cells[c].innerHTML ="";
        }
    }
    turn = 0;
}