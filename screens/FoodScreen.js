import { Pressable, View, Text, StyleSheet } from "react-native";
import AddFoodItem from "../components/AddFoodItem";

export default function App({ navigation }) {
    return (
        <>
            <AddFoodItem />
            {/* JSON Data Page Button */}
            <View style={styles.dataBtn}>
                <Pressable
                    onPress={() => navigation.navigate("Data")}
                    android_ripple={{ color: "#03b660" }}
                >
                    <Text style={styles.btnText}>See JSON data</Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    dataBtn: {
        backgroundColor: "#e1f6ec",
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#03b660",
    },
    btnText: {
        fontWeight: "600",
        padding: 13,
    },
});
