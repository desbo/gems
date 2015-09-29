var share = require('./gems');

var fixtures = [
  {
    gems: [5,5,10],
    pirates: 2,
    expected: [[5,5], [10]]
  },

  {
    gems: [1,2,3,4],
    pirates: 2,
    expected: [[2,3], [4,1]]
  },

  {
    gems: [3,6,9],
    pirates: 2,
    expected: [[3,6], [9]]
  }
]

function sortGems(gems) {
  return gems.map(function(cut) {
    return cut.sort();
  }).sort();
}

describe('gems', function() {
  it('should divide equally', function() {
    fixtures.forEach(function(fixture) {
      expect(sortGems(share(fixture.gems, fixture.pirates)))
        .toEqual(sortGems(fixture.expected));
      });
  });
});
