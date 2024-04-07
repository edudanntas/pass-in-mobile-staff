
import { Text, View, StyleSheet, Alert } from 'react-native'
import Button from '@/components/button'

import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

import { api } from '@/server/api';

import axios from 'axios';

import { CameraView, Camera } from 'expo-camera/next'

import { useEffect, useState } from 'react';

const Validate = () => {
    const [hasPermission, setHasPermission] = useState<Boolean | null>(null)
    const [scanned, setScanned] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const getCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
    };

    const handleQRCodeScanned = async ({ data }: { data: any }) => {
        try {
            setScanned(true)
            const getResponseData = await axios.post(data)

            if (getResponseData.status == 201) {
                console.log("Verificação feita")
                setIsLoading(false)
                return Alert.alert("Checkin validado", "Checkin foi realizado com sucesso")
            }

        } catch (error) {
            console.log(error);
            setIsLoading(false)

            if (axios.isAxiosError(error)) {
                if (error.response?.status == 404) {
                    Alert.alert("Checkin Inválido", "Checkin não pode ser realizado, tente novamente")
                }
            }
        }
    }

    const handleValidateCredentials = async () => {
        setIsLoading(true)
        getCameraPermissions()
        if (scanned) {
            setScanned(false)
        }
    }

    return (
        <View className='flex-1 mt-36 items-center px-16'>
            < View className='w-80 h-80 bg-black/30 mb-20 justify-center items-center' >
                {hasPermission === null && (
                    <Feather name='camera' size={128} color={colors.green[400]} />
                )}
                {hasPermission === true && (
                    <>
                        {scanned ? (
                            <Feather name='camera' size={128} color={colors.green[400]} />
                        ) : (
                            < CameraView
                                style={StyleSheet.absoluteFillObject}
                                onBarcodeScanned={scanned ? undefined : handleQRCodeScanned}
                                barcodeScannerSettings={{
                                    barcodeTypes: ["qr"]
                                }}
                            />
                        )}
                    </>
                )}
            </View >
            <Button title='validar credencial' onPress={handleValidateCredentials} isLoading={isLoading} />
        </View>
    )
}

export default Validate



// {
//     scanned && (
//         <Feather name='camera' size={128} color={colors.green[400]} />
//     )
// }