import { expect, describe, test, jest, beforeEach } from '@jest/globals'

import { InjectHttpInterceptor } from './agent'
import { Server} from 'http'

const originalHttp =  jest.createMockFromModule('http')

describe("Http  Interceptor  Agent", () => {
  const eventName = 'request'
  const request  = null

  beforeEach(()=> jest.clearAllMocks())
  test('should not change header response', () => {
    const response = {
      setHeader: jest.fn().mockReturnThis()
    }
    const serverInstance = new originalHttp.Server()
    serverInstance.emit(eventName,request, response)

    expect(response.setHeader).not.toHaveBeenCalled()
  })
  test('should activate header interceptor', () =>{
    InjectHttpInterceptor()

    const response = {
      setHeader: jest.fn().mockReturnThis()
    }
    const serverInstance = new Server()
    serverInstance.emit(eventName,request, response)

    expect(response.setHeader).toHaveBeenCalledWith('X-Instrumented-By', 'Guilherme soares')

  })
})
