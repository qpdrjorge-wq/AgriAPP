import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from './editProfileStyles';


export default function Index() {
  const [value, setValue] = useState(null);
  return (
    <ScrollView>     
      <View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require('./../assets/images/arrow.png')} style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>

        <View style={styles.line}/>

        <Text style={styles.myProfileText}>My Profile</Text>
        <View style={styles.pfpContainer}>
          <Image 
            source={require('./../assets/images/happiFrozen.png')}
            style={styles.userImage} 
          />
          <Image 
            source={require('./../assets/images/pencilEdit.png')}
            style={styles.pencilEdit} 
          />
        </View>

        <View style = {styles.blueCard}>
          <View style = {styles.beigeCard}>
            <View style = {styles.saveCard}>
              <View style={styles.saveContainer}>
                <Text style = {styles.saveText}>Save Changes</Text>
                <Image source = {require('./../assets/images/checkImg.png')}
                style = {styles.checkImg}
                />
              </View>
            </View>

            <View style={styles.container}>
              <Text style = {styles.detailLabel}>Username</Text>
              <Image source = {require('./../assets/images/pencil.png')}
                style = {styles.pencil} 
                />
            </View>
            <TextInput style={styles.inputField}
              autoCapitalize="none"
              placeholder="Enter your username.."
              placeholderTextColor="#464646ff"
            /> 

            <View style={styles.container}>
              <Text style = {styles.bioLabel}>Bio</Text>
              <Image source = {require('./../assets/images/pencil.png')}
                style = {styles.pencil} 
                />
            </View>
            <TextInput style={styles.bioInputField}
              multiline={true}
              numberOfLines={3}
              autoCapitalize="none"
              placeholder="Enter your bio.."
              placeholderTextColor="#464646ff"
            /> 

            <View style={styles.container}>
              <Text style = {styles.detailLabel}>Birthday</Text>
              <Image source = {require('./../assets/images/pencil.png')}
                style = {styles.pencil} 
                />
            </View>
            <TextInput style={styles.inputField}
              autoCapitalize="none"
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#464646ff"
            /> 

            <View style={styles.container}>
              <Text style = {styles.detailLabel}>Gender</Text>
              <Image source = {require('./../assets/images/pencil.png')}
                style = {styles.pencil} 
                />
            </View>
            <Dropdown
              style={styles.inputField}
              data={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
                { label: 'Prefer not to say', value: 'none'}
              ]}
              labelField="label"
              valueField="value"
              placeholder="Select"
              value={value}
              onChange={(item) => setValue(item.value)}
            /> 

            <View style={styles.container}>
              <Text style = {styles.detailLabel}>Phone</Text>
              <Image source = {require('./../assets/images/pencil.png')}
                style = {styles.pencil} 
                />
            </View>
            <TextInput style={styles.inputField}
              autoCapitalize="none"
              placeholder="Enter your phone number.."
              placeholderTextColor="#464646ff"
            />  

            <View style={styles.container}>
              <Text style = {styles.detailLabel}>Email</Text>
              <Image source = {require('./../assets/images/pencil.png')}
                style = {styles.pencil} 
                />
            </View>
            <TextInput style={styles.inputField}
              autoCapitalize="none"
              placeholder="Enter a valid email.."
              placeholderTextColor="#464646ff"
            />  

          </View>
        </View> 

        <View style={styles.line}/>
      </View> 
    </ScrollView>
  );
}

