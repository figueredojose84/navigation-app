import { Stack } from "expo-router";

 const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen 
            name='home/index' 
            options={{
                title: 'HomeScreen'
            }}
            />
        </Stack>
    )
    
};
export default StackLayout;