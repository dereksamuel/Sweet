import { gql } from "apollo-boost";

export const setLikeMutation = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`; 