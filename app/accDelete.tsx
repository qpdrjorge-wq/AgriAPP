import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { accDeleteStyles } from './../assets/styles/accDeleteStyles';

export default function Index() {
  return (
    <ScrollView>
        <View>
            <View style={{ flexDirection: "row", marginTop: 50 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('./../assets/images/arrow.png')} style={accDeleteStyles.arrow}/>
                </TouchableOpacity>
                <Text style={accDeleteStyles.headerText}>Account Deletion</Text>
            </View>
            <View style={accDeleteStyles.line}/>
            

        </View>
    </ScrollView>
  );
}
