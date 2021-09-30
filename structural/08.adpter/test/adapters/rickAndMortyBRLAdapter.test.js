import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import RickAndMortyBRLAdapter from '../../src/business/adapters/rickAndMortyBRLAdapter.js'
import RickAndMortyBRL from '../../src/business/integrations/rickAndMortyBRL.js'

describe('#RickAndMortyBRLAdapter', () => {
  beforeEach(() => jest.clearAllMocks())

  test('#getCharacters should be an adapter of rickAndMortyBrl', async () => {

    const brlIntegration = jest.spyOn(
      RickAndMortyBRL,
      RickAndMortyBRL.getCharactersFromJson.name
    ).mockReturnValue([])

    const expected = []

    const result = await RickAndMortyBRLAdapter.getCharacters()

    expect(result).toEqual(expected)
    expect(brlIntegration).toBeCalled()
  })

})
