import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AppState } from "../../provider/AppProvider";

export const AvatarHappy = ({ rotation }) => {

    const { hovered, setIsHovered } = AppState()
    const [characterHovered, setCharacterHovered] = useState(false);

return (
    <Box>
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="175"
        height="175"
        viewBox="0 0 216.115 300.083"
        onMouseOver={() => {
            setIsHovered(true)
            setCharacterHovered(true)
        }}
        onMouseOut={() => {
            setIsHovered(false)
            setCharacterHovered(false);
        }}
    >
        <g id="Face" transform="translate(-131.501 -205.338)">
        <g id="Face-2" data-name="Face">
            <path
            id="Path_424"
            data-name="Path 424"
            d="M808.6,214.315l-1.86-.658a8.375,8.375,0,0,0-5.341-1.826c-3.013.164-6.71,2.483-6.71,2.483-3.476,1-5.3,8.048-9.514,9.052-3.393.808-7.348-3.711-10.782-4.448l1.268.986c-1.587.746-4.517.648-5.074,2.631l-1.268-.329v.329l.951.329c-5.222.648-.586-3.254,1.9-3.946v-.329l-7.928-.329-4.123.329-.634-.329c-1.659-.8-4.735.559-6.024,1.373a11.4,11.4,0,0,0-4.931,7.506c-.728,3.431-.427,7.441-4.267,8.559-2.206.643-3.876-1.484-5.708-2.356-3.368-1.6-7.725-2.793-11.417-1.929v.329l3.488.329c-.862,2.941-5.485,2.9-7.928,2.631l.951-1.644c-4.32,3.156-3.751,8.124-5.074,12.824l-.634.329c-4.649-.667-3.576,3.9-6.377,5.531-2.1,1.224-5.1.085-6.942,2.032l.951-.329c.391,1.216.4,3.555-.634,3.288l.317.987-1.268.986h-.317l-.951-1.644h-.634c-1.721,4.685.765,9.828,2.32,14.14.511,1.418,1.744,3.745,1.524,5.261-.5,3.434-4.378,3.344-6.7,4.239-3.078,1.186-5.364,4.89-5.457,8.257-.077,2.794.521,7.73,1.748,10.194,2.748,5.519,8.079,9.746,10.428,15.549,3.593,8.88,3.645,18.552,4.7,27.856.692,6.093,1.545,6.914,1.545,13.05V368.1l-.833,12.631a4.03,4.03,0,0,0-.712-3.4c-1.239-1.385-5.216-2.818-5.216-2.818s1.918,1.04,3.887,4.567c1.757,3.147,1.333,8.22,1.329,9.1-.078,14.107,1.545,41.189,1.545,41.189,1.241,2.555,1.064,6.076,1.8,8.878a127.541,127.541,0,0,0,6.393,18.743c3.992,9.124,10.213,16.849,16.447,24.333,7.909,9.5,16.411,19.47,27.091,25.629,1.93,1.115,21.855,4.709,21.855,4.709s18.981.552,22.225,0c2.118-.362,4.253.2,6.343-.474,6.688-2.151,12.92-7.655,18.393-11.982,10.846-8.579,20.908-16.741,28.893-28.409a76.408,76.408,0,0,0,8.423-15.45c1.589-4.2,2.575-9.191,4.687-13.137a122.928,122.928,0,0,0,4.96-18.025,164.621,164.621,0,0,0,2.559-18.571s-2.1-9.809,0-13.332a22.424,22.424,0,0,0,1.579-4.1,94.274,94.274,0,0,1,1.446-10.437c.492-2.334.5-5.164.828-7.563a138.565,138.565,0,0,1,5.226-22.031c.815-2.668,1.294-5.844,2.477-8.347,1.062-2.25,3.425-4.087,4.624-6.45,2.255-4.448,3.133-9.185,5.423-13.469,1.529-2.856,4.05-5.457,5.1-8.563.691-2.05,1.449-4.208.384-6.247-.774-1.478-2.562-2.53-2.756-4.275-.3-2.71.679-5.768.666-8.549-.006-1.721-.9-3.688-.58-5.355.666-3.508,2.778-7.871.989-11.415a6.61,6.61,0,0,0-5.134-3.548c-1.5-.148-3.561.627-4.456-1.092-1.284-2.478,1.6-5.849.526-8.507-.894-2.216-4.11-2.607-5.378-4.616-1.7-2.694-1.3-6.384-3.295-9.188a11.076,11.076,0,0,0-7.088-4.164c-.974-.188-2.214.106-3.083-.461-1.82-1.187-1.186-2.371-3.26-3.937h0c-2.965-.729-4.973-4.1-7.624-4.555-2.994-.509-4.535,1.273-7.268,1.642-1.288.174-2.118-1.157-3.213-1.66-1.915-.88-4.338.229-5.991-.887-1.782-1.2-1.731-3.119-2.255-5.007-1.335-4.805-2.474-9.407-7.9-9.921l3.488.986-.317,1.973c-2.011-.839-4.823-1.955-6.977-1.315-.065-.72-3.293-1.413-3.384-.658-4.744.014-5.74,4.269-9.936,5.552-1.259.385-6.834-.5-8.214-.988-1.468-.516-1.535-2.3-2.045-3.577C813.744,218.726,812.055,213.861,808.6,214.315Z"
            transform="translate(-562.272 -6.484)"
            fill="#31231e"
            />
            <path
            id="Path_604"
            data-name="Path 604"
            d="M895.078,283.489l.951-.329v2.3l.951-.329-.634.986.317.986.951.329-.317.987.317.658.317.329.634-.329.634,1.644.951-.329,1.268,2.3.951-.329v1.644h.317l.317-.987h.317v.987h.951l-.951.658V295l1.9-.986-1.268.986v.329l.317.658v.329h1.9l-.317-.658.951.329-1.268.658-.317,1.315h.317l.317-.658.634.329-.634,3.617h-.317V299.6c-.87-.5-1.367-.968-.951-1.973V297.3l-.634-.658-.317,4.275.634-1.315h.317l-.634,3.288-.951-.329-2.22.329v.329h1.9l-3.488.329v.329l.951.329v.329h-2.22l.317,1.644h-.317l-.317-.658-.634.658-1.268-.658v-.329l1.268-.658-3.171,1.315-1.586-.986h-1.268L890,306.178l-3.171-.329v.329h.634v.329c-1.965-.728-4.746-1.359-6.66-.329l-2.22-.329v-.329l.951-.329v-.329l-1.9.658v-1.315l-1.268-.658-2.537-.329v3.617c-.467.669-.825,1.018-.951,0h-.317l.317,1.973-.634-.329v.329l.634.986.317-.986h.951c.044,1.982.077,3.261,1.9,4.275l.317-.986h.317l-1.586,1.644.317.986.634-.658,1.268.658v.986h.634l-.317-.658.951.329v.329l-.951.658,1.268-.329.634,2.631,1.9.329v-.986h.317v1.315l3.488.329v.329l-1.268.986h.634l-.951.658v.658h.634l1.269-.987v-.329l-.951-.329v-.329l1.268.986.951-.329-.951,1.973v.329l1.586.658c.433-1.389.777-1.814,2.22-1.644v.329H888.1l-.317,1.315v.329l1.9-.658-.951.986v.329c.978-.158,1.431-.272,1.586-1.315l1.586.658-1.586.986h1.586l.317-.986,1.586,1.315.951.986c.948,0,2.013,1.5,2.22-.329l1.269.658-.317-.658h.317v1.644h1.9l-.951-.329v-.329h2.22l-.317,1.315-.317-.658h-.317l.317,1.644h.317l.634-.658-.317-.986.634,1.315h.951v.329l-.951,1.644.951-1.315h.951v-.986l1.9,2.3.317-.986c.538.632.925.859,0,.986v.329l.951.329.634-.658c.755,1.88,1.735,1.676,3.488,1.644l-.317-.658h.317l.951,1.315.317.329.634-.329-1.268.329v.329c.92.335,1.367.4,1.586-.658l3.171,1.315v.329h-.634v.329h1.269l1.268-1.644v.986l1.586-.658c1.148.5,2.886,1.114,3.806,0l5.391,1.315h.317V333.8l.951.986,1.268-.329-.317-.658.951.658,1.586-1.644-.634.658v.329l1.586.658h.317l-.317-1.315h.317l.317.986h.317v-.986h3.488l-.317-1.315h3.488l-.317-1.315-1.268.658,2.537-.986v.329l-.951-.329.317,1.644h2.854V331.5l-.951-.986h.951v-.329h-.951l-.951,1.315v-1.973l.951.329-.317-.658h.317l2.22.658.634-.658,1.586.329V329.2l-.634.329V329.2l3.488-1.315-.951-.329c.72-.576,1.246-1.135,1.9-.329l.634-.658c1.446-.288,2.2-2.167,2.22-3.617l.951,1.644-.317.329-.951-.329v.329l.634.329h-.634l1.269.987-.634-.987.951-.329,1.269-2.3-.634-3.288h.317l.317,1.973h.317l1.268-1.644v-.329l-1.268.658v-2.631l1.268.658.951-.658v-.329c-1.11,0-.536-.863-.317-1.644-.7.073-1.646-.106-.634-.658l.951-3.617-1.586,2.631.317-.987-1.586.329v-1.644h-.634l.317.986-2.537-.986v-.329l.951-.329v-.329l-1.268-.329H954.7l-3.488-.658.634.986-1.268.658-.317-1.315-.634.329-.317-.986-1.268-.329h-.317l-.634.658c-1.047-1.041-2.68-.28-3.806.329l.317-.986-1.586.329v.329l.951.329v.329l-2.854-.658.634-.658H937.89l.634-.986c-.78.149-1.268.274-1.268-.658l-1.586-.329.317.987-.634-1.315h-.317v.986l-1.269-.658-.634,1.315v-1.644c-.786.169-.815.2-.634.986h-1.269v-.329h.634v-.329H930.6l1.586-.658v-.329l-3.171-.986.317-.658-3.488-1.315-1.586.329-.317-.329.317-.658-2.854-.986h-.317v1.315h-.317v-.986h-.317v.986H919.18v-.329l.634-1.315H919.5c.054,1.538-1.678,1.965-2.854,1.644l.317-2.3h.951l-.317-.986.634-.329.951.658c-1.015-.975-1.592-.488-2.22.658l.317-1.973-2.537-.329v2.631h-.951l.317-1.315-.951-.329.634-.329v-.329l-1.586-.329v-.986l.634.329.951-.658v.329l-.634.329.317.329.951-.329-.317-1.315-1.268.329-1.268-.658v-.329l1.268-.986h-.317V295H912.2l.317-1.315-1.268.658-.317-1.315c.989.347,1.985.586,2.22-.658h-.317l-1.268.658-.634-.986-.951.329v-1.973l2.537-.329-.951.658-1.586-.986-.317-2.631.317-.329.634.329-.634-1.644.317-1.644h-.317l-.317.658-.317-1.644.951.329-1.268-1.315.634-2.3v-.329l-.951-1.644v-.329h.634v-.329h-.634v-.329h.634c-.824-3.465-.771-7.537-3.141-10.4-3.533-4.264-9.555-1.238-11.38,3.165-1.979,4.773.139,9.36.25,14.139M864,264.417l.317.329Z"
            transform="translate(-672.962 -39.451)"
            fill="#4e3b36"
            />
            <path
            id="Path_675"
            data-name="Path 675"
            d="M851.981,293.362l.317,2.959.317.329.634-.329-.317.986,1.268-.329.951,1.644-.634-.658,1.269-.987v-.329l-.951-.329v-.329c1.73-.243,3.042-1.018,2.537-2.959h-.317l-.634.986.951-2.631,2.22.329v-.329l-.634-.986,1.268.329-.317-.658.951.329.951-3.617-.317-.658-.317-.329-.634.329-.317-.986a2.047,2.047,0,0,0-1.586-3.213c-4.985-.948-10.776,2.787-8.467,8.475A7.237,7.237,0,0,0,851.981,293.362Z"
            transform="translate(-690.937 -57.101)"
            fill="#4e3b36"
            />
            <path
            id="Path_696"
            data-name="Path 696"
            d="M1100.792,305.471l1.269,1.644,2.537.329,2.22-.986.951,1.315-.317-.987v-.329h2.537l.951-.986a14.373,14.373,0,0,0-1.119-10.851c-1.639-2.97-4.351-3.59-6.777-1.036C1099.9,296.9,1100.84,301.438,1100.792,305.471Z"
            transform="matrix(0.839, -0.545, 0.545, 0.839, -879.848, 569.327)"
            fill="#4e3b36"
            />
            <path
            id="Path_738"
            data-name="Path 738"
            d="M1211.22,316.975l-.317.987-1.268,1.315.634.986-1.268-.329.317.986,1.586,1.973-.951-.658,1.269,2.3h-.951v.986h1.269l-.951.987,1.269.987,1.586-.329-.317-.658.951.329,1.269-.329,8.562-6.577C1222.313,313.609,1215.368,316.709,1211.22,316.975Z"
            transform="translate(-938.647 -102.833)"
            fill="#4e3b36"
            />
            <path
            id="Path_1101"
            data-name="Path 1101"
            d="M730.333,518.644l.106.219-.106-.219m14.8,44.83.951-.329v8.878h.317l-.951.986.634.987v.329c-1.075.972-1.052,4.965,0,5.919v.658l-1.586,5.59.951,2.3-1.9-.986v.329c2.965.4-.559,9.948.634,10.194v.329l-1.269.329.317,1.973h.634l-1.268,4.6.634,1.315-1.586-.986.634.658c-.3.918-.6,1.126.317,1.315l-.634,1.644V612.8l.951-.329-.951,1.644.951,2.631h-.634l.951,11.838-1.9-6.905V617.4l-.028-8.55-.289-4.6c-.6-.557-.7-2.485,0-2.959v-4.275c-2.881-3.943,1.451-11.772-1.269-15.784-1.053,3.728-.026,8.271-.392,12.154a134.467,134.467,0,0,0,1.606,35.2c1.045,5.928,2.7,12.091,6.678,16.7,4.1,4.757,8.931,4.777,14.4,6.385,2.185.643,3.847,2.284,5.936,2.89l.634.658.317.987.634-1.973h.317c4.8,8.3,6.225,18.312,9.889,27.289,2.786,6.826,5.776,13.567,8.629,20.391.995,2.377,2.721,4.788,3.363,7.234l.951-.329c1.82,3.065,8.508,3.943,11.734,4.331a137.693,137.693,0,0,0,31.4-.056l-.317-.658c3.051-.352,4.51-3.088,5.921-5.59,2.2-3.916,4.37-8.349,7.018-11.933,1.322-1.786,3.948-4.89,3.869-7.139l2.22-1.315v-1.644l3.3-5.893,6.216-15.152,1.269.329v-.986l1.586.986c1.23-1.4,2.864-2.93,4.757-2.959,2.331-2.11,7.633-.94,10.6-1.428,5.724-.942,12.254-8.725,12.552-14.684H894.5l-.634.986-.951-.658c.339,1.274.447,2.259-.951,2.631l.634.986-.317.658-1.9,1.315,1.269-2.631-.317-.658.634-1.973.634-2.3.951.329c-.089-2.241.767-8.55,2.22-10.194l-.634-2.3,1.268-2.959v-.329l.317-3.617c-.885-1.367-.358-5.212-.333-6.935.086-5.678-1.329-11.885.333-17.4H896.4l-.634.658-.317-2.3c.872-.491,1.113-4.832.634-5.59h1.268c-.3-1.109-.06-2.966-1.268-2.959l.951-.658c.254-1,1.43-2.122,0-2.3v-.329l.951-1.644-.634-.986h.317l.634.658a12.031,12.031,0,0,1,1.269-7.563V570.38l.634.329.634-2.3h-.634c1.215-1.8.374-3.925.133-5.919-.441-3.63-.086-7.227-.666-10.851-1.091-6.834-.637-13.875-5.55-19.388-3.076-3.45-7.307-3.588-11.359-4.668-10.554-2.813-22.706-4.04-33.615-4.54-14.914-.683-29.816-2.543-44.715-3.6-6.433-.457-12.917.048-19.345-.387-8.219-.557-20.483-3.04-26.943,3.659-10.049,10.42-6.55,28.592-13.015,40.762M931.92,518.425v1.644h.317Z"
            transform="translate(-584.621 -211.39)"
            fill="#4e3b36"
            />
            <path
            id="Path_1105"
            data-name="Path 1105"
            d="M807.491,524.821H805.9l.317,1.644-.634,1.315h1.269l-.317,1.315.951-.658.634,1.315-.634-.658h-.317l.317.986-.951-.329.317.658h-.317l-.634-.658V531.4h.317l-.317-.986.634.658,1.586-.658v.329h-.951l.317,6.248-.951-.658c-.227.713-.41,1,.317.986l-.317,3.946h-.951v.329l1.9-.329-.317.986-1.586-.329.317.986.634-.329.317,9.865c4.944-1.024,9.5-3.481,14.588-4.19,5.133-.715,10.609.463,15.539,1.853,4.7,1.326,12.406,6.373,6.025,11.544l.317.986-.951-.329,4.757,2.631-.317.658,1.586,1.644,2.537-.329c-1.211,2.491,1.651,6.727,2.262,9.4,1.19,5.2.855,10.945.908,16.252.02,2.038-.539,4.3,0,6.248h-.634l-.951,5.919.634-.329v.329l-1.268,1.315h.634c-2.2,2.537-2.451,3.25-5.708,3.288.022-1.064-.247-1.271-1.268-1.315l.317-.658c-1.4,0-.112-1.8,0-2.631.238-1.776.53-5.582-.951-6.577a19.5,19.5,0,0,1,.621,4.932c-.394,7.322-8.724,5.148-12.989,3.946,1.579-3.155,4.563-5,4.757-8.878h-.317l-1.586,4.275-1.268.329.317-1.315c-3.206-.256-4.678,2.614-7.611,3.357-2.837.719-7.676-1.444-10.465-2.17-1.2-.311-2.631.071-3.551-.962-1.851-2.08-1.84-5.821-1.84-8.445h-.317l.951,8.878c-3.055-.757-10.034-1.849-10.688-5.919-.248-1.545.816-3.723,1.174-5.261h-.317l-1.586,5.261h-.317l-1.268-1.644-.143-4.6,3.314-5.59c1.648-.452,2.523-2.061,3.805-3.16a30.431,30.431,0,0,1,7.611-4.686c.943-.408,3.2-1.032,2.537-2.019l.951-.329c-.023-1.138.047-2.114,1.268-2.3a5.3,5.3,0,0,1,3.171-3.288l1.586-1.644-.317-.987.317-.329.951.329a4.27,4.27,0,0,1,2.854-2.959l-.634-.658,9.2-1.644v-.987l-4.44-1.644h-2.854l-7.928-.986-10.465,3.288-5.708,3.617.634,1.973-1.269-.329.634,1.644-1.586-1.315.951,2.3v.329h-1.268l.317,1.973h-.634l.317.986h-.951l.317.987-1.268.987,1.268-.658-1.586,2.631.634-.658h.317l-.951.986.317,2.3-.951.329c.144.808.264,1.315-.634,1.315l.317.987c-1.17.659-.338,2.142.317,2.959l-1.268-.329.317,2.3-1.268,3.617c.532.276.7,2.894-.317,2.631v.986l.951-.329-1.9,3.617.634.987h-.951v.329l.951.658v.329l-.951.986.634-.329v.329l-.951,6.248.634.329.951-.658v.986l-1.268,1.315h.317v-.658h.317v1.315l-.951-.329.951.987-.317,2.959-.951-.329v.329l.634,1.315h-1.269l.634,1.973-1.268-.329v.329c.782.405.369,1.164-.317.987l.634.658v.329l-1.586.658.951.986-.951.329v.329l.951.658-.634.987L791,621.5l.951.658v.329l-.951.658,1.268.329v.329h-.951L791,627.744l1.268,4.275h-.951v.329l1.268.329-.634,1.644,1.9,2.631-.317,1.315.634,1.973h.317l.634-.658c-.066,1.2.658,3.757,1.9,3.946l-.317.987.634.658,4.123,3.617a2.71,2.71,0,0,0,2.22,2.3v-.329h-.634v-.329l6.343,1.973,4.219,6.248,4.251,14.8,6.435,14.468.951-.329v2.3l2.854.986-.317-.658h.317l1.586.658-.634-2.3,1.269-.658-.634-.986.951.329v-.329c-1.235-1.351-2.222-4.7-2.22-6.577h-.634c-.125-1.793-1.534-6.786-2.854-7.892l-.317-5.59.634,1.644.951-.329c1.9,4.29,6.711,8.046,10.123,11.088,4.218,3.762,8.379,7.339,13.661,9.378,17.2,6.642,35-5.034,45.667-18.493v1.973h-.634c.193,5.249-3.682,11.742-5.708,16.441h1.268l-.951.658v.329l.951-.329-.317,1.315,2.537-.329c1.081-3.394,3.993-6.129,5.705-9.207,3.276-5.88,4.687-16.829,11.1-20.058l.317-1.644-.634-.329-.951.329.317-.658h-.317l-.317.658.634.986c-2.058.164-3.65,1.708-5.708,1.668-1.408-.028-2.991-1.422-4.294-.437-1.725,1.3-2.848,3.9-4.3,5.543A52.092,52.092,0,0,1,882.779,677.2c-2.16,1.33-4.823,3.2-7.424,2.823.863-1.12,2.144-3.42.27-4.31-3.993-1.9-10-.4-14.223-.3-4.649.115-9.672-1.444-14.271-2.216-2.652-.445-7.4-1.68-7.611,2.221-6.443-2.163-11.476-9.247-15.157-14.8-1.049-1.582-1.627-3.722-2.9-5.114-1.217-1.325-3.8-.061-5.406-.5-2.226-.613-3.511-3.023-5.074-4.578.74-.334.289-.467-.317-.658v-.329h.951v-.329c-.783-1.149-.536-2.525.951-2.631,1.617-3.279,7.793-3.185,10.782-2.989,8.912.583,20.468,7.23,29.176,3.647v-.329c-3.778-.979-6-3.083-8.245-6.248l-.253-2.947.571-6.589h.634l1.586-3.288c-.072-2.081,3.768-5.318,5.391-6.248h1.586l-.634.658v.329c1.553,2.724-2.09,5.015-1.9,7.892-2.832,2.476.426,6.774,2.537,8.295a13.733,13.733,0,0,0,11.1,1.746c1.627-.536,3.089-1.938,4.757-2.149l1.218-6.811-1.535-6.013v-.329H868.7v-.329c.739-.334.289-.467-.317-.658v-.986l.634.658h.317l1.268-1.973v.986c3.378-.934,3.444,3.752,5.391,5.261.038,1.9,1.265,3.711,1.678,5.59a13.86,13.86,0,0,1-.726,8.221h.634l-1.586,1.973c-.368,2.047-3.206,3.161-4.757,4.275.768,2.426,4.678,1.644,6.66,1.644,3.948,0,7.8-.8,11.734-.974,3.143-.143,6.4.348,9.514-.013,1.05,1.246,7.265,2.286,8.88,1.973l3.488,5.261h.951l-1.586.658v.329h.634v.329h-.951v.329l.634.329-1.9.329v.329l.951.987.951.329,1.586-.329.317-3.288,1.586.658.634,1.315V658l-.634-.329,3.488-1.315-.317-.658.951.329.634-.658c.124-1.044.955-1.283,1.9-1.315l.951-1.315.634-1.315-.317.658h.317l.317-1.973.634.329h.317l-.317-.986,1.269-.658h.317l-.317-.986.317-.986,2.22-.987.317-1.644-.634-.329v-.329l.634-1.644.951-.329v-4.6h.634v-.329l-.634-.658.634.329v-.329l-.634-2.631-.634-2.3.951-.658L928,630.046v-3.617l-.951.329-.317-1.315,1.269.329-1.586-2.959.951.329-.317-1.315H928V621.5l-1.269-.329v-.658l.951-.987c-1.31.272-.482-1.851.317-1.644-.146-1.08-.352-2.761.951-2.959L928,613.6h1.268l-.951-1.315.951-.329-.634-.986c1.167-2.026-.159-5.4-.634-7.563h-.317l-1.9,2.631-.951-6.248h-.317c.127,2.065,1.551,4.483.761,6.547-1.177,3.07-8.518,4.16-11.226,3.647.945-4.234,2.385-7.7,1.586-12.167h-.317a23.376,23.376,0,0,1-2.22,12.167l-1.268-.329c.615-1.376.029-2.57-1.586-1.867-1.256.547-2.175,1.645-3.488,2.114-2.768.987-6.593.989-9.514,1.073-1.2.034-2.7.745-3.8.095-6.216-3.657-4.186-14.911.022-19.114,3.526-3.522,7.418-3.674,12.022-3.674v-.329c-2.648,0-5.4-.276-7.928.688-5.9,2.246-9.143,9.125-8.417,15.424.349,3.023,2.461,5.128,3.342,7.892-3.644.7-10.154,1.209-11.816-3.288-.7-1.9-.067-4.3.082-6.248h-.317c-.767,2.392.748,10.388-2.537,9.536l-.317,1.315-2.854-1.644H874.4l.317.658H874.4a23.645,23.645,0,0,1-2.2-10.194c.006-2.261.831-4.7.295-6.905h.634l.951-12.167c.831.006.466-.505,0-.986v-.329l.951-2.631c.771-.525,2.239-3.722.951-3.946l.317-1.315,1.586.329.317-1.644h-1.269v-.658l2.22.329.317-.658,3.171-4.275a5.752,5.752,0,0,0,4.44-2.959V565.6h.317l.634-1.644-.634.329v-.329l-.317-2.631c.561-1.541.831-3.233,2.023-4.43,1.95-1.956,5.543-2.677,8.125-3.161,5.87-1.1,11.864-1.888,17.759-.415,3.114.778,6.327,2.973,9.514,3.073l-.634-.658v-1.644h1.586v-.329h-.951l.634-1.315.317.658h.317l-1.268-1.644,1.586.329-1.269-1.315,1.269-3.288-.951.658-.951-.329.634-2.959.317,1.973h.317l.634-1.315-.634.329-.317-1.644h.634l-.951-2.3h.317v.658h.317l-.317-1.315.951.329-1.269-.658v-1.644l1.269-1.644-.951.658h-.317l-.634-.986.951.329v-1.644l1.268.329h.317l-.634-1.973.951-.658h-.317l-.317.658-3.171-1.973c-2.3.105-4.433-1.117-6.66-1.558-6.054-1.2-12.108-2.846-18.209-3.623-11.854-1.51-23.794-2.223-35.7-3.069-9.188-.653-18.373-1.771-27.59-1.632-6.838.1-13.745-.613-20.613-.3C812.044,521.986,808.488,522.269,807.491,524.821Z"
            transform="translate(-626.206 -213.188)"
            fill="#774d44"
            />
            <path
            id="Path_2174"
            data-name="Path 2174"
            d="M1100.792,305.471l1.269,1.644,2.537.329,2.22-.986.951,1.315-.317-.987v-.329h2.537l.951-.986a14.373,14.373,0,0,0-1.119-10.851c-1.639-2.97-4.351-3.59-6.777-1.036C1099.9,296.9,1100.84,301.438,1100.792,305.471Z"
            transform="translate(-1001.209 270.019) rotate(-16)"
            fill="#4e3b36"
            />
            <path
            id="Path_2175"
            data-name="Path 2175"
            d="M1100.792,305.471l1.269,1.644,2.537.329,2.22-.986.951,1.315-.317-.987v-.329h2.537l.951-.986a14.373,14.373,0,0,0-1.119-10.851c-1.639-2.97-4.351-3.59-6.777-1.036C1099.9,296.9,1100.84,301.438,1100.792,305.471Z"
            transform="translate(-781.971 -51.484)"
            fill="#4e3b36"
            />
            <path
            id="Nose"
            d="M771,861v1.315h.317L771,861m62.474,0c-1.829,4.077.837,9.722,4.44,11.731,8.67,4.834,26.991,2.782,23.15-11.4h-.634c-1.253,2.768-2.1,5.516-4.757,7.236-7.3,4.726-19.184,1.464-21.247-7.565Z"
            transform="translate(-612.273 -443.008)"
            fill="#31231e"
            />
        </g>
        <g id="RIght_Ear" data-name="RIght Ear">
            <path
            id="Path_2179"
            data-name="Path 2179"
            d="M4.314,53.211c1.216.212,3.415-.54,5.255-1.983C12.805,48.7,13.585,41.889,14.989,34c.433-2.428,1.971-8.5,1.971-11.5,0-2.942,1.191-6.524,1.478-9.2a41.065,41.065,0,0,0,0-10.511C18.187.84,16.236,0,14,0c-1.566,0-2.44.545-4.434,1.971-1.367.974-2.4,3.971-3.81,5.9S2.125,16.643,1,20.352C.252,22.794.011,43.673.011,43.673S-.436,52.384,4.314,53.211Z"
            transform="matrix(-0.996, 0.087, -0.087, -0.996, 332.959, 425.18)"
            fill="#4e3b36"
            />
            <path
            id="Path_2180"
            data-name="Path 2180"
            d="M4.562,22.022c.193-1.529,1.981-6.374,1.981-8.26,0-1.853,2.14-8.016,1.981-9.706a16.547,16.547,0,0,0,0-2.86C8.434.662,7.859,0,7.369,0c-.7,0-1.916,2.641-2.807,3.539-.611.613-1.074,2.5-1.7,3.716A53.006,53.006,0,0,0,.733,15.117C.4,16.656.292,29.807.292,29.807s-.658,5.786,0,7.86c.119.4.511-3.811,2.568-8.26A31.123,31.123,0,0,0,4.562,22.022Z"
            transform="matrix(-0.996, 0.087, -0.087, -0.996, 330.587, 414.87)"
            fill="#6d4840"
            />
            <path
            id="Path_2181"
            data-name="Path 2181"
            d="M3.745,13.112c0-1.853,2.14-8.016,1.981-9.706a16.547,16.547,0,0,0,0-2.86C5.637.012,4.9,0,4.407,0c-.7,0-2.1,1.985-2.986,2.884C.811,3.5.691,5.39.062,6.6S3.745,14.8,3.745,13.112Z"
            transform="matrix(0.719, 0.695, -0.695, 0.719, 322.844, 370.492)"
            fill="#6d4840"
            />
        </g>
        <g id="Left_Ear" data-name="Left Ear">
            <path
            id="Path_2176"
            data-name="Path 2176"
            d="M6.764,1.736c1.216-.212,3.415.54,5.255,1.983,3.236,2.527,4.016,9.338,5.42,17.232.433,2.428,1.971,8.5,1.971,11.5,0,2.942,1.191,6.524,1.478,9.2a41.065,41.065,0,0,1,0,10.511c-.251,1.952-2.2,2.792-4.434,2.792-1.566,0-2.44-.545-4.434-1.971-1.367-.974-2.4-3.971-3.81-5.9S4.574,38.3,3.446,34.595c-.745-2.442-.985-23.321-.985-23.321S2.014,2.563,6.764,1.736Z"
            transform="matrix(0.996, 0.087, -0.087, 0.996, 136.153, 365.648)"
            fill="#4e3b36"
            />
            <path
            id="Path_2177"
            data-name="Path 2177"
            d="M6.725,15.517c.193,1.529,1.981,6.374,1.981,8.26,0,1.853,2.14,8.016,1.981,9.706a16.547,16.547,0,0,1,0,2.86c-.089.534-.665,1.2-1.155,1.2-.7,0-1.916-2.641-2.807-3.539-.611-.613-1.074-2.5-1.7-3.716a53.006,53.006,0,0,1-2.128-7.862c-.333-1.538-.44-14.69-.44-14.69s-.658-5.786,0-7.86c.119-.4.511,3.811,2.568,8.26A31.123,31.123,0,0,1,6.725,15.517Z"
            transform="matrix(0.996, 0.087, -0.087, 0.996, 135.58, 375.712)"
            fill="#6d4840"
            />
            <path
            id="Path_2178"
            data-name="Path 2178"
            d="M8.705,23.777c0,1.853,2.14,8.016,1.981,9.706a16.547,16.547,0,0,1,0,2.86c-.089.534-.829.546-1.319.546-.7,0-2.1-1.985-2.986-2.884-.611-.613-.73-2.506-1.359-3.721S8.705,22.091,8.705,23.777Z"
            transform="matrix(-0.719, 0.695, -0.695, -0.719, 172.963, 389.255)"
            fill="#6d4840"
            />
        </g>
        <motion.g id="Eyebrows"
            animate={{
                y: hovered ? -12 : characterHovered ? 6 : 0
            }}
        >
            <path
            id="Left"
            d="M820.741,618.543c5.659-1.215,10.307-5.447,16.173-6.187,4.628-.584,9.051-1.128,13.636.1,3.019.806,7.4,3.888,10.519,3.337,2.158-.382,3.9-3.383,2.767-5.454-1.267-2.317-4.177-2.494-6.309-3.457-8.4-3.8-19.458-2.5-27.59,1.346C826.542,609.829,817.832,613.656,820.741,618.543Z"
            transform="translate(-646.116 -268.437)"
            fill="#31231e"
            />
            <path
            id="Right"
            d="M1115.6,618.214c-4.522.53-10.221.612-14.258,3.175-2.638,1.677-2.163,6.02.939,6.76,1.976.471,4.453-1.108,6.343-1.607,5.125-1.352,9.986-2.647,15.222-1.048a37.878,37.878,0,0,1,12.672,6.7c1.437,1.1,3.358,3.888,5.344,3.512,1.392-.264,1.4-2.17,1.012-3.282-.92-2.663-3.422-5.254-5.391-7.047A28.4,28.4,0,0,0,1115.6,618.214Z"
            transform="translate(-836.105 -278.132)"
            fill="#31231e"
            />
        </motion.g>

        {characterHovered ? (
            <>
                <g id="Left_Eye" data-name="Left Eye" transform="translate(79 7)">
                    <path id="Left-2" data-name="Left" d="M820.578,611.467c4.088-.6,7.446-2.682,11.684-3.047,3.343-.287,6.692-1.4,10-.8,7.034.707,4.878,1.01,7.13.739.051-.006,3.106.048,2.314-.938-.915-1.141-3.018-1.228-4.558-1.7-6.07-1.87-14.057-1.23-19.931.663C824.769,607.175,818.477,609.06,820.578,611.467Z" transform="matrix(0.899, -0.438, 0.438, 0.899, -815.603, 190.665)" fill="#31231e"/>
                    <path id="Left-3" data-name="Left" d="M820.637,611.467c4.654-.6,8.476-2.682,13.3-3.047,3.806-.287,7.617-1.4,11.388-.8,8.007.707,5.553,1.01,8.117.739.059-.006,3.535.048,2.635-.938-1.042-1.141-3.435-1.228-5.188-1.7-6.91-1.87-16-1.23-22.689.663C825.408,607.175,818.245,609.06,820.637,611.467Z" transform="translate(-14.4 -643.498) rotate(42)" fill="#31231e"/>
                </g>
                <g id="RightEye" transform="translate(-2 3)">
                    <path id="Left-4" data-name="Left" d="M820.64,611.467c4.687-.6,8.536-2.682,13.4-3.047,3.833-.287,7.672-1.4,11.47-.8,8.064.707,5.593,1.01,8.175.739.059-.006,3.561.048,2.653-.938-1.049-1.141-3.46-1.228-5.225-1.7-6.959-1.87-16.116-1.23-22.851.663C825.445,607.175,818.231,609.06,820.64,611.467Z" transform="matrix(0.899, -0.438, 0.438, 0.899, -819.774, 192.7)" fill="#31231e"/>
                    <path id="Left-5" data-name="Left" d="M820.578,611.467c4.088-.6,7.446-2.682,11.684-3.047,3.343-.287,6.692-1.4,10-.8,7.034.707,4.878,1.01,7.13.739.051-.006,3.106.048,2.314-.938-.915-1.141-3.018-1.228-4.558-1.7-6.07-1.87-14.057-1.23-19.931.663C824.769,607.175,818.477,609.06,820.578,611.467Z" transform="translate(-11.143 -640.565) rotate(42)" fill="#31231e"/>
                </g>
            </>
        ): (
            <>
                <g id="Right_Eye" data-name="Right Eye">
                    <path
                    id="Path_1353"
                    data-name="Path 1353"
                    d="M1073.511,725.416c2.046-14.578,20.125-21.615,31.976-15.841,7.221,3.517,10.709,10.329,13.056,17.814,1.218-1.483.593-3.166.292-4.932-.844-4.919-4.218-8.988-7.9-11.977-8.81-7.146-22.38-6.375-30.761,1.188a24.981,24.981,0,0,0-6.574,9.474C1073.083,722.488,1072.186,724.378,1073.511,725.416Z"
                    transform="translate(-820.438 -336.026)"
                    fill="#31231e"
                    />
                    <path
                    id="Path_1385"
                    data-name="Path 1385"
                    d="M1084.212,740.513c-.219-2.215-1.551-4.117-2.153-6.248-.894-3.15,1.406,9.166,2.792,6.248,5.118-10.767-6.516-15.255-.639-5.045,2.721,4.728,1.354.117,0,5.045,2.81-.151,31.671-2.749,33.381-5.045,1.639-2.2-.679-7.316-1.7-9.423a21.1,21.1,0,0,0-21.536-12.111,22.069,22.069,0,0,0-16.49,10.8c-1.95,3.436-6.26,11.488-1.874,14.553C1078.243,740.855,1081.646,740.513,1084.212,740.513Z"
                    transform="translate(-819.335 -341.68)"
                    fill="#fff"
                    />
                    <motion.g
                    id="Eyeball"
                    transform="matrix(0.695, -0.719, 0.719, 0.695, -192.878, 316.322)"

                    animate={{
                        rotate: rotation
                    }}
                    >
                    <circle
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx="11.5"
                        cy="11.5"
                        r="11.5"
                        transform="translate(263.665 373.5)"
                        fill="#31231e"
                    />
                    <path
                        id="Path_2182"
                        data-name="Path 2182"
                        d="M20.3,3.16C31.345,3.16,40,8.954,40,20S30.258,30.568,19.213,30.568,0,31.046,0,20,9.254,3.16,20.3,3.16Z"
                        transform="matrix(0.995, -0.105, 0.105, 0.995, 254.512, 370.674)"
                        fill="none"
                    />
                    </motion.g>
                </g>
                <g id="Left_Eye" data-name="Left Eye">
                    <path
                    id="Path_1290"
                    data-name="Path 1290"
                    d="M819,703.99c2.617-2.258,3.745-7.1,6.354-9.852A23.246,23.246,0,0,1,841.982,687a20.016,20.016,0,0,1,13.392,4.954,30.075,30.075,0,0,1,6.518,7.853c.863,1.557,1.015,3.826,2.456,4.843-.25,1.185-.377,2.664.951,2.959-1.934-12.432-10.274-21.036-22.516-22.595C832.359,683.685,819.007,692.36,819,703.99Z"
                    transform="translate(-644.96 -323.249)"
                    fill="#31231e"
                    />
                    <path
                    id="Path_1306"
                    data-name="Path 1306"
                    d="M833.549,716.813h0s12.475-8.68,13.946-10.193c13.268-13.644.553-1.847-13.8,10.193,2.44,1.739,31.09,7.809,33.107,4.884,1.234-1.789.925-5.438.614-7.515-1.2-8-6.406-15.654-13.886-18.481a22.106,22.106,0,0,0-20.613,2.357,21.757,21.757,0,0,0-7.486,9.877c-.5,1.214-1.321,3.218-.674,4.518C826.154,715.266,830.934,715.965,833.549,716.813Z"
                    transform="translate(-649.615 -328.477)"
                    fill="#fff"
                    />
                    <motion.g
                    id="Eyeball-2"
                    data-name="Eyeball"
                    transform="matrix(0.105, -0.995, 0.995, 0.105, -199.97, 536.911)"

                    animate={{
                        rotate: rotation
                    }}
                    >
                    <path
                        id="Path_2183"
                        data-name="Path 2183"
                        d="M20.3,3.16C31.345,3.16,40,8.954,40,20S30.258,30.568,19.213,30.568,0,31.046,0,20,9.254,3.16,20.3,3.16Z"
                        transform="matrix(0.978, 0.208, -0.208, 0.978, 182.109, 358.845)"
                        fill="none"
                    />
                    <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="11.5"
                        cy="11.5"
                        r="11.5"
                        transform="matrix(0.951, 0.309, -0.309, 0.951, 190.14, 363.749)"
                        fill="#31231e"
                    />
                    </motion.g>
                </g>
            </>
        )}


        {hovered ? (
            <g id="Mouth">
                <path id="Path_3957" data-name="Path 3957" d="M913.531,902.124c-10.136,2.13-20.406-3.457-30.444-3.933-2.485-.118-6.792-1.374-9.1-.716-.679.194-.718,1.074-.494,1.642,1.058,2.69,7.181.914,9.272,1.063,3.34.237,6.553,1.376,9.831,1.874,4.965.754,10.076,1,14.9,2.475C909.7,905.2,913.82,905.358,913.531,902.124Z" transform="translate(-682.266 -467.286)" fill="#31231e"/>
                <path id="Path_3958" data-name="Path 3958" d="M1053.515,914.794c1.861-.4,3.1-1.561,2.854-3.617-3.739.72-7.345-.328-11.1-.329-5.93,0-11.813.843-17.759.646-3.048-.1-7.389.467-9.831-1.632h2.854V909.2c-1.23-.086-3.5-.838-4.57.009-1.5,1.185-.571,3.864,1.088,4.191,2.67.525,5.569-.12,8.239-.241,5.711-.259,11.391-.342,17.125-.342C1045.463,912.821,1051.029,912.832,1053.515,914.794Z" transform="translate(-773.28 -475.127)" fill="#31231e"/>
                <path id="Path_3540" data-name="Path 3540" d="M881.858,909c-.5,2.164,2.024,4.574,2.913,6.581a48.009,48.009,0,0,0,9.211,14.474c1.624,1.685,3.581,3.626,5.906,3.954-.818-4.152,3.385-3.309,5.906-2.81,4.571.9,9.681,2.786,14.3,2.81,4.989.026,12.043-1.649,16.787-.064,2.711.906,1.943,2.959.933,5,2.468.7,5.17-1.6,7.15-2.987,5.953-4.163,12.139-10.913,13.989-18.4l1.244-.658.932.329-.311-.987v-.329h.932v-.329c-.992-.466-2.257-1.278-3.109-.329l-.933-.329c0,1.986-4.278,1.645-5.6,1.645-5.593,0-13.2-1.532-18.341.329l.622.987v.329c-4.287,1.928-9.7.987-14.3.987v-.329h.622v-.329h-1.243v1.316l18.652-.018,13.678-.64c-1.365,4.16-8.546,4.991-12.124,5.5-12.261,1.748-25.946.292-37.926-2.712-3.552-.891-7.643-2.112-10.569-4.49-.562-.457-3.055-1.987-2.228-3,.718-.883,3.514.4,4.4.606,3.612.824,7.842,2.514,11.5,1.8v-.329l-5.285-1.645.933-.658c-4.969-1.564-13.338-.722-16.787-5.265Z" transform="translate(-686.669 -472.323)" fill="#31231e"/>
                <path id="Path_3606" data-name="Path 3606" d="M932,938.223c2.181.284,4.265,1.925,6.435,2.486a77.68,77.68,0,0,0,19.819,2.358c2.926,0,6.455.458,9.266-.745-1.246-3.349-4.988-2.869-7.207-3.009-6.973-.441-13.665-.838-20.591-2.365C937.645,936.491,932.76,934.432,932,938.223Z" transform="matrix(0.998, -0.07, 0.07, 0.998, -778.884, -422.713)" fill="#9f9c9a"/>
                <path id="Path_3956" data-name="Path 3956" d="M932,937.424c.866.183,1.693,1.24,2.554,1.6a19.777,19.777,0,0,0,7.867,1.519c1.162,0,2.562.295,3.678-.48-.495-2.157-1.98-1.848-2.861-1.938a33.465,33.465,0,0,1-8.173-1.523C934.241,936.309,932.3,934.983,932,937.424Z" transform="translate(-814.119 -350.494) rotate(-7)" fill="#9f9c9a"/>
            </g>
        ) : characterHovered ? (
            <g id="Mouth">
                <path id="Mouth-2" data-name="Mouth" d="M1108.048,618.146c-2.383.318-5.387.367-7.514,1.906-1.391,1.007-1.14,3.615.495,4.058,1.041.283,2.347-.665,3.343-.965,2.7-.812,5.263-1.589,8.022-.629a19.281,19.281,0,0,1,6.679,4.023c.757.661,1.77,2.334,2.816,2.109.734-.158.737-1.3.533-1.971a11.668,11.668,0,0,0-2.841-4.231A13.834,13.834,0,0,0,1108.048,618.146Z" transform="translate(-876.013 -169.132)" fill="#31231e"/>
            </g>
        ) :
        (
            <g id="Mouth" transform="translate(1)">
                <path
                id="Path_1725"
                data-name="Path 1725"
                d="M913.531,902.124c-10.136,2.13-20.406-3.457-30.444-3.933-2.485-.118-6.792-1.374-9.1-.716-.679.194-.718,1.074-.494,1.642,1.058,2.69,7.181.914,9.272,1.063,3.34.237,6.553,1.376,9.831,1.874,4.965.754,10.076,1,14.9,2.475C909.7,905.2,913.82,905.358,913.531,902.124Z"
                transform="translate(-682.338 -467.678)"
                fill="#31231e"
                />
                <path
                id="Path_1753"
                data-name="Path 1753"
                d="M1053.515,914.794c1.861-.4,3.1-1.561,2.854-3.617-3.739.72-7.345-.328-11.1-.329-5.93,0-11.813.843-17.759.646-3.048-.1-7.389.467-9.831-1.632h2.854V909.2c-1.23-.086-3.5-.838-4.57.009-1.5,1.185-.571,3.864,1.088,4.191,2.67.525,5.569-.12,8.239-.241,5.711-.259,11.391-.342,17.125-.342C1045.463,912.821,1051.029,912.832,1053.515,914.794Z"
                transform="translate(-774.28 -474.559)"
                fill="#31231e"
                />
                <path
                id="Path_2170"
                data-name="Path 2170"
                d="M816.625,619.528c7.819-1.215,18.58-6.433,26.686-7.173,6.395-.584,7.94-3.741,14.276-2.517,4.172.806,12.827,1.739,19.911,2.789,2.982-.382,11.746,3.3,10.181,1.224-1.75-2.317-12.941-6.01-15.887-6.973-11.61-3.8-19.805-3.624-31.041.22C836.06,608.7,812.606,614.641,816.625,619.528Z"
                transform="matrix(-0.985, -0.174, 0.174, -0.985, 965.914, 1198.547)"
                fill="#31231e"
                />
                <path
                id="Path_1915"
                data-name="Path 1915"
                d="M938,1010c.528,1.667,2.455,3.019,3.805,4.022,3.564,2.647,7.868,5.169,12.368,5.186v-.329c-5.731-.608-11.751-5.376-16.173-8.878m24.419,9.865v.329l12.051-1.315,5.391-2.959,6.343-5.59c-1.947-.552-5.9,2.894-7.611,3.946A41.5,41.5,0,0,1,962.419,1019.865Z"
                transform="translate(-728.015 -542.503)"
                fill="#31231e"
                />
            </g>
        )}

        </g>
    </motion.svg>
    </Box>
);
};