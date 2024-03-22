const queryKeys = {
  postDetail: (postId) => [`posts.${postId}`],
  comments: (postId) => [`posts.${postId}.comments`],
  commentsDetail: (postId, commentId) => [`posts.${postId}.comments.${commentId}`],
};

export default queryKeys;
