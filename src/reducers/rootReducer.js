const initState = {
  posts: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio in doloremque minima? Nostrum, sunt veritatis vel voluptatum deserunt pariatur repellendus eius maxime eum quaerat magni nesciunt dolore blanditiis fugit?"
    },
    {
      id: 2,
      title: "amet consectetur adipisicing",
      body:
        "amet consectetur adipisicing elit. Esse optio in doloremque minima? Nostrum, sunt veritatis vel voluptatum deserunt pariatur repellendus eius maxime eum quaerat magni nesciunt dolore blanditiis fugit?"
    },
    {
      id: 3,
      title: "elit. Esse optio in doloremque",
      body:
        "elit. Esse optio in doloremque minima? Nostrum, sunt veritatis vel voluptatum deserunt pariatur repellendus eius maxime eum quaerat magni nesciunt dolore blanditiis fugit?"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
