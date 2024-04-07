
import Header from '@/components/header'
import Validate from '@/components/validate'
import { StatusBar, View } from 'react-native'



const Ticket = () => {


    return (
        <View className='flex-1 bg-green-500'>
            <StatusBar barStyle="light-content" />

            <Header title="Validar Credencial" />

            <Validate />

        </View>
    )
}

export default Ticket