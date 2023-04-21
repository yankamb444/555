function date(){
    let date = document.querySelector("#currentDay");
    let todaysDate = new Date();
    const month = todaysDate.toLocaleString("default");
    date.textContent = month;
    }
    
    date()
    
    
    function timeBlocks(num, classHour){
      return(
    `<div id="hour-${num}" class="row time-block ${classHour}">
            <div class="col-2 col-md-1 hour text-center py-3">${num}</div>
            <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save">
              <i class="fas fa-save" aria-hidden="true"></i>
            </button>
          </div>
    `
      )
    }
    
    function colorChange() {
    
    }
    
    function calofHours(){
      let todaysDate = new Date()
        const currentHour = todaysDate.getHours()
    }
    
    for (let i = 0; i < 1; i++) {
        if(num === currentHour) {
            $(classHour).removeClass("past");
            $(classHour).removeClass("future");
            $(classHour).addClass("present");
          }
          else if (num<currentHour) {
            $(classHour).addClass("past");
            $(classHour).removeClass("future");
            $(classHour).removeClass("present");
          }
          else (num>currentHour); {
            $(classHour).removeClass("past");
            $(classHour).addClass("future");
            $(classHour).removeClass("present");
          }
      }
    
    
    
    
        // need to display num and hour \