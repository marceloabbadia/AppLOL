import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { styles } from "./styles";

const ChatLOL = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const API_KEY = "sua chave criada no chat GPT";

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
        "leagueOfLegions",
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
    }
  };

  return (
    <View style={{ height: "90%" }}>
      <View
        style={{
          backgroundColor: "#F5F5F5",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
          marginTop: 100,
          marginBottom: 5,
        }}
      ></View>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "rgb(218, 165, 0)",
          color: "black",
          borderColor: "black",
          borderWidth: 2,
          borderStyle: "dashed",
        }}
      >
        CHAT - L O L
      </Text>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/fundo.png")}
            style={styles.backgroundImage}
          />
        </View>
      </View>
      <GiftedChat
        isTyping={typing}
        placeholder="Escreva sua pergunta aqui!"
        alwaysShowSend={true}
        messages={messages}
        onSend={(newMessages) => handleSend(newMessages)}
        user={{ _id: 1 }}
      />
    </View>
  );
};

export default ChatLOL;
