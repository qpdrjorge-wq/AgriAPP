import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { policiesStyles } from '../assets/styles/policiesStyles';

export default function Index() {
  return (
    <ScrollView>
        <View>
            <View style={{ flexDirection: "row", marginTop: 50 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('./../assets/images/arrow.png')} 
                    style={policiesStyles.arrow}/>
                </TouchableOpacity>
                <Text style={policiesStyles.headerText}>App Policies</Text>
            </View>
            <View style={policiesStyles.line}/>

        </View>
    </ScrollView>
  );
}