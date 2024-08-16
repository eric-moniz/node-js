const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parsedUrl = new url.URL(address);

console.log('Host:', parsedUrl.host);
console.log('PathName:', parsedUrl.pathname);
console.log('Search:', parsedUrl.search);
console.log('SearchParams:', parsedUrl.searchParams);
console.log('SearchParams.get:', parsedUrl.searchParams.get('produtos'));
