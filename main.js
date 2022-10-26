const moment = require('moment');
let nowTime = moment().format('MMMM Do YYYY, h:mm:ss a');
let text = document.getElementById('some-text');
text.innerHTML = nowTime;