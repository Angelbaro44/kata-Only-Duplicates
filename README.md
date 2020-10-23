# kata-Only-Duplicates

Description:
-
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"




Test Cases:
-
Test.describe("Fixed tests",function() {
  Test.it("should return only duplicate characters",function() {
    Test.assertEquals(onlyDuplicates('plastic'),  '')
    Test.assertEquals(onlyDuplicates('hill'), 'll')
    Test.assertEquals(onlyDuplicates('remove'), 'ee')
    Test.assertEquals(onlyDuplicates('gorgeous'), 'gogo')
    Test.assertEquals(onlyDuplicates('childlike'),  'illi')
    Test.assertEquals(onlyDuplicates('gabby'),  'bb')
    Test.assertEquals(onlyDuplicates('offer'),  'ff')
    Test.assertEquals(onlyDuplicates('offend'), 'ff')
    Test.assertEquals(onlyDuplicates('telephone'),  'eee')
    Test.assertEquals(onlyDuplicates('partner'),  'rr')
    Test.assertEquals(onlyDuplicates('innate'), 'nn')
    Test.assertEquals(onlyDuplicates('general'),  'ee')
    Test.assertEquals(onlyDuplicates('witty'),  'tt')
    Test.assertEquals(onlyDuplicates('toothsome'),  'tooto')
    Test.assertEquals(onlyDuplicates('unbecoming'), 'nn')
    Test.assertEquals(onlyDuplicates('explode'),  'ee')
    Test.assertEquals(onlyDuplicates('regret'), 'rere')
    Test.assertEquals(onlyDuplicates('deafening'),  'eenn')
    Test.assertEquals(onlyDuplicates('license'),  'ee')
    Test.assertEquals(onlyDuplicates('attraction'), 'attat')
    Test.assertEquals(onlyDuplicates('spiritual'),  'ii')
    Test.assertEquals(onlyDuplicates('instinctive'),  'intinti')
    Test.assertEquals(onlyDuplicates('overconfident'),  'oeonen')
    Test.assertEquals(onlyDuplicates('territory'),  'trrtr')
    Test.assertEquals(onlyDuplicates('greet'),  'ee')
    Test.assertEquals(onlyDuplicates('brass'),  'ss')
    Test.assertEquals(onlyDuplicates('finicky'),  'ii')
    Test.assertEquals(onlyDuplicates('dramatic'), 'aa')
    Test.assertEquals(onlyDuplicates('abnormal'), 'aa')
    Test.assertEquals(onlyDuplicates('volleyball'), 'llll')
    Test.assertEquals(onlyDuplicates('feeling'),  'ee')
    Test.assertEquals(onlyDuplicates('deserted'), 'deeed')
    Test.assertEquals(onlyDuplicates('temporary'),  'rr')
    Test.assertEquals(onlyDuplicates('unused'), 'uu')
    Test.assertEquals(onlyDuplicates('uninterested'), 'nnteete')
    Test.assertEquals(onlyDuplicates('beef'), 'ee')
    Test.assertEquals(onlyDuplicates('harbor'), 'rr')
    Test.assertEquals(onlyDuplicates('malicious'),  'ii')
    Test.assertEquals(onlyDuplicates('giddy'),  'dd')
    Test.assertEquals(onlyDuplicates('disagreeable'), 'aeeae')
    Test.assertEquals(onlyDuplicates('clever'), 'ee')
    Test.assertEquals(onlyDuplicates('cheerful'), 'ee')
    Test.assertEquals(onlyDuplicates('measure'),  'ee')
    Test.assertEquals(onlyDuplicates('collar'), 'll')
    Test.assertEquals(onlyDuplicates('airport'),  'rr')
    Test.assertEquals(onlyDuplicates('taboo'),  'oo')
    Test.assertEquals(onlyDuplicates('decorate'), 'ee')
    Test.assertEquals(onlyDuplicates('toothbrush'), 'toothh')
    Test.assertEquals(onlyDuplicates('existence'),  'eee')
    Test.assertEquals(onlyDuplicates('12314256aaeff'),  '1212aaff')  
  })
})

function onlyDuplicatesSolution5 (str) {
  return str
    .split('')
    .filter(char => str.indexOf(char) !== str.lastIndexOf(char))
    .join('')
}

Test.describe("Random tests",function() {
  Test.it("should return only duplicate characters",function() {
    var letters = "abcdeeeeeefffffffggggggghhhhhhhh";
    var s, randomPosition;
    for (var j=0; j<50; j++) {
      s = "";
      for (var i=0; i<10; i++) {
        s += letters[Math.floor(letters.length * Math.random())];
      }
      //Adding a single letter at a random position just in case
      randomPosition = Math.floor(11 * Math.random());
      s = s.slice(0, randomPosition) + "i" + s.slice(randomPosition)
      Test.assertEquals(onlyDuplicates(s),  onlyDuplicatesSolution5(s)) 
    }  
  })
})
