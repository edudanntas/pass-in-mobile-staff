import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type CheckinProps = {
    id: number
}

type StateProps = {
    data: CheckinProps | null
    save: (data: CheckinProps) => void
    remove: () => void
}

export const useCheckinStore = create(persist<StateProps>((set) => ({
    data: null,
    save: (data: CheckinProps) => set(() => ({ data })),
    remove: () => set(() => ({ data: null }))
}), {
    name: "pass-in:checkedIn",
    storage: createJSONStorage(() => AsyncStorage)
}))