import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type HashTag = {
  __typename?: 'HashTag';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  hashTag?: Maybe<HashTag>;
  helloWorld: Scalars['String'];
  post?: Maybe<Post>;
  postGetMany?: Maybe<PostGetManyPayload>;
  postGetManyByGroup?: Maybe<PostGetManyByGroupPayload>;
  user?: Maybe<User>;
};


export type QueryHashTagArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostGetManyArgs = {
  input: PostGetManyInput;
};


export type QueryPostGetManyByGroupArgs = {
  input: PostGetManyByGroupInput;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  follow?: Maybe<Scalars['Boolean']>;
  hashTagCreate?: Maybe<HashTagCreatePayload>;
  likePost?: Maybe<Scalars['Boolean']>;
  postCreate?: Maybe<PostCreatePayload>;
  postDelete: Scalars['Boolean'];
  postUpdate?: Maybe<PostUpdatePayload>;
};


export type MutationFollowArgs = {
  followerID: Scalars['ID'];
};


export type MutationHashTagCreateArgs = {
  input: HashTagCreateInput;
};


export type MutationLikePostArgs = {
  postID: Scalars['ID'];
};


export type MutationPostCreateArgs = {
  input: PostCreateInput;
};


export type MutationPostDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPostUpdateArgs = {
  input: PostUpdateInput;
};

export type HashTagCreateInput = {
  name: Scalars['String'];
  postID: Scalars['ID'];
};

export type HashTagCreatePayload = {
  __typename?: 'HashTagCreatePayload';
  hashTag?: Maybe<HashTag>;
};

export type LikePost = {
  __typename?: 'LikePost';
  id: Scalars['ID'];
  user: User;
  post: Post;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  author?: Maybe<User>;
  url?: Maybe<Scalars['String']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  likeCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  previewImage?: Maybe<Scalars['String']>;
  hashTags?: Maybe<Array<Maybe<HashTag>>>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type PostCreateInput = {
  authorID: Scalars['String'];
  url: Scalars['String'];
  hashTags?: Maybe<Array<Scalars['String']>>;
};

export type PostUpdateInput = {
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  hashTags?: Maybe<Array<Scalars['String']>>;
  likeCount?: Maybe<Scalars['Int']>;
};

export type PostFilter = {
  hashTags?: Maybe<Array<Scalars['String']>>;
  authorIDs?: Maybe<Array<Scalars['ID']>>;
};

export enum PostOrderField {
  LikeCount = 'LIKE_COUNT',
  CreatedAt = 'CREATED_AT'
}

export type PostOrder = {
  field?: Maybe<PostOrderField>;
  direction?: Maybe<OrderDirection>;
};

export enum PostGroup {
  Author = 'AUTHOR',
  Hashtag = 'HASHTAG'
}

export type PostGetManyInput = {
  filterBy?: Maybe<PostFilter>;
  orderBy?: Maybe<PostOrder>;
  pagination?: Maybe<Pagination>;
};

export type PostGetManyPayload = {
  __typename?: 'PostGetManyPayload';
  posts: Array<Post>;
};

export type PostGetManyByGroupInput = {
  groupBy?: Maybe<PostGroup>;
  limit?: Maybe<Scalars['Int']>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  key?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

export type PostGetManyByGroupPayload = {
  __typename?: 'PostGetManyByGroupPayload';
  postCollections?: Maybe<Array<PostCollection>>;
};

export type PostCreatePayload = {
  __typename?: 'PostCreatePayload';
  post?: Maybe<Post>;
};

export type PostUpdatePayload = {
  __typename?: 'PostUpdatePayload';
  post?: Maybe<Post>;
};


export enum OrderDirection {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type Pagination = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  profileURL?: Maybe<Scalars['String']>;
  consecutiveStudyDays: Array<Scalars['Date']>;
  posts: Array<Post>;
  recommendations: Array<Post>;
  followers: Array<User>;
  followings: Array<User>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};


export type UserRecommendationsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type HelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloWorldQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'helloWorld'>
);

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & Pick<Query, 'helloWorld'>
);

export type PostCreateMutationVariables = Exact<{
  authorID: Scalars['String'];
  url: Scalars['String'];
  hashTags?: Maybe<Array<Scalars['String']>>;
}>;


export type PostCreateMutation = (
  { __typename?: 'Mutation' }
  & { postCreate?: Maybe<(
    { __typename?: 'PostCreatePayload' }
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'isLiked' | 'url' | 'title' | 'description' | 'previewImage'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      )> }
    )> }
  )> }
);

export type AddContent_CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AddContent_CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'profileURL' | 'consecutiveStudyDays'>
    & { followers: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'profileURL'>
    )>, followings: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'profileURL'>
    )> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { followers: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'profileURL' | 'consecutiveStudyDays'>
    & { posts: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'url' | 'title' | 'description' | 'previewImage' | 'createdAt'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'email' | 'profileURL'>
      )> }
    )> }
  )> }
);


export const HelloWorldDocument = gql`
    query HelloWorld {
  helloWorld
}
    `;
export type HelloWorldComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HelloWorldQuery, HelloWorldQueryVariables>, 'query'>;

    export const HelloWorldComponent = (props: HelloWorldComponentProps) => (
      <ApolloReactComponents.Query<HelloWorldQuery, HelloWorldQueryVariables> query={HelloWorldDocument} {...props} />
    );
    
