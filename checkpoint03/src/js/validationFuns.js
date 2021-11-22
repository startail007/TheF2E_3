export const dateFormat = (value) => {
  return !value || /^\d\d\d\d\-\d\d\-\d\d$/.test(value);
};
export const dateTimeRangeFormat = (value) => {
  return !value || /^\d\d\d\d\-\d\d\-\d\d\_\d\d\:\d\d\~\d\d\:\d\d$/.test(value);
};
export const dateRangeFormat = (value) => {
  return !value || /^\d\d\d\d\-\d\d\-\d\d\~\d\d\d\d\-\d\d\-\d\d$/.test(value);
};
export const emailFormat = (value) => {
  return !value || /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(value);
};
export const monthFormat = (value) => {
  return !value || /^\d\d\d\d\-\d\d$/.test(value);
};
export const required = (value) => {
  return !!value;
};
export const aryRequired = (value) => {
  return !!value && value.length;
};
export const requiredAnd = (...list) => (value, data) => {
  let bool = !!value;
  list.forEach((el) => {
    bool &= !!data[el];
  });
  return bool;
};
export const noRequiredAnd = (...list) => (value, data) => {
  let bool = !value;
  list.forEach((el) => {
    bool &= !data[el];
  });
  return bool;
};
export const boolOR = (...list) => (value, data) => {
  return list.some((el) => {
    const bool = el(value, data);
    if (bool) return bool;
  });
};
export const dateLT = (target) => (value, data) => {
  return !value || !data[target] || new Date(value).getTime() < new Date(data[target]).getTime();
};
export const dateQT = (target) => (value, data) => {
  return !value || !data[target] || new Date(value).getTime() > new Date(data[target]).getTime();
};
export const otherRequired = (target) => (value, data) => {
  return !value || !!data[target];
};
