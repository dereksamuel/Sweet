import { useMutation } from "@apollo/react-hooks";
import { setLikeMutation } from "../highOrderComponents(hoc)/changeLikes";

export default function ToggleLikeMutation() {
  const [
    mutation,
    {
      loading: mutationLoading,
      error: mutationError,
    }
  ] = useMutation(setLikeMutation);
  return {
    mutation,
    mutationError,
    mutationLoading,
  };
}
