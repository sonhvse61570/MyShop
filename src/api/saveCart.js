import { AsyncStorage } from 'react-native';

const saveCart = async (cartArray) => {
    try {
        await AsyncStorage.setItem('@cart', JSON.stringify(cartArray));
    } catch (error) {
        console.log('saving log: ' + error);
    }
};

export default saveCart;