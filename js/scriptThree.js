"use strict";

const systemSettings = {
  darkMode: true,
  fontSize: "18",
  language: "en", //"en" or "uk"
  betaAccess: "true", // string "true" or "false"
};

const fontSizeNumber = Number(systemSettings.fontSize);
const hasBetaAccess = systemSettings.betaAccess === "true";
const isLargeFont = fontSizeNumber >= 18;

let settingsText = "";
if (systemSettings.darkMode && isLargeFont) {
  settingsText = "Dark mode + large font";
} else if (systemSettings.darkMode) {
  settingsText = "Dark mode";
} else if (isLargeFont) {
  settingsText = "Large font";
} else {
  settingsText = "Default settings";
}

if (hasBetaAccess) {
  settingsText += " (Beta tester)";
}

console.log("fontSizeNumber:", fontSizeNumber);
console.log("hasBetaAccess:", hasBetaAccess);
console.log("isLargeFont:", isLargeFont);
console.log("settingsText:", settingsText);
