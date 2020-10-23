

const onlyDuplicates = (str) => str.split('').filter(a => str.indexOf(a) != str.lastIndexOf(a)).join('');


