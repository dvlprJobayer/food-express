import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function FoodItem(props) {
    // Delete Food Item Function
    function deleteFood(id) {
        props.setFood((currentFoods) =>
            currentFoods.filter((food) => food.id !== id)
        );
    }

    // Edit Food Item function
    function editFood(id) {
        props.setModalVisible(true);
        props.setId(id);
    }

    return (
        <View style={styles.foodItem}>
            <View style={styles.foodNamePriceContainer}>
                {/* Food Name */}
                <Text style={{ fontWeight: "600" }}>
                    {props.foodItem?.name}
                </Text>

                {/* Food Price */}
                <View style={styles.price}>
                    <Text style={{ color: "#ccc" }}>Price: </Text>
                    <Text>${props.foodItem?.price}</Text>
                </View>
            </View>

            {/* Edit Food Button */}
            <Pressable onPress={() => editFood(props.foodItem.id)}>
                <Image
                    source={require("../assets/img/pencil.png")}
                    style={{ height: 24, width: 24 }}
                />
            </Pressable>

            {/* Delete Food Button */}
            <Pressable onPress={() => deleteFood(props.foodItem.id)}>
                <Image
                    source={require("../assets/img/trash.png")}
                    style={{ height: 24, width: 24 }}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    foodItem: {
        backgroundColor: "#f4f4f4",
        marginTop: 8,
        padding: 13,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        flexDirection: "row",
    },
    foodNamePriceContainer: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
    },
});
