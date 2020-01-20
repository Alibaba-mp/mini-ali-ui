import fmtUnit from '../_util/fmtUnit';

Component({
  data: {
    getColumnBorderIndex: 0,
  },
  props: {
    columnNum: 3,
    circular: false,
    list: [],
    onGridItemClick: () => {},
    hasLine: true,
    infinite: false,
    infiniteHeight: fmtUnit('90px'),
    gridName: '',
  },
  didMount() {
    this.clearBorder();
    this.createGridName();
  },
  didUpdate() {
    this.clearBorder();
    this.createGridName();
  },
  methods: {
    onGridItemClick(e) {
      this.props.onGridItemClick({
        detail: {
          index: e.target.dataset.index,
        },
      });
    },
    clearBorder() {
      const { list, columnNum } = this.props;
      if (columnNum === 3) {
        const rows = list.length % columnNum;
        this.setData({
          getColumnBorderIndex: rows === 0 ? 3 : rows,
        });
      }
    },
    createGridName() {
      const { infinite, gridName } = this.props;
      if (infinite) {
        if (gridName === '' && !gridName) {
          this.props.gridName = `grid${Math.floor(Math.random() * 100000)}`;
          this.setData({
            gridName: this.props.gridName,
          });
        }
      }
    },
  },
});
