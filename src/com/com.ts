const _storage = localStorage
export class storage {
  getItem (item: string) :string|null {
    return _storage.getItem(item)
  }
  setItem (item: string, str: string) :void {
    return _storage.setItem(item, str)
  }
  removeItem (item: string) :void {
    return _storage.removeItem(item)
  }
}
