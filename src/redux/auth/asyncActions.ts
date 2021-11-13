import {createAsyncThunk} from '@reduxjs/toolkit';
//
import apiMiddleware from '../../helpers/api_middlewares';
import {END_POINTS} from '../../config/API_END_POINTS';
import {reducerName} from './constatns';
import {removeAsyncItem, SetAsyncItem} from '../../helpers/common';
//

export const SignUpUser = createAsyncThunk(
  `${reducerName}/SignUpUser`,
  async (
    {
      email,
      password,
      name,
      phone,
    }: {email: string; password: string; phone: string; name: string},
    thunkAPI,
  ) => {
    try {
      const response = await apiMiddleware.postAuthApi(
        END_POINTS.Auth.signUp(),
        {
          email,
          password,
          name,
          phone,
        },
      );

      if (response && response.status === 200) {
        thunkAPI.dispatch(LoginUser({email, password}));
        return response.data.data;
      }
    } catch (error: any) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const LoginUser = createAsyncThunk(
  `${reducerName}/LoginUser`,
  async ({email, password}: {email: string; password: string}, thunkAPI) => {
    try {
      const response = await apiMiddleware.postAuthApi(
        END_POINTS.Auth.login(),
        {
          email: email,
          password: password,
        },
      );

      if (response && response.status === 200) {
        if (response.data.data.token) {
          await SetAsyncItem('USER_TOKEN', response.data.data.token);
        }
        return response.data.data;
      }
    } catch (error: any) {
      console.log(error);

      await removeAsyncItem('USER_TOKEN');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const CheckTokenValid = createAsyncThunk(
  `${reducerName}/CheckTokenValid`,
  async (token: string, thunkAPI) => {
    try {
      const response = await apiMiddleware.GetAuthApi(
        END_POINTS.Auth.checkToken(),
        {
          Authorization: `Bearer ${token}`,
        },
      );

      if (response && response.status === 200) {
        return {...response.data.user, token};
      }
    } catch (error: any) {
      await removeAsyncItem('USER_TOKEN');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
