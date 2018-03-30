$(document).ready(function() {

    // ================== GLOBAL VARIABLES
    // ===================================

    var searchInput;
    var recordInput;

    // ignore these two for now
    var startYearInput;
    var endYearInput;

    // ACTIONS ===========================
    // ===================================

    // when submit button is clicked it should store our variables
    $(".submit-button").on("click", function() {
        searchInput = $("#search-term").val().trim();

        console.log(searchInput);

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
          'api-key': "00861bdba73d4fc0a0f208ec15700723",
          'q': searchInput,
          'begin_date': "19960203",
          'end_date': "20050203"
        });
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
          console.log(result);
        }).fail(function(err) {
          throw err;
    });

});

// document closing tag don't touch
});