document.addEventListener("DOMContentLoaded", function() { 
    $("select").on('change', function() {
        // ...
        console.log($(this).val());
        const selectedValue=$(this).val();

        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + selectedValue + '.json?api-key=c7IZd55GMn6VzakaBcCAByRv6prf4rqS'
        })
        .done(function(data) {
            // console.log(data);
            const results = data.results;
            console.log(results);

            $.each(results, function(index, value) {
                $("#nyt-articles").append(`
                <a href="${value.url}">
                    <article class="stories" style="background-image:url(${value.multimedia[4].url});">      
                        <p>${value.abstract}</p>
                    </article>
                </a>
                
                `);
            })

            // $('.user-name').append(data.login);
        }).fail(function(){
            console.log('something went wrong');
        });
     });

  


});