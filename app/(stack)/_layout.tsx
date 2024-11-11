import { Stack } from "expo-router";

 const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen 
            name='home/index' 
            options={{
                title: 'Home Screen'
            }}
            />
            <Stack.Screen 
            name='Profile/index' 
            options={{
                title: 'Perfil'
            }}
            />
            <Stack.Screen 
            name='productos/index' 
            options={{
                title: 'Productos'
            }}
            />
            <Stack.Screen 
            name='settings/index' 
            options={{
                title: 'Ajustes'
            }}
            />
        </Stack>
    )
    
};
export default StackLayout;