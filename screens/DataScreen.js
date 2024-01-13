import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const DataScreen = () => {
    const route = useRoute();
    const jsonData = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.bracket}>[</Text>
            {jsonData.map((data) => (
                <View key={data.id} style={styles.data}>
                    <Text style={styles.bracket}>{"{"}</Text>
                    <Text style={styles.text}>id: {data.id}</Text>
                    <Text style={styles.text}>Name: {data.name}</Text>
                    <Text style={styles.text}>Price: {data.price}</Text>
                    <Text style={styles.bracket}>{"}"}</Text>
                </View>
            ))}
            <Text style={styles.bracket}>]</Text>
        </View>
    );
};

export default DataScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 16,
    },
    data: {
        marginLeft: 16,
    },
    text: {
        marginLeft: 16,
        fontSize: 16,
    },
    bracket: {
        fontSize: 18,
    },
});
