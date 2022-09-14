let total_deci_seconds=0;
let hh_span,mm_span,ss_span;
let start_button,pause_continue_button,stop_button;
let hh,mm,ss;
let interval_id;
let is_running=false;
  
  function start(){
    is_running=true;
    interval_id = setInterval(function(){
        total_deci_seconds++;
        update_time();
    },100);
    //enable the pause and stop button
    pause_continue_button.disabled=false;
    stop_button.disabled=false;
    //disable the start button
    start_button.disabled=true;
  }
  function pause_continue(){
  //if stop watch runing then pause
  if(is_running ){
    clearInterval(interval_id);
    is_running=false;
    pause_continue_button.textContent="continue";
}
else{
     // else if stop watch pause the continue
     start();
 pause_continue_button.textContent="pause";
}

  }
  function stop(){
    clearInterval(interval_id);
    is_running=false;
    total_deci_seconds=0;
    update_time();
    //enalble _the pause and stop button
    pause_continue_button.disabled=true;
    stop_button.disabled=true;
    //Disable the start button
    start_button.disabled=false;
  }
  function update_time(){
    hh=Math.floor(total_deci_seconds / 36000);
    mm=Math.floor(total_deci_seconds / 600) % 60;
    ss=Math.round(total_deci_seconds / 10) % 60;
    hh_span.textContent=hh.toString().padStart(2,"0");
    mm_span.textContent=mm.toString().padStart(2,"0");
    ss_span.textContent=ss.toString().padStart(2,"0");
  }
  function init(){
    hh_span=document.getElementById("hh");
    mm_span=document.getElementById("mm");
    ss_span=document.getElementById("ss");
    start_button=document.getElementById("start");
    pause_continue_button=document.getElementById("pause_continue");
    stop_button =document.getElementById("stop");
  }
  window.onload=init;

  