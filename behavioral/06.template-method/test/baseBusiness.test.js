import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import BaseBusiness from '../src/business/base/baseBusiness.js'
import { NotImplementedException } from '../src/util/exception'


describe("#BaseBussiness", () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  test('should throw error  when child class doesn implement _validadeRequireFields function', () => {
    class ConcreteClass extends BaseBusiness { }
    const concreteClass = new ConcreteClass()
    const validationError = new NotImplementedException(
      concreteClass._validateRequiredFields.name
    )

    expect(() => concreteClass._validateRequiredFields({})).toThrow(validationError)
  })
  test('should throw error  when child class doesn implement _create function', () => {
    class ConcreteClass extends BaseBusiness { }
    const concreteClass = new ConcreteClass()
    const validationError = new NotImplementedException(
      concreteClass._create.name
    )

    expect(() => concreteClass._create({})).toThrow(validationError)

  })

  test('should throw error  when _validadeRequireFields function return false', () => {
    const VALIDATE_DOENST_SUCCEEDED = false
    class ConcreteClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATE_DOENST_SUCCEEDED)
    }

    const concreteClass = new ConcreteClass()

    const validationError = new Error('invalid data')

    expect(() => concreteClass.create({})).toThrow(validationError)


  })
  test('should call _create and _validadeRequiredFields in create function', () => {
    const VALIDATE_SUCCEEDED = true
    const CREATE_SUCCEEDED = true

    class ConcreteClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATE_SUCCEEDED)
      _create = jest.fn().mockReturnValue(CREATE_SUCCEEDED)
    }
    const concreteClass = new ConcreteClass()

    const createFromBaseBusiness = jest.spyOn(
      BaseBusiness.prototype,
      BaseBusiness.prototype.create.name
    )

    const result = concreteClass.create({})

    expect(result).toBeTruthy()
    expect(createFromBaseBusiness).toHaveBeenCalled()
    expect(concreteClass._validateRequiredFields).toHaveBeenCalled()
    expect(concreteClass._create).toHaveBeenCalled()


  })
})
