var tokenCalls = 0;

function LPJsMethodName(callback) {
    addAlert('container', '[2] ' + status + ' lpGetAuthenticationToken(callback)');

    //Standard
    callback('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE4MjE0Mzc3NTMsImlhdCI6MTYxMzY2MTc1MywiaXNzIjoiaHR0cHM6Ly9saXZlcGVyc29uVGVzdC5jb20iLCJscF9zZGVzIjpbeyJpbmZvIjp7ImN1c3RvbWVySWQiOiJTaGVlYmEiLCJpbWVpIjoiMzkzNDk0NzY4NDUyIn0sInR5cGUiOiJjdG1yaW5mbyJ9LHsicGVyc29uYWwiOnsibGFuZ3VhZ2UiOiJlbi1VUyIsImNvbnRhY3RzIjpbeyJwZXJzb25hbENvbnRhY3QiOnsiZW1haWwiOm51bGwsInBob25lIjoiMzkzOTM0OTQ3Njg0NTIiLCJwaG9uZVR5cGUiOm51bGwsImFkZHJlc3MiOm51bGwsInByZWZlcnJlZENvbnRhY3RNZXRob2QiOm51bGx9fV19LCJ0eXBlIjoicGVyc29uYWwifV0sInN1YiI6InRlc3QxIn0.WJ2OR5YVvFiK_eBuTvbjyu-T_krHSXpE2ayHGoByuez_WdmQV41jlbzTC2ZABN3KgH7_AKKsD9G5Tx-RKUBbxsE6aioUehzhPZx_HDuy7ysBkNy9Lk2prpjzSdpWYsCrq1GdR764afYDt0p147HGV3vpV6Cg4M5V9uibjlYjRCLbHhPgWdE1tr0XQp2N09HXS_oFiAwLDzZMBLbWPJi4vkPvyyaDvwWZl3KkEzSLVxFcyZ7zJqGHLY1Mu_FvV-R6fyW1Wen0UlOWJMgWOyjPf-Ow1vKi_D_FeTwbH4USantTlvZtq0gn8J15EW8VuYfxgU28nBqv25UTMa4RAokuUA');
}

function addAlert(targetDiv, text) {
    var div = document.getElementById(targetDiv);
    var alertDiv = document.createElement("div");

    alertDiv.className = 'alert alert-primary';
    alertDiv.innerHTML += text;
    div.appendChild(alertDiv);
}