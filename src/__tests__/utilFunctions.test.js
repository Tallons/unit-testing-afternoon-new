import {shortenText} from "../utils/functions";
import {wordCount, attachUserName} from "../../server/utils";
import {shortText, longText, posts, users} from "./__data__/testData";

test("shortenText alters text to no less 100 chars", () => {
   expect(shortenText(shortText)).toHaveLength(29)
});

test("shortenText alters text to 100 chars and add ...", () => {
   const shortened= shortenText(longText);
   expect(shortened).not.toHaveLength(longText.length);
   expect(shortened.slice(-3)).toBe("...");
});

test("wordCount should be 233", () => {
   expect(wordCount(posts)).toBe(233);
});

test("attachUserName attaches a full name to a post", () => {
   const newPosts = attachUserName(users, posts);
   expect(newPosts[0]).toHaveProperty("displayName");
});

test("attachUserName remove post without a user name", () => {
   const newPosts = attachUserName(users, posts),
         deletedPost = posts[5];
      expect(newPosts).not.toContainEqual(deletedPost);
});