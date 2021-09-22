class NotImplementedException extends Error {
  constructor(message) {
    super(`${message} as called without as implementation`)

    this.name = "NotImplementedException"
  }
}

export { NotImplementedException }
