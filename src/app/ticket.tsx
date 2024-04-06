import Credential from '@/components/credential'
import Header from '@/components/header'
import { ScrollView, Text, TouchableOpacity, View, Alert, Modal } from 'react-native'
import * as Brightness from 'expo-brightness';
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import Button from '@/components/button'
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react"
import QRcode from '@/components/QRcode'


const Ticket = () => {
    const [image, setImage] = useState("")
    const [showQrcode, setShowQRcode] = useState(false)
    const [originalBrightness, setOriginalBrightness] = useState(0);

    async function getCredentialImage() {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4]
            })

            if (result.assets) {
                setImage(result.assets[0].uri)
            }

        } catch (error) {
            console.log(error)
            return Alert.alert("Imagem", "Não foi possivel selecionar a imagem")
        }
    }

    function toggleModal() {
        setShowQRcode(!showQrcode)
        if (!showQrcode) {
            Brightness.getBrightnessAsync().then(brightness => {
                setOriginalBrightness(brightness);
                Brightness.setBrightnessAsync(1);
            })
        } else {
            Brightness.setBrightnessAsync(originalBrightness);
        }

    }

    return (
        <View className='flex-1 bg-green-500'>
            <Header title="Minhas Credenciais" />

            <ScrollView
                className='-mt-28 -z-10'
                contentContainerClassName='px-8 mb-6'
                showsVerticalScrollIndicator={false}
            >
                <Credential
                    image={image}
                    handleChangeAvatar={getCredentialImage}
                    handleShowQRcode={toggleModal}
                />

                <FontAwesome name='angle-double-down' size={24} color={colors.gray[300]}
                    className='self-center my-6'
                />

                <Text className='text-white font-bold text-2xl mt-4'>Compartilhar credencial</Text>


                <Text className='text-white font-regular text-base mt-1 mb-6'>Mostre ao mundo que você vai participar da Festa do Dudu</Text>

                <Button title='Compartilhar' />

                <TouchableOpacity activeOpacity={0.7} className='mt-10'>
                    <Text className='text-base text-white font-bold text-center mb-10'>Remover Ingresso</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={showQrcode} statusBarTranslucent animationType='slide'>
                <View className='flex-1 bg-green-500 items-center justify-center'>
                    <QRcode value='teste' size={300} />
                    <TouchableOpacity onPress={toggleModal}>
                        <Text className='font-bold text-orange-500 text-2xl mt-10 text-center'>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default Ticket