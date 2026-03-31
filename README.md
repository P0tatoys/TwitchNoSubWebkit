# TwitchNoSub

Be able to watch any sub-only vod on Twitch, integrated in the website and support every twitch features.

Support chromium based browser (Chrome, Edge, Brave, Opera, ...), Firefox, and Safari.

## Download & installation

##### Chromium based browser
Download the latest release in the [releases section](https://github.com/besuper/TwitchNoSub/releases) or clone the repo.

You have to install the extension manually:

- Go in manage extension (**chrome://extensions/** in chrome)
- Make sure **Developer mode** is enabled
- Hit **Load unpacked extension** and select the unzipped folder of the extension.

If you use Chromium (not Chrome), you can pack the extension to get a .crx file you can drag & drop inside extensions page (which removes the need to have a dedicated directory for the extension on your hard drive)

- Unzip the extension
- In the parent directory of the extension, run the following command : `chromium --pack-extension=TwitchNoSub`
- Drop the created crx file in the extensions page of your browser (make sure **Developer mode** is enabled, however it will not work)

##### Firefox
Download the latest .**xpi** file in the [releases section](https://github.com/besuper/TwitchNoSub/releases).

- Drag and drop the xpi file on Firefox
- Click on "Add" in the little confirmation popup

##### Safari (macOS – e.g. M2 MacBook Air)
Safari Web Extensions must be bundled as a native macOS app using Xcode.

Requirements:
- macOS 12 Monterey or later
- Xcode 13 or later (free from the App Store)

Steps:
1. Clone or download this repository and rename the manifest:
   ```
   cp safari-manifest.json manifest.json
   ```
2. In the repository's **parent** directory, run the Safari Web Extension converter (replace `<folder>` with your cloned repository folder name):
   ```
   xcrun safari-web-extension-converter <folder> --project-location /tmp/TwitchNoSub-Safari --app-name TwitchNoSub --bundle-identifier com.twitchnosub.extension --no-open
   ```
3. Open the generated Xcode project (`/tmp/TwitchNoSub-Safari/TwitchNoSub.xcodeproj`).
4. Select the scheme for the macOS target and click **Run** (▶) – this builds and installs the app.
5. Open **Safari → Settings → Extensions**, enable **TwitchNoSub**, and grant permission for `twitch.tv`.

## Warning

This extension is still in work in progress, if there is any issue please report it.
