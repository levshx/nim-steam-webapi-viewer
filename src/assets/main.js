function getListAPI() {   
    const apikey = document.getElementById("apikey").value 
    neel.callProc("getAPI",apikey)
}

function showAPI(stringAPI) {
    $("#API_div").empty();
    let jsonAPI = JSON.parse(stringAPI)    
    for (var interface = 0; interface < jsonAPI.apilist.interfaces.length; interface++) {
        let a = "<br><h2>Interface: "+ jsonAPI.apilist.interfaces[interface].name +"</h2>"
        $("#API_div").append(a)
        for (var method = 0; method < jsonAPI.apilist.interfaces[interface].methods.length; method++) {
            let a = "<h3>Method: "+ jsonAPI.apilist.interfaces[interface].methods[method].name +"</h3><p>API version: "+
            jsonAPI.apilist.interfaces[interface].methods[method].version+"</p><p>HTTP Method: "+
            jsonAPI.apilist.interfaces[interface].methods[method].httpmethod+"</p>"            
            $("#API_div").append(a)


            
            if (jsonAPI.apilist.interfaces[interface].methods[method].parameters.length > 0) {
                let a = '<p>Params:</p><table border="1"><tr><th>Name</th><th>Type</th><th>Optional</th><th>Description</th></tr>'
                for (var param = 0; param < jsonAPI.apilist.interfaces[interface].methods[method].parameters.length; param++) {
                    let name = jsonAPI.apilist.interfaces[interface].methods[method].parameters[param].name
                    let type = jsonAPI.apilist.interfaces[interface].methods[method].parameters[param].type
                    let optional = jsonAPI.apilist.interfaces[interface].methods[method].parameters[param].optional
                    let description = jsonAPI.apilist.interfaces[interface].methods[method].parameters[param].description                    
                    a = a + "<tr><td>"+name+"</td><td>"+type+"</td><td>"+optional+"</td><td>"+description+"</td></tr>"
                }  
                a = a+ "</table><br>"
                $("#API_div").append(a)
            }  
            else {
                $("#API_div").append("<p>Params: null</p>")
            }
            
        }
    }
    


}