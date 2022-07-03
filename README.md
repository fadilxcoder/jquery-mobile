# NOTES

- **master** : Fake API branch
- **poc** : JQM PoC (deprecated) branch
- **stream** : Videos streaming branch

Using Apache cordova / Linux

- Install node pacage : `npm install -g cordova`
- Create project : `cordova create <APP_NAME>`
- Goto to <APP_NAME> and add codes
- - `cordova platform add browser` - Web GUI
- - `cordova platform add android` - Android
- - `cordova run browser` - Run app in web browser
- - `cordova serve browser` - Serves root app in web browser
- - `cordova build android` - Build android app
- - *If there are issues like "No Java files found that extend CordovaActivity."* : `cordova platforms rm android` OR `cordova platform rm android` and add new `cordova platform add android`
- Access web app on LAN / WLAN by disabling / enabling firewall : `sudo ufw disable` OR `sudo ufw enable`
- Fake API server 
- - https://github.com/fadilxcoder/fake-api-server.git
- - https://my-json-server.typicode.com/fadilxcoder/fake-api-server