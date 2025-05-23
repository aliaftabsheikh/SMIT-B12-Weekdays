import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com' 
    }),
    endpoints: (builder)=>({
        getPosts: builder.query({
            query: ()=> 'posts',
        }),
        getPostsById: builder.query({
            query: (id)=> {
                url: `posts/${id}`
            },
        }),

        createPost: builder.mutation({
            query: (newPost)=>({
                url: 'post',
                method: 'POST',
                body: newPost
            })
        })

    })
})

export const {useGetPostsQuery, useCreatePostMutation} = jsonPlaceholderApi