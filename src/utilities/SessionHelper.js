class SessionHelper {
  setLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
    return true;
  }
  getLocalStorage(name) {
    const data = localStorage.getItem(name);
    return JSON.parse(data);
  }
  removeLocalStorage(name) {
    localStorage.removeItem(name);
    return true;
  }
}

export const { setLocalStorage, getLocalStorage, removeLocalStorage } =
  new SessionHelper();
