/*
 * Device UUID
 * Source: https://github.com/biggora/device-uuid/
 * License: MIT
 */
const DeviceUUID = function (options) {
  var BOTS = [
      "\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/",
      "googlebot",
      "baiduspider",
      "gurujibot",
      "yandexbot",
      "slurp",
      "msnbot",
      "bingbot",
      "facebookexternalhit",
      "linkedinbot",
      "twitterbot",
      "slackbot",
      "telegrambot",
      "applebot",
      "pingdom",
      "tumblr ",
      "Embedly",
      "spbot",
    ],
    IS_BOT_REGEXP = new RegExp("^.*(" + BOTS.join("|") + ").*$"),
    options = options ? options : {};
  var defOptions = {
    version: !1,
    language: !1,
    platform: !0,
    os: !0,
    pixelDepth: !0,
    colorDepth: !0,
    resolution: !1,
    isAuthoritative: !0,
    silkAccelerated: !0,
    isKindleFire: !0,
    isDesktop: !0,
    isMobile: !0,
    isTablet: !0,
    isWindows: !0,
    isLinux: !0,
    isLinux64: !0,
    isChromeOS: !0,
    isMac: !0,
    isiPad: !0,
    isiPhone: !0,
    isiPod: !0,
    isAndroid: !0,
    isSamsung: !0,
    isSmartTV: !0,
    isRaspberry: !0,
    isBlackberry: !0,
    isTouchScreen: !0,
    isOpera: !1,
    isIE: !1,
    isEdge: !1,
    isIECompatibilityMode: !1,
    isSafari: !1,
    isFirefox: !1,
    isWebkit: !1,
    isChrome: !1,
    isKonqueror: !1,
    isOmniWeb: !1,
    isSeaMonkey: !1,
    isFlock: !1,
    isAmaya: !1,
    isPhantomJS: !1,
    isEpiphany: !1,
    source: !1,
    cpuCores: !1,
  };
  for (var key in options)
    options.hasOwnProperty(key) &&
      "undefined" != typeof defOptions[key] &&
      (defOptions[key] = options[key]);
  return (
    (this.options = defOptions),
    (this.version = "1.0.0"),
    (this._Versions = {
      Edge: /Edge\/([\d\w\.\-]+)/i,
      Firefox: /firefox\/([\d\w\.\-]+)/i,
      IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
      Chrome: /chrome\/([\d\w\.\-]+)/i,
      Chromium: /(?:chromium|crios)\/([\d\w\.\-]+)/i,
      Safari: /version\/([\d\w\.\-]+)/i,
      Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
      Ps3: /([\d\w\.\-]+)\)\s*$/i,
      Psp: /([\d\w\.\-]+)\)?\s*$/i,
      Amaya: /amaya\/([\d\w\.\-]+)/i,
      SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
      OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
      Flock: /flock\/([\d\w\.\-]+)/i,
      Epiphany: /epiphany\/([\d\w\.\-]+)/i,
      WinJs: /msapphost\/([\d\w\.\-]+)/i,
      PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
      UC: /UCBrowser\/([\d\w\.]+)/i,
    }),
    (this._Browsers = {
      Edge: /edge/i,
      Amaya: /amaya/i,
      Konqueror: /konqueror/i,
      Epiphany: /epiphany/i,
      SeaMonkey: /seamonkey/i,
      Flock: /flock/i,
      OmniWeb: /omniweb/i,
      Chromium: /chromium|crios/i,
      Chrome: /chrome/i,
      Safari: /safari/i,
      IE: /msie|trident/i,
      Opera: /opera|OPR/i,
      PS3: /playstation 3/i,
      PSP: /playstation portable/i,
      Firefox: /firefox/i,
      WinJs: /msapphost/i,
      PhantomJS: /phantomjs/i,
      UC: /UCBrowser/i,
    }),
    (this._OS = {
      Windows10: /windows nt 10\.0/i,
      Windows81: /windows nt 6\.3/i,
      Windows8: /windows nt 6\.2/i,
      Windows7: /windows nt 6\.1/i,
      UnknownWindows: /windows nt 6\.\d+/i,
      WindowsVista: /windows nt 6\.0/i,
      Windows2003: /windows nt 5\.2/i,
      WindowsXP: /windows nt 5\.1/i,
      Windows2000: /windows nt 5\.0/i,
      WindowsPhone8: /windows phone 8\./,
      OSXCheetah: /os x 10[._]0/i,
      OSXPuma: /os x 10[._]1(\D|$)/i,
      OSXJaguar: /os x 10[._]2/i,
      OSXPanther: /os x 10[._]3/i,
      OSXTiger: /os x 10[._]4/i,
      OSXLeopard: /os x 10[._]5/i,
      OSXSnowLeopard: /os x 10[._]6/i,
      OSXLion: /os x 10[._]7/i,
      OSXMountainLion: /os x 10[._]8/i,
      OSXMavericks: /os x 10[._]9/i,
      OSXYosemite: /os x 10[._]10/i,
      OSXElCapitan: /os x 10[._]11/i,
      OSXSierra: /os x 10[._]12/i,
      Mac: /os x/i,
      Linux: /linux/i,
      Linux64: /linux x86_64/i,
      ChromeOS: /cros/i,
      Wii: /wii/i,
      PS3: /playstation 3/i,
      PSP: /playstation portable/i,
      iPad: /\(iPad.*os (\d+)[._](\d+)/i,
      iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
      Bada: /Bada\/(\d+)\.(\d+)/i,
      Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i,
    }),
    (this._Platform = {
      Windows: /windows nt/i,
      WindowsPhone: /windows phone/i,
      Mac: /macintosh/i,
      Linux: /linux/i,
      Wii: /wii/i,
      Playstation: /playstation/i,
      iPad: /ipad/i,
      iPod: /ipod/i,
      iPhone: /iphone/i,
      Android: /android/i,
      Blackberry: /blackberry/i,
      Samsung: /samsung/i,
      Curl: /curl/i,
    }),
    (this.DefaultAgent = {
      isAuthoritative: !0,
      isMobile: !1,
      isTablet: !1,
      isiPad: !1,
      isiPod: !1,
      isiPhone: !1,
      isAndroid: !1,
      isBlackberry: !1,
      isOpera: !1,
      isIE: !1,
      isEdge: !1,
      isIECompatibilityMode: !1,
      isSafari: !1,
      isFirefox: !1,
      isWebkit: !1,
      isChrome: !1,
      isKonqueror: !1,
      isOmniWeb: !1,
      isSeaMonkey: !1,
      isFlock: !1,
      isAmaya: !1,
      isPhantomJS: !1,
      isEpiphany: !1,
      isDesktop: !1,
      isWindows: !1,
      isLinux: !1,
      isLinux64: !1,
      isMac: !1,
      isChromeOS: !1,
      isBada: !1,
      isSamsung: !1,
      isRaspberry: !1,
      isBot: !1,
      isCurl: !1,
      isAndroidTablet: !1,
      isWinJs: !1,
      isKindleFire: !1,
      isSilk: !1,
      isCaptive: !1,
      isSmartTV: !1,
      isUC: !1,
      isTouchScreen: !1,
      silkAccelerated: !1,
      colorDepth: -1,
      pixelDepth: -1,
      resolution: [],
      cpuCores: -1,
      language: "unknown",
      browser: "unknown",
      version: "unknown",
      os: "unknown",
      platform: "unknown",
      geoIp: {},
      source: "",
      hashInt: function (string) {
        var i,
          chr,
          len,
          hash = 0;
        if (0 === string.length) return hash;
        for (i = 0, len = string.length; i < len; i++)
          (chr = string.charCodeAt(i)),
            (hash = (hash << 5) - hash + chr),
            (hash |= 0);
        return hash;
      },
      hashMD5: function (string) {
        function rotateLeft(lValue, iShiftBits) {
          return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }
        function addUnsigned(lX, lY) {
          var lX4, lY4, lX8, lY8, lResult;
          return (
            (lX8 = 2147483648 & lX),
            (lY8 = 2147483648 & lY),
            (lX4 = 1073741824 & lX),
            (lY4 = 1073741824 & lY),
            (lResult = (1073741823 & lX) + (1073741823 & lY)),
            lX4 & lY4
              ? 2147483648 ^ lResult ^ lX8 ^ lY8
              : lX4 | lY4
              ? 1073741824 & lResult
                ? 3221225472 ^ lResult ^ lX8 ^ lY8
                : 1073741824 ^ lResult ^ lX8 ^ lY8
              : lResult ^ lX8 ^ lY8
          );
        }
        function gF(x, y, z) {
          return (x & y) | (~x & z);
        }
        function gG(x, y, z) {
          return (x & z) | (y & ~z);
        }
        function gH(x, y, z) {
          return x ^ y ^ z;
        }
        function gI(x, y, z) {
          return y ^ (x | ~z);
        }
        function gFF(a, b, c, d, x, s, ac) {
          return (
            (a = addUnsigned(a, addUnsigned(addUnsigned(gF(b, c, d), x), ac))),
            addUnsigned(rotateLeft(a, s), b)
          );
        }
        function gGG(a, b, c, d, x, s, ac) {
          return (
            (a = addUnsigned(a, addUnsigned(addUnsigned(gG(b, c, d), x), ac))),
            addUnsigned(rotateLeft(a, s), b)
          );
        }
        function gHH(a, b, c, d, x, s, ac) {
          return (
            (a = addUnsigned(a, addUnsigned(addUnsigned(gH(b, c, d), x), ac))),
            addUnsigned(rotateLeft(a, s), b)
          );
        }
        function gII(a, b, c, d, x, s, ac) {
          return (
            (a = addUnsigned(a, addUnsigned(addUnsigned(gI(b, c, d), x), ac))),
            addUnsigned(rotateLeft(a, s), b)
          );
        }
        function convertToWordArray(string) {
          for (
            var lWordCount,
              lMessageLength = string.length,
              lNumberOfWordsTemp1 = lMessageLength + 8,
              lNumberOfWordsTemp2 =
                (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64,
              lNumberOfWords = 16 * (lNumberOfWordsTemp2 + 1),
              lWordArray = new Array(lNumberOfWords - 1),
              lBytePosition = 0,
              lByteCount = 0;
            lByteCount < lMessageLength;

          )
            (lWordCount = (lByteCount - (lByteCount % 4)) / 4),
              (lBytePosition = (lByteCount % 4) * 8),
              (lWordArray[lWordCount] =
                lWordArray[lWordCount] |
                (string.charCodeAt(lByteCount) << lBytePosition)),
              lByteCount++;
          return (
            (lWordCount = (lByteCount - (lByteCount % 4)) / 4),
            (lBytePosition = (lByteCount % 4) * 8),
            (lWordArray[lWordCount] =
              lWordArray[lWordCount] | (128 << lBytePosition)),
            (lWordArray[lNumberOfWords - 2] = lMessageLength << 3),
            (lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29),
            lWordArray
          );
        }
        function wordToHex(lValue) {
          var lByte,
            lCount,
            wordToHexValue = "",
            wordToHexValueTemp = "";
          for (lCount = 0; lCount <= 3; lCount++)
            (lByte = (lValue >>> (8 * lCount)) & 255),
              (wordToHexValueTemp = "0" + lByte.toString(16)),
              (wordToHexValue += wordToHexValueTemp.substr(
                wordToHexValueTemp.length - 2,
                2
              ));
          return wordToHexValue;
        }
        function utf8Encode(string) {
          string = string.replace(/\r\n/g, "\n");
          for (var utftext = "", n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            c < 128
              ? (utftext += String.fromCharCode(c))
              : c > 127 && c < 2048
              ? ((utftext += String.fromCharCode((c >> 6) | 192)),
                (utftext += String.fromCharCode((63 & c) | 128)))
              : ((utftext += String.fromCharCode((c >> 12) | 224)),
                (utftext += String.fromCharCode(((c >> 6) & 63) | 128)),
                (utftext += String.fromCharCode((63 & c) | 128)));
          }
          return utftext;
        }
        var k,
          AA,
          BB,
          CC,
          DD,
          a,
          b,
          c,
          d,
          x = [],
          S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22,
          S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20,
          S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23,
          S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
        for (
          string = utf8Encode(string),
            x = convertToWordArray(string),
            a = 1732584193,
            b = 4023233417,
            c = 2562383102,
            d = 271733878,
            k = 0;
          k < x.length;
          k += 16
        )
          (AA = a),
            (BB = b),
            (CC = c),
            (DD = d),
            (a = gFF(a, b, c, d, x[k + 0], S11, 3614090360)),
            (d = gFF(d, a, b, c, x[k + 1], S12, 3905402710)),
            (c = gFF(c, d, a, b, x[k + 2], S13, 606105819)),
            (b = gFF(b, c, d, a, x[k + 3], S14, 3250441966)),
            (a = gFF(a, b, c, d, x[k + 4], S11, 4118548399)),
            (d = gFF(d, a, b, c, x[k + 5], S12, 1200080426)),
            (c = gFF(c, d, a, b, x[k + 6], S13, 2821735955)),
            (b = gFF(b, c, d, a, x[k + 7], S14, 4249261313)),
            (a = gFF(a, b, c, d, x[k + 8], S11, 1770035416)),
            (d = gFF(d, a, b, c, x[k + 9], S12, 2336552879)),
            (c = gFF(c, d, a, b, x[k + 10], S13, 4294925233)),
            (b = gFF(b, c, d, a, x[k + 11], S14, 2304563134)),
            (a = gFF(a, b, c, d, x[k + 12], S11, 1804603682)),
            (d = gFF(d, a, b, c, x[k + 13], S12, 4254626195)),
            (c = gFF(c, d, a, b, x[k + 14], S13, 2792965006)),
            (b = gFF(b, c, d, a, x[k + 15], S14, 1236535329)),
            (a = gGG(a, b, c, d, x[k + 1], S21, 4129170786)),
            (d = gGG(d, a, b, c, x[k + 6], S22, 3225465664)),
            (c = gGG(c, d, a, b, x[k + 11], S23, 643717713)),
            (b = gGG(b, c, d, a, x[k + 0], S24, 3921069994)),
            (a = gGG(a, b, c, d, x[k + 5], S21, 3593408605)),
            (d = gGG(d, a, b, c, x[k + 10], S22, 38016083)),
            (c = gGG(c, d, a, b, x[k + 15], S23, 3634488961)),
            (b = gGG(b, c, d, a, x[k + 4], S24, 3889429448)),
            (a = gGG(a, b, c, d, x[k + 9], S21, 568446438)),
            (d = gGG(d, a, b, c, x[k + 14], S22, 3275163606)),
            (c = gGG(c, d, a, b, x[k + 3], S23, 4107603335)),
            (b = gGG(b, c, d, a, x[k + 8], S24, 1163531501)),
            (a = gGG(a, b, c, d, x[k + 13], S21, 2850285829)),
            (d = gGG(d, a, b, c, x[k + 2], S22, 4243563512)),
            (c = gGG(c, d, a, b, x[k + 7], S23, 1735328473)),
            (b = gGG(b, c, d, a, x[k + 12], S24, 2368359562)),
            (a = gHH(a, b, c, d, x[k + 5], S31, 4294588738)),
            (d = gHH(d, a, b, c, x[k + 8], S32, 2272392833)),
            (c = gHH(c, d, a, b, x[k + 11], S33, 1839030562)),
            (b = gHH(b, c, d, a, x[k + 14], S34, 4259657740)),
            (a = gHH(a, b, c, d, x[k + 1], S31, 2763975236)),
            (d = gHH(d, a, b, c, x[k + 4], S32, 1272893353)),
            (c = gHH(c, d, a, b, x[k + 7], S33, 4139469664)),
            (b = gHH(b, c, d, a, x[k + 10], S34, 3200236656)),
            (a = gHH(a, b, c, d, x[k + 13], S31, 681279174)),
            (d = gHH(d, a, b, c, x[k + 0], S32, 3936430074)),
            (c = gHH(c, d, a, b, x[k + 3], S33, 3572445317)),
            (b = gHH(b, c, d, a, x[k + 6], S34, 76029189)),
            (a = gHH(a, b, c, d, x[k + 9], S31, 3654602809)),
            (d = gHH(d, a, b, c, x[k + 12], S32, 3873151461)),
            (c = gHH(c, d, a, b, x[k + 15], S33, 530742520)),
            (b = gHH(b, c, d, a, x[k + 2], S34, 3299628645)),
            (a = gII(a, b, c, d, x[k + 0], S41, 4096336452)),
            (d = gII(d, a, b, c, x[k + 7], S42, 1126891415)),
            (c = gII(c, d, a, b, x[k + 14], S43, 2878612391)),
            (b = gII(b, c, d, a, x[k + 5], S44, 4237533241)),
            (a = gII(a, b, c, d, x[k + 12], S41, 1700485571)),
            (d = gII(d, a, b, c, x[k + 3], S42, 2399980690)),
            (c = gII(c, d, a, b, x[k + 10], S43, 4293915773)),
            (b = gII(b, c, d, a, x[k + 1], S44, 2240044497)),
            (a = gII(a, b, c, d, x[k + 8], S41, 1873313359)),
            (d = gII(d, a, b, c, x[k + 15], S42, 4264355552)),
            (c = gII(c, d, a, b, x[k + 6], S43, 2734768916)),
            (b = gII(b, c, d, a, x[k + 13], S44, 1309151649)),
            (a = gII(a, b, c, d, x[k + 4], S41, 4149444226)),
            (d = gII(d, a, b, c, x[k + 11], S42, 3174756917)),
            (c = gII(c, d, a, b, x[k + 2], S43, 718787259)),
            (b = gII(b, c, d, a, x[k + 9], S44, 3951481745)),
            (a = addUnsigned(a, AA)),
            (b = addUnsigned(b, BB)),
            (c = addUnsigned(c, CC)),
            (d = addUnsigned(d, DD));
        var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
        return temp.toLowerCase();
      },
    }),
    (this.Agent = {}),
    (this.getBrowser = function (string) {
      switch (!0) {
        case this._Browsers.Edge.test(string):
          return (this.Agent.isEdge = !0), "Edge";
        case this._Browsers.PhantomJS.test(string):
          return (this.Agent.isPhantomJS = !0), "PhantomJS";
        case this._Browsers.Konqueror.test(string):
          return (this.Agent.isKonqueror = !0), "Konqueror";
        case this._Browsers.Amaya.test(string):
          return (this.Agent.isAmaya = !0), "Amaya";
        case this._Browsers.Epiphany.test(string):
          return (this.Agent.isEpiphany = !0), "Epiphany";
        case this._Browsers.SeaMonkey.test(string):
          return (this.Agent.isSeaMonkey = !0), "SeaMonkey";
        case this._Browsers.Flock.test(string):
          return (this.Agent.isFlock = !0), "Flock";
        case this._Browsers.OmniWeb.test(string):
          return (this.Agent.isOmniWeb = !0), "OmniWeb";
        case this._Browsers.Opera.test(string):
          return (this.Agent.isOpera = !0), "Opera";
        case this._Browsers.Chromium.test(string):
          return (this.Agent.isChrome = !0), "Chromium";
        case this._Browsers.Chrome.test(string):
          return (this.Agent.isChrome = !0), "Chrome";
        case this._Browsers.Safari.test(string):
          return (this.Agent.isSafari = !0), "Safari";
        case this._Browsers.WinJs.test(string):
          return (this.Agent.isWinJs = !0), "WinJs";
        case this._Browsers.IE.test(string):
          return (this.Agent.isIE = !0), "IE";
        case this._Browsers.PS3.test(string):
          return "ps3";
        case this._Browsers.PSP.test(string):
          return "psp";
        case this._Browsers.Firefox.test(string):
          return (this.Agent.isFirefox = !0), "Firefox";
        case this._Browsers.UC.test(string):
          return (this.Agent.isUC = !0), "UCBrowser";
        default:
          return 0 !== string.indexOf("Mozilla") &&
            /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)
            ? ((this.Agent.isAuthoritative = !1), RegExp.$1)
            : "unknown";
      }
    }),
    (this.getBrowserVersion = function (string) {
      var regex;
      switch (this.Agent.browser) {
        case "Edge":
          if (this._Versions.Edge.test(string)) return RegExp.$1;
          break;
        case "PhantomJS":
          if (this._Versions.PhantomJS.test(string)) return RegExp.$1;
          break;
        case "Chrome":
          if (this._Versions.Chrome.test(string)) return RegExp.$1;
          break;
        case "Chromium":
          if (this._Versions.Chromium.test(string)) return RegExp.$1;
          break;
        case "Safari":
          if (this._Versions.Safari.test(string)) return RegExp.$1;
          break;
        case "Opera":
          if (this._Versions.Opera.test(string))
            return RegExp.$1 ? RegExp.$1 : RegExp.$2;
          break;
        case "Firefox":
          if (this._Versions.Firefox.test(string)) return RegExp.$1;
          break;
        case "WinJs":
          if (this._Versions.WinJs.test(string)) return RegExp.$1;
          break;
        case "IE":
          if (this._Versions.IE.test(string))
            return RegExp.$2 ? RegExp.$2 : RegExp.$1;
          break;
        case "ps3":
          if (this._Versions.Ps3.test(string)) return RegExp.$1;
          break;
        case "psp":
          if (this._Versions.Psp.test(string)) return RegExp.$1;
          break;
        case "Amaya":
          if (this._Versions.Amaya.test(string)) return RegExp.$1;
          break;
        case "Epiphany":
          if (this._Versions.Epiphany.test(string)) return RegExp.$1;
          break;
        case "SeaMonkey":
          if (this._Versions.SeaMonkey.test(string)) return RegExp.$1;
          break;
        case "Flock":
          if (this._Versions.Flock.test(string)) return RegExp.$1;
          break;
        case "OmniWeb":
          if (this._Versions.OmniWeb.test(string)) return RegExp.$1;
          break;
        case "UCBrowser":
          if (this._Versions.UC.test(string)) return RegExp.$1;
          break;
        default:
          if (
            "unknown" !== this.Agent.browser &&
            ((regex = new RegExp(
              this.Agent.browser + "[\\/ ]([\\d\\w\\.\\-]+)",
              "i"
            )),
            regex.test(string))
          )
            return RegExp.$1;
      }
    }),
    (this.getOS = function (string) {
      switch (!0) {
        case this._OS.WindowsVista.test(string):
          return (this.Agent.isWindows = !0), "Windows Vista";
        case this._OS.Windows7.test(string):
          return (this.Agent.isWindows = !0), "Windows 7";
        case this._OS.Windows8.test(string):
          return (this.Agent.isWindows = !0), "Windows 8";
        case this._OS.Windows81.test(string):
          return (this.Agent.isWindows = !0), "Windows 8.1";
        case this._OS.Windows10.test(string):
          return (this.Agent.isWindows = !0), "Windows 10.0";
        case this._OS.Windows2003.test(string):
          return (this.Agent.isWindows = !0), "Windows 2003";
        case this._OS.WindowsXP.test(string):
          return (this.Agent.isWindows = !0), "Windows XP";
        case this._OS.Windows2000.test(string):
          return (this.Agent.isWindows = !0), "Windows 2000";
        case this._OS.WindowsPhone8.test(string):
          return "Windows Phone 8";
        case this._OS.Linux64.test(string):
          return (
            (this.Agent.isLinux = !0), (this.Agent.isLinux64 = !0), "Linux 64"
          );
        case this._OS.Linux.test(string):
          return (this.Agent.isLinux = !0), "Linux";
        case this._OS.ChromeOS.test(string):
          return (this.Agent.isChromeOS = !0), "Chrome OS";
        case this._OS.Wii.test(string):
          return "Wii";
        case this._OS.PS3.test(string):
          return "Playstation";
        case this._OS.PSP.test(string):
          return "Playstation";
        case this._OS.OSXCheetah.test(string):
          return (this.Agent.isMac = !0), "OS X Cheetah";
        case this._OS.OSXPuma.test(string):
          return (this.Agent.isMac = !0), "OS X Puma";
        case this._OS.OSXJaguar.test(string):
          return (this.Agent.isMac = !0), "OS X Jaguar";
        case this._OS.OSXPanther.test(string):
          return (this.Agent.isMac = !0), "OS X Panther";
        case this._OS.OSXTiger.test(string):
          return (this.Agent.isMac = !0), "OS X Tiger";
        case this._OS.OSXLeopard.test(string):
          return (this.Agent.isMac = !0), "OS X Leopard";
        case this._OS.OSXSnowLeopard.test(string):
          return (this.Agent.isMac = !0), "OS X Snow Leopard";
        case this._OS.OSXLion.test(string):
          return (this.Agent.isMac = !0), "OS X Lion";
        case this._OS.OSXMountainLion.test(string):
          return (this.Agent.isMac = !0), "OS X Mountain Lion";
        case this._OS.OSXMavericks.test(string):
          return (this.Agent.isMac = !0), "OS X Mavericks";
        case this._OS.OSXYosemite.test(string):
          return (this.Agent.isMac = !0), "OS X Yosemite";
        case this._OS.OSXElCapitan.test(string):
          return (this.Agent.isMac = !0), "OS X El Capitan";
        case this._OS.OSXSierra.test(string):
          return (this.Agent.isMac = !0), "macOS Sierra";
        case this._OS.Mac.test(string):
          return (this.Agent.isMac = !0), "OS X";
        case this._OS.iPad.test(string):
          return (
            (this.Agent.isiPad = !0),
            string.match(this._OS.iPad)[0].replace("_", ".")
          );
        case this._OS.iPhone.test(string):
          return (
            (this.Agent.isiPhone = !0),
            string.match(this._OS.iPhone)[0].replace("_", ".")
          );
        case this._OS.Bada.test(string):
          return (this.Agent.isBada = !0), "Bada";
        case this._OS.Curl.test(string):
          return (this.Agent.isCurl = !0), "Curl";
        default:
          return "unknown";
      }
    }),
    (this.getPlatform = function (string) {
      switch (!0) {
        case this._Platform.Windows.test(string):
          return "Microsoft Windows";
        case this._Platform.WindowsPhone.test(string):
          return (this.Agent.isWindowsPhone = !0), "Microsoft Windows Phone";
        case this._Platform.Mac.test(string):
          return "Apple Mac";
        case this._Platform.Curl.test(string):
          return "Curl";
        case this._Platform.Android.test(string):
          return (this.Agent.isAndroid = !0), "Android";
        case this._Platform.Blackberry.test(string):
          return (this.Agent.isBlackberry = !0), "Blackberry";
        case this._Platform.Linux.test(string):
          return "Linux";
        case this._Platform.Wii.test(string):
          return "Wii";
        case this._Platform.Playstation.test(string):
          return "Playstation";
        case this._Platform.iPad.test(string):
          return (this.Agent.isiPad = !0), "iPad";
        case this._Platform.iPod.test(string):
          return (this.Agent.isiPod = !0), "iPod";
        case this._Platform.iPhone.test(string):
          return (this.Agent.isiPhone = !0), "iPhone";
        case this._Platform.Samsung.test(string):
          return (this.Agent.isiSamsung = !0), "Samsung";
        default:
          return "unknown";
      }
    }),
    (this.testCompatibilityMode = function () {
      var ua = this;
      if (this.Agent.isIE && /Trident\/(\d)\.0/i.test(ua.Agent.source)) {
        var tridentVersion = parseInt(RegExp.$1, 10),
          version = parseInt(ua.Agent.version, 10);
        7 === version &&
          7 === tridentVersion &&
          ((ua.Agent.isIECompatibilityMode = !0), (ua.Agent.version = 11)),
          7 === version &&
            6 === tridentVersion &&
            ((ua.Agent.isIECompatibilityMode = !0), (ua.Agent.version = 10)),
          7 === version &&
            5 === tridentVersion &&
            ((ua.Agent.isIECompatibilityMode = !0), (ua.Agent.version = 9)),
          7 === version &&
            4 === tridentVersion &&
            ((ua.Agent.isIECompatibilityMode = !0), (ua.Agent.version = 8));
      }
    }),
    (this.testSilk = function () {
      var ua = this;
      switch (!0) {
        case new RegExp("silk", "gi").test(ua.Agent.source):
          this.Agent.isSilk = !0;
      }
      return (
        /Silk-Accelerated=true/gi.test(ua.Agent.source) &&
          (this.Agent.SilkAccelerated = !0),
        !!this.Agent.isSilk && "Silk"
      );
    }),
    (this.testKindleFire = function () {
      var ua = this;
      switch (!0) {
        case /KFOT/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire";
        case /KFTT/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HD";
        case /KFJWI/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HD 8.9";
        case /KFJWA/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HD 8.9 4G";
        case /KFSOWI/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HD 7";
        case /KFTHWI/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HDX 7";
        case /KFTHWA/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HDX 7 4G";
        case /KFAPWI/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HDX 8.9";
        case /KFAPWA/gi.test(ua.Agent.source):
          return (this.Agent.isKindleFire = !0), "Kindle Fire HDX 8.9 4G";
        default:
          return !1;
      }
    }),
    (this.testCaptiveNetwork = function () {
      var ua = this;
      switch (!0) {
        case /CaptiveNetwork/gi.test(ua.Agent.source):
          return (
            (ua.Agent.isCaptive = !0),
            (ua.Agent.isMac = !0),
            (ua.Agent.platform = "Apple Mac"),
            "CaptiveNetwork"
          );
        default:
          return !1;
      }
    }),
    (this.testMobile = function () {
      var ua = this;
      switch (!0) {
        case ua.Agent.isWindows:
        case ua.Agent.isLinux:
        case ua.Agent.isMac:
        case ua.Agent.isChromeOS:
          ua.Agent.isDesktop = !0;
          break;
        case ua.Agent.isAndroid:
        case ua.Agent.isSamsung:
          (ua.Agent.isMobile = !0), (ua.Agent.isDesktop = !1);
      }
      switch (!0) {
        case ua.Agent.isiPad:
        case ua.Agent.isiPod:
        case ua.Agent.isiPhone:
        case ua.Agent.isBada:
        case ua.Agent.isBlackberry:
        case ua.Agent.isAndroid:
        case ua.Agent.isWindowsPhone:
          (ua.Agent.isMobile = !0), (ua.Agent.isDesktop = !1);
      }
      /mobile/i.test(ua.Agent.source) &&
        ((ua.Agent.isMobile = !0), (ua.Agent.isDesktop = !1));
    }),
    (this.testTablet = function () {
      var ua = this;
      switch (!0) {
        case ua.Agent.isiPad:
        case ua.Agent.isAndroidTablet:
        case ua.Agent.isKindleFire:
          ua.Agent.isTablet = !0;
      }
      /tablet/i.test(ua.Agent.source) && (ua.Agent.isTablet = !0);
    }),
    (this.testNginxGeoIP = function (headers) {
      var ua = this;
      Object.keys(headers).forEach(function (key) {
        /^GEOIP/i.test(key) && (ua.Agent.geoIp[key] = headers[key]);
      });
    }),
    (this.testBot = function () {
      var ua = this,
        isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
      isBot
        ? (ua.Agent.isBot = isBot[1])
        : ua.Agent.isAuthoritative ||
          (ua.Agent.isBot = /bot/i.test(ua.Agent.source));
    }),
    (this.testSmartTV = function () {
      var ua = this,
        isSmartTV = new RegExp(
          "smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv",
          "gi"
        ).exec(ua.Agent.source.toLowerCase());
      isSmartTV && (ua.Agent.isSmartTV = isSmartTV[1]);
    }),
    (this.testAndroidTablet = function () {
      var ua = this;
      ua.Agent.isAndroid &&
        !/mobile/i.test(ua.Agent.source) &&
        (ua.Agent.isAndroidTablet = !0);
    }),
    (this.testTouchSupport = function () {
      var ua = this;
      ua.Agent.isTouchScreen =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;
    }),
    (this.getLaguage = function () {
      var ua = this;
      ua.Agent.language = (
        navigator.language ||
        navigator.userLanguage ||
        navigator.browserLanguage ||
        navigator.systemLanguage ||
        ""
      ).toLowerCase();
    }),
    (this.getColorDepth = function () {
      var ua = this;
      ua.Agent.colorDepth = screen.colorDepth || -1;
    }),
    (this.getScreenResolution = function () {
      var ua = this;
      ua.Agent.resolution = [screen.availWidth, screen.availHeight];
    }),
    (this.getPixelDepth = function () {
      var ua = this;
      ua.Agent.pixelDepth = screen.pixelDepth || -1;
    }),
    (this.getCPU = function () {
      var ua = this;
      ua.Agent.cpuCores = navigator.hardwareConcurrency || -1;
    }),
    (this.reset = function () {
      var ua = this;
      for (var key in ua.DefaultAgent)
        ua.DefaultAgent.hasOwnProperty(key) &&
          (ua.Agent[key] = ua.DefaultAgent[key]);
      return ua;
    }),
    (this.parse = function (source) {
      source = source || navigator.userAgent;
      var ua = new DeviceUUID();
      return (
        (ua.Agent.source = source.replace(/^\s*/, "").replace(/\s*$/, "")),
        (ua.Agent.os = ua.getOS(ua.Agent.source)),
        (ua.Agent.platform = ua.getPlatform(ua.Agent.source)),
        (ua.Agent.browser = ua.getBrowser(ua.Agent.source)),
        (ua.Agent.version = ua.getBrowserVersion(ua.Agent.source)),
        ua.testBot(),
        ua.testSmartTV(),
        ua.testMobile(),
        ua.testAndroidTablet(),
        ua.testTablet(),
        ua.testCompatibilityMode(),
        ua.testSilk(),
        ua.testKindleFire(),
        ua.testCaptiveNetwork(),
        ua.testTouchSupport(),
        ua.getLaguage(),
        ua.getColorDepth(),
        ua.getPixelDepth(),
        ua.getScreenResolution(),
        ua.getCPU(),
        ua.Agent
      );
    }),
    (this.get = function (customData) {
      var pref = "a",
        du = this.parse(),
        dua = [];
      for (var key in this.options)
        this.options.hasOwnProperty(key) &&
          this.options[key] === !0 &&
          dua.push(du[key]);
      customData && dua.push(customData),
        !this.options.resolution && du.isMobile && dua.push(du.resolution),
        (pref = "b");
      var tmpUuid = du.hashMD5(dua.join(":")),
        uuid = [
          tmpUuid.slice(0, 8),
          tmpUuid.slice(8, 12),
          "4" + tmpUuid.slice(12, 15),
          pref + tmpUuid.slice(15, 18),
          tmpUuid.slice(20),
        ];
      return uuid.join("-");
    }),
    (this.Agent = this.DefaultAgent),
    this
  );
};
