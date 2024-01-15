import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DragList from "react-native-draglist";
import FoodItem from "./FoodItem";

export default function DraggableFood({
    foodStore,
    setFood,
    setId,
    addFood,
    setModalVisible,
}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(foodStore);
    }, [foodStore]);

    function keyExtractor(item) {
        return item.id;
    }

    function renderItem(info) {
        const { item, onDragStart, onDragEnd } = info;

        return (
            <TouchableOpacity
                key={item.id}
                onPressIn={onDragStart}
                onPressOut={onDragEnd}
            >
                <FoodItem
                    foodItem={item}
                    setFood={setFood}
                    setId={setId}
                    addFood={addFood}
                    setModalVisible={setModalVisible}
                />
            </TouchableOpacity>
        );
    }

    async function onReordered(fromIndex, toIndex) {
        const copy = [...data]; // Don't modify react data in-place
        const removed = copy.splice(fromIndex, 1);

        copy.splice(toIndex, 0, removed[0]); // Now insert at the new pos
        setData(copy);
    }

    return (
        <DragList
            data={data}
            keyExtractor={keyExtractor}
            onReordered={onReordered}
            renderItem={renderItem}
        />
    );
}
