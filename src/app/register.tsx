import { Alert, Image, View } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { colors } from '@/styles/colors'

import { Input } from '@/components/input'
import Button from '@/components/button'
import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleRegister() {
        if (!name.trim() || !email.trim()) {
            return Alert.alert("Dados pessoais", "Preencha todos os dados pessoais")
        }
    }

    return (
        <View className='flex-1 items-center justify-center bg-green-500 p-8'>
            <Image source={require('@/assets/logo.png')} className='h-16' resizeMode='contain' />

            <View className='w-full mt-12 gap-3'>
                <Input>
                    <FontAwesome6 name='user-circle'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Fields placeholder='Nome completo' onChangeText={setName} />
                </Input>

                <Input>
                    <MaterialIcons name='alternate-email'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Fields
                        placeholder='E-mail'
                        keyboardType='email-address' onChangeText={setEmail} />
                </Input>

                <Button title='REalizar inscrição' onPress={handleRegister} />

                <Link href="/" className='text-gray-100 text-base font-bold mt-8 text-center'>
                    Já possuí ingresso?
                </Link>
            </View>
        </View >
    )
}

export default Home