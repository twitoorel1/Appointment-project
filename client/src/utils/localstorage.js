export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorageItem(key) {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  }
  return null;
}
