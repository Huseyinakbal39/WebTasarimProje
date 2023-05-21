var sirala = document.getElementById("ligler")
var sira = 1
let data = fetch("https://api.sportsdata.io/v4/soccer/scores/json/Competitions?key=7fa18ef917ab4d19bd2eea49832fedd1")
.then(Response => Response.json())
.then(veri => {

    veri.forEach(element => {
        if(sira<31) {
            var bolge = element["AreaName"]
            var lig =element["Name"]
            ligler.innerHTML += `<tr>
            <th scope="row">${sira}</th>
            <td>${bolge}</td>
            <td>${lig}</td>
            </tr>`
        }
        sira++
    });
})