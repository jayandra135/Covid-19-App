$(document).ready(function(){
    let displayIndia = " ";
    $.ajax({
        type : "GET",
        url : "https://api.covid19india.org/data.json ",
        data : {},
        success : function(response){
            console.log(response);
             let statelist = response.statewise;
             statelist.forEach(function(items){
             displayIndia +=`
                 <div class="col-md-6 col-md-12 mb-2">
                         <div class="card text-center mb-2 ">
                             <div class= "card-header">
                                 <p><span class="float-left bg-info p-2 rounded">${items.statecode}</span>${items.state}<br><small class="text-info">${items.lastupdatedtime}</small></p>
                             </div>
                             <div class="card-body ">
                                 <div class="d-flex justify-content-around">
                                     <div>
                                         Confirmed<p class="text-danger font-weight-bold">${items.confirmed}</p>
                                     </div>
                                     <div>
                                         Recovered <p class="text-success font-weight-bold">${items.recovered}</p>
                                     </div>
                                     <div>
                                         Deaths<p class="text-dark font-weight-bold">${items.deaths}</p>
                                     </div>
                                     <div>
                                         Active <p class="text-warning font-weight-bold">${items.active}</p>
                                     </div>
                                 </div>
                             </div>
                            
                         </div>
                         
                 </div>`
    
 
           })
         
             $("#displayData").html(displayIndia);
        }
    })
  
 
 })