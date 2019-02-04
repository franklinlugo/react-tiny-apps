import { Overmind } from 'overmind';
import { createConnect } from 'overmind-react';

const overmind = new Overmind({
  state: {
    appState: 'success',
    posts: [],
  },
  actions: {
    getPosts: async ({ state, effects }) => {
      try {
        state.appState = 'loading';
        state.posts = await effects.request('https://jsonplaceholder.typicode.com/posts');
        state.appState = 'success';
      } catch (err) {
        state.appState = 'error';
        console.error(err);
      }
    },
    deletePost: params => {
      const { value, state } = params;
      const posts = [...state.posts.slice(0, value), ...state.posts.slice(value + 1)];
      state.posts = posts;
    },
  },
  effects: {
    request: async url => {
      const response = await fetch(url);
      return response.json();
    },
  },
});

export const connect = createConnect(overmind);