export type HelloWorldProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<HelloWorldQuery, HelloWorldQueryVariables>
    } & TChildProps;
export function withHelloWorld<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloWorldQuery,
  HelloWorldQueryVariables,
  HelloWorldProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, HelloWorldQuery, HelloWorldQueryVariables, HelloWorldProps<TChildProps, TDataName>>(HelloWorldDocument, {
      alias: 'helloWorld',
      ...operationOptions
    });
};

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, baseOptions);
      }
export function useHelloWorldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, baseOptions);
        }
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
export type HelloWorldLazyQueryHookResult = ReturnType<typeof useHelloWorldLazyQuery>;
export type HelloWorldQueryResult = ApolloReactCommon.QueryResult<HelloWorldQuery, HelloWorldQueryVariables>;
export const PostCreateDocument = gql`
    mutation postCreate($authorID: String!, $url: String!, $hashTags: [String!]) {
  postCreate(input: {authorID: $authorID, url: $url, hashTags: $hashTags}) {
    post {
      id
      isLiked
      author {
        id
        name
      }
      url
      title
      description
      previewImage
    }
  }
}
    `;
export type PostCreateMutationFn = ApolloReactCommon.MutationFunction<PostCreateMutation, PostCreateMutationVariables>;
export type PostCreateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PostCreateMutation, PostCreateMutationVariables>, 'mutation'>;

    export const PostCreateComponent = (props: PostCreateComponentProps) => (
      <ApolloReactComponents.Mutation<PostCreateMutation, PostCreateMutationVariables> mutation={PostCreateDocument} {...props} />
    );
    
export type PostCreateProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<PostCreateMutation, PostCreateMutationVariables>
    } & TChildProps;
export function withPostCreate<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostCreateMutation,
  PostCreateMutationVariables,
  PostCreateProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, PostCreateMutation, PostCreateMutationVariables, PostCreateProps<TChildProps, TDataName>>(PostCreateDocument, {
      alias: 'postCreate',
      ...operationOptions
    });
};

/**
 * __usePostCreateMutation__
 *
 * To run a mutation, you first call `usePostCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreateMutation, { data, loading, error }] = usePostCreateMutation({
 *   variables: {
 *      authorID: // value for 'authorID'
 *      url: // value for 'url'
 *      hashTags: // value for 'hashTags'
 *   },
 * });
 */
export function usePostCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostCreateMutation, PostCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<PostCreateMutation, PostCreateMutationVariables>(PostCreateDocument, baseOptions);
      }
export type PostCreateMutationHookResult = ReturnType<typeof usePostCreateMutation>;
export type PostCreateMutationResult = ApolloReactCommon.MutationResult<PostCreateMutation>;
export type PostCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<PostCreateMutation, PostCreateMutationVariables>;
export const AddContent_CurrentUserDocument = gql`
    query AddContent_CurrentUser {
  currentUser {
    id
  }
}
    `;
export type AddContent_CurrentUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables>, 'query'>;

    export const AddContent_CurrentUserComponent = (props: AddContent_CurrentUserComponentProps) => (
      <ApolloReactComponents.Query<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables> query={AddContent_CurrentUserDocument} {...props} />
    );
    
export type AddContent_CurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables>
    } & TChildProps;
export function withAddContent_CurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddContent_CurrentUserQuery,
  AddContent_CurrentUserQueryVariables,
  AddContent_CurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables, AddContent_CurrentUserProps<TChildProps, TDataName>>(AddContent_CurrentUserDocument, {
      alias: 'addContentCurrentUser',
      ...operationOptions
    });
};

/**
 * __useAddContent_CurrentUserQuery__
 *
 * To run a query within a React component, call `useAddContent_CurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddContent_CurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddContent_CurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAddContent_CurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables>(AddContent_CurrentUserDocument, baseOptions);
      }
export function useAddContent_CurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables>(AddContent_CurrentUserDocument, baseOptions);
        }
export type AddContent_CurrentUserQueryHookResult = ReturnType<typeof useAddContent_CurrentUserQuery>;
export type AddContent_CurrentUserLazyQueryHookResult = ReturnType<typeof useAddContent_CurrentUserLazyQuery>;
export type AddContent_CurrentUserQueryResult = ApolloReactCommon.QueryResult<AddContent_CurrentUserQuery, AddContent_CurrentUserQueryVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    followers {
      id
    }
  }
}
    `;
export type CurrentUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentUserQuery, CurrentUserQueryVariables>, 'query'>;

    export const CurrentUserComponent = (props: CurrentUserComponentProps) => (
      <ApolloReactComponents.Query<CurrentUserQuery, CurrentUserQueryVariables> query={CurrentUserDocument} {...props} />
    );
    
export type CurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentUserQuery, CurrentUserQueryVariables>
    } & TChildProps;
export function withCurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  CurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentUserQuery, CurrentUserQueryVariables, CurrentUserProps<TChildProps, TDataName>>(CurrentUserDocument, {
      alias: 'currentUser',
      ...operationOptions
    });
};

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    id
    name
    profileURL
    consecutiveStudyDays
    posts {
      id
      author {
        id
        name
        email
        profileURL
      }
      url
      title
      description
      previewImage
      createdAt
    }
  }
}
    `;
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );
    
export type UserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserQuery, UserQueryVariables>
    } & TChildProps;
export function withUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps, TDataName>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;