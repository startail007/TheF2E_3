<template>
  <div>
    <div class="calendar">
      <div v-for="(item, key) in 7" :key="'weekday' + key" class="weekday">{{ weekdayText[key] }}</div>
      <div
        v-for="(item, key) in days"
        :key="'item' + key"
        class="date"
        :class="{ present: item.status === 'present', presentMonth: item.presentMonth }"
      >
        <div class="label">{{ item.date.M }}/{{ item.date.D }}</div>
        <div class="content">
          <slot name="content" :item="{ ...item, ...getItem(item.date.Y, item.date.M, item.date.D) }"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
function paddingLeft(str, length) {
  if (str.length >= length) {
    return str;
  } else {
    return paddingLeft("0" + str, length);
  }
}
function paddingRight(str, length) {
  if (str.length >= length) {
    return str;
  } else {
    return paddingRight(str + "0", length);
  }
}
function getDaysOfMonth(year, month) {
  const date = new Date(year, month, 0);
  const days = date.getDate();
  return days;
}
function dateFormat(date) {
  return {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
  };
}
function getMonthData(year, month) {
  let d = [];
  const date = new Date(year, month - 1, 1);
  const day = date.getDay();
  for (let i = 0; i < day; i++) {
    date.setFullYear(year, month - 1, 1 - day + i);
    d.push(new Date(date));
  }
  const days = getDaysOfMonth(year, month);
  for (let i = 0; i < days; i++) {
    date.setFullYear(year, month - 1, i + 1);
    d.push(new Date(date));
  }
  for (let i = 0; i < 42 - days - day; i++) {
    date.setFullYear(year, month, i + 1);
    d.push(new Date(date));
  }
  function changeNum(date) {
    return date.Y * 10000 + date.M * 100 + date.D;
  }
  const today = changeNum(dateFormat(new Date()));
  d = d.map((el) => {
    el = dateFormat(el);
    const presentMonth = el.M === month;
    const temp = changeNum(el);
    let status = "";
    if (temp < today) {
      status = "past";
    } else if (temp == today) {
      status = "present";
    } else if (temp > today) {
      status = "future";
    }
    return { date: el, status, presentMonth };
  });
  return d;
}
const today = new Date();
export default {
  components: {},
  props: {
    year: {
      type: [String, Number],
      default: today.getFullYear(),
    },
    month: {
      type: [String, Number],
      default: today.getMonth() + 1,
    },
    items: {
      type: [Array],
      default: () => [],
    },
  },
  data() {
    return {
      weekdayText: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      days: getMonthData(this.year, this.month),
    };
  },
  watch: {
    year(val) {
      this.days = getMonthData(this.year, this.month);
    },
    month(val) {
      this.days = getMonthData(this.year, this.month);
    },
  },
  mounted() {
    //console.log(this.items);
  },
  methods: {
    getItem(y, m, d) {
      const date = `${y}-${m.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
      const list = this.items.filter((el) => el.dateTimeRange.substr(0, 10) === date);
      return list.length ? { bool: true, list, date } : { bool: false, date };
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "~@css/_variables.scss";

.calendar {
  display: flex;
  flex-wrap: wrap;
  .weekday {
    flex: 13.4%;
    border: 1px solid #ddd;
    display: none;
    justify-content: center;
  }
  .date {
    flex: 100%;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    background-color: #eee;
    .label {
      color: #ccc;
    }
    .content {
      width: 100%;
      //height: 100px;
    }
    &.presentMonth {
      background-color: #fff;
      .label {
        color: #000;
      }
    }
    &:not(.presentMonth) {
      display: none;
    }
    &.present {
      .label {
        color: #f00;
      }
    }
  }
}
@media (min-width: get-breakpoints("sm")) {
}
@media (min-width: get-breakpoints("md")) {
  .calendar {
    .weekday {
      flex: 13.4%;
      display: flex;
    }
    .date {
      flex: 13.4%;
      flex-direction: column;
      &:not(.presentMonth) {
        display: flex;
      }
    }
  }
}
@media (min-width: get-breakpoints("lg")) {
}
@media (min-width: get-breakpoints("xl")) {
}
</style>
