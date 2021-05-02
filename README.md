# Mars
The Mars app is responsible for fetching data from NASA Api and displaying it in the listview component. The Api information is available on this link: https://api.nasa.gov/. </br>
Please feel free to ask any question about the design and development solution.

## How to run the app in a local environment?
Please follow the procedure below after cloning the project.
* ``` yarn install``` to install project dependencies.
* ``` yarn start ``` to run the JS packager.
* ``` yarn test ``` to run unit and snapshot test cases.
* ```yarn tsc ``` for validating Typescript data types.
* ### For running App on iOS emulator:
  * ```cd ios && pod install && cd ..```
  * ``` yarn ios ```
* ### For running App on Android emulator:
  * ``` yarn android ```
  * The React Native tools require some environment variables to be set up in order to build apps with native code. Make sure  your ANDROID_HOME environment variable is properly configured. Please follow the link for more information: https://reactnative.dev/docs/environment-setup
  * I have noticed that after running the ```yarn android``` script, android emulator doesn't boot up by itself. To resolve this issue, please boot up the emulator from the android studio first and then run ```yarn android ``` script.
  
## Demo
### iOS:
<img src="https://user-images.githubusercontent.com/70640033/116824928-28a8bd00-aba6-11eb-86e7-4f82043d03ad.gif" />

### Android:
<img src="https://user-images.githubusercontent.com/70640033/116825083-0cf1e680-aba7-11eb-9f11-2c2cfe5b598e.gif" />
