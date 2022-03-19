import {
  GridLayout,
  GridLayoutItem,
  StackLayout,
} from "@progress/kendo-react-layout";
import { useState, useEffect } from "react";
import styles from "./BlogPosts.module.css";
const BlogPosts = props => {
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const featuredPosts = data.slice(0, 5);
      const posts = data.slice(5, 17);
      setPosts(posts);
      setFeaturedPosts(featuredPosts);
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to my blog</h1>
      <div>
        <GridLayout
          gap={{
            rows: 20,
            cols: 40,
          }}
          cols={[
            {
              width: "70%",
            },
            {
              width: "30%",
            },
          ]}
        >
          <GridLayoutItem row={1} col={1}>
            <h2>Recent posts</h2>
            <GridLayout
              gap={{ rows: 20, cols: 20 }}
              cols={[
                {
                  width: "repeat(3, 1fr)",
                },
              ]}
            >
              {posts.map((post, idx) => {
                const row = Math.floor(idx / 3) + 1;
                const col = (idx % 3) + 1;
                return (
                  <GridLayoutItem
                    className={styles.postCard}
                    key={post.id}
                    row={row}
                    col={col}
                  >
                    <h3 className={styles.postHeading}>{post.title}</h3>
                    <p className={styles.postBody}>{post.body}</p>
                  </GridLayoutItem>
                );
              })}
            </GridLayout>
          </GridLayoutItem>
          <GridLayoutItem row={1} col={2}>
            <h2>Featured posts</h2>
            <StackLayout orientation="vertical" gap={20}>
              {featuredPosts.map(featuredPost => {
                return (
                  <div className={styles.postCard} key={featuredPost.id}>
                    <h3 className={styles.postHeading}>{featuredPost.title}</h3>
                    <p className={styles.postBody}>{featuredPost.body}</p>
                  </div>
                );
              })}
            </StackLayout>
          </GridLayoutItem>
        </GridLayout>
      </div>
    </div>
  );
};

export default BlogPosts;
