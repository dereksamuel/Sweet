import { gql } from "apollo-boost";

export const getFavs = gql`
  query getFavs {
    favs {
      id,
      categoryId,
      src,
      liked,
      likes,
      userId
    }
  }
`;
