import { Image, View, ImageBackground, Text, TouchableOpacity, Platform, Alert } from "react-native"
import QRcode from "./QRcode"

import { Feather } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

type Props = {
    image?: string
    handleChangeAvatar?: () => void
    handleShowQRcode?: () => void
}


const Credential = ({ image, handleChangeAvatar, handleShowQRcode }: Props) => {
    return (
        <View className="w-full self-stretch items-center">
            <Image source={require('@/assets/ticket/band.png')}
                className="w-24 h-52 z-10"
            />

            <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
                <ImageBackground source={require('@/assets/ticket/header.png')}
                    className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
                >
                    <View className="w-full flex-row justify-between items-center">
                        <Text className={`text-zinc-50 ${Platform.OS == 'ios' ? 'text-base' : 'text-xs'} font-bold`}>Festa do Dudu</Text>
                        <Text className={`text-zinc-50 ${Platform.OS == 'ios' ? 'text-base' : 'text-xs'} font-bold`}>#1238323</Text>
                    </View>

                    <View className="w-40 h-40 bg-black/30 rounded-full" />
                </ImageBackground>


                {image ?
                    (
                        <TouchableOpacity activeOpacity={0.9} onPress={handleChangeAvatar}>
                            <Image source={{ uri: image }}
                                className="w-36 h-36 rounded-full -mt-24"
                            />
                        </TouchableOpacity>
                    )
                    : (
                        <TouchableOpacity activeOpacity={0.9} className="w-36 h-36 rounded-full -mt-24 bg-gray-400 justify-center items-center" onPress={handleChangeAvatar}>
                            <Feather name="camera" size={32} color={colors.green[400]} />
                        </TouchableOpacity>
                    )
                }

                <Text className="font-bold text-2xl text-zinc-50 mt-4">Eduardo Dantas</Text>
                <Text className="font-regualr text-base text-zinc-300 mb-4">eduardo@email.com</Text>

                <QRcode value="https://github.com/edudanntas" size={128} />

                <TouchableOpacity activeOpacity={0.7} className="mt-6" onPress={handleShowQRcode}>
                    <Text className="font-body text-orange-500 text-sm">Ampliar QRcode</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Credential