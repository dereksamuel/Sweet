import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const loginAction = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)  
  }
`;

export const useLoginMutation = () => {
  const [
    mutation,
    {
      loading: mutationLoading,
      error: mutationError,
    }
  ] = useMutation(loginAction);
  return {
    mutation,
    mutationError,
    mutationLoading,
  };
};