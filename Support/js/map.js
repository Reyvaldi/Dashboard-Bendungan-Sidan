let map;
var condition = "1";
let markers1 = [];
let markers2 = [];

function initMap() {
    // The map, centered
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: new google.maps.LatLng(-8.315237, 115.249285),
        mapTypeId: "satellite",
    });


    const iconBase = "./Support/img/";
    // The location
    const coordinateData = [

        {
            name: "Automatic Weather Station (AWS)",
            title: "Data Analysis",
            position: new google.maps.LatLng(
                -8.318380, 115.250644
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'Data'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'Wind'" + ')">' +
                '<i class="fa-solid fa-wind"></i> Wind</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'Rainfall'" + ')">' +
                '<i class="fa-solid fa-droplet"></i> Rainfall</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'Pyrano'" + ')">' +
                '<i class="fa-solid fa-sun"></i> Pyrano</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'Info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="Data" class="tabcontent active">' +
                '<iframe id="framedata" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/SidanHourly/hourly?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Wind" class="tabcontent">' +
                '<iframe id="framewind" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/SidanWindHourly/wind-hourly?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Rainfall" class="tabcontent">' +
                '<iframe id="framerainfall" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/SidanRainfallHourly/rainfall-hourly?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Pyrano" class="tabcontent">' +
                '<iframe id="framepyrano" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/SidanPyranometerHourly/pyranometer-hourly?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="#" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',

        },
        {
            name: "Rumah Instrument",
            title: "Rumah Instrument",
            position: new google.maps.LatLng(
                -8.316389, 115.248333
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks EM active" onclick="openCity(event, ' + "'STA50'" + ')">STA 0+050</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'STA90'" + ')">STA 0+090</button>' +
                '<button class="tablinks EM" onclick="openCity(event, ' + "'STA130'" + ')">STA 0+130</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'STA150'" + ')">STA 0+150</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'STA200'" + ')">STA 0+200</button>' +
                '<button class="tablinks EM" onclick="openCity(event, ' + "'STA218'" + ')">STA 0+218</button>',
            tabcontent: '<div id="STA50" class="tabcontent active">' +
                '<iframe id="frameSTA50" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/STA50/sta-02b-050?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="STA90" class="tabcontent">' +
                '<iframe id="frameSTA90" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/STA090/sta-02b-090?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="STA130" class="tabcontent">' +
                '<iframe id="frameSTA130" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/STA130/sta-02b-130?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="STA150" class="tabcontent">' +
                '<iframe id="frameSTA150" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/STA150/sta-02b-150?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="STA200" class="tabcontent">' +
                '<iframe id="frameSTA200" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/STA200/sta-02b-200?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="STA218" class="tabcontent">' +
                '<iframe id="frameSTA218" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/STA218/sta-02b-218?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>',
            imgcontent: '<img id="imgSTA50" src="./Support/asset/img/STA050.png" alt="" class="img-content active">' +
                '<img id="imgSTA90" src="./Support/asset/img/STA090.png" alt="" class="img-content">' +
                '<img id="imgSTA130" src="./Support/asset/img/STA130.png" alt="" class="img-content">' +
                '<img id="imgSTA150" src="./Support/asset/img/STA150.png" alt="" class="img-content">' +
                '<img id="imgSTA200" src="./Support/asset/img/STA200.png" alt="" class="img-content">' +
                '<img id="imgSTA218" src="./Support/asset/img/STA218.png" alt="" class="img-content">',
        },
        {
            name: "AWLR 1 (Intake)",
            title: "AWLR 1 (Intake)",
            position: new google.maps.LatLng(
                -8.315690, 115.250164
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'awlr1'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="awlr1" class="tabcontent active">' +
                '<iframe id="frameawlr1" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/be7vzmovj629sa/awlr-1-intake?orgId=1&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="#" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',
        },
        {
            name: "AWLR 2 (Hulu)",
            title: "AWLR 2 (Hulu)",
            position: new google.maps.LatLng(
                -8.310898, 115.249657
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'awlr2'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="awlr2" class="tabcontent active">' +
                '<iframe id="frameawlr2" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/awlr2/awlr-2-hulu?orgId=1&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="#" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',
        },
        {
            name: "AWLR 3 (Hilir)",
            title: "AWLR 3 (Hilir)",
            position: new google.maps.LatLng(
                -8.320684, 115.248676
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'awlr3'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="awlr3" class="tabcontent active">' +
                '<iframe id="frameawlr3" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/awlr3/awlr-3-hilir?orgId=1&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="#" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',
        },
        {
            name: "V-Notch",
            title: "V-Notch",
            position: new google.maps.LatLng(
                -8.317725, 115.248263
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'vnotch'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="vnotch" class="tabcontent active">' +
                '<iframe id="framevnotch" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/fe7vc51j9b7k0d/v-notch?orgId=1orgId=1&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="./info_v-notch.html" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',
        },
        {
            name: "SMA 1",
            title: "SMA 1",
            position: new google.maps.LatLng(
                -8.316326, 115.248350
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'sma1'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="sma1" class="tabcontent active">' +
                '<iframe id="framesma1" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/be8uftk8kmd4wa/sma01-sidan?orgId=1&refresh=5s&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="#" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',
        },
        {
            name: "SMA 2",
            title: "SMA 2",
            position: new google.maps.LatLng(
                -8.316363, 115.247564
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'sma2'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'seismo'" + ')">Seismograf</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="sma2" class="tabcontent active">' +
                '<iframe id="framesma2" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/fea11ub78d8g0f/sma02-sidan?orgId=1&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="seismo" class="tabcontent">' +
                '<iframe id="frameseismo" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/be8uftk8kmd4wa4/seismograf-sidan?orgId=1&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="#" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',
        },
        {
            name: "SMA 3",
            title: "SMA 3",
            position: new google.maps.LatLng(
                -8.317427, 115.248221
            ),
            img: "",
            detailloc: "",
            tab: '<button id="overview" class="tablinks active" onclick="openCity(event, ' + "'sma3'" + ')">' +
                '<i class="fa-solid fa-chart-simple"></i> Overview</button>' +
                '<button class="tablinks" onclick="openCity(event, ' + "'info'" + ')">' +
                '<i class="fa-solid fa-circle-info"></i> Info</button>',
            tabcontent: '<div id="sma3" class="tabcontent active">' +
                '<iframe id="framesma3" class="content-data active" src="https://tmr-instrumentweb.com/dashboarV1/d/be8uftk8kmd4wa3/sma03-sidan?orgId=1&hidebar&kiosk&from=now%2Fd&to=now" scrolling="yes"></iframe>' +
                '</div>' +
                '<div id="Info" class="tabcontent">' +
                '<iframe id="frameinfo" class="content-info active" src="#" scrolling="yes" style="margin-left: -40px;"></iframe>' +
                '</div>',
        }
    ];

    markers2 = coordinateData.map((position, i) => {
        const marker = new google.maps.Marker({
            position: coordinateData[i].position,
            icon: {
                url: iconBase + "blue-marker.gif",
                scaledSize: new google.maps.Size(27, 36),
            },
            map: map,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: '<div id="content">' +
                '<h5 id="firstHeading" class="firstHeading">' +
                coordinateData[i].name +
                "</h5>" +
                '<div id="bodyContent">' +
                "<p>" +
                "</div>" +
                '<div id="spek">' +
                "<b>Coordinate :</b>" +
                coordinateData[i].position +
                ".<br><br>" +
                "<b>Description/Parameter :</b><br>" +
                coordinateData[i].detailloc +
                "</div>",
        });

        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        google.maps.event.addListener(marker, "click", () => {

            infoWindow.open(marker.get("map"), marker);
            currentInfoWindow = infoWindow;

            for (var j = 0; j < markers2.length; j++) {
                markers2[j].setIcon({
                    url: iconBase + "blue-marker.gif",
                    scaledSize: new google.maps.Size(27, 37),
                });
            }
            marker.setIcon({
                url: iconBase + "Loop-map.gif",
                scaledSize: new google.maps.Size(44, 45)
            });

            document.getElementsByClassName("tab")[0].innerHTML = coordinateData[i].tab;
            document.getElementsByClassName("tab-content")[0].innerHTML = coordinateData[i].tabcontent;
            document.getElementsByClassName("title")[0].innerHTML = coordinateData[i].title;

            // Tombol Select Freq //
            if (coordinateData[i].name == "Automatic Weather Station (AWS)") {
                document.getElementsByClassName("dropdown")[0].style.display = "block";
            } else {
                document.getElementsByClassName("dropdown")[0].style.display = "none";
            }
            // end //
            document.getElementById("time-range").innerHTML = "Today so far";
            if (window.innerWidth <= 1280) {
                if (coordinateData[i].name == "Automatic Weather Station (AWS)" || coordinateData[i].name == "Rumah Instrument") {
                    document.getElementsByClassName("wrap-sidebar")[0].style.display = "block";
                    document.getElementsByClassName("wrap-map")[0].style.width = "100vw";
                }

                window.scrollTo(0, window.innerHeight);
            } else if (window.innerWidth <= 1490) {

                if (coordinateData[i].name == "Automatic Weather Station (AWS)" || coordinateData[i].name == "Rumah Instrument") {
                    document.getElementsByClassName("wrap-sidebar")[0].style.display = "block";
                    document.getElementsByClassName("wrap-map")[0].style.width = "45vw";
                }

                if (coordinateData[i].name == "Rumah Instrument") {
                    document.getElementsByClassName("wrap-img")[0].style.display = "flex";
                    document.getElementsByClassName("wrap-img")[0].innerHTML = coordinateData[i].imgcontent;
                }

            } else {
                //if (coordinateData[i].name == "Automatic Weather Station (AWS)" || coordinateData[i].name == "Rumah Instrument") {
                document.getElementsByClassName("wrap-sidebar")[0].style.display = "block";
                document.getElementsByClassName("wrap-map")[0].style.width = "40vw";
                //}
                if (coordinateData[i].name == "Rumah Instrument") {
                    document.getElementsByClassName("wrap-img")[0].style.display = "flex";
                    document.getElementsByClassName("wrap-img")[0].innerHTML = coordinateData[i].imgcontent;
                }
            }
            newheightsidebar();

        });

        marker.addListener('mouseover', function () {
            infoWindow.open(map, this);
        });

        // assuming you also want to hide the infowindow when user mouses-out
        marker.addListener('mouseout', function () {
            infoWindow.close();
        });

        marker.addListener("dblclick", () => {
            map.setZoom(17);
            map.setCenter(marker.getPosition());
        });
        google.maps.event.addListener(map, "click", () => {
            infoWindow.close();
            for (var j = 0; j < markers2.length; j++) {
                markers2[j].setIcon({
                    url: iconBase + "blue-marker.gif",
                    scaledSize: new google.maps.Size(27, 36),
                });
            }
            document.getElementsByClassName("wrap-img")[0].style.display = "none";
            document.getElementsByClassName("wrap-sidebar")[0].style.display = "none";
            document.getElementsByClassName("wrap-map")[0].style.width = "100vw";
        });
        return marker;
    });
}

function closesidebar() {
    document.getElementsByClassName("wrap-img")[0].style.display = "none";
    document.getElementsByClassName("wrap-sidebar")[0].style.display = "none";
    document.getElementsByClassName("wrap-map")[0].style.width = "100vw";
}

function resizemap() {
    if (window.innerWidth > 1280) {
        window.scrollTo(0, 0);
    }

    if (document.getElementsByClassName("wrap-sidebar")[0].style.display == "block") {
        if (window.innerWidth >= 1620) {
            size = innerWidth / 2 - 150;
            document.getElementsByClassName("content-data")[0].style.width = "60vw";
            document.getElementsByClassName("wrap-map")[0].style.width = "40vw";
            console.log(size);
        } else if (window.innerWidth <= 1280) {
            document.getElementsByClassName("content-data")[0].style.width = "100vw";
            document.getElementsByClassName("wrap-map")[0].style.width = "100vw";
        } else if (window.innerWidth <= 1490) {
            document.getElementsByClassName("content-data")[0].style.width = "55vw";
            document.getElementsByClassName("wrap-map")[0].style.width = "45vw";
        } else {
            document.getElementsByClassName("content-data")[0].style.width = "60vw";
            document.getElementsByClassName("wrap-map")[0].style.width = "40vw";
        }
    }

}