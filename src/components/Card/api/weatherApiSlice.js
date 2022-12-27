import { apiSlice } from "../../../api/apiSlice";

export const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getWeatherData: builder.query({
      query: ({query}) => ({
        url: `/data/2.5/forecast?q=${query}&appid=${import.meta.env.VITE_API_KEY}`,
        method: 'GET',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
    }),
  }),
});

export const {
  useGetWeatherDataQuery
} = weatherApiSlice;

