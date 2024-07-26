import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {submitProfile, getProfile, updateProfile} from '../store/utils';
import {useState, useEffect} from 'react';
import {COLORS} from '../components/constants/colors';
import {appStyles} from '../components/Styles/generalStyles';
import {ImagePicker, ReturnIcon} from '../components/ui';

const ProfileScreen = () => {
  const [profile, setProfile] = useState(null);
  const [profileInputs, setPfofileInputs] = useState({name: '', image: ''});
  console.log(profileInputs);
  // console.log(profile);

  const genKey = () => Date.now().toString();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchUser();
  }, []);

  const saveInputs = (identifier, newValue) => {
    setPfofileInputs(prev => ({...prev, [identifier]: newValue}));
  };

  const userImage = image => {
    saveInputs('image', image);
  };

  const submit = async () => {
    const {name, image} = profileInputs;
    if (!name.trim()) {
      Alert.alert('Problem', 'Name is invalid');
      return;
    }

    const submitData = {profileId: genKey(), name, image};
    try {
      await submitProfile(submitData);
      const updatedData = await getProfile();
      setProfile(updatedData);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  const resetInputs = () => {
    setPfofileInputs({name: ''});
  };

  return (
    <View style={appStyles.screenStyle}>
      <SafeAreaView style={{flex: 1, justifyContent: 'flex-start'}}>
        {profile ? (
          <ProfileData profile={profile} />
        ) : (
          <View
            style={{
              borderWidth: 1,
              padding: 20,
              borderRadius: 10,
              marginTop: 60,
            }}>
            <View style={{margin: 20, alignItems: 'center'}}>
              <Text style={{fontSize: 18, color: COLORS.bamboo}}>
                Profile Name
              </Text>
              <TextInput
                value={profileInputs.name}
                onChangeText={value => saveInputs('name', value)}
                style={styles.inputForm}
              />
              <View style={styles.btn}>
                <ImagePicker saveImage={image => userImage(image)}>
                  <Text style={{fontSize: 18}}>Choose the photo</Text>
                </ImagePicker>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={submit} style={styles.btn}>
                  <Text style={{fontSize: 18}}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={resetInputs} style={styles.btn}>
                  <Text style={{fontSize: 18}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
      <ReturnIcon />
    </View>
  );
};

export const ProfileData = ({profile}) => {
  const [isRename, setIsRename] = useState(false);
  const [profileName, setProfileName] = useState(profile.name);
  const [profileImage, setProfileImage] = useState(profile.image);
  // console.log(profileImage);

  const nameChange = async () => {
    await updateProfile('name', profileName);
    setIsRename(false);
  };

  const replaceImage = async image => {
    setProfileImage(image);
    await updateProfile('image', image);
  };

  return (
    <View>
      {isRename ? (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <TextInput
            value={profileName}
            onChangeText={setProfileName}
            style={styles.inputForm}
          />
          <TouchableOpacity onPress={nameChange} style={styles.btn}>
            <Text style={{fontSize: 18}}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{alignItems: 'center', flex: 1, marginTop: 100, gap: 30}}>
          <TouchableOpacity onPress={() => setIsRename(true)}>
            <Text style={styles.profileName}>{profileName}</Text>
          </TouchableOpacity>
          <ImagePicker saveImage={image => replaceImage(image)}>
            <Image
              source={{uri: profileImage}}
              style={{height: 150, width: 150, borderRadius: 10}}
            />
          </ImagePicker>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    backgroundColor: COLORS.crusta,
    borderColor: COLORS.bamboo,
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  inputForm: {
    borderWidth: 1,
    backgroundColor: COLORS.slateGray,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 22,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 100,
    maxWidth: 250,
  },
  profileName: {
    fontSize: 32,
    color: COLORS.bamboo,
  },
});
