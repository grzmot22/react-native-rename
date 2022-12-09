// nS - No Space
// lC - Lowercase

import { replaceSpecialChars } from '../utils';

export function filesToModifyContent(currentAppName, newName) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  const nS_NewName = replaceSpecialChars(newName.replace(/\s/g, ''));

  return [
    {
      regex: `<string name="app_name">${currentAppName}</string>`,
      replacement: `<string name="app_name">${newName}</string>`,
      paths: ['android/app/src/main/res/values/strings.xml'],
    },
    {
      regex: nS_CurrentAppName,
      replacement: nS_NewName,
      paths: [
        'index.js',
        'index.android.js',
        'index.ios.js',
        `ios/${nS_NewName}.xcodeproj/project.pbxproj`,
        `ios/${nS_NewName}.xcworkspace/contents.xcworkspacedata`,
        `ios/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}-tvOS.xcscheme`,
        `ios/${nS_NewName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}.xcscheme`,
        `ios/${nS_NewName}/AppDelegate.m`,
        `ios/${nS_NewName}/AppDelegate.mm`,
        'android/settings.gradle',
        `ios/${nS_NewName}Tests/${nS_NewName}Tests.m`,
        'ios/build/info.plist',
        'ios/Podfile',
        'app.json',
      ],
    },
    {
      regex: `text="${currentAppName}"`,
      replacement: `text="${newName}"`,
      paths: [`ios/${nS_NewName}/Base.lproj/LaunchScreen.xib`],
    },
    {
      regex: currentAppName,
      replacement: newName,
      paths: [`ios/${nS_NewName}/Info.plist`],
    },
    {
      regex: currentAppName,
      replacement: nS_NewName,
      paths: [`ios/fastlane/Fastfile`],
    },
    {
      regex: `"name": "${currentAppName}"`,
      replacement: `"name": "${newName}"`,
      paths: ['package.json'],
    },
    {
      regex: `"displayName": "${currentAppName}"`,
      replacement: `"displayName": "${newName}"`,
      paths: ['app.json'],
    },
  ];
}
