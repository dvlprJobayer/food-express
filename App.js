import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodScreen from "./screens/FoodScreen";
import DataScreen from "./screens/DataScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Food"
                    component={FoodScreen}
                    options={{
                        title: "Food List",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen name="Data" component={DataScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
