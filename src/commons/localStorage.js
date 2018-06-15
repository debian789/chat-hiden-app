import {AsyncStorage} from 'react-native'

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return true 
    } catch (error) {
        console.log(error)
        return false 
        // Error saving data
    }
}

export const getItem =  (key, callback) => {
        AsyncStorage.getItem(key)
        .then((item) => {
            if (item) {
                callback(null, item)
            } else {
                callback('Not Item')
            }
        })
        .catch((error) => {
            callback(error)
        })        
}