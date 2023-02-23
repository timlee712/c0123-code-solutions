function getRangeReport(start, end) {
  var range = {};
  var array = [];
  range.range = array;
  range.total = ((end - start) + 1) * (start + end) / 2;
  range.average = range.total / (end - start + 1);
  range.evens = [];
  range.odds = [];
  for (var i = start; i <= end; i++) {
    array.push(i);
    if (i % 2 === 0) {
      range.evens.push(i);
    } else {
      range.odds.push(i);
    }
  }
  return range;
}
getRangeReport();
