import AbstractStorage from './AbstractStorage'

class SessionStorage extends AbstractStorage {
    storage = {};
    save(key, value) {
        this.storage[key] = value;
    }
    
    get(key) {
        return this.storage[key];
    }
}

export default SessionStorage;
