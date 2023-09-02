import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";
import { COLORS, FONTS } from "../themes";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={() => ({
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: 20,
                },
                title: 'Ordenes',
                headerTintColor: COLORS.wihte,
                animation: 'fade_from_bottom',

            })}>

            <Stack.Screen
                name="Orders"
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;