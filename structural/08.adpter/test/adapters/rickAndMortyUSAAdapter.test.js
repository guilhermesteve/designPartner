import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import RickAndMortyUSAAdapter from '../../src/business/adapters/rickAndMortyUSAAdapter.js'
import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA.js'

describe('#RickAndMortyUSAAdapter', () => {
  beforeEach(() => jest.clearAllMocks())

  test('#getCharacters should be an adapter of rickAndMortyUSA', async () => {

    const USAIntegration = jest.spyOn(
      RickAndMortyUSA,
      RickAndMortyUSA.getCharactersFromXML.name
    ).mockReturnValue([])

    const expected = []

    const result = await RickAndMortyUSAAdapter.getCharacters()

    expect(result).toEqual(expected)
    expect(USAIntegration).toBeCalled()
  })

})
