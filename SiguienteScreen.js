import React from 'react';
import { Button, View, Text } from 'react-native';

function SiguienteScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Siguiente</Text>


            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>

    );
}

export default SiguienteScreen;