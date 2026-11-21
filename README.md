# Holy Bible — Android APK Builder Bundle

Target App URL: https://ais-dev-yxsxy7gmchlla65tg4tok2-697326457514.asia-southeast1.run.app
Package ID: com.holybible.parallel
Version: 1.0.0

## Option 1: Build APK Automatically on GitHub (No Android Studio Needed)
1. Upload this folder to a new GitHub repository.
2. Go to the **Actions** tab and run **Build Android APK**.
3. Download `HolyBible-Android-APK` (`app-debug.apk`) from the workflow artifacts and install it on your Android phone.

## Option 2: Build Lightweight TWA APK Locally (Bubblewrap)
Requires Node.js 18+ and Java JDK 17:
```bash
npm install
npx @bubblewrap/cli init --manifest=https://ais-dev-yxsxy7gmchlla65tg4tok2-697326457514.asia-southeast1.run.app/manifest.webmanifest
npx @bubblewrap/cli build
```
This outputs `app-release-signed.apk` ready for sideloading or Google Play Store.

## Option 3: Build Capacitor WebView APK Locally
```bash
npm install
mkdir -p dist && echo "<!doctype html><html><body></body></html>" > dist/index.html
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```
Your APK will be at `android/app/build/outputs/apk/debug/app-debug.apk`.
