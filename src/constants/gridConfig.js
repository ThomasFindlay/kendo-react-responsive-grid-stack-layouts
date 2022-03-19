export const GRID_CONFIG = {
  mobile: {
    outerGrid: {
      cols: [
        {
          width: "1fr",
        },
      ],
      rows: [
        {
          width: "repeat(2, 1fr)",
        },
      ],
    },
    mainContainer: {
      row: 2,
      col: 1,
    },
    featuredContainer: {
      row: 1,
      col: 1,
    },
    postsContainer: {
      cols: [
        {
          width: "1fr",
        },
      ],
    },
    postItem: {
      divider: 1,
    },
    featuredOrientation: "vertical",
  },
  tablet: {
    outerGrid: {
      cols: [
        {
          width: "100%",
        },
      ],
      rows: [
        {
          width: "repeat(2, 1fr)",
        },
      ],
    },
    mainContainer: {
      row: 2,
      col: 1,
    },
    featuredContainer: {
      row: 1,
      col: 1,
    },
    postsContainer: {
      cols: [
        {
          width: "1fr 1fr",
        },
      ],
    },
    postItem: {
      divider: 2,
    },
    featuredOrientation: "horizontal",
  },
  desktop: {
    outerGrid: {
      cols: [
        {
          width: "70%",
        },
        {
          width: "30%",
        },
      ],
      rows: [],
    },
    mainContainer: {
      row: 1,
      col: 1,
    },
    featuredContainer: {
      row: 1,
      col: 2,
    },
    postsContainer: {
      cols: [
        {
          width: "repeat(3, 1fr)",
        },
      ],
    },
    postItem: {
      divider: 3,
    },
    featuredOrientation: "vertical",
  },
};
