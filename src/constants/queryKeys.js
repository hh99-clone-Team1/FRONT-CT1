const queryKeys = {
  postDetail: (postId) => [`posts.${postId}`],
  comments: (postId) => [`posts.${postId}.comments`],
  pins: (userId) => [`pins.${userId}`],
};

export default queryKeys;
