function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  imgactive = document.getElementsByClassName("img-content");
  for (i = 0; i < imgactive.length; i++) {
    imgactive[i].style.display = "none";
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  document.getElementById('img' + cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function newheightsidebar() {
  content = document.getElementsByClassName('content-data');
  newheight = document.getElementsByClassName('wrap-sidebar')[0].offsetHeight - content[0].offsetTop;
  for (let i = 0; i <= content.length; i++) {
    document.getElementsByClassName('tabcontent')[i].style.height = newheight + "px";
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdowntn() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("Dropdown-timerange").classList.remove("show-flex");
}

function dropdowntn2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function groupdropdown() {
  document.getElementById("group-btn").classList.toggle("show-flex");
}

function activelist(y) {
  y.classList.toggle("active-list");
  listtags = document.getElementsByClassName("list-tag");
  var activeelement = 0;
  for (i = 0; i < listtags.length; i++) {
    if (listtags[i].className == 'list-tag active-list')
      activeelement++;
  }
  if (activeelement == listtags.length) {
    document.getElementById("checkbox").checked = true;
  } else {
    document.getElementById("checkbox").checked = false;
  }
}

let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  var listtags = document.getElementsByClassName("list-tag");
  if (checkbox.checked) {
    for (i = 0; i < listtags.length; i++) {
      listtags[i].classList.add("active-list");
    }
  } else {
    for (i = 0; i < listtags.length; i++) {
      listtags[i].classList.remove("active-list");
    }
  }
});

let fromdatetime = document.getElementById("from-datetime");
fromdatetime.addEventListener("change", () => {
  document.getElementById("from-datetime2").value = fromdatetime.value;
});

let todatetime = document.getElementById("to-datetime");
fromdatetime.addEventListener("change", () => {
  document.getElementById("to-datetime2").value = todatetime.value;
});

function alltags(c) {
  var listtags = document.getElementsByClassName("list-tag");
  if (c.checked == "false") {
    for (i = 0; i < listtags.length; i++) {
      listtags[i].classList.add("active-list");
    }
  } else {
    for (i = 0; i < listtags.length; i++) {
      listtags[i].classList.remove("active-list");
    }
  }

}

// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}*/

function timerangebtn() {
  document.getElementById("Dropdown-timerange").classList.toggle("show-flex");
  document.getElementById("myDropdown").classList.remove("show");
}

// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function (event) {
  if (!event.target.matches('.timerange-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-timerange");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show-flex')) {
              openDropdown.classList.remove('show-flex');
          }
      }
  }
}*/

function sendreqid(reqid) {
  var xhr = new XMLHttpRequest();
  var url = "/Download_WebService/History_Progres_Download(CSV)?Req_Id=" + reqid;
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      //console.log(json);
      window.location.assign(json.Link);
      document.getElementsByClassName("framedownload")[0].style.display = "none";
    }
  };
  xhr.send();
}

function downloaddata() {
  var xhr = new XMLHttpRequest();
  var url = "/Download_WebService/History_Request";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      //console.log(json["Request Id"]);

      setTimeout(() => {
        sendreqid(json["Request Id"]);
      }, 3000);

    }
  };

  timerange = document.getElementById("time-range").innerHTML;

  var from, to;
  const datefrom = new Date();
  const dateto = new Date();

  if (timerange == "Today so far") {
    datefrom.setHours(0, 0, 0);
    from = datefrom.toISOString();

    dateto.toString();
    to = dateto.toISOString();
  } else if (timerange == "Last 2 days") {
    datefrom.setDate(datefrom.getDate() - 2);
    from = datefrom.toISOString();

    dateto.toString();
    to = dateto.toISOString();
  } else if (timerange == "Last 7 days") {
    datefrom.setDate(datefrom.getDate() - 7);
    from = datefrom.toISOString();

    dateto.toString();
    to = dateto.toISOString();
  } else if (timerange == "Last 30 days") {
    datefrom.setDate(datefrom.getDate() - 30);
    from = datefrom.toISOString();

    dateto.toString();
    to = dateto.toISOString();
  } else if (timerange == "This week") {
    from = "now/w";
    to = "now/w";
  } else if (timerange == "This month") {
    from = "now/M";
    to = "now/M";
  } else if (timerange == "This year") {
    from = "now/y";
    to = "now/y";
  } else if (timerange == "Previous week") {
    from = "now-1w%2Fw";
    to = "now-1w%2Fw";
  } else if (timerange == "Previous month") {
    from = "now-1M%2FM";
    to = "now-1M%2FM";
  } else if (timerange == "Previous year") {
    from = "now-1y%2Fy";
    to = "now-1y%2Fy";
  } else if (timerange == "Absolute time range") {
    from = document.getElementById('from-datetime2').value;
    to = document.getElementById('to-datetime2').value;
  }


  const tagsname = [
    "BWS Sidan.Project.1.Wind Direction",
    "BWS Sidan.Project.1.Wind Speed",
    "BWS Sidan.Project.1.Temperature",
    "BWS Sidan.Project.1.Humidity",
    "BWS Sidan.Project.1.Pressure",
    "BWS Sidan.Project.1.Pyranometer",
    "BWS Sidan.Project.1.Rainfall"
  ];

  listtags = document.getElementsByClassName("list-tag");
  var listtagsname = [];
  for (i = 0; i < listtags.length; i++) {
    if (listtags[i].className == 'list-tag active-list')
      listtagsname.push(tagsname[i]);
  };

  var data = JSON.stringify({
    "From": from,
    "To": to,
    "WorkspaceName": "BWS Sepaku",
    "FilterName": listtagsname
  });
  xhr.send(data);
}

