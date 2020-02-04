const jsUnitRpx = '<ENV::jsUnitRpx>';

/* eslint-disable no-continue, prefer-spread */
export default function fmtUnit(oldUnit) {
  let getUnit = oldUnit;

  if (jsUnitRpx === 'true') {
    if (typeof getUnit === 'string' && getUnit === 'px') {
      getUnit = 'rpx';
    } else if (typeof getUnit === 'number') {
      getUnit *= 2;
    } else if (typeof getUnit === 'string') {
      getUnit = oldUnit.match(/(\d+|\d+\.\d+)(px)/)[1] * 2 + 'rpx';
    }
  }

  return getUnit;
}
