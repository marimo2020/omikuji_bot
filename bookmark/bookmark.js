// function loadbookmark() {
//   const response = fetch("C:\Users\mizuk\AppData\Local\Google\Chrome\User Data\Profile 1\Bookmarks");
//   return response;
// }
// console.log(loadbookmark());

// const fs = require("fs");
import fs from "fs";

//googlechromeの保存場所からこのディレクトリにコピー
// const bookmarkfile = "C:/Users/mizuk/AppData/Local/Google/Chrome/User Data/Profile 1/Bookmarks";
// function filecopy(){
//     fs.copyFileSync(bookmarkfile,"./bookmark/bookmarks.json");
// };

// filecopy();

// const bookmarkset = require( "./bookmarks.json" );
import bookmarkset from "./bookmarks.json" with { type: 'json' };
const genki = bookmarkset.roots.bookmark_bar.children[3].children

// console.log(genki);
export const genkiarrey = genki.map((obj) => [obj.name,obj.url]);
