
$(document).ready(function(){
  function date(){
    let date = document.querySelector("#currentDay");
    let todaysDate = new Date();
    const month = todaysDate.toLocaleString("default");
    date.textContent = month;
    }
    
    date()
    
    
    function calofHours(){
      let currentHour = dayjs().hour()
      $(".time-block").each(function(){
        let timeblockhour = parseInt($(this).attr("id").split("-")[1])
        if (timeblockhour < currentHour) {
          $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (timeblockhour === currentHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        }
        else {
          $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
        }

      })
    }
    calofHours()

    setInterval(calofHours,10000)

    // save button function that will save text entered 
$('.saveBtn').on('click', function () {
  let text = $(this).parent().attr('id');
  let entered = $(this).siblings('.description').val();
  localStorage.setItem(text, entered);

});
let hours = ["9","10","11","12","13","14","15","16","17"]
hours.forEach(hour=>{
  $(`#hour-${hour} .description`).val(localStorage.getItem(`hour-${hour}`))
})
})

