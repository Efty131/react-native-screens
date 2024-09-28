import { create } from 'zustand';
// custom hook er name 'use' diya suru korte hobe.Then iccha moto name dewa jabe
export const useCounterStore = create((set) => ({
    count: 1,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
}));
// Zustand alada folder na banailew colto taw bujar subidhar jonne banaysi
// Medium project er jonne zustand use hoy
// Large project er jonne redux toolkit
// Simple project er jonne props,context api
// zustand diya kom code leikka globally state manage kora jay