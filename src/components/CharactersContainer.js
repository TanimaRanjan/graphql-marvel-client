import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CharacterComponent from './CharactersComponent'
import Loader from './Loader'

const GET_ALL_CHARACTERS = gql`
{
    characters {
        name
        id
        imageURL
    }
}`;

const CharacterContainer = () => {
    return (
        <Query query={GET_ALL_CHARACTERS}>
            {
                ({loading, data, error}) => {
                     console.log({loading})
                     console.log({error})
                     console.log({data})
                    if(loading) return <Loader />
                    return <CharacterComponent characters={data.characters} />
                }
            }
        </Query>
    )
}

export default CharacterContainer