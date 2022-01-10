import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;