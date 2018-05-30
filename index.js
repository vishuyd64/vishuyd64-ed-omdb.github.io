$(document).ready(() => {

        $('#movie').hide();
    
        $('#search_btn').click((event) => {
            let title = $('#title_search').val(); let year = $('#year_search').val();
            let id = $('#id_search').val();
            if(year.length == 0 && id.length == 0)
            {
                bytitle(title);
            }
            else if(year.length != 0 && id.length == 0)
            {
                byyear(title,year);
            }
            else if(year.length == 0 && id.length != 0)
            {
                byid(id);
            }
            else if(year.length != 0 && id.length != 0)
            {
    
                byall(title,year,id);
            }
            
            event.preventDefault();
        });
        $("#reset_btn").click((e)=>{
           
           e.preventDefault();
        });
        
});



function bytitle(title) {
      $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=27e2b492'+'&t='+title, 
            success: (data) => { 
            
                    if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#Poster_id').attr("src","img.jpeg");
                    }
                    else 
                    {
                        $('#Poster_id').attr("src",data.Poster);
                    }

                   
                    $('#title_id')     .append(data.Title);
                    $('#released_id')  .append(data.Released);
                    $('#Year_id')      .append(data.Year);
                    $('#Runtime_id')   .append(data.Runtime);
                    $('#Language_id')  .append(data.Language);
                    $('#Genre_id')     .append(data.Genre);
                    $('#Rated_id')     .append(data.Rated);
                    $('#imdbRating_id').append(data.imdbRating);
                    $('#imdbVotes_id') .append(data.imdbVotes);
                    $('#imdbID_id')    .append(data.imdbID);
                    $('#Actors_id')    .append(data.Actors);
                    $('#Director_id')  .append(data.Director);
                    $('#Writer_id')    .append(data.Writer);
                    $('#Production_id').append(data.Production);
                    $('#Country_id')   .append(data.Country);
                    $('#Awards_id')    .append(data.Awards);
                    $('#Plot_id')      .append(data.Plot);
                    $('#Type_id')      .append(data.Type);
                    $('#DVD_id')       .append(data.DVD);
                    $('#movie').show();

            },
            error: (data) => { 

                alert("error occured")

            },

            beforeSend: () => { 

                alert("Please wait, Your request is being made")

            },
            complete: () => {

               alert("Your data fetched successfully")

            },
            timeout:3000
        }); 
 }

function byyear(title,year) {
      $.ajax({
            type: 'GET', 
            dataType: 'json', 
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=27e2b492'+'&t='+title, 
            success: (data) => { 
                
                if(data.Year == year)
                {
                     let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);
                   console.log(data); 

                   if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#Poster_id').attr("src","img.jpeg");
                    }
                    else 
                    {
                        $('#Poster_id').attr("src",data.Poster);
                    }

                    $('#title_id')     .append(data.Title);
                    $('#released_id')  .append(data.Released);
                    $('#Year_id')      .append(data.Year);
                    $('#Runtime_id')   .append(data.Runtime);
                    $('#Language_id')  .append(data.Language);
                    $('#Genre_id')     .append(data.Genre);
                    $('#Rated_id')     .append(data.Rated);
                    $('#imdbRating_id').append(data.imdbRating);
                    $('#imdbVotes_id') .append(data.imdbVotes);
                    $('#imdbID_id')    .append(data.imdbID);
                    $('#Actors_id')    .append(data.Actors);
                    $('#Director_id')  .append(data.Director);
                    $('#Writer_id')    .append(data.Writer);
                    $('#Production_id').append(data.Production);
                    $('#Country_id')   .append(data.Country);
                    $('#Awards_id')    .append(data.Awards);
                    $('#Plot_id')      .append(data.Plot);
                    $('#Type_id')      .append(data.Type);
                    $('#DVD_id')       .append(data.DVD);
                    $('#movie').show();

                    console.log("done");
                }
                
            },
            error: (data) => { 

                alert("some error occured")

            },

            beforeSend: () => { 
            	alert("Please wait, Your request is being made")

            },
            complete: () => {

                alert("Your data fetched successfully")

            },
            timeout:3000
        }); 
}


