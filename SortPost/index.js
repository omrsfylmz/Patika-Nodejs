const posts = [
  { title: 'Post Başlık 1', detail: 'Post Detay 1' },
  { title: 'Post Başlık 2', detail: 'Post Detay 2' },
  { title: 'Post Başlık 3', detail: 'Post Detay 3' },
];

// Promise version
// const listPosts = () => {
//   posts.map((el) => {
//     console.log(el);
//   });
// };

// const addPost = (newPost) => {
//   const promise1 = new Promise((resolve, reject) => {
//     posts.push(newPost);
//   });
//   return promise1;
// };

// addPost({ title: 'Post Başlık 32', detail: 'Post Detay 32' })
//   .then(() => {
//     listPosts();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// listPosts();

//Async Version

// const listPosts = () => {
//   posts.map((el) => {
//     console.log(el);
//   });
// };

// const addPost = (newPost) => {
//   const promise1 = new Promise((resolve, reject) => {
//     posts.push(newPost);
//     resolve(posts);
//     reject('error');
//   });
//   return promise1;
// };

// async function showPost() {
//   try {
//     await addPost({ title: 'Post Başlık 32', detail: 'Post Detay 32' });
//     listPosts();
//   } catch (error) {
//     console.log(error);
//   }
// }

// showPost();