function freqdata(freq) {
  timerange = document.getElementById("time-range").innerHTML;

  changeiframe(timerange, freq);
  document.getElementsByClassName("selected-freq")[0].innerHTML = freq;
  document.getElementById("myDropdown").classList.remove("show");
}

function selecttimerange(timerange) {
  // Declare all variables
  freq = document.getElementsByClassName("selected-freq")[0].innerHTML;
  changeiframe(timerange, freq);
  document.getElementById("time-range").innerHTML = timerange;
  document.getElementById("Dropdown-timerange").classList.remove("show-flex");
  if (timerange != 'Absolute time range') {
    document.getElementById("from-datetime").value = '';
    document.getElementById("to-datetime").value = '';
    document.getElementsByClassName('group-abstime')[0].disabled = true;
  } else {
    from = document.getElementById('from-datetime').value;
    to = document.getElementById('to-datetime').value;
    document.getElementById("from-datetime").value = from;
    document.getElementById("to-datetime").value = to;
    document.getElementsByClassName('group-abstime')[0].disabled = false;
  }
}

function showtimerange(x) {

  timerange = document.getElementById("time-range").innerHTML;
  if (timerange == "Absolute time range") {
    fromdate = document.getElementById("from-datetime").value;
    todate = document.getElementById("to-datetime").value;
    document.getElementsByClassName("time-from")[0].innerHTML = fromdate;
    document.getElementsByClassName("time-to")[0].innerHTML = todate;
    document.getElementsByClassName("hover-timerange")[0].classList.add('show');
  }
}

function closetimerange() {
  document.getElementsByClassName("hover-timerange")[0].classList.remove('show');
}

