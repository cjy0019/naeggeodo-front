import cookies from 'next-cookies';
import React from 'react';
import { END } from 'redux-saga';

import SearchTemplate from '../../components/search/SearchTemplate';
import { wrapper } from '../../modules';
import { getSearchTagListActions } from '../../modules/search/actions';
import { axiosInstance } from '../../service/api';

const Search = () => {
  return <SearchTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const customHeader = (accessToken) => {
      return {
        Authorization: `Bearer ${accessToken}`,
      };
    };

    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          const allCookies = cookies(context);
          const accessToken = allCookies.accessToken;
          config.headers = customHeader(accessToken);
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    store.dispatch(getSearchTagListActions.request());

    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
    };
  },
);

export default Search;
