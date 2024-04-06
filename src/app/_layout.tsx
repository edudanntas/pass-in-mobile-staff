import '@/styles/global.css';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Loader } from '@/components/loader';

const Layout = () => {
    const [isLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    return (
        <>
            <StatusBar style='light' />
            {isLoaded ? <Slot /> : <Loader />}
        </>
    )
}

export default Layout