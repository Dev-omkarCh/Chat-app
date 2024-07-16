import { create } from 'zustand';

const useTheme = create(( set ) =>({
    darkMode : true,
    setDarkMode : ( darkMode ) => set({ darkMode }),
}));

export default useTheme;