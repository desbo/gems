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
  }, 

  {
    gems: [6,3,2,4,1],
    pirates: 2,
    expected: [[6,2], [3,4,1]]
  },

  {
    gems: [3,2,7,7,14,5,3,4,9,2],
    pirates: 4,
    expected: []
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
