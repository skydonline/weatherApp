import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather({ weatherData }) {
    const {
        wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message,
    } = styles;
    const {
        0: {
            date,
            day: {
                avgtemp_c,
                maxtemp_c,
                mintemp_c,
                condition: { text },
            },
        },
    } = weatherData;

    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={tempStyles}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    containerStyles={highLowWrapper}
                    message1={"High: 8"}
                    message2={"Low: 6"}
                    message1Styles={highLow}
                    message2Styles={highLow}
                />
            </View>
            <RowText
                containerStyles={bodyWrapper}
                message1={"It's sunny"}
                message2={weatherType["Clear"].message}
                message1Styles={description}
                message2Styles={message}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "pink",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    tempStyles: {
        color: "black",
        fontSize: 48,
    },
    feels: {
        color: "black",
        fontSize: 30,
    },
    highLowWrapper: {
        flexDirection: "row",
    },
    highLow: {
        color: "black",
        fontSize: 20,
    },
    bodyWrapper: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    },
});
