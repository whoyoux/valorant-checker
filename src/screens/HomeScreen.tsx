import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Button, Text } from "react-native";
import { RootStackParamList } from "../../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='Go login' onPress={() => navigation.navigate('Login')} />
        </View>
    );
}