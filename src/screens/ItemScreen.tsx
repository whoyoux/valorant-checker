import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Button, Text } from "react-native";
import { RootStackParamList } from "../../App";

type ItemScreenProps = NativeStackScreenProps<RootStackParamList, 'Item'>;

export function ItemScreen({ navigation, route }: ItemScreenProps) {
    const { id, name, imageURL } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Text>{name}</Text>
            <Button title='Go home' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}