import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    type: '',
    size: fmtUnit(27),
    color: '',
    className: '',
  },
  data: {
    valueUnit: fmtUnit('px'),
  },
});
