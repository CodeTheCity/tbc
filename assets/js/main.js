
function main() {
    const url = 'http://localhost:8080/weather?id=5331&start_date=10-Jan-2019&end_date=15-Jan-2019'
    fetch(url).then(
        response => response.json()).then(function(data){
            console.log(data)
            varx = data.map(function(obj){return obj.time})
            vary2 = data.map(function(obj){return obj.apparentTemperature})
            vary = data.map(function(obj){return obj.temperature})
            var temperature = {
                 x: varx,
                 y: vary,
                 mode: 'lines',
                 type: 'scatter',
                 name: 'temperature'
                 };
            var temperature2 = {
                x: varx,
                y: vary2,
                mode: 'lines',
                type: 'scatter',
                name: 'apparent_temp'
                };
            var data = [temperature,temperature2]
            Plotly.newPlot('myDiv', data);
        })

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'lines',
        type: 'scatter',
        name: 'bob'
        };
                        
        var data = [trace1];
            
        Plotly.newPlot('myDiv', data);
}