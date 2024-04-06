import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

const Button = ({ title, isLoading = false, ...rest }: Props) => {



    return (
        <TouchableOpacity
            disabled={isLoading}
            activeOpacity={0.7}
            className='w-full h-14 mt-2 bg-orange-500 items-center justify-center rounded-lg'
            {...rest}>
            {isLoading ?
                (
                    <ActivityIndicator className='text-green-500' />
                )
                :
                (
                    <Text className='text-green-500 font-bold text-base uppercase'>
                        {title}
                    </Text>
                )
            }

        </TouchableOpacity >
    )
}

export default Button