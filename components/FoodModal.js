import {
    View,
    Text,
    Modal,
    Pressable,
    Image,
    StyleSheet,
    TextInput,
} from "react-native";

export default function FoodModal(props) {
    return (
        <Modal animationType="slide" transparent visible={props.modalVisible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderText}>
                            {props.id !== null ? "Edit" : "Add"} Food
                        </Text>
                        <Pressable
                            onPress={() => {
                                props.setModalVisible(false);
                                props.setId(null);
                            }}
                        >
                            <Image
                                source={require("../assets/img/close.png")}
                                style={{ height: 24, width: 24 }}
                            />
                        </Pressable>
                    </View>
                    <View style={styles.modalBody}>
                        <View>
                            <Text>Food Name</Text>
                            <TextInput
                                onChangeText={(name) => props.setFoodName(name)}
                                style={styles.modalInput}
                            />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text>Food Price</Text>
                            <TextInput
                                onChangeText={(price) =>
                                    props.setFoodPrice(price)
                                }
                                style={styles.modalInput}
                            />
                        </View>
                        <Pressable onPress={props.addEditFood}>
                            <View style={styles.modalBtn}>
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: "600",
                                    }}
                                >
                                    {props.id !== null ? "Edit" : "Add"} Food
                                    Item
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, .5)",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        width: "100%",
        padding: 16,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    modalHeaderText: {
        fontSize: 16,
        fontWeight: "600",
    },
    modalBody: {
        marginTop: 20,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        fontSize: 16,
        padding: 5,
        marginTop: 5,
    },
    modalBtn: {
        marginTop: 15,
        backgroundColor: "#03b660",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
    },
});
