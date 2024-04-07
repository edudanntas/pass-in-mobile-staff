import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type BadgeProps = {
    id: string
    name: string
    email: string
    eventTitle: string
    eventId: string
    checkinURL: string
    image?: string
}

type StateProps = {
    data: BadgeProps | null
    save: (data: BadgeProps) => void
    remove: () => void
    changeAvatar: (uri: string) => void
}

export const useBadgeStore = create(persist<StateProps>((set) => ({
    data: null,
    save: (data: BadgeProps) => set(() => ({ data })),
    remove: () => set(() => ({ data: null })),
    changeAvatar: (uri: string) => set((state) => ({
        data: state.data ? { ...state.data, image: uri } : state.data
    }))
}), {
    name: "pass-in:badge",
    storage: createJSONStorage(() => AsyncStorage)
}))