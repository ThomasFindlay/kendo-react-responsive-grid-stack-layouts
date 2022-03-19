import { useState, useEffect } from "react";
import {
  GridLayout,
  GridLayoutItem,
  StackLayout,
} from "@progress/kendo-react-layout";
import useBreakpoint from "use-breakpoint";
import styles from "./BlogPosts.module.css";
import { GRID_CONFIG } from "../constants/gridConfig";
import { BREAKPOINTS } from "../constants/breakpoints";

const getGridConfig = (breakpoint, GRID_CONFIG) => GRID_CONFIG[breakpoint];

const BlogPosts = props => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");
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

  const {
    outerGrid,
    mainContainer,
    featuredContainer,
    postsContainer,
    postItem,
    featuredOrientation,
  } = getGridConfig(breakpoint, GRID_CONFIG);

  return (
    <div>
      <div>
        <h1>Welcome to my blog</h1>
        <div>
          <GridLayout
            gap={{
              rows: 20,
              cols: 40,
            }}
            rows={outerGrid.rows}
            cols={outerGrid.cols}
          >
            <GridLayoutItem row={mainContainer.row} col={mainContainer.col}>
              <h2>Recent posts</h2>
              <GridLayout
                gap={{ rows: 20, cols: 20 }}
                cols={postsContainer.cols}
              >
                {posts.map((post, idx) => {
                  const row = Math.floor(idx / postItem.divider) + 1;
                  return (
                    <GridLayoutItem
                      className={styles.postCard}
                      key={post.id}
                      row={row}
                      col={(idx % postItem.divider) + 1}
                    >
                      <h3 className={styles.postHeading}>{post.title}</h3>
                      <p className={styles.postBody}>{post.body}</p>
                    </GridLayoutItem>
                  );
                })}
              </GridLayout>
            </GridLayoutItem>
            <GridLayoutItem
              row={featuredContainer.row}
              col={featuredContainer.col}
            >
              <h2>Featured posts</h2>
              <StackLayout orientation={featuredOrientation} gap={20}>
                {(breakpoint === "desktop"
                  ? featuredPosts
                  : featuredPosts.slice(0, 3)
                ).map(featuredPost => {
                  return (
                    <div className={styles.postCard} key={featuredPost.id}>
                      <h3 className={styles.postHeading}>
                        {featuredPost.title}
                      </h3>
                      <p className={styles.postBody}>{featuredPost.body}</p>
                    </div>
                  );
                })}
              </StackLayout>
            </GridLayoutItem>
          </GridLayout>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
