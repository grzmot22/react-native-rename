export function iconReplace(iconPath, currentName) {
  const originPaths = [
    `${iconPath}/android/icon/mipmap-anydpi-v26/ic_launcher.xml`,
    `${iconPath}/android/icon/mipmap-anydpi-v26/ic_launcher_round.xml`,
    `${iconPath}/android/icon/mipmap-hdpi/ic_launcher_background.png`,
    `${iconPath}/android/icon/mipmap-hdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/icon/mipmap-hdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/icon/mipmap-hdpi/ic_launcher_round.png`,
    `${iconPath}/android/icon/mipmap-mdpi/ic_launcher_background.png`,
    `${iconPath}/android/icon/mipmap-mdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/icon/mipmap-mdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/icon/mipmap-mdpi/ic_launcher_round.png`,
    `${iconPath}/android/icon/mipmap-xhdpi/ic_launcher_background.png`,
    `${iconPath}/android/icon/mipmap-xhdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/icon/mipmap-xhdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/icon/mipmap-xhdpi/ic_launcher_round.png`,
    `${iconPath}/android/icon/mipmap-xxhdpi/ic_launcher_background.png`,
    `${iconPath}/android/icon/mipmap-xxhdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/icon/mipmap-xxhdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/icon/mipmap-xxhdpi/ic_launcher_round.png`,
    `${iconPath}/android/icon/mipmap-xxxhdpi/ic_launcher_background.png`,
    `${iconPath}/android/icon/mipmap-xxxhdpi/ic_launcher_foreground.png`,
    `${iconPath}/android/icon/mipmap-xxxhdpi/ic_launcher_monochrome.png`,
    `${iconPath}/android/icon/mipmap-xxxhdpi/ic_launcher_round.png`,
    `${iconPath}/android/icon/values/ic_launcher_background.xml`,
    `${iconPath}/android/icon/mipmap-hdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-mdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-xhdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-xxhdpi/ic_launcher.png`,
    `${iconPath}/android/icon/mipmap-xxxhdpi/ic_launcher.png`,
    `${iconPath}/ios/icon/AppIcon.appiconset`,
  ];

  const destPaths = [
    `android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`,
    `android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml`,
    `android/app/src/main/res/mipmap-hdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-hdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_background.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_monochrome.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png`,
    `android/app/src/main/res/values/ic_launcher_background.xml`,
    `android/app/src/main/res/mipmap-mdpi/ic_launcher.png`,
    `android/app/src/main/res/mipmap-xhdpi/ic_launcher.png`,
    `android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png`,
    `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png`,
    `ios/${currentName}/Images.xcassets`,
  ];

  return [originPaths, destPaths];
}
