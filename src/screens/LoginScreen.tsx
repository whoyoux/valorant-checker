import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Button, Text } from "react-native";
import { RootStackParamList } from "../../App";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button title='Go home' onPress={() => navigation.navigate('Item', { id: 'ddd', name: 'ddd', imageURL: 'sss' })} />
        </View>
    );
}
