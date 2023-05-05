$(function () {
    $(".btn").on("click", function () {

        veri = $(".inputH")

        console.log(veri.val());
        $.ajax({
            method: "GET",
            url: `http://api.weatherapi.com/v1/current.json?key=bf14844704b24043958180945233103&q=${veri.val()}&aqi=no`,
            success: function (data) {
                $("h1").empty()
                console.log(data)
                console.log(data.current.temp_c)
                // img.attr("src","")
                // $("img").remove()
                // var img = $("<img>")
                // $(".imgDiv").append(img)
                $(".temp-p").empty()
                $(".country-p").empty()
                $(".condition-p").empty()
                $(".date").empty()
                $(".humidity-p").empty()
                $(".wind-p").empty()
                $(".feels-p").empty()
                $(".temp-p").append(Math.round(data.current.temp_c))
                $(".country-p").append(veri.val())
                var spann = $("<span>")
                $(".temp-p").append(spann)

                var tarih = new Date();
                console.log("tarih " + tarih.getDate())
                var month = tarih.getMonth() + 1;
                console.log("a y" + month)
                console.log("yıl " + tarih.getFullYear())

                console.log(tarih.getDate() + "." + tarih.getMonth() + "." + tarih.getFullYear())
                $(".date").append(tarih.getDate() + "." + month + "." + tarih.getFullYear())
                $(".humidity-p").append("Humidity: " + data.current.humidity + "%")
                $(".wind-p").append("Wind: " + Math.round(data.current.wind_kph) + " km/s")
                $(".feels-p").append("Feelslike: " + Math.round(data.current.feelslike_c) + "°")

                if (data.current.temp_c < 10) {

                    // $(".imgDiv").append(img)
                    // $(".temp-p").append(data.current.temp_c)
                    // img.attr("src","//cdn.weatherapi.com/weather/64x64/day/302.png")
                    console.log("could")
                        ,
                        $("body").css("background-image", "url('./havaDurumuArkasi6.jpg')")

                    $(".condition-p").append("Could")
                    spann.append("°")
                }
                else if (data.current.temp_c >= 19) {
                    // $(".imgDiv").append(img)
                    //  $(".temp-p").append(data.current.temp_c)
                    //  img.attr("src","//cdn.weatherapi.com/weather/64x64/day/116.png")
                    spann.append("°")

                    $("body").css("background-image", "url('./gunesli2.jpg')")

                    console.log("hot")
                    $(".condition-p").append("Hot")

                } else if (data.current.temp_c < 19 && data.current.temp_c >= 10) {
                    //  $(".imgDiv").append(img)
                    //  $(".temp-p").append(data.current.temp_c)
                    // img.attr("src","//cdn.weatherapi.com/weather/64x64/night/116.png")

                    $("body").css("background-image", "url('./partyCloudy.jpg')")

                    console.log("Partly Cloudy")
                    $(".condition-p").append("Partly cloudy")
                    spann.append("°")

                }
            },
            error: function () {
                console.log("ERRORRRRRRRR")
            }

        })
    })
})