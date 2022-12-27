import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org'}),
    endpoints: (builder)=>({
        getData : builder.query({
            query: ()=> './data'
        })
    })
})