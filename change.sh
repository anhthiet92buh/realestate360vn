# change env to dev
# cat env-dev > .env;

# change .json google-service
# cat documents/google-services/dev/google-services.json > android/app/google-services.json;
# cat documents/google-services/dev/GoogleService-Info.plist > ios/GoogleService-Info.plist;

# change name applicatiom
cat <<END >android/app/src/main/res/values/strings.xml
<resources>
    <string name="app_name">Real Estate</string>
</resources>
END

code -r package.json;
  # code -r .env;
code -r android/app/build.gradle;
  # code -r android/app/google-services.json;
code -r android/app/src/main/res/values/strings.xml;