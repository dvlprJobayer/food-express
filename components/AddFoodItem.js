import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import FoodModal from "./FoodModal";
import DraggableFood from "./DraggableFood";

function* generator() {
    let id = 0
    while (true) {
        yield id++
    }
}

const getId = generator()

export default function AddFoodItem({ foodStore, setFoodStore }) {
    const [modalVisible, setModalVisible] = useState(false);

    // Name And Price State
    const [foodName, setFoodName] = useState("");
    const [foodPrice, setFoodPrice] = useState("");

    // Edit Food Item Id
    const [id, setId] = useState(null);

    // Add Food Function
    function addEditFood() {
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
                        id: getId.next().value + "",
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
            {/* Food Item Container */}
            <View style={styles.foodItemContainer}>
                <DraggableFood
                    foodStore={foodStore}
                    setFood={setFoodStore}
                    setId={setId}
                    setModalVisible={setModalVisible}
                />

                {/* Add Food Item Button */}
                <Pressable onPress={() => setModalVisible(true)}>
                    <View style={styles.addFood}>
                        <Text style={styles.addFoodText}>
                            + {"    "} Add Food Item
                        </Text>
                    </View>
                </Pressable>
            </View>

            {/* Popup Modal */}
            <FoodModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addEditFood={addEditFood}
                setFoodName={setFoodName}
                setFoodPrice={setFoodPrice}
                setId={setId}
                id={id}
            />
        </>
    );
}

const styles = StyleSheet.create({
    foodItemContainer: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 5,
    },
    addFood: {
        backgroundColor: "#e1f6ec",
        marginVertical: 16,
        padding: 13,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#03b660",
    },
    addFoodText: {
        fontWeight: "600",
    },
});
