if [ "$1" == "i" ]
then
  echo ">>>>> Installing... <<<<<"
  adb install android/app/build/outputs/apk/release/app-release.apk
else
  echo ">>>>> Building... <<<<<"
  rm -rf android/app/build/
  cd android && ./gradlew app:assembleRelease;
fi