import NotImplementedException from "./notimplementedException.mjs";

export default class ViewFactory {
  createTable() {
    throw new NotImplementedException(this.createTable.name)
  }
}
