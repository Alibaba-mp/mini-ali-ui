Page({
  data: {
    tagData: [
      { date: '2020-01-14', tag: '颜色 1', tagColor: 1 },
      { date: '2020-01-28', tag: '公积金', tagColor: 2 },
      { date: '2020-01-24', tag: '颜色 3', tagColor: 3 },
      { date: '2020-01-18', tag: '颜色 4', tagColor: 4 },
      { date: '2020-01-4', tag: '还房贷', tagColor: 5 },
      { date: '2020-01-10', tag: '公积金', disable: true },
    ],
  },
  handleSelect() {},
  onMonthChange() {},
  onYearChange() {},
  onSelectHasDisableDate() {
    my.alert({
      content: 'SelectHasDisableDate',
    });
  },
});
