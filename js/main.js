/* Notes:
 * 
 * 
 */

function main() {
   
    if(window.location.hrecof.indexOf("lat") != -1){
        //this is not very robust
        var id = window.location.href.substr(window.location.href.indexOf("lat")+9)
        console.log (id)
        OpenFromLink(id)
    }
}