import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from './settingsStyles';



export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <ScrollView>
        <View>
           <View style={{ flexDirection: "row", marginTop: 50 }}>
                     <TouchableOpacity onPress={() => router.back()}>
                       <Image source={require('./../assets/images/arrow.png')} style={styles.arrow}/>
                     </TouchableOpacity>
                     <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={styles.line}/>

            <Text style = {styles.categoryLabel}>My Account</Text>
            <View style = {styles.yellowCard}>
              <View style = {styles.beigeCard}>
                <View style = {styles.container}>
                  <Text style = {styles.optionLabel}>My Addresses</Text>
                  <Image source = {(require('./../assets/images/optionArrow.png'))}
                  style = {styles.optionArrow}/>
                </View>
              </View>
            </View>

            <View style = {styles.yellowCard}>
              <View style = {styles.beigeCard}>
                <View style = {styles.container}>
                  <Text style = {styles.optionLabel}>E-Wallets</Text>
                  <Image source = {(require('./../assets/images/optionArrow.png'))}
                  style = {styles.optionArrow}/>
                </View>
              </View>
            </View>

            <Text style = {styles.categoryLabel}>Display</Text>
            <View style = {styles.yellowCard}>
              <View style = {styles.beigeCard}>
                <View style = {styles.container}>
                  <Text style = {styles.optionLabel}>Text Size</Text>
                  <Dropdown
                    style={styles.dropdown}
                    data={[
                      { label: 'default', value: 'default' },
                      { label: '15', value: '15' },
                      { label: '20', value: '20' },
                      { label: '24', value: '24' },
                      { label: '32', value: '32'},
                      { label: '36', value: '36'},
                      { label: '40', value: '40'},
                    ]}
                    placeholder='select size'
                    labelField="label"
                    valueField="value"
                    value={value}
                    onChange={(item) => setValue(item.value)}
                  />
                </View>
              </View>
            </View>

            <View style = {styles.yellowCard}>
              <View style = {styles.beigeCard}>
                <View style = {styles.container}>
                  <Text style = {styles.optionLabel}>High Contrast UI</Text>
                  <Switch
                  style={styles.switchStyle}
                  trackColor={{ false: '#767577', true: '#91CAFF' }}
                  thumbColor={isEnabled ? '#ffe959ff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setIsEnabled(previousState => !previousState)}
                  value={isEnabled}
                  />
                </View>
              </View>
            </View>

            <Text style = {styles.categoryLabel}>Support</Text>
            <View style = {styles.yellowCard}>
              <View style = {styles.beigeCard}>
                <View style = {styles.container}>
                  <Text style = {styles.optionLabel}>App Policies</Text>
                  <Image source = {(require('./../assets/images/optionArrow.png'))}
                  style = {styles.optionArrow}/>
                </View>
              </View>
            </View>

            <View style = {styles.yellowCard}>
              <View style = {styles.beigeCard}>
                <View style = {styles.container}>
                  <Text style = {styles.optionLabel}>Account Deletion</Text>
                  <Image source = {(require('./../assets/images/optionArrow.png'))}
                  style = {styles.optionArrow}/>
                </View>
              </View>
            </View>

            <View style={styles.line}/>
        </View>
    </ScrollView>
  );

}