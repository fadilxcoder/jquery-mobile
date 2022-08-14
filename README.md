# NOTES

- **master** : Fake API branch
- **poc** : JQM PoC (deprecated) branch
- **stream** : Videos streaming branch

**Using Apache cordova / Linux**

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

## Related notes

- Fake API server 
- - https://github.com/fadilxcoder/fake-api-server.git (Fake Api provider)
- - https://my-json-server.typicode.com/fadilxcoder/fake-api-server (Fake Api)
- - https://json-server-fake-api.glitch.me/ (Fake Api versionning)


## Vercel notes

- **Ignored Build Step** - *You can customize this behavior with a command that exits with code 1 (new Build needed) or code 0.*
- Add `bash script.sh`
- `$VERCEL_ENV` is set to `PRODUCTION: true` in Github Action `ci-deploy.yaml`

```bash
#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$VERCEL_ENV" == "production" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
```