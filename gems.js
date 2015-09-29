function total(gems) {
  return gems.reduce(function(a, b) { return a + b }, 0);
}

function sortNum(a, b) {
  return b - a;
}

function share(gems, pirates) {
  if (total(gems) % pirates > 0) return [];

  var amountEach = total(gems) / pirates;
  var divided = [];

  for (var i = 0; i < pirates; i++) {
    var cut = [];

    while (total(cut) < amountEach) {
      gems.sort(sortNum);
      if (cut.length > 0) gems.reverse();
      cut.push(gems.shift());
    }

    divided.push(cut);
  }

  return divided;
}

module.exports = share;
