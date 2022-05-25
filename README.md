### How to use this project

- Install npm dependencies: `npm i`
- Install pods: `cd ios && pod install`
- Build app: `npm run ios` (or `npx react-native run-ios --simulator "iPhone 11"` if you want to select another simulator)
- Set `routeCount` in codegen.js to 40000 and run codegen: `npm run codegen`
- Start bundler: `npm run start`
- Observe possible crash in simulator
