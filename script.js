$(document).ready(function(){

    let $submitButton = $("#submit");
    $submitButton.on("click",searchTask);

    let $removeButton = $("#remove");
    $removeButton.on("click",removeTask);

    let $gifArea = $(".gif_area")
    function searchTask() {
        let $input = $('#task').val()
        $('#task').val("")
        $.get("https://api.giphy.com/v1/gifs/search?q=" + $input + "!&rating=g&api_key=gCzvErxUDEh4RO9btmEAYiLtB445jJ2h")
        .then(function(response){
            console.log(response);
            let $theGifIndex = Math.floor(Math.random() * (response.data.length - 1))
            let $theGif = response.data[$theGifIndex]
            let $gifElement = $('<img>').attr('src', $theGif.images.fixed_height.url);
            $gifArea.append($gifElement);
    });
        }
    function removeTask() {
        $gifArea.empty();
    }

})