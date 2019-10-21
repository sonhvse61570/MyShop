import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@token');
        if(token !== null){
            return token;
        }
        return '';
    } catch (error) {
        console.log(error);
    }
    return '';
}
export default getToken;