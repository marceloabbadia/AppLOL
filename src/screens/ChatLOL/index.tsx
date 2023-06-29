import { View, Text, Image } from "react-native";
import React, { useContext, useState } from "react";
import {
  GiftedChat,
  IMessage,
  Bubble,
  InputToolbar,
} from "react-native-gifted-chat";
import { styles } from "./styles";
import { DarkModeContext } from "../../Context/darkModelContext";
import { Switch } from "react-native-gesture-handler";

const ChatLOL = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const chatStyle = {
    backgroundColor1: darkMode ? "#000000" : "#6495ED",
    backgroundColor2: darkMode ? "#DAA500" : "#0000FF",
    color: darkMode ? "#FFFFFF" : "#FFFFFF",
  };

  const containerDark = {
    backgroundColor: darkMode ? "#000000" : "#FFFFFF",
  };

  const API_KEY = "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";

  const handleSend = async (newMessages: IMessage[] = []) => {
    try {
      const userMessage = newMessages[0];

      setTyping(true);

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessages)
      );

      const messageText = userMessage.text.toLowerCase();

      const keywords = [
        "Lol",
        "leagueOfLegend",
        "gameLOL",
        "lol",
        "heróis",
        "jogo lol",
      ];

      if (!keywords.some((keyword) => messageText.includes(keyword))) {
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: "O grupo 4 só me autoriza a falar sobre o jogo LOL",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "ChatLoL",
            avatar:
              "https://th.bing.com/th/id/OIP.gjft-5nC_JsdKN9XKdVLogHaIG?w=175&h=191&c=7&r=0&o=5&dpr=2&pid=1.7",
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [botMessage])
        );
        setTyping(false);

        return;
      }

      const systemMessage = {
        role: "system",
        content: messageText,
      };

      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [systemMessage],
      };

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          const response = data.choices[0].message.content;
          return response;
        });
      const recipe = response;
      const botMessage = {
        _id: new Date().getTime() + 1,
        text: recipe,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "ChatLoL",
          avatar:
            "https://steamuserimages-a.akamaihd.net/ugc/783002259658747753/25EAB6756D488062738635B0B319183C6A42E810/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        },
      };
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [botMessage])
      );
      setTyping(false);
    } catch (error) {
      console.log(error);
      setTyping(false);
    }
  };

  return (
    <View style={{ height: "85%", top: 100 }}>
      <View
        style={{
          backgroundColor: "#F5F5F5",
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
        }}
      ></View>
      <Text
        style={{
          fontSize: 40,
          paddingLeft: 15,
          paddingBottom: 10,
          paddingTop: 10,
          fontWeight: "900",
          textAlign: "left",
          backgroundColor: "rgb(218, 165, 0)",
          color: "black",
          borderColor: "black",
          borderWidth: 2,
          borderStyle: "dashed",
        }}
      >
        CHAT-LOL
      </Text>
      <View style={[containerDark, styles.container]}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/fundo.png")}
            style={styles.backgroundImage}
          />
        </View>
      </View>
      <View style={{ height: 450 }}>
        <GiftedChat
          isTyping={typing}
          placeholder="Escreva sua pergunta aqui!"
          alwaysShowSend={true}
          messages={messages}
          onSend={(newMessages) => handleSend(newMessages)}
          user={{ _id: 1 }}
          renderBubble={(props) => (
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: chatStyle.backgroundColor1,
                },
                right: {
                  backgroundColor: chatStyle.backgroundColor2,
                },
              }}
              textStyle={{
                left: {
                  color: chatStyle.color,
                },
                right: {
                  color: chatStyle.color,
                },
              }}
            />
          )}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 10,
          right: 15,
        }}
      >
        <Text>DarkMode</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#4B0082" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

export default ChatLOL;
