import neel, os, random, steam

randomize()

exposeProcs:
    
    proc getAPI(apikey: string) =
        var client = newSteamWebAPI(apikey)
        callJs("showAPI", $client.getSupportedAPIList)

startApp(size=[990,620])