"use strict";
// Setting up a blogging system that will allow users to post to the site
;
;
class blogPostClass {
    constructor() {
        this.allPost = [];
    }
    addToPost(post) {
        this.allPost = [
            ...this.allPost,
            post
        ];
        return this.allPost;
    }
    ;
}
;
const blog = new blogPostClass();
let post1 = { post: 'Goodbye, 2020', timeStamp: 12345678, user: 'Rayon' };
let post2 = { post: 'Welcome, 2021', timeStamp: 12345678, user: 'Mark' };
let post3 = { post: 'What happened to 1999?', timeStamp: 12345678, user: 'Will' };
blog.addToPost(post1);
blog.addToPost(post2);
blog.addToPost(post3);
console.log(blog.allPost);
