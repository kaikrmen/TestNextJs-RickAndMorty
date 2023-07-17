import page from '@/app/page';
import { CharacterProps, Characters } from '@/interfaces/CharacterProps';
import axios from 'axios'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql',
    }),
    cache: new InMemoryCache(),
  });

 export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!) {
    characters(page: $page, pageSize: 10) {
      characters {
        id
        name
        species
        status
        image
      }
      total
    }
  }
`;


export const getAllCharacters = async (page: number) => {
    try {
      const result = await client.query({
        query: GET_ALL_CHARACTERS,
        variables: { page },
      });
      console.log(result.data.characters)
      return result.data.characters;
  
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  



