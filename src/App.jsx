import styles from "./App.module.css";
import BlogPosts from "./components/BlogPosts";

function App() {
  return (
    <div className={styles.appContainer}>
      <BlogPosts />
    </div>
  );
}

export default App;
