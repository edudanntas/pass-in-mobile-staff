import { Image, View, Alert } from 'react-native'
import { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'

import { colors } from '@/styles/colors'

import { Input } from '@/components/input'
import Button from '@/components/button'

const Home = () => {
    const [value, setValue] = useState("");

    function handleAccessEvent() {
        if (!value.trim()) {
            return Alert.alert("Ingresso", "Informe o código do ingresso")
        }

        router.push("/ticket")
    }

    return (
        <View className='flex-1 items-center justify-center bg-green-500 p-8'>
            <Image source={require('@/assets/logo.png')} className='h-16' resizeMode='contain' />

            <View className='w-full mt-12 gap-3'>
                <Input>
                    <MaterialCommunityIcons name='ticket-confirmation-outline'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Fields
                        placeholder='Código do ingresso'
                        onChangeText={setValue}
                    />
                </Input>

                <Button title='Acessar credencial' onPress={handleAccessEvent} />

                <Link href="/register" className='text-gray-100 text-base font-bold mt-8 text-center'>
                    Ainda não possuí ingresso?
                </Link>
            </View>
        </View >
    )
}

export default Home