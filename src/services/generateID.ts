const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

export function generateIdWithAKey(key: string) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}
export default generateId;