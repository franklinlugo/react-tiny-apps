import { Overmind } from 'overmind';
import { createConnect } from 'overmind-react';
import { async } from 'rxjs/internal/scheduler/async';

const overmind = new Overmind({
  state: {
    appState: '',
    posts: [],
  },
  actions: {
    getPosts: async ({ state, effects }) => {
      state.appState = 'loading';
      state.posts = await effects.request('https://jsonplaceholder.typicode.com/posts');
      state.appState = 'success';
    },
    deletePost: params => {
      const { value, state } = params;
      const _posts = [...state.posts.slice(0, value), ...state.posts.slice(value + 1)];
      state.posts = _posts;
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
