import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LongTextWithSeeMore = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [liked, setLiked] = useState(false); // Define the liked state variable
  const [likesCount, setLikesCount] = useState(100); // Initial likes count

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris suscipit purus id tortor interdum, eget placerat quam gravida. Suspendisse potenti. Proin non semper libero. Donec interdum nisl quis quam elementum, at congue arcu commodo. Maecenas rutrum, nisi sit amet vehicula bibendum, enim purus lacinia magna, eget gravida lorem metus sed nunc. Nullam sit amet mauris velit. Nulla facilisi. Sed in nisl nec sem convallis malesuada. Sed nec nulla nec elit malesuada malesuada. Sed sit amet nibh ut dui consequat laoreet non non tortor. Vivamus ullamcorper eros non ultricies vestibulum. ";

  const toggleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>  
        <Image 
          style={styles.igLogo}
          source={require("../icon/igLogo.png")}
        />
        <View style={styles.headerIcon}>
          <Image 
          style={styles.igLogoI}
          source={require("../icon/heart.png")}
          />
          <Image 
          style={styles.igLogoI}
          source={require("../icon/chat.png")}
          />
        </View>
      </View>

      <ScrollView>
        <View style={styles.iconContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.profile_icon_container}>
              <Image 
                style={{ ...styles.profileIcon, marginTop: 5 }}
                source={require("../img/profile1.jpg")}
              />
        
              <Image
                source={require('../icon/add.png')}
                style={styles.profileOverlay}
              />

              <Text style={{ ...styles.profile_name, marginTop: 7 }}>Your story</Text>
            </View>

            <View style={styles.profile_icon_container}>
              <View style={styles.profile_gradiant_container}>
                <LinearGradient
                    colors={['#C913B9', '#F9373F', '#FECD00']}
                    style={styles.gradientBorder}
                />
                <View style={styles.whiteBackground}></View>
                <Image 
                  style={styles.profileIcon}
                  source={require("../img/profile2.jpg")}
                />
              </View>
              
              <Text style={styles.profile_name}>Max</Text>
            </View>

            <View style={styles.profile_icon_container}>
              <View style={styles.profile_gradiant_container}>
                <LinearGradient
                    colors={['#C913B9', '#F9373F', '#FECD00']}
                    style={styles.gradientBorder}
                />
                <View style={styles.whiteBackground}></View>
                <Image 
                  style={styles.profileIcon}
                  source={require("../img/profile4.jpg")}
                />
              </View>
              
              <Text style={styles.profile_name}>Lucy</Text>
            </View>

            <View style={styles.profile_icon_container}>
              <View style={styles.profile_gradiant_container}>
                <LinearGradient
                    colors={['#C913B9', '#F9373F', '#FECD00']}
                    style={styles.gradientBorder}
                />
                <View style={styles.whiteBackground}></View>
                <Image 
                  style={styles.profileIcon}
                  source={require("../img/profile5.jpg")}
                />
              </View>
              
              <Text style={styles.profile_name}>Oliver</Text>
            </View>

            <View style={styles.profile_icon_container}>
              <View style={styles.profile_gradiant_container}>
                <LinearGradient
                    colors={['#C913B9', '#F9373F', '#FECD00']}
                    style={styles.gradientBorder}
                />
                <View style={styles.whiteBackground}></View>
                <Image 
                  style={styles.profileIcon}
                  source={require("../img/profile3.jpg")}
                />
              </View>
              
              <Text style={styles.profile_name}>Luna</Text>
            </View>

          </ScrollView>
        </View>

        
      {/* --------------------------------------Main Content--------------------------------- */}
        <View style={styles.content_view}>
          <View style={styles.header_content_view}>
            <View style={styles.name_content_container}>
              <Image 
                style={styles.profile_content_view}
                source={require("../img/profile4.jpg")}
              />
              <Text style={styles.name_content_view}>Lucy</Text>
            </View>
            <Image 
              style={styles.dotIcon}
              source={require("../icon/dotIcon.png")}
            />
          </View>
          
          <Image 
            style={styles.content}
            source={require("../img/profile4.jpg")}
          />

          <View style={styles.bottomIcon_content_container}>
            <View style={styles.bottomIcon_container}>
              <TouchableOpacity onPress={toggleLike}>
                <Image 
                  style={[styles.bottomIcon, liked && styles.redHeart]}
                  source={liked ? require("../icon/red_heart.png") : require("../icon/heart.png")} // Change the heart icon source based on the liked state
                />
              </TouchableOpacity>
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/speech-bubble.png")}
              />
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/send.png")}
              />
            </View>
            <Image 
              style={styles.bottomIcon}
              source={require("../icon/bookmark.png")}
            />
          </View>

          <View style={styles.bottomContext}>
            <Text style={styles.likesCounter}>{likesCount} Likes</Text>
            <TouchableOpacity onPress={toggleTextVisibility}>
              <Text>
                {showFullText ? textContent : textContent.substring(0, 50) + "... "}
                {showFullText ? "See less" : "See more"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
  {/* --------------------------------------Main Content--------------------------------- */}
        <View style={styles.content_view}>
          <View style={styles.header_content_view}>
            <View style={styles.name_content_container}>
              <Image 
                style={styles.profile_content_view}
                source={require("../img/profile2.jpg")}
              />
              <Text style={styles.name_content_view}>Max</Text>
            </View>
            <Image 
              style={styles.dotIcon}
              source={require("../icon/dotIcon.png")}
            />
          </View>
          
          <Image 
            style={styles.content}
            source={require("../img/profile2.jpg")}
          />

          <View style={styles.bottomIcon_content_container}>
            <View style={styles.bottomIcon_container}>
              <TouchableOpacity onPress={toggleLike}>
                <Image 
                  style={[styles.bottomIcon, liked && styles.redHeart]}
                  source={liked ? require("../icon/red_heart.png") : require("../icon/heart.png")} // Change the heart icon source based on the liked state
                />
              </TouchableOpacity>
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/speech-bubble.png")}
              />
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/send.png")}
              />
            </View>
            <Image 
              style={styles.bottomIcon}
              source={require("../icon/bookmark.png")}
            />
          </View>

          <View style={styles.bottomContext}>
            <Text style={styles.likesCounter}>{likesCount} Likes</Text>
            <TouchableOpacity onPress={toggleTextVisibility}>
              <Text>
                {showFullText ? textContent : textContent.substring(0, 50) + "... "}
                {showFullText ? "See less" : "See more"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

{/* --------------------------------------Main Content--------------------------------- */}
        <View style={styles.content_view}>
          <View style={styles.header_content_view}>
            <View style={styles.name_content_container}>
              <Image 
                style={styles.profile_content_view}
                source={require("../img/profile3.jpg")}
              />
              <Text style={styles.name_content_view}>Luna</Text>
            </View>
            <Image 
              style={styles.dotIcon}
              source={require("../icon/dotIcon.png")}
            />
          </View>
          
          <Image 
            style={styles.content}
            source={require("../img/profile3.jpg")}
          />

          <View style={styles.bottomIcon_content_container}>
            <View style={styles.bottomIcon_container}>
              <TouchableOpacity onPress={toggleLike}>
                <Image 
                  style={[styles.bottomIcon, liked && styles.redHeart]}
                  source={liked ? require("../icon/red_heart.png") : require("../icon/heart.png")} // Change the heart icon source based on the liked state
                />
              </TouchableOpacity>
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/speech-bubble.png")}
              />
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/send.png")}
              />
            </View>
            <Image 
              style={styles.bottomIcon}
              source={require("../icon/bookmark.png")}
            />
          </View>

          <View style={styles.bottomContext}>
            <Text style={styles.likesCounter}>{likesCount} Likes</Text>
            <TouchableOpacity onPress={toggleTextVisibility}>
              <Text>
                {showFullText ? textContent : textContent.substring(0, 50) + "... "}
                {showFullText ? "See less" : "See more"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

    {/* --------------------------------------Main Content--------------------------------- */}
        <View style={styles.content_view}>
          <View style={styles.header_content_view}>
            <View style={styles.name_content_container}>
              <Image 
                style={styles.profile_content_view}
                source={require("../img/profile5.jpg")}
              />
              <Text style={styles.name_content_view}>Oliver</Text>
            </View>
            <Image 
              style={styles.dotIcon}
              source={require("../icon/dotIcon.png")}
            />
          </View>
          
          <Image 
            style={styles.content}
            source={require("../img/profile5.jpg")}
          />

          <View style={styles.bottomIcon_content_container}>
            <View style={styles.bottomIcon_container}>
              <TouchableOpacity onPress={toggleLike}>
                <Image 
                  style={[styles.bottomIcon, liked && styles.redHeart]}
                  source={liked ? require("../icon/red_heart.png") : require("../icon/heart.png")} // Change the heart icon source based on the liked state
                />
              </TouchableOpacity>
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/speech-bubble.png")}
              />
              <Image 
                style={styles.bottomIcon}
                source={require("../icon/send.png")}
              />
            </View>
            <Image 
              style={styles.bottomIcon}
              source={require("../icon/bookmark.png")}
            />
          </View>

          <View style={styles.bottomContext}>
            <Text style={styles.likesCounter}>{likesCount} Likes</Text>
            <TouchableOpacity onPress={toggleTextVisibility}>
              <Text>
                {showFullText ? textContent : textContent.substring(0, 50) + "... "}
                {showFullText ? "See less" : "See more"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default LongTextWithSeeMore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 15,
    height: 65,
  },
  headerIcon: {
    flexDirection: "row",
  },
  igLogo: {
    width: 120,
    height: 35,
  },
  igLogoI: {
    height: 22,
    width: 22,
    marginRight: 8,
    marginLeft: 12,
  },
  iconContainer: {
    height: 124,
    paddingVertical: 10,
    flexDirection: "row",
  },
  profile_icon_container: {
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  profileIcon: {
    height: 70,
    width: 70,
    borderRadius: 70,
    resizeMode: "cover",
  },
  profileOverlay: {
    position: 'absolute',
    bottom: 30,
    right: 5,
    width: 25,
    height: 25,
    resizeMode: 'cover',
    zIndex: 1, 
  },
  profile_name: {
    marginTop: 5,
  },
  profile_gradiant_container: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
  },
  gradientBorder: {
    position: 'absolute',
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  whiteBackground: {
    position: 'absolute',
    height: 75,
    width: 75,
    borderRadius: 75,
    backgroundColor: "white"
  },
  header_content_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
  },
  name_content_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_content_view: {
    height: 35,
    width: 35,
    borderRadius: 35,
    resizeMode: "cover",
    marginRight: 12,
  },
  name_content_view: {
    fontSize: 17,
    fontWeight: "bold",
  },
  dotIcon: {
    height: 20,
    width: 20,
    resizeMode: "cover",
  },
  redHeart: {
    tintColor: 'red',
  },
  content: {
    height: 420,
    width: "100%",
    resizeMode: "cover",
  },
  content_text_container: {
    backgroundColor: "#1FA1FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 10,
  },
  content_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  content_arrowIcon: {
    width: 25,
    height: 25,
  },
  bottomIcon_content_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  bottomIcon_container: {
    flexDirection: "row",
    paddingLeft: 15,
  },
  bottomIcon: {
    height: 22,
    width: 22,
    marginRight: 15,
  },
  likesCounter: {
    fontWeight: "bold",
  },
  bottomContext: {
    paddingHorizontal: 15,
  },
});
