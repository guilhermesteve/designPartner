import NotImplementedException from "./notimplementedException.mjs";


export default class TableComponent {
  render(data) {
    throw new NotImplementedException(this.render.name)
  }
}
