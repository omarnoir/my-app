import gql from "graphql-tag";


const GET_COMPANIES = gql`
{
  companies {
    _id
    name
    phone
    mail
    logo {
      url
    }
  }
}
`;

const GET_COMPANIE = gql`
{
  companies {
    id
    name
    phone

  }
}
`;

export  {GET_COMPANIES, GET_COMPANIE}