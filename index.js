

const onlyDuplicates = (str) => str.split('').filter(a => str.indexOf(a) != str.lastIndexOf(a)).join('');


//some test examples
onlyDuplicates('giddy')//Expected  dd
onlyDuplicates('disagreeable')//Expected aeeae
onlyDuplicates('clever')//Expected ee
onlyDuplicates('cheerful')//Expected ee
onlyDuplicates('measure')//Expected  ee
onlyDuplicates('collar')//Expected ll
onlyDuplicates('airport')//Expected  rr
onlyDuplicates('taboo')//Expected  oo
onlyDuplicates('decorate')//Expected ee
onlyDuplicates('toothbrush')//Expected toothh
onlyDuplicates('existence')//Expected  eee
onlyDuplicates('12314256aaeff')//Expected  1212aaff