function changeiframe(timerange, freq) {
  var from, to;
  if (timerange == "Today so far") {
    from = "now%2Fd";
    to = "now";
  } else if (timerange == "Last 2 days") {
    from = "now-2d";
    to = "now";
  } else if (timerange == "Last 7 days") {
    from = "now-7d";
    to = "now";
  } else if (timerange == "Last 30 days") {
    from = "now-30d/d";
    to = "now";
  } else if (timerange == "This week") {
    from = "now/w";
    to = "now/w";
  } else if (timerange == "This month") {
    from = "now/M";
    to = "now/M";
  } else if (timerange == "This year") {
    from = "now/y";
    to = "now/y";
  } else if (timerange == "Previous week") {
    from = "now-1w%2Fw";
    to = "now-1w%2Fw";
  } else if (timerange == "Previous month") {
    from = "now-1M%2FM";
    to = "now-1M%2FM";
  } else if (timerange == "Previous year") {
    from = "now-1y%2Fy";
    to = "now-1y%2Fy";
  } else if (timerange == "Absolute time range") {
    from = document.getElementById('from-datetime').value;
    from = Date.parse(from);
    to = document.getElementById('to-datetime').value;
    to = Date.parse(to);
  }

  title = document.getElementsByClassName("title")[0].innerHTML;

  if (title == "Rumah Instrument") {
    STA50 = "/dashboarV1/d/STA50/sta-02b-050?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;
    STA90 = "/dashboarV1/d/STA090/sta-02b-090?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;
    STA130 = "/dashboarV1/d/STA130/sta-02b-130?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;
    STA150 = "/dashboarV1/d/STA150/sta-02b-150?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;
    STA200 = "/dashboarV1/d/STA200/sta-02b-200?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;
    STA218 = "/dashboarV1/d/STA218/sta-02b-218?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("frameSTA50").setAttribute("src", STA50);
    document.getElementById("frameSTA90").setAttribute("src", STA90);
    document.getElementById("frameSTA130").setAttribute("src", STA130);
    document.getElementById("frameSTA150").setAttribute("src", STA150);
    document.getElementById("frameSTA200").setAttribute("src", STA200);
    document.getElementById("frameSTA218").setAttribute("src", STA218);

  }
  if (title == "AWLR 1 (Intake)") {
    awlr1 = "/dashboarV1/d/be7vzmovj629sa/awlr-1-intake?orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("frameawlr1").setAttribute("src", awlr1);
  }
  if (title == "AWLR 2 (Hulu)") {
    awlr2 = "/dashboarV1/d/awlr2/awlr-2-hulu?orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("frameawlr2").setAttribute("src", awlr2);
  }
  if (title == "AWLR 3 (Hilir)") {
    awlr3 = "/dashboarV1/d/awlr3/awlr-3-hilir?orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("frameawlr3").setAttribute("src", awlr3);
  }
  if (title == "V-Notch") {
    vnotch = "/dashboarV1/d/fe7vc51j9b7k0d/v-notch?orgId=1orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("framevnotch").setAttribute("src", vnotch);
  }
  if (title == "SMA 1") {
    sma1 = "/dashboarV1/d/be8uftk8kmd4wa/sma01-sidan?orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("framesma1").setAttribute("src", sma1);
  }
  if (title == "SMA 2") {
    sma2 = "/dashboarV1/d/fea11ub78d8g0f/sma02-sidan?orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;
    seismo = "/dashboarV1/d/be8uftk8kmd4wa4/seismograf-sidan?orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("framesma2").setAttribute("src", sma2);
    document.getElementById("frameseismo").setAttribute("src", seismo);
  }
  if (title == "SMA 3") {
    sma3 = "/dashboarV1/d/be8uftk8kmd4wa3/sma03-sidan?orgId=1&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("framesma3").setAttribute("src", sma3);
  }
  if (title == "Data Analysis") {
    if (freq == "Daily") {
      freqlinkdata = 'SidanDaily/daily';
      freqlinkwind = 'SidanWindDaily/wind-daily';
      freqlinkrainfall = 'SidanRainfallDaily/rainfall-daily';
      freqlinkpyrano = 'SidanPyranometerDaily/pyranometer-daily';
    } else if (freq == "Hourly") {
      freqlinkdata = 'SidanHourly/hourly';
      freqlinkwind = 'SidanWindHourly/wind-hourly';
      freqlinkrainfall = 'SidanRainfallHourly/rainfall-hourly';
      freqlinkpyrano = 'SidanPyranometerHourly/pyranometer-hourly';
    } else if (freq == "Raw") {
      freqlinkdata = 'SidanRaw/raw';
      freqlinkwind = 'SidanWindRaw/wind-raw';
      freqlinkrainfall = 'SidanRainfallRaw/rainfall-raw';
      freqlinkpyrano = 'SidanPyranometerRaw/pyranometer-raw';
    }
    urldata =
      "/dashboarV1/d/" + freqlinkdata +
      "?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;

    urlwind =
      "/dashboarV1/d/" + freqlinkwind +
      "?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;

    urlrainfall =
      "/dashboarV1/d/" + freqlinkrainfall +
      "?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;

    urlpyrano =
      "/dashboarV1/d/" + freqlinkpyrano +
      "?orgId=1&refresh=5s&hidebar&kiosk&from=" +
      from + "&to=" + to;

    document.getElementById("framedata").setAttribute("src", urldata);
    document.getElementById("framewind").setAttribute("src", urlwind);
    document.getElementById("framerainfall").setAttribute("src", urlrainfall);
    document.getElementById("framepyrano").setAttribute("src", urlpyrano);
  }


}

function ShowPopupDownloadData() {
  document.getElementsByClassName("framedownload")[0].style.display = "flex";

  timerange = document.getElementById("time-range").innerHTML;
  from = document.getElementById('from-datetime').value;
  to = document.getElementById('to-datetime').value;

  title = document.getElementsByClassName("title")[0].innerHTML;
  if (title == "Rumah Instrument") {
    url = "./download_rumah_instrument.html#time-range=" + timerange + "&from=" + from + "&to=" + to;
  }
  if (title == "AWLR 1 (Intake)") {
    url = "./download_awlr1.html#time-range=" + timerange + "&from=" + from + "&to=" + to;
  }
  if (title == "AWLR 2 (Hulu)") {
    url = "./download_awlr2.html#time-range=" + timerange + "&from=" + from + "&to=" + to;
  }
  if (title == "AWLR 3 (Hilir)") {
    url = "./download_awlr3.html#time-range=" + timerange + "&from=" + from + "&to=" + to;
  }
  if (title == "V-Notch") {
    url = "./download_vnotch.html#time-range=" + timerange + "&from=" + from + "&to=" + to;
  }
  if (title == "Data Analysis") {
    url = "./download.html#time-range=" + timerange + "&from=" + from + "&to=" + to;
  }
  document.getElementsByClassName("framedownload")[0].style.display = "flex";
  setTimeout(() => {
    document.getElementById("framedownload").setAttribute("src", url);
  }, 500);

  document.getElementById('framedownload').contentWindow.location.reload();


}

function ClosePopupDownload() {
  document.getElementsByClassName("framedownload")[0].style.display = "none";
}