/* Notes:
 * 
 * 
 */

function main() {
   args = window.location.hrecof.split('&')
   document.write(args)
    if(window.location.hrecof.indexOf("lat") != -1){
        //this is not very robust
        var id = window.location.href.substr(window.location.href.indexOf("lat")+9)
        console.log (id)
        OpenFromLink(id)
    }
}