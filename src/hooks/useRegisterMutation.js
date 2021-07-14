import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const signUpAction = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)  
  }
`;

export const useRegisterMutation = () => {
  const [
    mutation,
    {
      loading: mutationLoading,
      error: mutationError,
    }
  ] = useMutation(signUpAction);
  return {
    mutation,
    mutationError,
    mutationLoading,
  };
};