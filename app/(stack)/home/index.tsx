import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import { View, Text } from 'react-native';


const HomeScreen = () => {
  return (
        <View className='mt-10'>
             <Text className='text-blue-500 font-bold text-3xl' > Home </Text>
             <Link className='mx-5 my-2' href="/productos" asChild>
                <CustomButton color='primary' children='Producto' />
             </Link>
            <CustomButton className='mx-5 my-2'  color='secondary' children='Perfiles'  onPress={()=> router.push('/Profile')}/>
            <CustomButton className='mx-5 my-2'  color='tertiary' children='Ajustes'  onPress={()=> router.push('/settings')}/>
            <CustomButton variant='text-only' className='mx-5 my-2'  color='primary' children='Productos'  onPress={()=> router.push('/productos')}/>
             {/* <Link href="/productos">Productos</Link>
             <Link href="/Profile">Perfil</Link>
             <Link href="/settings">Ajustes</Link> */}
        </View>
  )
};

export default HomeScreen