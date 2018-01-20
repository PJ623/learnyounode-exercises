// Exercise: "TIME SERVER"

var net = require('net');

var timeServer = net.createServer((socket) => {
    socket.end(formatDate(new Date) + '\n');
});

timeServer.listen(process.argv[2]);

function formatDate(date) {
    let dateArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()];
    let dateStr = '';
    let metric;
    let char;

    for (let i = 0; i < dateArr.length; i++) {
        metric = dateArr[i];

        if (metric < 10 && i != 0)
            dateArr[i] = '0' + metric.toString();
        else
            dateArr[i] = dateArr[i].toString()

        if (i < 2)
            char = '-';
        else if (i == 2)
            char = ' ';
        else if (i == 3)
            char = ':';
        else
            char = '';

        dateStr = dateStr + dateArr[i] + char;
    }

    return dateStr;
}
