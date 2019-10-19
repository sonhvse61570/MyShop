import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const cartArray = await AsyncStorage.getItem('@cart');
        if(cartArray !== null){
            return JSON.parse(cartArray);
        }
        return [];
    } catch (error) {
        console.log('error: ' + error); 
        return [];
    }
};

export default getCart;