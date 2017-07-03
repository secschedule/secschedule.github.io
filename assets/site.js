var Page = {
    teamSelect: function () {
        var e = document.getElementById("teams");
        var selectedSelect = e.options[e.selectedIndex].value;
        window.location = "/" + selectedSelect;
    },

    getFormattedDate: function (dtString) {
        var dt = new Date(dtString);

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var nameOfDay = days[dt.getDay()];
        var month = months[dt.getMonth()];

        var day = dt.getDate();

        return nameOfDay + ' ' + month + ' ' + day;
    }
}