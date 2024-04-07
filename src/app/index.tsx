import { Alert, Image, StatusBar, TouchableOpacity, View } from 'react-native'
import { FontAwesome6, MaterialIcons, Feather } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import { colors } from '@/styles/colors'
import { Input } from '@/components/input'
import Button from '@/components/button'
import { useState } from 'react'

const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    function setVisiblePassword() {
        setSecure(!secure)
    }

    async function handleRegister() {
        try {
            if (!username.trim() || !password.trim()) {
                return Alert.alert("Informações de Login", "Preencha todos os dados.")
            }

            setIsLoading(true)

            router.push("/ticket")

        } catch (error) {
            console.log(error);
            setIsLoading(false)

            Alert.alert("Inscrição", "Não foi possivel realizar a inscrição!")
        }
    }

    return (
        <View className='flex-1 items-center justify-center bg-green-500 p-8'>
            <StatusBar barStyle="light-content" />
            <Image source={require('@/assets/logo.png')} className='h-16' resizeMode='contain' />

            <View className='w-full mt-12 gap-3'>
                <Input>
                    <FontAwesome6 name='user-circle'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Fields placeholder='Username' onChangeText={setUsername} />
                </Input>

                <Input>
                    <MaterialIcons name='password'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Fields
                        placeholder='Password'
                        onChangeText={setPassword}
                        secureTextEntry={secure}
                    />
                    <TouchableOpacity onPress={setVisiblePassword} activeOpacity={0.9}>
                        <Feather name={secure ? "eye" : "eye-off"} size={20} color={colors.green[200]} />
                    </TouchableOpacity>
                </Input>

                <Button title='fazer login' onPress={handleRegister} isLoading={isLoading} />

            </View>
        </View >
    )
}

export default Home