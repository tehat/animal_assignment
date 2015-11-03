/**
 * Created by Thomas on 11/2/15.
 */
//

$(document).ready(function(){

    $("#search").submit(function(event){
        event.preventDefault();
        var values =  {};
        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });
        $.ajax({
            type: "GET",
            url: "/data",
            data: values,
            success: function (data) {
                people = data;
                console.log(data);
                $(".names").empty().last();

                if (data[i]){
                    $(".names").append("<p>" + data[i].name + " became the  spirit animal " + data[i].favorite + "</p>");

                } else {
                    for (var i = 0; i < data.length; i++) {
                        $(".names").append("<p>" + data[i].name + " became the  spirit animal " + data[i].favorite + "</p>");
                    }
                }

            }
        });

    });

});