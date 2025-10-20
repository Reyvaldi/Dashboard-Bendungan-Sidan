(function () {
    "use strict";
    var XAbsTime = function (
        GraphClass,
        PlotName,
        pHoverFormat
    ) {
        // Get User Interface Plot Hover Format String. from the Plot Properties Panel
        var UIHvrFormat = document.getElementsByClassName(GraphClass)[0].querySelector('[label="' + PlotName + '"]').hoverFormat

        pHoverFormat = pHoverFormat || // if exist, use diagram (vi program) hover format string. otherwise,
            UIHvrFormat || // if exist, use Plot Properties hover format (Panel Editor). otherwise,
            "{1}, {0}"; // use defult hover format string        

        var HoverFormat = function (r, n) {

            var date = new NITimestamp(r)
            const datetime = date.toDate().toString().split(" GMT")[0] // get the DateTime String excluding the tailing" GMT ...etc"
                +
                date.fractions.toString().substring(1, 5) // add fractional Value ".###"
            const value = Math.round(n * 1000) / 1000;

            var returnstr = pHoverFormat.replace(/\{0\}/g, datetime) // {0} <= Time Axis value 
                .replace(/\{1\}/g, value) // {1} <= y-Axis Value
                .replace(/(?:\r\n|\r|\n)/g, "<br>"); // convert newline character to HTML               
            return returnstr;
        }

        document.getElementsByClassName(GraphClass)[0].querySelector('[label="' + PlotName + '"]').hoverFormat = HoverFormat;
        document.getElementsByClassName(GraphClass)[0].querySelector('[label="' + PlotName + '"]').enableHover = true;

    };

    window.PlotHoverFormat = {
        XAbsTime
    };
})();