$(document).ready(function(){
  //console.log("test");

  //各変数の定義
  let time = 0;
  let hour = 0;
  let min = 0;
  let sec = 0;
  let msec = 0;

  //STARTボタンをクリックした時の処理 
  $("#start-button").click(function(){

    clearInterval(time);

    function timer(){
      msec++;
      if (msec === 10){
        sec++;
        msec = 0;
      }
      if(sec === 60){
        min++;
        sec = 0;
      }
      if(min === 60){
        hour++;
        min = 0;
      }
      document.getElementById("monitor-content").textContent = `${hour}:${min}:${sec}:${msec}`;
    }

    time = setInterval(timer, 100);

    $(this).prop("disabled", true);
    $("#stop-button").prop("disabled", false);
    $("#reset-button").prop("disabled", false);
  });

  //STOPボタンをクリックした時の処理
  $("#stop-button").click(function(){
  
      clearInterval(time);

    $(this).prop("disabled", true);
    $("#start-button").prop("disabled", false);
    $("#reset-button").prop("disabled", false);
  });

  //RESETボタンをクリックした時の処理(STOPボタンをクリックできない/できる時の２通りの処理)
  $("#reset-button").click(function(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("monitor-content").textContent =`${hour}:${min}:${sec}:${msec}`;
    let stop_button = document.getElementById("stop-button"); //htmlのidタグstop-buttonの要素を変数に代入
    if(stop_button.disabled){ //stop-buttonのdisabled === true(クリックできない)の時
      $("#reset-button").prop("disabled", true); 
      $("#start-button").prop("disabled", false);
    }
      //stop-buttonのdisabled === false(クリックできる)の時
  });
});