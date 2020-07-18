import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'

import { TextInput, Button } from 'react-materialize'
import BackButton from '../components/back-button'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

const ADD_POST = gql`
  mutation {
    postCreate(input: {
      authorID: $authorID
      url: $url
      hashTags: $hashTags
    }) {
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
`

interface AddContentProps extends RouteComponentProps {}

const AddContent: React.FC<AddContentProps> = () => {
  const { data } = useQuery(gql`query { currentUser { id }}`)
  const currentUser = data?.currentUser
  const authorID = currentUser?.id

  const [addPost] = useMutation(ADD_POST)

  let url = ''
  let hashTags = ''

  return (
    <Fragment>
      <BackButton />
      <TextInput id="url" label="url" />
      <TextInput id="tags" label="tags" />
      <Button
        onClick={() => {
          addPost({ variables: {
            authorID,
            url,
            hashTags,
          }})
        }}>Save</Button>
    </Fragment>
  )
}

export default AddContent
