import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './indexStyles';

export default function Index() {
  return (
    <ScrollView>
      <View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Image source={require('./../assets/images/arrow.png')} style={styles.arrow} />
          <Text style={styles.headerText}>Profile</Text>
        </View>

        <View style={styles.line}/>

        <View style={styles.profileCard}>
          <View style={styles.beigeProfCard}>
            <View style={styles.profContainer}>
              <Image 
                source={require('./../assets/images/cocoArmpits.png')}
                style={styles.userImage}
              />
              <Text style={styles.beigeCardText}>Ser, Tapos napo</Text>
            </View>
          </View>
        </View>

        <Text style={styles.accText}>Account Center</Text>

        <View style={styles.row1Container}>
          <TouchableOpacity 
            style={styles.editProfCard}
            onPress={() => router.push('/editProfile')}>
            <Image source={require('./../assets/images/profileIMG.png')} 
            style={styles.editProfCardLogo}/>
            <Text style={styles.editProfCardText}>Edit Profile</Text>
          </TouchableOpacity>
                      
          <TouchableOpacity
            style={styles.settingsCard}
            onPress={() => router.push('/settings')}>
            <Image source = {require('./../assets/images/settingsIMG.png')} 
            style={styles.settingsCardLogo}/>
            <Text style={styles.settingsCardText}>Settings</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.row2Container}>
          <View style={styles.setupShopCard}>
            <Image source = {require('./../assets/images/shopIMG.png')} 
            style={styles.setupCardLogo}/>
            <Text style={styles.setupCardText}>Set Up/{"\n"}Manage Shop</Text>
          </View>
          
          <View style={styles.aboutCard}>
            <Image source = {require('./../assets/images/appLogo.png')} 
            style={styles.aboutCardLogo}/>
            <Text style={styles.aboutCardText}>About</Text>
          </View>
        </View>
    
        <View style={styles.logOutCard}>
          <View style={styles.profContainer}>
            <Image source = {require('./../assets/images/logOutIMG.png')} 
            style={styles.logOutLogo}/>
            <Text style={styles.logOutText}>Log Out</Text>
          </View>
        </View>
        <View style={styles.endLine}/>
      </View>
    </ScrollView>
  );
}

