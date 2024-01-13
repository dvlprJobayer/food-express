import { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import FoodItem from "./FoodItem";
import FoodModal from "./FoodModal";

export default function AddFoodItem({ foodStore, setFoodStore }) {
    const [modalVisible, setModalVisible] = useState(false);

    // Name And Price State
    const [foodName, setFoodName] = useState("");
    const [foodPrice, setFoodPrice] = useState("");

    // Edit Food Item Id
    const [id, setId] = useState(null);

    // Add Food Function
    function addFood() {
        if (foodName && foodPrice) {
            if (id !== null) {
                const restFood = foodStore.filter(
                    (singleFood) => singleFood.id !== id
                );
                setFoodStore([
                    ...restFood,
                    { name: foodName, price: foodPrice, id },
                ]);
                setId(null);
            } else {
                setFoodStore((currentFoodList) => [
                    ...currentFoodList,
                    {
                        name: foodName,
                        price: foodPrice,
                        id: currentFoodList.length,
                    },
                ]);
            }
            setFoodName("");
            setFoodPrice("");
            setModalVisible(false);
        }
    }

    return (
        <>
            <ScrollView>
                {/* Food Item Container */}
                <View style={styles.foodItemContainer}>
                    {foodStore.map((foodItem) => (
                        <FoodItem
                            key={foodItem?.id}
                            foodItem={foodItem}
                            setFood={setFoodStore}
                            allFood={foodStore}
                            setModalVisible={setModalVisible}
                            addFood={addFood}
                            setId={setId}
                        />
                    ))}
                </View>

                {/* Add Food Item Button */}
                <Pressable onPress={() => setModalVisible(true)}>
                    <View style={styles.addFood}>
                        <Text style={styles.addFoodText}>+ Add Food Item</Text>
                    </View>
                </Pressable>
            </ScrollView>

            {/* Popup Modal */}
            <FoodModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                foodStore={foodStore}
                setFoodStore={setFoodStore}
                addFood={addFood}
                setFoodName={setFoodName}
                setFoodPrice={setFoodPrice}
                setId={setId}
            />
        </>
    );
}

const styles = StyleSheet.create({
    foodItemContainer: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    addFood: {
        backgroundColor: "#e1f6ec",
        marginHorizontal: 16,
        marginVertical: 10,
        padding: 13,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#03b660",
    },
    addFoodText: {
        fontWeight: "600",
    },
});
