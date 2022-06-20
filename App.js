import { StyleSheet, Text, View } from 'react-native';
import AddFoodItem from './components/AddFoodItem';

export default function App() {
    return (
        <>
            <View style={[styles.pageContainer, styles.elevation]}>
                <Text style={styles.pageHeader}>Food List</Text>
            </View>

            {/* Add Food Item Component */}
            <AddFoodItem />
        </>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: 'white',
        paddingBottom: 8
    },
    elevation: {
        elevation: 10,
        shadowColor: '#171717'
    },
    pageHeader: {
        textAlign: 'center',
        marginTop: 50,
        fontWeight: '600',
        fontSize: 20
    }
});
