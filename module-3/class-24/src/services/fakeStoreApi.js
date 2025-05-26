import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const fakeStoreApi = createApi({
    reducerPath: 'fakeStoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),

    endpoints: (builder)=>({
        getProducts: builder.query({
            query: ()=> 'products'
        }),
        getProductById: builder.query({
            query: (id)=>({
                url: `products/${id}`
            })
        })
    })
})


export const { useGetProductsQuery, useGetProductByIdQuery } = fakeStoreApi
