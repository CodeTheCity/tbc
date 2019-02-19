
function main() {
    const url = 'http://localhost:8080/weather?id=5331&start_date=10-Jan-2019&end_date=15-Jan-2019'
    fetch(url).then(
        response => response.json()).then(function(data){
            console.log(data)
            varx = data.map(function(obj){return obj.time})
            console.log(varx)
            vary = data.map(function(obj){return obj.temperature})
            console.log(vary)
            var temperature = {
                 x: varx,
                 y: vary,
                 mode: 'lines',
                 type: 'scatter',
                 name: 'bob'
                 };
            var data = [temperature]
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