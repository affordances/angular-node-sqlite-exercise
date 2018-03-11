const knex = require('./db.js');

seedPosts = [
  { text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit proin, placerat urna donec nisi etiam arcu tempor, vitae diam nec aliquet euismod orci laoreet.' },
  { text: 'Mauris ultricies ac commodo faucibus netus sem proin hendrerit senectus habitant placerat fringilla, natoque aliquet.' },
  { text: 'Per senectus cubilia dis himenaeos egestas, accumsan suspendisse augue mollis, ligula mi lobortis nibh.' },
  { text: 'Magna a condimentum morbi penatibus sed in class magnis, vivamus sodales eget curabitur cursus enim nascetur ullamcorper, imperdiet urna purus nibh blandit feugiat tortor.' },
  { text: 'Odio diam elementum vitae pretium sagittis eu nostra, non porta platea vehicula egestas vel posuere sociis, quam hac parturient nulla orci aptent.' }
]

knex('posts').insert(seedPosts).then(() => {
  console.log('done')
});
