import { Image, useWindowDimensions, View, ImageBackground, Text, TouchableOpacity, Platform, Alert } from "react-native"
import QRcode from "./QRcode"
import { MotiView } from 'moti'

import { Feather } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { BadgeProps } from "@/store/badge-store"
import { CheckinProps } from "@/store/checkin-store"

type Props = {
    data: BadgeProps
    checkin: CheckinProps
    handleChangeAvatar?: () => void
    handleShowQRcode?: () => void
}


const Credential = ({ checkin, data, handleChangeAvatar, handleShowQRcode }: Props) => {

    const { height } = useWindowDimensions()


    return (
        <MotiView
            className="w-full self-stretch items-center"
            from={{
                opacity: 0,
                translateY: -height,
                rotateZ: "50deg",
                rotateX: "30deg",
                rotateY: "30deg",
            }}
            animate={{
                opacity: 1,
                translateY: 0,
                rotateZ: "0deg",
                rotateX: "0deg",
                rotateY: "0deg",

            }}
            transition={{
                type: "spring",
                damping: 20,
                rotateZ: {
                    damping: 15,
                    mass: 3
                }
            }}
        >
            <Image source={require('@/assets/ticket/band.png')}
                className="w-24 h-52 z-10"
            />

            <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
                <ImageBackground source={require('@/assets/ticket/header.png')}
                    className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
                >
                    <View className="w-full flex-row justify-between items-center">
                        <Text className={`text-zinc-50 ${Platform.OS == 'ios' ? 'text-base' : 'text-xs'} font-bold`}>{data?.eventTitle}</Text>
                        <Text className={`text-zinc-50 ${Platform.OS == 'ios' ? 'text-base' : 'text-xs'} font-bold`}>#{data?.id.substring(0, 10)}</Text>
                    </View>

                    <View className="w-40 h-40 bg-black/30 rounded-full" />
                </ImageBackground>


                {data?.image ?
                    (
                        <TouchableOpacity activeOpacity={0.9} onPress={handleChangeAvatar}>
                            <Image source={{ uri: data.image }}
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

                <Text className="font-bold text-2xl text-zinc-50 mt-4">{data?.name}</Text>
                <Text className="font-regualr text-base text-zinc-300 mb-4">{data?.email}</Text>

                {checkin?.id ? (
                    <Text className="font-bold text-2xl text-zinc-50 mt-4">CHECKIN REALIZADO</Text>
                ) : (
                    <>
                        <QRcode value={data?.checkinURL} size={128} />

                        <TouchableOpacity activeOpacity={0.7} className="mt-6" onPress={handleShowQRcode}>
                            <Text className="font-body text-orange-500 text-sm">Ampliar QRcode</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </MotiView>
    )
}

export default Credential