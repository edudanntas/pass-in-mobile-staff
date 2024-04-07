import '@/styles/global.css';
import { Slot } from 'expo-router';


import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Loader } from '@/components/loader';
import { StatusBar } from 'react-native';

const Layout = () => {
    const [isLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    return (
        <>
            {isLoaded ? <Slot /> : <Loader />}
        </>
    )
}

export default Layout