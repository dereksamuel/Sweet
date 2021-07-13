import { gql } from "apollo-boost";

export const getShots = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      categoryId
      id
      src
      likes
      userId
      liked
    }
  }
`;

export const getOneShot = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;
