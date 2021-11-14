import { Float } from "./float.js";
export const dataTypeChange = (items, data) => {
  data = { ...data };
  for (let key in data) {
    const dataType = items[key]?.dataType;
    if (dataType) {
      if (dataType === "number") {
        data[key] = parseFloat(data[key]);
      }
    }
  }
  return data;
};

export const dataDifference = (originalData, data) => {
  const obj = {};
  let change = false;
  for (let key in originalData) {
    const a = originalData[key];
    const b = data[key];
    if (a !== undefined && b !== undefined && a !== b) {
      change = true;
      obj[key] = b;
    }
  }
  for (let key in data) {
    const b = data[key];
    if (originalData[key] === undefined && b !== undefined) {
      change = true;
      obj[key] = b;
    }
  }
  if (!change) return;
  return obj;
};

export const dateToString = (date) => {
  const dateLen = [4, 2, 2];
  return date
    .toLocaleDateString()
    .split(/\//g)
    .map((el, i) => el.padStart(dateLen[i], "0"))
    .join("-");
};

export const convertDSTo26BS = (num) => {
  let code = "";
  const reg = /^\d+$/g;
  if (!reg.test(num)) {
    return code;
  }
  let m;
  while (num > 0) {
    m = num % 26;
    if (m == 0) {
      m = 26;
    }
    code = String.fromCharCode(64 + parseInt(m)) + code;
    num = (num - m) / 26;
  }
  return code;
};

export const convert26BSToDS = (code) => {
  let num = -1;
  const reg = /^[A-Z]+$/g;
  if (!reg.test(code)) {
    return num;
  }
  num = 0;
  for (var i = code.length - 1, j = 1; i >= 0; i--, j *= 26) {
    num += (code[i].charCodeAt() - 64) * j;
  }
  return num;
};

export const localDate = (d) => {
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
};

export const dateISOString = (date, time = "00:00") => {
  return `${date}T${time}:00.000Z`;
};
export const dateISOStringEnd = (date, time = "23:59") => {
  return `${date}T${time}:59.999Z`;
};
export const dateRangeToDateTimeRange = (dateS, dateE) => {
  if (!dateS && !dateE) return;
  let date = "";
  let timeRange = "";
  if (dateS) {
    date = dateS.substr(0, 10);
    timeRange += dateS.substr(11, 5);
  }
  timeRange += "~";

  if (dateE) {
    timeRange += dateE.substr(11, 5);
  }
  return { date, timeRange };
};

export const dateTimeRangeToDateRange = (date, timeRange) => {
  if (!date || !timeRange) return;
  let dateS = "";
  let dateE = "";
  const a = timeRange.split("~");
  dateS = dateISOString(date, a[0]);
  dateE = dateISOString(date, a[1]);
  return { dateS, dateE };
};

export const debounce = (func, delay = 250) => {
  let timeout = null;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
export const monthChangeStr = (y, m) => {
  return `${y}-${m.toString().padStart(2, "0")}`;
};
export const getOneMonthRange = (y, m) => {
  const startDate = new Date(dateISOString(monthChangeStr(y, m) + "-01"));
  const endDate = new Date(dateISOString(monthChangeStr(y + (m === 12 ? 1 : 0), (m === 12 ? 0 : m) + 1) + "-01"));
  endDate.setDate(0);
  return { startDate, endDate };
};

export const rgbToHsl = (r, g, b) => {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
};

export const hslToRgb = (h, s, l) => {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

export const colorRgb = (s) => {
  var sColor = s.toLowerCase();
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return sColorChange;
  }
  return sColor;
};

export const colorHex = (r, g, b) => {
  var aColor = [r, g, b];
  var strHex = "#";
  for (var i = 0; i < aColor.length; i++) {
    var hex = Number(aColor[i]).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    strHex += hex;
  }
  return strHex;
};

export const lagrangeInterpolation = (data, x) => {
  let y = 0;
  const len = data.length;
  for (let i = 0; i < len; ++i) {
    let a = 1,
      b = 1;
    for (let j = 0; j < len; ++j) {
      if (j == i) continue;
      a *= x - data[j][0];
      b *= data[i][0] - data[j][0];
    }
    y += (data[i][1] * a) / b;
  }
  return y;
};

export const lineInterpolation = (data, x) => {
  if (x <= data[0][0]) {
    return data[0][1];
  }
  if (x >= data[data.length - 1][0]) {
    return data[data.length - 1][1];
  }
  for (let i = 0; i < data.length - 1; i++) {
    if (x >= data[i][0] && x < data[i + 1][0]) {
      return Float.mix(data[i][1], data[i + 1][1], Float.inverseMix(data[i][0], data[i + 1][0], x));
    }
  }
};
export const map_pm25 = [0, 15.5, 35.5, 54.5, 150.5, 250.5, 500.4];
const map_pm25_index = map_pm25.map((el, index) => [el, index]);
const map_pm25ColorDir = [true, true, true, false, true, true, true];
export const map_pm25Color = ["#20df33", "#e6ca19", "#ec5f13", "#ec1313", "#ad13ec", "#580a54", "#2b031e"];
const map_pm25ColorHsl = map_pm25Color.map((el) => rgbToHsl(...colorRgb(el)));

export const getPM25Color = (val) => {
  val = Math.min(Math.max(val, 0), map_pm25[map_pm25.length - 1]);
  const indexRate = lineInterpolation(map_pm25_index, val);
  const index0 = Math.floor(indexRate);
  const index1 = Math.min(index0 + 1, map_pm25.length - 1);

  const rate = indexRate % 1;

  const hsl0 = map_pm25ColorHsl[index0];
  const hsl1 = map_pm25ColorHsl[index1];

  const h = Float.mix(hsl0[0] + (!map_pm25ColorDir[index0] ? 1 : 0), hsl1[0], rate) % 1;
  const s = Float.mix(hsl0[1], hsl1[1], rate);
  const l = Float.mix(hsl0[2], hsl1[2], rate);

  return colorHex(...hslToRgb(h, s, l));
};
