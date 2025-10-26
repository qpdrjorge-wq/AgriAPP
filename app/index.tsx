import { router } from 'expo-router';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { indexStyles } from './../assets/styles/indexStyles';

export default function Index() {
  return (
    <ScrollView>
      <View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity>
            <Image source={require('./../assets/images/arrow.png')} style={indexStyles.arrow} />

          </TouchableOpacity>
          <Text style={indexStyles.headerText}>Profile</Text>
        </View>

        <View style={indexStyles.line}/>

        <View style={indexStyles.profileCard}>
          <View style={indexStyles.beigeProfCard}>
            <View style={indexStyles.profContainer}>
              <Image 
                source={require('./../assets/images/profileUserImage.png')}
                style={indexStyles.userImage}
              />
              <Text style={indexStyles.beigeCardText}>Ser, Tapos napo</Text>
            </View>
          </View>
        </View>

        <Text style={indexStyles.accText}>Account Center</Text>

        <View style={indexStyles.row1Container}>
          <TouchableOpacity 
            style={indexStyles.editProfCard}
            onPress={() => router.push('/editProfile')}>
            <Image source={require('./../assets/images/profileIMG.png')} 
            style={indexStyles.editProfCardLogo}/>
            <Text style={indexStyles.editProfCardText}>Edit Profile</Text>
          </TouchableOpacity>
                      
          <TouchableOpacity
            style={indexStyles.settingsCard}
            onPress={() => router.push('/settings')}>
            <Image source = {require('./../assets/images/settingsIMG.png')} 
            style={indexStyles.settingsCardLogo}/>
            <Text style={indexStyles.settingsCardText}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View style = {indexStyles.row2Container}>
          <View style={indexStyles.setupShopCard}>
            <Image source = {require('./../assets/images/shopIMG.png')} 
            style={indexStyles.setupCardLogo}/>
            <Text style={indexStyles.setupCardText}>Set Up/{"\n"}Manage Shop</Text>
          </View>
          
          <TouchableOpacity 
            style={indexStyles.aboutCard}
            onPress={() => router.push('/about')}>
            <Image source = {require('./../assets/images/appLogo.png')} 
            style={indexStyles.aboutCardLogo}/>
            <Text style={indexStyles.aboutCardText}>About</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => 
          Alert.alert(
         "Log Out",
          "You will be returned to the login page",
            [
            {
            text: "Cancel",
            style: "cancel"
            },
            { 
            text: "Yes", 
            onPress: () => console.log("Log Out pressed") 
              }
              ]
            )
          }>
          <View style={indexStyles.logOutCard}>
            <View style={indexStyles.profContainer}>
              <Image source = {require('./../assets/images/logOutIMG.png')} 
              style={indexStyles.logOutIMG}/>
              <Text style={indexStyles.logOutText}>Log Out</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={indexStyles.endLine}/>
      </View>
    </ScrollView>
  );
}

