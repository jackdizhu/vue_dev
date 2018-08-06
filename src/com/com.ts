const _storage = localStorage
export class storage {
  getItem (item: string) {
    return _storage.getItem(item)
  }
  setItem (item: string, str: string) {
    return _storage.setItem(item, str)
  }
  removeItem (item: string) {
    return _storage.removeItem(item)
  }
}
