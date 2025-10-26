import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { eWalletStyles } from '../assets/styles/eWalletStyles';

export default function Index() {
  return (
    <ScrollView>
        <View>
            <View style={{ flexDirection: "row", marginTop: 50 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('./../assets/images/arrow.png')} 
                    style={eWalletStyles.arrow}/>
                </TouchableOpacity>
                <Text style={eWalletStyles.headerText}>E-Wallets</Text>
            </View>
            <View style={eWalletStyles.line}/>

        </View>
    </ScrollView>
  );
}