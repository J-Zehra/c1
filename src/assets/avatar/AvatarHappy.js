    import React, { useEffect, useState, useRef } from "react";

    import { Box } from "@chakra-ui/react";

    import { motion } from "framer-motion";
    import { AppState } from "../../provider/AppProvider";

    export const AvatarHappy = ({ rotation, endX, endY }) => {
    const { hovered, isTyping, isDesktop } = AppState();

    return (
        <Box
        pos="absolute"
        right={isDesktop ? "-12rem" : "-2rem"}
        top={isDesktop ? "-6rem" : "-2"}
        >
        <svg
            id="qqqqqqqqqqqqq"
            xmlns="http://www.w3.org/2000/svg"
            width={isDesktop ? "460" : "300"}
            height={isDesktop ? "320" : "200"}
            viewBox="0 0 599.368 465.947"
        >
            <g id="Rest">
            <path
                id="Path_395"
                data-name="Path 395"
                d="M0,0V465.947H599.368V0Z"
                fill="none"
            />
            <path
                id="Path_396"
                data-name="Path 396"
                d="M1024.634,206v.329l4.757.329-4.757-.658m-.634.329.317.329Z"
                transform="translate(-699.263 -138.262)"
                fill="#9f9c9a"
            />
            <path
                id="Path_397"
                data-name="Path 397"
                d="M1025,207l.317.329Z"
                transform="translate(-699.946 -138.933)"
                fill="#774d44"
            />
            <path
                id="Path_398"
                data-name="Path 398"
                d="M1026,207l.317.329Z"
                transform="translate(-700.629 -138.933)"
                fill="#4e3b36"
            />
            <path
                id="Path_399"
                data-name="Path 399"
                d="M1022,207.658v.329l3.488-.329V207Z"
                transform="translate(-697.897 -138.933)"
                fill="#31231e"
            />
            <path
                id="Path_400"
                data-name="Path 400"
                d="M1016.611,207l-4.123.658-.951.658L1009,210.288l1.586-.986-.634.986c1.973.827,10.544.671,12.368-.658l.317.658.317-.329-.317-.658.634-.329h-2.22l.317-.986-.317-.329c-.97.19-2.35.676-2.537-.658Z"
                transform="translate(-689.02 -138.933)"
                fill="#4e3b36"
            />
            <path
                id="Path_401"
                data-name="Path 401"
                d="M1035,207l.317.329Z"
                transform="translate(-706.774 -138.933)"
                fill="#31231e"
            />
            <path
                id="Path_402"
                data-name="Path 402"
                d="M1039,207l.317.329Z"
                transform="translate(-709.506 -138.933)"
                fill="#774d44"
            />
            <path
                id="Path_403"
                data-name="Path 403"
                d="M1020,208v.329h.951Z"
                transform="translate(-696.531 -139.604)"
                fill="#9f9c9a"
            />
            <path
                id="Path_404"
                data-name="Path 404"
                d="M1023,208l.317.329Z"
                transform="translate(-698.58 -139.604)"
                fill="#774d44"
            />
            <path
                id="Path_405"
                data-name="Path 405"
                d="M1024,208l.317.329Z"
                transform="translate(-699.263 -139.604)"
                fill="#4e3b36"
            />
            <path
                id="Path_406"
                data-name="Path 406"
                d="M1038,208v.329l2.22.329v-.329Z"
                transform="translate(-708.823 -139.604)"
                fill="#31231e"
            />
            <path
                id="Path_407"
                data-name="Path 407"
                d="M1040,208l.317.329Z"
                transform="translate(-710.189 -139.604)"
                fill="#4e3b36"
            />
            <path
                id="Path_408"
                data-name="Path 408"
                d="M1041,208l.317.329Z"
                transform="translate(-710.872 -139.604)"
                fill="#774d44"
            />
            <path
                id="Path_409"
                data-name="Path 409"
                d="M1024.928,208v.329h1.586l-1.586-.329m-7.611.329-.317.658Z"
                transform="translate(-694.483 -139.604)"
                fill="#9f9c9a"
            />
            <path
                id="Path_410"
                data-name="Path 410"
                d="M1019,209l.317.329L1019,209m8.88,0,.634.658Z"
                transform="translate(-695.849 -140.275)"
                fill="#774d44"
            />
            <path
                id="Path_411"
                data-name="Path 411"
                d="M1048,209l.317.329Z"
                transform="translate(-715.652 -140.275)"
                fill="#9f9c9a"
            />
            <path
                id="Path_412"
                data-name="Path 412"
                d="M1018,210l.317.329Z"
                transform="translate(-695.166 -140.946)"
                fill="#774d44"
            />
            <path
                id="Path_413"
                data-name="Path 413"
                d="M1046,210l.317.329Z"
                transform="translate(-714.286 -140.946)"
                fill="#31231e"
            />
            <path
                id="Path_414"
                data-name="Path 414"
                d="M1025.557,210v.329c3.286.969,5.639,3.518,7.294,6.577h.317a10.787,10.787,0,0,0-7.611-6.905m-10.887.438.209.11Z"
                transform="translate(-692.892 -140.946)"
                fill="#9f9c9a"
            />
            <path
                id="Path_415"
                data-name="Path 415"
                d="M1016,211l.317.329Z"
                transform="translate(-693.8 -141.618)"
                fill="#774d44"
            />
            <path
                id="Path_416"
                data-name="Path 416"
                d="M1018,211l.317.329L1018,211m9.2.329v.329h1.269Z"
                transform="translate(-695.166 -141.618)"
                fill="#31231e"
            />
            <path
                id="Path_417"
                data-name="Path 417"
                d="M1049,211l.317.329Z"
                transform="translate(-716.335 -141.618)"
                fill="#4e3b36"
            />
            <path
                id="Path_418"
                data-name="Path 418"
                d="M1050,211l.317.329Z"
                transform="translate(-717.018 -141.618)"
                fill="#774d44"
            />
            <path
                id="Path_419"
                data-name="Path 419"
                d="M1012,212l.317.329Z"
                transform="translate(-691.068 -142.289)"
                fill="#9f9c9a"
            />
            <path
                id="Path_420"
                data-name="Path 420"
                d="M1013,212l.317.329Z"
                transform="translate(-691.751 -142.289)"
                fill="#774d44"
            />
            <path
                id="Path_421"
                data-name="Path 421"
                d="M1015,212v.329h.951Z"
                transform="translate(-693.117 -142.289)"
                fill="#31231e"
            />
            <path
                id="Path_422"
                data-name="Path 422"
                d="M1053.67,212.333l.209.11Z"
                transform="translate(-719.524 -142.512)"
                fill="#774d44"
            />
            <path
                id="Path_423"
                data-name="Path 423"
                d="M1011,213l.317.329Z"
                transform="translate(-690.385 -142.96)"
                fill="#9f9c9a"
            />
            <path
                id="Path_424"
                data-name="Path 424"
                d="M795.325,213l.317.329-.317-.329m12.051.329v.986l-.317-.658h-.317l-3.155.417-8.9.241.634-.986c-4.11,1.986-5.935,9.035-10.148,10.038-3.393.808-7.348-3.711-10.782-4.448l1.268.986c-1.587.746-4.517.648-5.074,2.631l-1.268-.329v.329l.951.329c-5.222.648-.586-3.254,1.9-3.946v-.329l-9.831-1.315v.658h1.9v.329l-4.123.329.634-.986-1.268.658h-.317c-1.342-.8-4.418.559-5.707,1.373a11.4,11.4,0,0,0-4.931,7.506c-.728,3.431-.427,7.441-4.267,8.559-2.206.643-3.876-1.484-5.708-2.356-3.368-1.6-7.725-2.793-11.417-1.929v.329l3.488.329c-.862,2.941-5.485,2.9-7.928,2.631l.951-1.644c-4.32,3.156-3.751,8.124-5.074,12.824l-.634.329c-4.649-.667-3.576,3.9-6.377,5.531-2.1,1.224-5.1.085-6.942,2.032l.951-.329c.391,1.216.4,3.555-.634,3.288l.317.987-1.268.986h-.317l-.951-1.644h-.634c-1.721,4.685.765,9.828,2.32,14.14.511,1.418,1.744,3.745,1.524,5.261-.5,3.434-4.378,3.344-6.7,4.239-3.078,1.186-5.364,4.89-5.457,8.257-.077,2.794.521,7.73,1.748,10.194,2.748,5.519,8.079,9.746,10.428,15.549,3.593,8.88,3.645,18.552,4.7,27.856.692,6.093,0,12.608,0,18.743,0,2.268.825,5.774.121,7.892-.765,2.3-3.539,4.527-5.829,4.6v.329l7.294,3.617c0,3.929.361,12.594-2.537,15.455-.351-3.557-2.646-7.551-4.9-10.18-1.254-1.465-2.9-2.577-4.618-1.328l-.317-.986-.317,2.631.634-.329.317.329-.317,1.315c10.329,4.906,10.133,20.855,10.148,30.91,0,2.42,1.649,8.138.126,10.064-1.858,2.349-4.061-.317-5.834-1.186,1.806,3.814,5.93,1.548,7.574,4.933,1.241,2.555,1.064,6.076,1.8,8.878a127.541,127.541,0,0,0,6.393,18.743c3.992,9.124,10.213,16.849,16.447,24.333,7.909,9.5,16.411,19.47,27.091,25.629,1.93,1.115,4.248,1.134,6.343,1.782,5.246,1.628,10.047,3.157,15.539,3.732,4.207.441,8.068,1.421,12.368,1.062,3.235-.27,6.587-1.315,9.831-1.868,2.118-.362,4.253.2,6.343-.474,6.688-2.151,12.92-7.655,18.393-11.982,10.846-8.579,20.908-16.741,28.893-28.409a76.408,76.408,0,0,0,8.423-15.45c1.589-4.2,2.575-9.191,4.687-13.137,1.04-1.943,2.914-1.023,4.614-1.519,2.1-.613,3.9-2.757,4.757-4.744-1.751,1.04-3.958,4.875-6.352,3.717-2.645-1.278.165-8.072.637-10.294,1.538-7.207,2.8-14.5,5.442-21.4,1.081-2.823,3.783-6.311,6.932-6.552.9-.946,1.519-1.24,2.537-.329h.317l-.951-1.315.317-5.919h-.317v1.973c-5.137-2.122-8.435,7.689-11.417,10.194,0-3.96-1.1-10.217,1-13.741.805-1.347,2.8-2.205,4.072-3.029-4.316-3.661-2.058-6.725-1.047-11.509.492-2.334.5-5.164.828-7.563a138.565,138.565,0,0,1,5.226-22.031c.815-2.668,1.294-5.844,2.477-8.347,1.062-2.25,3.425-4.087,4.624-6.45,2.255-4.448,3.133-9.185,5.423-13.469,1.529-2.856,4.05-5.457,5.1-8.563.691-2.05,1.449-4.208.384-6.247-.774-1.478-2.562-2.53-2.756-4.275-.3-2.71.679-5.768.666-8.549-.006-1.721-.9-3.688-.58-5.355.666-3.508,2.778-7.871.989-11.415a6.61,6.61,0,0,0-5.134-3.548c-1.5-.148-3.561.627-4.456-1.092-1.284-2.478,1.6-5.849.526-8.507-.894-2.216-4.11-2.607-5.378-4.616-1.7-2.694-1.3-6.384-3.295-9.188a11.076,11.076,0,0,0-7.088-4.164c-.974-.188-2.214.106-3.083-.461-1.82-1.187-2.455-4.673-4.529-6.238l1.269,2.3c-2.965-.729-4.973-4.1-7.624-4.555-2.994-.509-4.535,1.273-7.268,1.642-1.288.174-2.118-1.157-3.213-1.66-1.915-.88-4.338.229-5.991-.887-1.782-1.2-1.731-3.119-2.255-5.007-1.335-4.805-2.474-9.407-7.9-10.25v.329l3.488.986-.317,1.973c-2.011-.839-4.823-1.955-6.977-1.315l.951-1.644c-1.1,0-2.692-.358-2.854.986-4.744.014-7.221,4.269-11.417,5.552-1.259.385-6.834-.5-8.214-.988-1.468-.516-1.535-2.3-2.045-3.577C813.744,218.726,810.829,212.874,807.376,213.329Z"
                transform="translate(-473.759 -142.96)"
                fill="#31231e"
            />
            <path
                id="Path_425"
                data-name="Path 425"
                d="M1056,213l.317.329Z"
                transform="translate(-721.115 -142.96)"
                fill="#4e3b36"
            />
            <path
                id="Path_426"
                data-name="Path 426"
                d="M1057,213l.317.329Z"
                transform="translate(-721.798 -142.96)"
                fill="#774d44"
            />
            <path
                id="Path_427"
                data-name="Path 427"
                d="M1010,214l.317.329Z"
                transform="translate(-689.703 -143.631)"
                fill="#9f9c9a"
            />
            <path
                id="Path_428"
                data-name="Path 428"
                d="M1058,214l.317.329Z"
                transform="translate(-722.481 -143.631)"
                fill="#774d44"
            />
            <path
                id="Path_429"
                data-name="Path 429"
                d="M1009,215l.317.329Z"
                transform="translate(-689.02 -144.302)"
                fill="#9f9c9a"
            />
            <path
                id="Path_430"
                data-name="Path 430"
                d="M1059,215l.317.329Z"
                transform="translate(-723.163 -144.302)"
                fill="#774d44"
            />
            <path
                id="Path_431"
                data-name="Path 431"
                d="M1005.951,216l-.951,1.315Z"
                transform="translate(-686.288 -144.973)"
                fill="#9f9c9a"
            />
            <path
                id="Path_432"
                data-name="Path 432"
                d="M1014,216l.317.329Z"
                transform="translate(-692.434 -144.973)"
                fill="#31231e"
            />
            <path
                id="Path_433"
                data-name="Path 433"
                d="M1024.491,216l.951.986-.951-.986m-16.491.329.317.329Z"
                transform="translate(-688.337 -144.973)"
                fill="#774d44"
            />
            <path
                id="Path_434"
                data-name="Path 434"
                d="M1060,217l.317.329Z"
                transform="translate(-723.846 -145.645)"
                fill="#4e3b36"
            />
            <path
                id="Path_435"
                data-name="Path 435"
                d="M1007,218l.317.329Z"
                transform="translate(-687.654 -146.316)"
                fill="#774d44"
            />
            <path
                id="Path_436"
                data-name="Path 436"
                d="M1023.442,218l.317.329-.317-.329m-17.442.329.317.329-.317-.329m17.759,0,.317.329Z"
                transform="translate(-686.971 -146.316)"
                fill="#4e3b36"
            />
            <path
                id="Path_437"
                data-name="Path 437"
                d="M987.294,220c-2.129,2.226-4.154,7.059-7.294,7.563v.329C982.625,227.687,986.7,222.569,987.294,220Z"
                transform="translate(-669.216 -147.658)"
                fill="#9f9c9a"
            />
            <path
                id="Path_438"
                data-name="Path 438"
                d="M1003.317,220l-.317.658Z"
                transform="translate(-684.923 -147.658)"
                fill="#774d44"
            />
            <path
                id="Path_439"
                data-name="Path 439"
                d="M1002.951,220l.317.329-.317-.329m18.393,0,.317.329-.317-.329m-18.71.329.317.329-.317-.329m19.028,0,.317.329-.317-.329m-19.662.329.317.329Z"
                transform="translate(-684.24 -147.658)"
                fill="#4e3b36"
            />
            <path
                id="Path_440"
                data-name="Path 440"
                d="M1020.613,222l.317.329-.317-.329m-20.3.329-.317.658Z"
                transform="translate(-682.874 -149)"
                fill="#774d44"
            />
            <path
                id="Path_441"
                data-name="Path 441"
                d="M1021.613,223l.317.329-.317-.329m-20.613.329.317.329-.317-.329m20.93,0,.317.329Z"
                transform="translate(-683.557 -149.672)"
                fill="#4e3b36"
            />
            <path
                id="Path_442"
                data-name="Path 442"
                d="M1068,224l.317.329Z"
                transform="translate(-729.309 -150.343)"
                fill="#774d44"
            />
            <path
                id="Path_443"
                data-name="Path 443"
                d="M903,225v.329h6.343Z"
                transform="translate(-616.635 -151.014)"
                fill="#9f9c9a"
            />
            <path
                id="Path_444"
                data-name="Path 444"
                d="M999,225l.317.329L999,225m22.2,0,.317.329Z"
                transform="translate(-682.191 -151.014)"
                fill="#774d44"
            />
            <path
                id="Path_445"
                data-name="Path 445"
                d="M897,226v.329h1.586Z"
                transform="translate(-612.538 -151.685)"
                fill="#9f9c9a"
            />
            <path
                id="Path_446"
                data-name="Path 446"
                d="M902.667,226.333l.211.11Z"
                transform="translate(-616.408 -151.909)"
                fill="#774d44"
            />
            <path
                id="Path_447"
                data-name="Path 447"
                d="M903.317,226,903,227.315l4.123-.329L903.317,226m4.334.109.211.11Z"
                transform="translate(-616.635 -151.685)"
                fill="#4e3b36"
            />
            <path
                id="Path_448"
                data-name="Path 448"
                d="M919,226v.329h.951Z"
                transform="translate(-627.561 -151.685)"
                fill="#774d44"
            />
            <path
                id="Path_449"
                data-name="Path 449"
                d="M922,226l.317.329Z"
                transform="translate(-629.61 -151.685)"
                fill="#4e3b36"
            />
            <path
                id="Path_450"
                data-name="Path 450"
                d="M923.667,226.333l.211.11Z"
                transform="translate(-630.748 -151.909)"
                fill="#774d44"
            />
            <path
                id="Path_451"
                data-name="Path 451"
                d="M925,226v.329l.951.329Z"
                transform="translate(-631.658 -151.685)"
                fill="#9f9c9a"
            />
            <path
                id="Path_452"
                data-name="Path 452"
                d="M998,226l.317.329Z"
                transform="translate(-681.508 -151.685)"
                fill="#774d44"
            />
            <path
                id="Path_453"
                data-name="Path 453"
                d="M1069,226l.317.329Z"
                transform="translate(-729.992 -151.685)"
                fill="#4e3b36"
            />
            <path
                id="Path_454"
                data-name="Path 454"
                d="M891,228v.329l1.586-.329Z"
                transform="translate(-608.441 -153.028)"
                fill="#9f9c9a"
            />
            <path
                id="Path_455"
                data-name="Path 455"
                d="M896,227l.317.329Z"
                transform="translate(-611.855 -152.356)"
                fill="#774d44"
            />
            <path
                id="Path_456"
                data-name="Path 456"
                d="M899,227l.317.658h.317l.317-.658H899m8.245,0,.317.329Z"
                transform="translate(-613.904 -152.356)"
                fill="#4e3b36"
            />
            <path
                id="Path_457"
                data-name="Path 457"
                d="M904.148,227l.317.329-.317-.329M894,227.329l.317.329Z"
                transform="translate(-610.489 -152.356)"
                fill="#774d44"
            />
            <path
                id="Path_458"
                data-name="Path 458"
                d="M895,228l.317.329L895,228m10.148,0,.317.329Z"
                transform="translate(-611.172 -153.028)"
                fill="#4e3b36"
            />
            <path
                id="Path_459"
                data-name="Path 459"
                d="M928,228l.317.329Z"
                transform="translate(-633.707 -153.028)"
                fill="#774d44"
            />
            <path
                id="Path_460"
                data-name="Path 460"
                d="M929,228l.317.329Z"
                transform="translate(-634.39 -153.028)"
                fill="#9f9c9a"
            />
            <path
                id="Path_461"
                data-name="Path 461"
                d="M997,228l.317.329Z"
                transform="translate(-680.825 -153.028)"
                fill="#4e3b36"
            />
            <path
                id="Path_462"
                data-name="Path 462"
                d="M1070,228l.317.329Z"
                transform="translate(-730.675 -153.028)"
                fill="#774d44"
            />
            <path
                id="Path_463"
                data-name="Path 463"
                d="M884,230v.329l1.268-.329Z"
                transform="translate(-603.661 -154.37)"
                fill="#9f9c9a"
            />
            <path
                id="Path_464"
                data-name="Path 464"
                d="M888,229v.329h1.269Z"
                transform="translate(-606.392 -153.699)"
                fill="#774d44"
            />
            <path
                id="Path_465"
                data-name="Path 465"
                d="M892.667,229.109l.211.11-.211-.11M904.189,229v.329l1.586.329v-.329Z"
                transform="translate(-609.579 -153.699)"
                fill="#4e3b36"
            />
            <path
                id="Path_466"
                data-name="Path 466"
                d="M930,229l.317.329Z"
                transform="translate(-635.073 -153.699)"
                fill="#774d44"
            />
            <path
                id="Path_467"
                data-name="Path 467"
                d="M931,229v.329h2.22Z"
                transform="translate(-635.756 -153.699)"
                fill="#9f9c9a"
            />
            <path
                id="Path_468"
                data-name="Path 468"
                d="M938,229v.329l2.854.329V229Z"
                transform="translate(-640.536 -153.699)"
                fill="#774d44"
            />
            <path
                id="Path_469"
                data-name="Path 469"
                d="M947,229v.329l2.854.658v-.329Z"
                transform="translate(-646.682 -153.699)"
                fill="#9f9c9a"
            />
            <path
                id="Path_470"
                data-name="Path 470"
                d="M994.634,229l-.634.986Z"
                transform="translate(-678.777 -153.699)"
                fill="#774d44"
            />
            <path
                id="Path_471"
                data-name="Path 471"
                d="M1070,229l.317.329Z"
                transform="translate(-730.675 -153.699)"
                fill="#4e3b36"
            />
            <path
                id="Path_472"
                data-name="Path 472"
                d="M886,230l.317.329Z"
                transform="translate(-605.026 -154.37)"
                fill="#774d44"
            />
            <path
                id="Path_473"
                data-name="Path 473"
                d="M896,230.329v.329l1.586-.658-1.586.329m12.368,3.946-.951-.329v-.329l1.268.329,5.074-2.631-1.269-.329.317-.986c-2.066.312-4.2.265-5.992,1.6C904.467,233.359,906.142,234.928,908.368,234.275Z"
                transform="translate(-611.855 -154.37)"
                fill="#4e3b36"
            />
            <path
                id="Path_474"
                data-name="Path 474"
                d="M949,230l.317.329Z"
                transform="translate(-648.047 -154.37)"
                fill="#774d44"
            />
            <path
                id="Path_475"
                data-name="Path 475"
                d="M996,230l.317.329L996,230m23.784,0,.317.329Z"
                transform="translate(-680.142 -154.37)"
                fill="#4e3b36"
            />
            <path
                id="Path_476"
                data-name="Path 476"
                d="M881.317,231l-.317.658Z"
                transform="translate(-601.612 -155.041)"
                fill="#9f9c9a"
            />
            <path
                id="Path_477"
                data-name="Path 477"
                d="M883,231l.317.329Z"
                transform="translate(-602.978 -155.041)"
                fill="#774d44"
            />
            <path
                id="Path_478"
                data-name="Path 478"
                d="M884.667,231.333l.211.11-.211-.11m20.93,0,.211.11Z"
                transform="translate(-604.116 -155.265)"
                fill="#4e3b36"
            />
            <path
                id="Path_479"
                data-name="Path 479"
                d="M952,231l.317.329Z"
                transform="translate(-650.096 -155.041)"
                fill="#774d44"
            />
            <path
                id="Path_480"
                data-name="Path 480"
                d="M995,231l.317.329Z"
                transform="translate(-679.459 -155.041)"
                fill="#4e3b36"
            />
            <path
                id="Path_481"
                data-name="Path 481"
                d="M1072,231l.317.329Z"
                transform="translate(-732.041 -155.041)"
                fill="#774d44"
            />
            <path
                id="Path_482"
                data-name="Path 482"
                d="M1153,231v.329h.951Z"
                transform="translate(-787.354 -155.041)"
                fill="#9f9c9a"
            />
            <path
                id="Path_483"
                data-name="Path 483"
                d="M1156,231l.317.329Z"
                transform="translate(-789.402 -155.041)"
                fill="#774d44"
            />
            <path
                id="Path_484"
                data-name="Path 484"
                d="M1157,231v.329h2.537Z"
                transform="translate(-790.085 -155.041)"
                fill="#9f9c9a"
            />
            <path
                id="Path_485"
                data-name="Path 485"
                d="M882,232l.317.329L882,232m22.833,0v.329l1.586.658Z"
                transform="translate(-602.295 -155.712)"
                fill="#4e3b36"
            />
            <path
                id="Path_486"
                data-name="Path 486"
                d="M957,232l.317.329Z"
                transform="translate(-653.51 -155.712)"
                fill="#9f9c9a"
            />
            <path
                id="Path_487"
                data-name="Path 487"
                d="M994,232l.317.329L994,232m24.736,0,.317.329Z"
                transform="translate(-678.777 -155.712)"
                fill="#4e3b36"
            />
            <path
                id="Path_488"
                data-name="Path 488"
                d="M1073,232c1.265,3.151,1.462,5.654,5.074,5.59v-.329c-3.707-.013-2.841-2.977-5.074-5.261m22.2,0-.317.658Z"
                transform="translate(-732.724 -155.712)"
                fill="#9f9c9a"
            />
            <path
                id="Path_489"
                data-name="Path 489"
                d="M1144,232v.329h.951Z"
                transform="translate(-781.208 -155.712)"
                fill="#774d44"
            />
            <path
                id="Path_490"
                data-name="Path 490"
                d="M1147,232v.329h1.9l-.951,1.644,6.977,1.315.317-1.973L1147,232m5.708,0,.317.329Z"
                transform="translate(-783.256 -155.712)"
                fill="#4e3b36"
            />
            <path
                id="Path_491"
                data-name="Path 491"
                d="M1166.67,232.333l.209.11Z"
                transform="translate(-796.688 -155.936)"
                fill="#774d44"
            />
            <path
                id="Path_492"
                data-name="Path 492"
                d="M967.918,232v.329l2.854,1.315L967.918,232m-91.649.329-1.269.986v.329Z"
                transform="translate(-597.515 -155.712)"
                fill="#9f9c9a"
            />
            <path
                id="Path_493"
                data-name="Path 493"
                d="M880,233l.317.329Z"
                transform="translate(-600.929 -156.383)"
                fill="#774d44"
            />
            <path
                id="Path_494"
                data-name="Path 494"
                d="M881,233l.317.329L881,233m3.171.329v.329l1.586-.329h-1.586M903.516,233l.317.329Z"
                transform="translate(-601.612 -156.383)"
                fill="#4e3b36"
            />
            <path
                id="Path_495"
                data-name="Path 495"
                d="M958,233l.317.329Z"
                transform="translate(-654.193 -156.383)"
                fill="#9f9c9a"
            />
            <path
                id="Path_496"
                data-name="Path 496"
                d="M990.951,233,990,234.644l.951-1.644m25.37,0,.317.329-.317-.329m22.2,0,.317.329Z"
                transform="translate(-676.045 -156.383)"
                fill="#774d44"
            />
            <path
                id="Path_497"
                data-name="Path 497"
                d="M1168,233l.317.329Z"
                transform="translate(-797.597 -156.383)"
                fill="#4e3b36"
            />
            <path
                id="Path_498"
                data-name="Path 498"
                d="M970.967,233l.317.329-.317-.329M879,233.329l.317.329-.317-.329m25.37,0,.317.329Z"
                transform="translate(-600.246 -156.383)"
                fill="#774d44"
            />
            <path
                id="Path_499"
                data-name="Path 499"
                d="M960,234v.329h.951Z"
                transform="translate(-655.559 -157.055)"
                fill="#9f9c9a"
            />
            <path
                id="Path_500"
                data-name="Path 500"
                d="M1073,234l.317.329Z"
                transform="translate(-732.724 -157.055)"
                fill="#4e3b36"
            />
            <path
                id="Path_501"
                data-name="Path 501"
                d="M1138,234v.329h.951Z"
                transform="translate(-777.11 -157.055)"
                fill="#9f9c9a"
            />
            <path
                id="Path_502"
                data-name="Path 502"
                d="M1141,234l.317.329Z"
                transform="translate(-779.159 -157.055)"
                fill="#774d44"
            />
            <path
                id="Path_503"
                data-name="Path 503"
                d="M1138,234.329v.329h1.9l-1.9-.329m10.148-.329v.329h.951Z"
                transform="translate(-777.11 -157.055)"
                fill="#4e3b36"
            />
            <path
                id="Path_504"
                data-name="Path 504"
                d="M971.552,234l.317.329-.317-.329M878,234.329l.317.329Z"
                transform="translate(-599.563 -157.055)"
                fill="#774d44"
            />
            <path
                id="Path_505"
                data-name="Path 505"
                d="M960,235v.329l1.269.329Z"
                transform="translate(-655.559 -157.726)"
                fill="#4e3b36"
            />
            <path
                id="Path_506"
                data-name="Path 506"
                d="M963,235l.634.658Z"
                transform="translate(-657.608 -157.726)"
                fill="#774d44"
            />
            <path
                id="Path_507"
                data-name="Path 507"
                d="M964,235l.317.329Z"
                transform="translate(-658.29 -157.726)"
                fill="#9f9c9a"
            />
            <path
                id="Path_508"
                data-name="Path 508"
                d="M993,235l.317.329Z"
                transform="translate(-678.094 -157.726)"
                fill="#4e3b36"
            />
            <path
                id="Path_509"
                data-name="Path 509"
                d="M1074,235l.317.329Z"
                transform="translate(-733.407 -157.726)"
                fill="#774d44"
            />
            <path
                id="Path_510"
                data-name="Path 510"
                d="M1135.67,235.333l.209.11Z"
                transform="translate(-775.519 -157.949)"
                fill="#9f9c9a"
            />
            <path
                id="Path_511"
                data-name="Path 511"
                d="M1137,235l.317.329Z"
                transform="translate(-776.428 -157.726)"
                fill="#774d44"
            />
            <path
                id="Path_512"
                data-name="Path 512"
                d="M1174,235l.317.329Z"
                transform="translate(-801.694 -157.726)"
                fill="#4e3b36"
            />
            <path
                id="Path_513"
                data-name="Path 513"
                d="M876,236l.317.329Z"
                transform="translate(-598.198 -158.397)"
                fill="#774d44"
            />
            <path
                id="Path_514"
                data-name="Path 514"
                d="M877,236l.317.329L877,236m3.806,0,.317.329Z"
                transform="translate(-598.88 -158.397)"
                fill="#4e3b36"
            />
            <path
                id="Path_515"
                data-name="Path 515"
                d="M965,236v.329l4.44,2.3V238.3Z"
                transform="translate(-658.973 -158.397)"
                fill="#9f9c9a"
            />
            <path
                id="Path_516"
                data-name="Path 516"
                d="M992,236l.317.329L992,236m26,0,.317.329Z"
                transform="translate(-677.411 -158.397)"
                fill="#4e3b36"
            />
            <path
                id="Path_517"
                data-name="Path 517"
                d="M1130.951,236l-.951.658v.329l1.269-.658Z"
                transform="translate(-771.648 -158.397)"
                fill="#9f9c9a"
            />
            <path
                id="Path_518"
                data-name="Path 518"
                d="M1134,236l.317.329Z"
                transform="translate(-774.379 -158.397)"
                fill="#774d44"
            />
            <path
                id="Path_519"
                data-name="Path 519"
                d="M1135,236l.317.329L1135,236m12.685,0,.317.329Z"
                transform="translate(-775.062 -158.397)"
                fill="#4e3b36"
            />
            <path
                id="Path_520"
                data-name="Path 520"
                d="M875,237l.317.329Z"
                transform="translate(-597.515 -159.068)"
                fill="#774d44"
            />
            <path
                id="Path_521"
                data-name="Path 521"
                d="M965,237l.317.329L965,237m8.245,0,.317.329Z"
                transform="translate(-658.973 -159.068)"
                fill="#4e3b36"
            />
            <path
                id="Path_522"
                data-name="Path 522"
                d="M1075,237l.317.329L1075,237m18.393,0,.317.329-.317-.329m13.636,0,.317.329Z"
                transform="translate(-734.089 -159.068)"
                fill="#774d44"
            />
            <path
                id="Path_523"
                data-name="Path 523"
                d="M869.9,238l-1.9,2.631Z"
                transform="translate(-592.735 -159.739)"
                fill="#9f9c9a"
            />
            <path
                id="Path_524"
                data-name="Path 524"
                d="M875,238l.317.329Z"
                transform="translate(-597.515 -159.739)"
                fill="#4e3b36"
            />
            <path
                id="Path_525"
                data-name="Path 525"
                d="M967,238l.317.329Z"
                transform="translate(-660.339 -159.739)"
                fill="#774d44"
            />
            <path
                id="Path_526"
                data-name="Path 526"
                d="M990,238l.317.329L990,238m26.956,0,.317.329Z"
                transform="translate(-676.045 -159.739)"
                fill="#4e3b36"
            />
            <path
                id="Path_527"
                data-name="Path 527"
                d="M1131,238l.317.329Z"
                transform="translate(-772.331 -159.739)"
                fill="#774d44"
            />
            <path
                id="Path_528"
                data-name="Path 528"
                d="M1132,238l.317.329L1132,238m13.953,0,.317.329Z"
                transform="translate(-773.013 -159.739)"
                fill="#4e3b36"
            />
            <path
                id="Path_529"
                data-name="Path 529"
                d="M1177,238l1.586,3.288h.317Z"
                transform="translate(-803.743 -159.739)"
                fill="#9f9c9a"
            />
            <path
                id="Path_530"
                data-name="Path 530"
                d="M874,239l.317.329Z"
                transform="translate(-596.832 -160.41)"
                fill="#774d44"
            />
            <path
                id="Path_531"
                data-name="Path 531"
                d="M934,239l.317.329Z"
                transform="translate(-637.804 -160.41)"
                fill="#31231e"
            />
            <path
                id="Path_532"
                data-name="Path 532"
                d="M938,240.329l.951-.329Z"
                transform="translate(-640.536 -161.082)"
                fill="#4e3b36"
            />
            <path
                id="Path_533"
                data-name="Path 533"
                d="M968,239l.317.329Z"
                transform="translate(-661.022 -160.41)"
                fill="#774d44"
            />
            <path
                id="Path_534"
                data-name="Path 534"
                d="M989,239l.317.329Z"
                transform="translate(-675.362 -160.41)"
                fill="#4e3b36"
            />
            <path
                id="Path_535"
                data-name="Path 535"
                d="M1076,239l.317.329Z"
                transform="translate(-734.772 -160.41)"
                fill="#774d44"
            />
            <path
                id="Path_536"
                data-name="Path 536"
                d="M1125.951,239l-.951.329v.329l1.268-.329Z"
                transform="translate(-768.233 -160.41)"
                fill="#9f9c9a"
            />
            <path
                id="Path_537"
                data-name="Path 537"
                d="M1129,239l.317.329Z"
                transform="translate(-770.965 -160.41)"
                fill="#774d44"
            />
            <path
                id="Path_538"
                data-name="Path 538"
                d="M1130,239l.317.329Z"
                transform="translate(-771.648 -160.41)"
                fill="#4e3b36"
            />
            <path
                id="Path_539"
                data-name="Path 539"
                d="M969.406,239l.317.329-.317-.329M873,239.329l.317.329Z"
                transform="translate(-596.149 -160.41)"
                fill="#774d44"
            />
            <path
                id="Path_540"
                data-name="Path 540"
                d="M968,239.854l.317.329-.317-.329m6.343,0,.317.329-.317-.329m12.051,1.973,6.977,1.973-.317-.658h.317l4.44,1.315c1.741-4.74-10.015-6.332-11.417-2.631m15.856-1.973.317.329Z"
                transform="translate(-661.022 -160.936)"
                fill="#4e3b36"
            />
            <path
                id="Path_541"
                data-name="Path 541"
                d="M1128,240l.317.329Z"
                transform="translate(-770.282 -161.082)"
                fill="#774d44"
            />
            <path
                id="Path_542"
                data-name="Path 542"
                d="M1178,240l.317.329Z"
                transform="translate(-804.425 -161.082)"
                fill="#4e3b36"
            />
            <path
                id="Path_543"
                data-name="Path 543"
                d="M872,241l.317.329Z"
                transform="translate(-595.466 -161.753)"
                fill="#774d44"
            />
            <path
                id="Path_544"
                data-name="Path 544"
                d="M969,241l1.9.986v-.329Z"
                transform="translate(-661.705 -161.753)"
                fill="#4e3b36"
            />
            <path
                id="Path_545"
                data-name="Path 545"
                d="M970,241l.317.329L970,241m5.391,0,.317.329Z"
                transform="translate(-662.388 -161.753)"
                fill="#774d44"
            />
            <path
                id="Path_546"
                data-name="Path 546"
                d="M1077,241v1.644h.317Z"
                transform="translate(-735.455 -161.753)"
                fill="#4e3b36"
            />
            <path
                id="Path_547"
                data-name="Path 547"
                d="M1120.269,241,1119,242.644Z"
                transform="translate(-764.136 -161.753)"
                fill="#9f9c9a"
            />
            <path
                id="Path_548"
                data-name="Path 548"
                d="M1124,241v.329h.951Z"
                transform="translate(-767.55 -161.753)"
                fill="#774d44"
            />
            <path
                id="Path_549"
                data-name="Path 549"
                d="M1127,241l.317.329Z"
                transform="translate(-769.599 -161.753)"
                fill="#4e3b36"
            />
            <path
                id="Path_550"
                data-name="Path 550"
                d="M1179,241l.317.329Z"
                transform="translate(-805.108 -161.753)"
                fill="#774d44"
            />
            <path
                id="Path_551"
                data-name="Path 551"
                d="M924,242l.317.329Z"
                transform="translate(-630.976 -162.424)"
                fill="#4e3b36"
            />
            <path
                id="Path_552"
                data-name="Path 552"
                d="M971.667,242.109l.211.11-.211-.11m4.545-.109.317.329Z"
                transform="translate(-663.526 -162.424)"
                fill="#774d44"
            />
            <path
                id="Path_553"
                data-name="Path 553"
                d="M1123,242l.317.329Z"
                transform="translate(-766.867 -162.424)"
                fill="#4e3b36"
            />
            <path
                id="Path_554"
                data-name="Path 554"
                d="M871,243l.317.329L871,243m32.981,0,.317.329-.317-.329m1.269,0v.329l1.268.329v-.329Z"
                transform="translate(-594.783 -163.095)"
                fill="#774d44"
            />
            <path
                id="Path_555"
                data-name="Path 555"
                d="M985,243l.317.329L985,243m43.446,0,.317.329Z"
                transform="translate(-672.631 -163.095)"
                fill="#4e3b36"
            />
            <path
                id="Path_556"
                data-name="Path 556"
                d="M967.626,243l.317.329-.317-.329m-98.309.329-.317.658Z"
                transform="translate(-593.417 -163.095)"
                fill="#774d44"
            />
            <path
                id="Path_557"
                data-name="Path 557"
                d="M977,244v.329h.951L977,244m1.9,0,.317.329Z"
                transform="translate(-667.168 -163.766)"
                fill="#4e3b36"
            />
            <path
                id="Path_558"
                data-name="Path 558"
                d="M1121,244l.317.329Z"
                transform="translate(-765.502 -163.766)"
                fill="#774d44"
            />
            <path
                id="Path_559"
                data-name="Path 559"
                d="M968.309,244l.317.329-.317-.329M870,244.329l.317.329Z"
                transform="translate(-594.1 -163.766)"
                fill="#4e3b36"
            />
            <path
                id="Path_560"
                data-name="Path 560"
                d="M947.916,245l.317.329-.317-.329m19.345,0,.317.329L967.26,245m-99.26.329.317.329-.317-.329m66.6,0,.317.329Z"
                transform="translate(-592.735 -164.437)"
                fill="#774d44"
            />
            <path
                id="Path_561"
                data-name="Path 561"
                d="M1116.67,246.333l.209.11Z"
                transform="translate(-762.545 -165.332)"
                fill="#9f9c9a"
            />
            <path
                id="Path_562"
                data-name="Path 562"
                d="M1118,246l.317.329Z"
                transform="translate(-763.453 -165.109)"
                fill="#774d44"
            />
            <path
                id="Path_563"
                data-name="Path 563"
                d="M1119,246l.317.329L1119,246m19.662,0,.317.329Z"
                transform="translate(-764.136 -165.109)"
                fill="#4e3b36"
            />
            <path
                id="Path_564"
                data-name="Path 564"
                d="M867,247v1.644h.317Z"
                transform="translate(-592.052 -165.78)"
                fill="#9f9c9a"
            />
            <path
                id="Path_565"
                data-name="Path 565"
                d="M868,247l.317.329L868,247m50.106,0,.317.329-.317-.329m16.491,0,.317.329Z"
                transform="translate(-592.735 -165.78)"
                fill="#4e3b36"
            />
            <path
                id="Path_566"
                data-name="Path 566"
                d="M1100.343,247c-2.394,1.884-3.647.689-6.343.658v.329C1095.963,248.047,1099.518,250.088,1100.343,247Z"
                transform="translate(-747.064 -165.78)"
                fill="#9f9c9a"
            />
            <path
                id="Path_567"
                data-name="Path 567"
                d="M1115,247l.317.329Z"
                transform="translate(-761.404 -165.78)"
                fill="#774d44"
            />
            <path
                id="Path_568"
                data-name="Path 568"
                d="M1116,247l.317.329Z"
                transform="translate(-762.087 -165.78)"
                fill="#4e3b36"
            />
            <path
                id="Path_569"
                data-name="Path 569"
                d="M1079,248l.634.658Z"
                transform="translate(-736.821 -166.451)"
                fill="#774d44"
            />
            <path
                id="Path_570"
                data-name="Path 570"
                d="M1114,248l.317.329Z"
                transform="translate(-760.721 -166.451)"
                fill="#4e3b36"
            />
            <path
                id="Path_571"
                data-name="Path 571"
                d="M1182,248l.317.329Z"
                transform="translate(-807.157 -166.451)"
                fill="#774d44"
            />
            <path
                id="Path_572"
                data-name="Path 572"
                d="M1079,249l.317.329Z"
                transform="translate(-736.821 -167.122)"
                fill="#4e3b36"
            />
            <path
                id="Path_573"
                data-name="Path 573"
                d="M1082,249v.329h1.268Z"
                transform="translate(-738.87 -167.122)"
                fill="#774d44"
            />
            <path
                id="Path_574"
                data-name="Path 574"
                d="M1086,249v.329l1.9.329Z"
                transform="translate(-741.601 -167.122)"
                fill="#4e3b36"
            />
            <path
                id="Path_575"
                data-name="Path 575"
                d="M1091,249v.329h.951Z"
                transform="translate(-745.015 -167.122)"
                fill="#774d44"
            />
            <path
                id="Path_576"
                data-name="Path 576"
                d="M1113,249l.317.329L1113,249m21.882,0,.317.329Z"
                transform="translate(-760.039 -167.122)"
                fill="#4e3b36"
            />
            <path
                id="Path_577"
                data-name="Path 577"
                d="M1183,249l.634,1.644h.317Z"
                transform="translate(-807.84 -167.122)"
                fill="#9f9c9a"
            />
            <path
                id="Path_578"
                data-name="Path 578"
                d="M1083,250v.329h.951L1083,250m3.806,0v.329h1.586Z"
                transform="translate(-739.552 -167.793)"
                fill="#4e3b36"
            />
            <path
                id="Path_579"
                data-name="Path 579"
                d="M1100,250l.317.329L1100,250m3.488,0-.317.658Z"
                transform="translate(-751.161 -167.793)"
                fill="#774d44"
            />
            <path
                id="Path_580"
                data-name="Path 580"
                d="M1112,250l.317.329Z"
                transform="translate(-759.356 -167.793)"
                fill="#4e3b36"
            />
            <path
                id="Path_581"
                data-name="Path 581"
                d="M1055,251l.317.329Z"
                transform="translate(-720.432 -168.465)"
                fill="#31231e"
            />
            <path
                id="Path_582"
                data-name="Path 582"
                d="M1101,251l.317.329Z"
                transform="translate(-751.844 -168.465)"
                fill="#774d44"
            />
            <path
                id="Path_583"
                data-name="Path 583"
                d="M1111,251l.317.329L1111,251m22.833,0,.317.329Z"
                transform="translate(-758.673 -168.465)"
                fill="#4e3b36"
            />
            <path
                id="Path_584"
                data-name="Path 584"
                d="M867,252l.317.329Z"
                transform="translate(-592.052 -169.136)"
                fill="#774d44"
            />
            <path
                id="Path_585"
                data-name="Path 585"
                d="M1102,252l.317.329Z"
                transform="translate(-752.527 -169.136)"
                fill="#4e3b36"
            />
            <path
                id="Path_586"
                data-name="Path 586"
                d="M1103,252l.317.329L1103,252m1.586,0,.317.329Z"
                transform="translate(-753.21 -169.136)"
                fill="#774d44"
            />
            <path
                id="Path_587"
                data-name="Path 587"
                d="M1109,252l.317.329Z"
                transform="translate(-757.307 -169.136)"
                fill="#4e3b36"
            />
            <path
                id="Path_588"
                data-name="Path 588"
                d="M865.317,253l-.317.658Z"
                transform="translate(-590.686 -169.807)"
                fill="#9f9c9a"
            />
            <path
                id="Path_589"
                data-name="Path 589"
                d="M867,253l.317.329L867,253m75.159,0,.317.329Z"
                transform="translate(-592.052 -169.807)"
                fill="#4e3b36"
            />
            <path
                id="Path_590"
                data-name="Path 590"
                d="M1105.67,253.333l.209.11Z"
                transform="translate(-755.033 -170.03)"
                fill="#774d44"
            />
            <path
                id="Path_591"
                data-name="Path 591"
                d="M1107,252.632l.317.329-.317-.329m7.928,1.315,1.269.329.951,1.315,1.586.329.634-.658,1.9.658.951,1.315,1.9-.329c-.488-5.06-5.692-5.455-9.2-2.959m16.49-1.315.317.329Z"
                transform="translate(-755.941 -169.438)"
                fill="#4e3b36"
            />
            <path
                id="Path_592"
                data-name="Path 592"
                d="M864.634,254l.317.329-.317-.329M965.8,254l.317.329L965.8,254m-101.48.329L864,257.617h.317Z"
                transform="translate(-590.003 -170.478)"
                fill="#774d44"
            />
            <path
                id="Path_593"
                data-name="Path 593"
                d="M1185.33,255.667l.108.219Z"
                transform="translate(-809.431 -171.597)"
                fill="#4e3b36"
            />
            <path
                id="Path_594"
                data-name="Path 594"
                d="M1186,255l.634,2.631h.317Z"
                transform="translate(-809.888 -171.149)"
                fill="#9f9c9a"
            />
            <path
                id="Path_595"
                data-name="Path 595"
                d="M1185,257l.317,1.315h.317Z"
                transform="translate(-809.206 -172.492)"
                fill="#774d44"
            />
            <path
                id="Path_596"
                data-name="Path 596"
                d="M864,260v.986h.317Z"
                transform="translate(-590.003 -174.505)"
                fill="#9f9c9a"
            />
            <path
                id="Path_597"
                data-name="Path 597"
                d="M1185,260l.317.329Z"
                transform="translate(-809.206 -174.505)"
                fill="#4e3b36"
            />
            <path
                id="Path_598"
                data-name="Path 598"
                d="M1149.317,261l-.317.658Z"
                transform="translate(-784.622 -175.176)"
                fill="#31231e"
            />
            <path
                id="Path_599"
                data-name="Path 599"
                d="M1187,261l.317.329Z"
                transform="translate(-810.571 -175.176)"
                fill="#774d44"
            />
            <path
                id="Path_600"
                data-name="Path 600"
                d="M1187,262v1.315h.317Z"
                transform="translate(-810.571 -175.847)"
                fill="#4e3b36"
            />
            <path
                id="Path_601"
                data-name="Path 601"
                d="M862.317,263,862,266.617h.317Z"
                transform="translate(-588.637 -176.519)"
                fill="#9f9c9a"
            />
            <path
                id="Path_602"
                data-name="Path 602"
                d="M865,263l.317.329Z"
                transform="translate(-590.686 -176.519)"
                fill="#4e3b36"
            />
            <path
                id="Path_603"
                data-name="Path 603"
                d="M1188,263v2.631h.317Z"
                transform="translate(-811.254 -176.519)"
                fill="#774d44"
            />
            <path
                id="Path_604"
                data-name="Path 604"
                d="M895.078,283.489l.951-.329v2.3l.951-.329-.634.986.317.986.951.329-.317.987.317.658.317.329.634-.329.634,1.644.951-.329,1.268,2.3.951-.329v1.644h.317l.317-.987h.317v.987h.951l-.951.658V295l1.9-.986-1.268.986v.329l.317.658v.329h1.9l-.317-.658.951.329-1.268.658-.317,1.315h.317l.317-.658.634.329-.634,3.617h-.317V299.6c-.87-.5-1.367-.968-.951-1.973V297.3l-.634-.658-.317,4.275.634-1.315h.317l-.634,3.288-.951-.329-2.22.329v.329h1.9l-3.488.329v.329l.951.329v.329h-2.22l.317,1.644h-.317l-.317-.658-.634.658-1.268-.658v-.329l1.268-.658-3.171,1.315-1.586-.986h-1.268L890,306.178l-3.171-.329v.329h.634v.329c-1.965-.728-4.746-1.359-6.66-.329l-2.22-.329v-.329l.951-.329v-.329l-1.9.658v-1.315l-1.268-.658-2.537-.329v3.617c-.467.669-.825,1.018-.951,0h-.317l.317,1.973-.634-.329v.329l.634.986.317-.986h.951c.044,1.982.077,3.261,1.9,4.275l.317-.986h.317l-1.586,1.644.317.986.634-.658,1.268.658v.986h.634l-.317-.658.951.329v.329l-.951.658,1.268-.329.634,2.631,1.9.329v-.986h.317v1.315l3.488.329v.329l-1.268.986h.634l-.951.658v.658h.634l1.269-.987v-.329l-.951-.329v-.329l1.268.986.951-.329-.951,1.973v.329l1.586.658c.433-1.389.777-1.814,2.22-1.644v.329H888.1l-.317,1.315v.329l1.9-.658-.951.986v.329c.978-.158,1.431-.272,1.586-1.315l1.586.658-1.586.986h1.586l.317-.986,1.586,1.315.951.986c.948,0,2.013,1.5,2.22-.329l1.269.658-.317-.658h.317v1.644h1.9l-.951-.329v-.329h2.22l-.317,1.315-.317-.658h-.317l.317,1.644h.317l.634-.658-.317-.986.634,1.315h.951v.329l-.951,1.644.951-1.315h.951v-.986l1.9,2.3.317-.986c.538.632.925.859,0,.986v.329l.951.329.634-.658c.755,1.88,1.735,1.676,3.488,1.644l-.317-.658h.317l.951,1.315.317.329.634-.329-1.268.329v.329c.92.335,1.367.4,1.586-.658l3.171,1.315v.329h-.634v.329h1.269l1.268-1.644v.986l1.586-.658c1.148.5,2.886,1.114,3.806,0l5.391,1.315h.317V333.8l.951.986,1.268-.329-.317-.658.951.658,1.586-1.644-.634.658v.329l1.586.658h.317l-.317-1.315h.317l.317.986h.317v-.986h3.488l-.317-1.315h3.488l-.317-1.315-1.268.658,2.537-.986v.329l-.951-.329.317,1.644h2.854V331.5l-.951-.986h.951v-.329h-.951l-.951,1.315v-1.973l.951.329-.317-.658h.317l2.22.658.634-.658,1.586.329V329.2l-.634.329V329.2l3.488-1.315-.951-.329c.72-.576,1.246-1.135,1.9-.329l.634-.658c1.446-.288,2.2-2.167,2.22-3.617l.951,1.644-.317.329-.951-.329v.329l.634.329h-.634l1.269.987-.634-.987.951-.329,1.269-2.3-.634-3.288h.317l.317,1.973h.317l1.268-1.644v-.329l-1.268.658v-2.631l1.268.658.951-.658v-.329c-1.11,0-.536-.863-.317-1.644-.7.073-1.646-.106-.634-.658l.951-3.617-1.586,2.631.317-.987-1.586.329v-1.644h-.634l.317.986-2.537-.986v-.329l.951-.329v-.329l-1.268-.329H954.7l-3.488-.658.634.986-1.268.658-.317-1.315-.634.329-.317-.986-1.268-.329h-.317l-.634.658c-1.047-1.041-2.68-.28-3.806.329l.317-.986-1.586.329v.329l.951.329v.329l-2.854-.658.634-.658H937.89l.634-.986c-.78.149-1.268.274-1.268-.658l-1.586-.329.317.987-.634-1.315h-.317v.986l-1.269-.658-.634,1.315v-1.644c-.786.169-.815.2-.634.986h-1.269v-.329h.634v-.329H930.6l1.586-.658v-.329l-3.171-.986.317-.658-3.488-1.315-1.586.329-.317-.329.317-.658-2.854-.986h-.317v1.315h-.317v-.986h-.317v.986H919.18v-.329l.634-1.315H919.5c.054,1.538-1.678,1.965-2.854,1.644l.317-2.3h.951l-.317-.986.634-.329.951.658c-1.015-.975-1.592-.488-2.22.658l.317-1.973-2.537-.329v2.631h-.951l.317-1.315-.951-.329.634-.329v-.329l-1.586-.329v-.986l.634.329.951-.658v.329l-.634.329.317.329.951-.329-.317-1.315-1.268.329-1.268-.658v-.329l1.268-.986h-.317V295H912.2l.317-1.315-1.268.658-.317-1.315c.989.347,1.985.586,2.22-.658h-.317l-1.268.658-.634-.986-.951.329v-1.973l2.537-.329-.951.658-1.586-.986-.317-2.631.317-.329.634.329-.634-1.644.317-1.644h-.317l-.317.658-.317-1.644.951.329-1.268-1.315.634-2.3v-.329l-.951-1.644v-.329h.634v-.329h-.634v-.329h.634c-.824-3.465-.771-7.537-3.141-10.4-3.533-4.264-9.555-1.238-11.38,3.165-1.979,4.773.139,9.36.25,14.139M864,264.417l.317.329Z"
                transform="translate(-590.003 -177.278)"
                fill="#4e3b36"
            />
            <path
                id="Path_605"
                data-name="Path 605"
                d="M791,267.762c3.942-2.089,6.351-1.211,10.465-.658C798.561,265.286,793.387,264.926,791,267.762Z"
                transform="translate(-540.153 -178.321)"
                fill="#9f9c9a"
            />
            <path
                id="Path_606"
                data-name="Path 606"
                d="M821.223,266.667l.106.219-.106-.219m-19.556.219.211.11Z"
                transform="translate(-547.438 -178.98)"
                fill="#774d44"
            />
            <path
                id="Path_607"
                data-name="Path 607"
                d="M803,267v.329l3.171.329Z"
                transform="translate(-548.348 -179.203)"
                fill="#4e3b36"
            />
            <path
                id="Path_608"
                data-name="Path 608"
                d="M810,267v.329h1.268Z"
                transform="translate(-553.128 -179.203)"
                fill="#774d44"
            />
            <path
                id="Path_609"
                data-name="Path 609"
                d="M814,267l.317.329Z"
                transform="translate(-555.859 -179.203)"
                fill="#4e3b36"
            />
            <path
                id="Path_610"
                data-name="Path 610"
                d="M793.9,268l-1.9.986v.329l2.22-.986Z"
                transform="translate(-540.836 -179.874)"
                fill="#774d44"
            />
            <path
                id="Path_611"
                data-name="Path 611"
                d="M789.651,268.109l.211.11-.211-.11m4.863-.109.317.329-.317-.329m15.328.219.106.219-.106-.219M903.922,268l.317.329-.317-.329m-116.385.986v.658c-1.363-.053-1.951.761-2.537,1.973,2.332.429,7.434.416,7.928-2.631l-3.488-.658-1.9.658m7.294-.658v.329H796.1Z"
                transform="translate(-536.056 -179.874)"
                fill="#4e3b36"
            />
            <path
                id="Path_612"
                data-name="Path 612"
                d="M820,269l.317.329Z"
                transform="translate(-559.957 -180.546)"
                fill="#774d44"
            />
            <path
                id="Path_613"
                data-name="Path 613"
                d="M821,270v.329h.951Z"
                transform="translate(-560.64 -181.217)"
                fill="#4e3b36"
            />
            <path
                id="Path_614"
                data-name="Path 614"
                d="M824,270v.329h.951Z"
                transform="translate(-562.688 -181.217)"
                fill="#774d44"
            />
            <path
                id="Path_615"
                data-name="Path 615"
                d="M827,270v.329l3.171,1.315v-.329Z"
                transform="translate(-564.737 -181.217)"
                fill="#9f9c9a"
            />
            <path
                id="Path_616"
                data-name="Path 616"
                d="M794,271l.317.329Z"
                transform="translate(-542.202 -181.888)"
                fill="#31231e"
            />
            <path
                id="Path_617"
                data-name="Path 617"
                d="M827,271l.317.329Z"
                transform="translate(-564.737 -181.888)"
                fill="#4e3b36"
            />
            <path
                id="Path_618"
                data-name="Path 618"
                d="M828,271l.317.329Z"
                transform="translate(-565.42 -181.888)"
                fill="#774d44"
            />
            <path
                id="Path_619"
                data-name="Path 619"
                d="M1188,271l.317.329Z"
                transform="translate(-811.254 -181.888)"
                fill="#4e3b36"
            />
            <path
                id="Path_620"
                data-name="Path 620"
                d="M906.29,271l1.586,2.3L906.29,271M775,275.932h.317l4.44-4.275C777.881,271.267,775.709,274.355,775,275.932Z"
                transform="translate(-529.227 -181.888)"
                fill="#9f9c9a"
            />
            <path
                id="Path_621"
                data-name="Path 621"
                d="M790,272l.317.329Z"
                transform="translate(-539.47 -182.559)"
                fill="#774d44"
            />
            <path
                id="Path_622"
                data-name="Path 622"
                d="M792,272l.317.329Z"
                transform="translate(-540.836 -182.559)"
                fill="#31231e"
            />
            <path
                id="Path_623"
                data-name="Path 623"
                d="M829,272l.317.329Z"
                transform="translate(-566.102 -182.559)"
                fill="#4e3b36"
            />
            <path
                id="Path_624"
                data-name="Path 624"
                d="M800.636,272l.317.329-.317-.329M787,272.329l.317.329Z"
                transform="translate(-537.422 -182.559)"
                fill="#774d44"
            />
            <path
                id="Path_625"
                data-name="Path 625"
                d="M831.667,273.333l.211.11Z"
                transform="translate(-567.924 -183.454)"
                fill="#4e3b36"
            />
            <path
                id="Path_626"
                data-name="Path 626"
                d="M833,273l.317.329L833,273m112.9,0,.317.329Z"
                transform="translate(-568.834 -183.23)"
                fill="#774d44"
            />
            <path
                id="Path_627"
                data-name="Path 627"
                d="M786,274l.317.329L786,274m15.222,0,.317.329Z"
                transform="translate(-536.739 -183.901)"
                fill="#4e3b36"
            />
            <path
                id="Path_628"
                data-name="Path 628"
                d="M835,274l.317.329L835,274m8.668.219.106.219Z"
                transform="translate(-570.2 -183.901)"
                fill="#774d44"
            />
            <path
                id="Path_629"
                data-name="Path 629"
                d="M1189,274l.317.329Z"
                transform="translate(-811.937 -183.901)"
                fill="#4e3b36"
            />
            <path
                id="Path_630"
                data-name="Path 630"
                d="M785,275l.317.329Z"
                transform="translate(-536.056 -184.573)"
                fill="#774d44"
            />
            <path
                id="Path_631"
                data-name="Path 631"
                d="M836,275l.317.329Z"
                transform="translate(-570.883 -184.573)"
                fill="#4e3b36"
            />
            <path
                id="Path_632"
                data-name="Path 632"
                d="M837,275l.317.329Z"
                transform="translate(-571.565 -184.573)"
                fill="#774d44"
            />
            <path
                id="Path_633"
                data-name="Path 633"
                d="M838,275v.329l4.123,1.973v-.329L838,275m7.294,0-.951,1.315C845.179,276.151,845.485,275.9,845.294,275Z"
                transform="translate(-572.248 -184.573)"
                fill="#9f9c9a"
            />
            <path
                id="Path_634"
                data-name="Path 634"
                d="M912.753,275l.317.329-.317-.329M784,275.329l.317.329Z"
                transform="translate(-535.373 -184.573)"
                fill="#774d44"
            />
            <path
                id="Path_635"
                data-name="Path 635"
                d="M838.667,276.11l.211.11-.211-.11m7.4-.11.317.329Z"
                transform="translate(-572.704 -185.244)"
                fill="#4e3b36"
            />
            <path
                id="Path_636"
                data-name="Path 636"
                d="M912.387,276l.317.329-.317-.329M783,276.329l.317.329Z"
                transform="translate(-534.69 -185.244)"
                fill="#774d44"
            />
            <path
                id="Path_637"
                data-name="Path 637"
                d="M840,277l.951.986Z"
                transform="translate(-573.614 -185.915)"
                fill="#4e3b36"
            />
            <path
                id="Path_638"
                data-name="Path 638"
                d="M841,277l.317.329L841,277m111.311,0,.317.329Z"
                transform="translate(-574.297 -185.915)"
                fill="#774d44"
            />
            <path
                id="Path_639"
                data-name="Path 639"
                d="M1196,277v.329l8.562,2.631C1202.013,277.605,1199.336,277,1196,277Z"
                transform="translate(-816.717 -185.915)"
                fill="#9f9c9a"
            />
            <path
                id="Path_640"
                data-name="Path 640"
                d="M782,278l.317.329Z"
                transform="translate(-534.007 -186.586)"
                fill="#4e3b36"
            />
            <path
                id="Path_641"
                data-name="Path 641"
                d="M842,278l.317.329Z"
                transform="translate(-574.98 -186.586)"
                fill="#774d44"
            />
            <path
                id="Path_642"
                data-name="Path 642"
                d="M861,278l.317.329Z"
                transform="translate(-587.954 -186.586)"
                fill="#4e3b36"
            />
            <path
                id="Path_643"
                data-name="Path 643"
                d="M1193,278v.329h3.171Z"
                transform="translate(-814.669 -186.586)"
                fill="#774d44"
            />
            <path
                id="Path_644"
                data-name="Path 644"
                d="M1203.67,278.333l.209.11Z"
                transform="translate(-821.955 -186.81)"
                fill="#4e3b36"
            />
            <path
                id="Path_645"
                data-name="Path 645"
                d="M1239,278v.329h4.757Z"
                transform="translate(-846.081 -186.586)"
                fill="#9f9c9a"
            />
            <path
                id="Path_646"
                data-name="Path 646"
                d="M781,279l.317.329Z"
                transform="translate(-533.325 -187.257)"
                fill="#774d44"
            />
            <path
                id="Path_647"
                data-name="Path 647"
                d="M852,280v.329l1.586-.329Z"
                transform="translate(-581.809 -187.929)"
                fill="#9f9c9a"
            />
            <path
                id="Path_648"
                data-name="Path 648"
                d="M857.667,279.109l.211.11-.211-.11m.74-.109.317.329Z"
                transform="translate(-585.678 -187.257)"
                fill="#774d44"
            />
            <path
                id="Path_649"
                data-name="Path 649"
                d="M1194,279v.329h1.269L1194,279m1.586,0v.329h.951l-.951-.329m2.854,0,.317.329Z"
                transform="translate(-815.351 -187.257)"
                fill="#4e3b36"
            />
            <path
                id="Path_650"
                data-name="Path 650"
                d="M1209.67,279.333l.209.11Z"
                transform="translate(-826.052 -187.481)"
                fill="#774d44"
            />
            <path
                id="Path_651"
                data-name="Path 651"
                d="M1235.67,279.333l.209.11Z"
                transform="translate(-843.807 -187.481)"
                fill="#9f9c9a"
            />
            <path
                id="Path_652"
                data-name="Path 652"
                d="M1237,279v.329h2.854Z"
                transform="translate(-844.715 -187.257)"
                fill="#774d44"
            />
            <path
                id="Path_653"
                data-name="Path 653"
                d="M1237,280v.329l10.465,4.6-1.268-2.3,2.854,2.631-4.757-4.932Z"
                transform="translate(-844.715 -187.929)"
                fill="#4e3b36"
            />
            <path
                id="Path_654"
                data-name="Path 654"
                d="M1251,279v.329l1.586.329Z"
                transform="translate(-854.275 -187.257)"
                fill="#774d44"
            />
            <path
                id="Path_655"
                data-name="Path 655"
                d="M1255,279l.317.329Z"
                transform="translate(-857.007 -187.257)"
                fill="#9f9c9a"
            />
            <path
                id="Path_656"
                data-name="Path 656"
                d="M780,280l.317.329Z"
                transform="translate(-532.642 -187.929)"
                fill="#774d44"
            />
            <path
                id="Path_657"
                data-name="Path 657"
                d="M843,280l.317.329Z"
                transform="translate(-575.663 -187.929)"
                fill="#4e3b36"
            />
            <path
                id="Path_658"
                data-name="Path 658"
                d="M855,280l.317.329Z"
                transform="translate(-583.857 -187.929)"
                fill="#774d44"
            />
            <path
                id="Path_659"
                data-name="Path 659"
                d="M1211.67,280.333l.209.11Z"
                transform="translate(-827.418 -188.152)"
                fill="#4e3b36"
            />
            <path
                id="Path_660"
                data-name="Path 660"
                d="M1213,280l.317.329Z"
                transform="translate(-828.326 -187.929)"
                fill="#774d44"
            />
            <path
                id="Path_661"
                data-name="Path 661"
                d="M1227,281.658v.329l2.22-.987Z"
                transform="translate(-837.886 -188.6)"
                fill="#9f9c9a"
            />
            <path
                id="Path_662"
                data-name="Path 662"
                d="M1234,280l.317.329Z"
                transform="translate(-842.667 -187.929)"
                fill="#774d44"
            />
            <path
                id="Path_663"
                data-name="Path 663"
                d="M1235,280l.317.329Z"
                transform="translate(-843.349 -187.929)"
                fill="#4e3b36"
            />
            <path
                id="Path_664"
                data-name="Path 664"
                d="M1256,280v.329h.951Z"
                transform="translate(-857.69 -187.929)"
                fill="#9f9c9a"
            />
            <path
                id="Path_665"
                data-name="Path 665"
                d="M779,281l.317.329Z"
                transform="translate(-531.959 -188.6)"
                fill="#774d44"
            />
            <path
                id="Path_666"
                data-name="Path 666"
                d="M844,281l.317.329Z"
                transform="translate(-576.346 -188.6)"
                fill="#4e3b36"
            />
            <path
                id="Path_667"
                data-name="Path 667"
                d="M845,281v.329h.951L845,281m2.114.109.211.11Z"
                transform="translate(-577.028 -188.6)"
                fill="#774d44"
            />
            <path
                id="Path_668"
                data-name="Path 668"
                d="M849,281.329v.329l1.9-.329H849M964.751,281l.317.329Z"
                transform="translate(-579.76 -188.6)"
                fill="#4e3b36"
            />
            <path
                id="Path_669"
                data-name="Path 669"
                d="M1232,281l.317.329Z"
                transform="translate(-841.301 -188.6)"
                fill="#774d44"
            />
            <path
                id="Path_670"
                data-name="Path 670"
                d="M1233,281l.317.329Z"
                transform="translate(-841.984 -188.6)"
                fill="#4e3b36"
            />
            <path
                id="Path_671"
                data-name="Path 671"
                d="M1255,281v.329h1.269Z"
                transform="translate(-857.007 -188.6)"
                fill="#31231e"
            />
            <path
                id="Path_672"
                data-name="Path 672"
                d="M1260,281l.317.329Z"
                transform="translate(-860.421 -188.6)"
                fill="#774d44"
            />
            <path
                id="Path_673"
                data-name="Path 673"
                d="M1261,281l.317.329Z"
                transform="translate(-861.104 -188.6)"
                fill="#9f9c9a"
            />
            <path
                id="Path_674"
                data-name="Path 674"
                d="M778,282l.317.329Z"
                transform="translate(-531.276 -189.271)"
                fill="#774d44"
            />
            <path
                id="Path_675"
                data-name="Path 675"
                d="M851.981,293.362l.317,2.959.317.329.634-.329-.317.986,1.268-.329.951,1.644-.634-.658,1.269-.987v-.329l-.951-.329v-.329c1.73-.243,3.042-1.018,2.537-2.959h-.317l-.634.986.951-2.631,2.22.329v-.329l-.634-.986,1.268.329-.317-.658.951.329.951-3.617-.317-.658-.317-.329-.634.329-.317-.986a2.047,2.047,0,0,0-1.586-3.213c-4.985-.948-10.776,2.787-8.467,8.475A7.237,7.237,0,0,0,851.981,293.362Z"
                transform="translate(-580.204 -189.124)"
                fill="#4e3b36"
            />
            <path
                id="Path_676"
                data-name="Path 676"
                d="M1216,282l.634.658L1216,282m4.44,0-.317.658Z"
                transform="translate(-830.375 -189.271)"
                fill="#774d44"
            />
            <path
                id="Path_677"
                data-name="Path 677"
                d="M1231,282l.317.329L1231,282m5.391,0,.317.329Z"
                transform="translate(-840.618 -189.271)"
                fill="#4e3b36"
            />
            <path
                id="Path_678"
                data-name="Path 678"
                d="M1260,282l.317.329Z"
                transform="translate(-860.421 -189.271)"
                fill="#31231e"
            />
            <path
                id="Path_679"
                data-name="Path 679"
                d="M1262,282l.317.329Z"
                transform="translate(-861.787 -189.271)"
                fill="#9f9c9a"
            />
            <path
                id="Path_680"
                data-name="Path 680"
                d="M777,283l.317.329L777,283m139.218,0,.317.329-.317-.329m4.44,0,.317.329Z"
                transform="translate(-530.593 -189.942)"
                fill="#4e3b36"
            />
            <path
                id="Path_681"
                data-name="Path 681"
                d="M1261,283l.634.658Z"
                transform="translate(-861.104 -189.942)"
                fill="#31231e"
            />
            <path
                id="Path_682"
                data-name="Path 682"
                d="M1263,283l.317.329Z"
                transform="translate(-862.47 -189.942)"
                fill="#9f9c9a"
            />
            <path
                id="Path_683"
                data-name="Path 683"
                d="M776,284l.317.329L776,284m140.17,0,.317.329Z"
                transform="translate(-529.91 -190.613)"
                fill="#774d44"
            />
            <path
                id="Path_684"
                data-name="Path 684"
                d="M1224,284l.317.329Z"
                transform="translate(-835.838 -190.613)"
                fill="#9f9c9a"
            />
            <path
                id="Path_685"
                data-name="Path 685"
                d="M1225.67,284.333l.209.11Z"
                transform="translate(-836.978 -190.837)"
                fill="#774d44"
            />
            <path
                id="Path_686"
                data-name="Path 686"
                d="M1227,284v.329h.951Z"
                transform="translate(-837.886 -190.613)"
                fill="#4e3b36"
            />
            <path
                id="Path_687"
                data-name="Path 687"
                d="M1264,284l.951.987Z"
                transform="translate(-863.153 -190.613)"
                fill="#9f9c9a"
            />
            <path
                id="Path_688"
                data-name="Path 688"
                d="M776,285v.987h.317Z"
                transform="translate(-529.91 -191.284)"
                fill="#4e3b36"
            />
            <path
                id="Path_689"
                data-name="Path 689"
                d="M1219.67,285.109l.209.11-.209-.11m1.056-.109.317.329Z"
                transform="translate(-832.881 -191.284)"
                fill="#774d44"
            />
            <path
                id="Path_690"
                data-name="Path 690"
                d="M1224,285l.317.329Z"
                transform="translate(-835.838 -191.284)"
                fill="#4e3b36"
            />
            <path
                id="Path_691"
                data-name="Path 691"
                d="M930.075,285l.317.329-.317-.329M775,285.329v2.631h.317Z"
                transform="translate(-529.227 -191.284)"
                fill="#774d44"
            />
            <path
                id="Path_692"
                data-name="Path 692"
                d="M1219,286v.329h1.586Z"
                transform="translate(-832.423 -191.956)"
                fill="#4e3b36"
            />
            <path
                id="Path_693"
                data-name="Path 693"
                d="M1265,286l.317.329Z"
                transform="translate(-863.835 -191.956)"
                fill="#774d44"
            />
            <path
                id="Path_694"
                data-name="Path 694"
                d="M774,287v6.905h.317L774,287m156.343,0,.317.329-.317-.329m.317.329v.329l1.586,1.644h.317Z"
                transform="translate(-528.544 -192.627)"
                fill="#9f9c9a"
            />
            <path
                id="Path_695"
                data-name="Path 695"
                d="M1269,289l.317.329L1269,289m.317.329.317.329Z"
                transform="translate(-866.567 -193.969)"
                fill="#774d44"
            />
            <path
                id="Path_696"
                data-name="Path 696"
                d="M1100.792,305.471l1.269,1.644,2.537.329,2.22-.986.951,1.315-.317-.987v-.329h2.537l.951-.986a14.373,14.373,0,0,0-1.119-10.851c-1.639-2.97-4.351-3.59-6.777-1.036C1099.9,296.9,1100.84,301.438,1100.792,305.471Z"
                transform="translate(-751.636 -195.972)"
                fill="#4e3b36"
            />
            <path
                id="Path_697"
                data-name="Path 697"
                d="M1271,291l.317.329Z"
                transform="translate(-867.933 -195.311)"
                fill="#774d44"
            />
            <path
                id="Path_698"
                data-name="Path 698"
                d="M776.333,292.667l.106.219Z"
                transform="translate(-530.138 -196.43)"
                fill="#4e3b36"
            />
            <path
                id="Path_699"
                data-name="Path 699"
                d="M1272,292l.317.329Z"
                transform="translate(-868.616 -195.983)"
                fill="#774d44"
            />
            <path
                id="Path_700"
                data-name="Path 700"
                d="M775.333,294.667l.106.219Z"
                transform="translate(-529.455 -197.773)"
                fill="#4e3b36"
            />
            <path
                id="Path_701"
                data-name="Path 701"
                d="M1274,294l.317.329L1274,294m.317.329.951,3.288h.317Z"
                transform="translate(-869.981 -197.325)"
                fill="#9f9c9a"
            />
            <path
                id="Path_702"
                data-name="Path 702"
                d="M933.563,296l.317.329-.317-.329M775,296.329l.317.329Z"
                transform="translate(-529.227 -198.667)"
                fill="#774d44"
            />
            <path
                id="Path_703"
                data-name="Path 703"
                d="M934.246,297l.317.329-.317-.329M776,297.329v.986h.317Z"
                transform="translate(-529.91 -199.338)"
                fill="#4e3b36"
            />
            <path
                id="Path_704"
                data-name="Path 704"
                d="M885,298l.317.329Z"
                transform="translate(-604.343 -200.01)"
                fill="#31231e"
            />
            <path
                id="Path_705"
                data-name="Path 705"
                d="M1276,298l.317.329Z"
                transform="translate(-871.347 -200.01)"
                fill="#774d44"
            />
            <path
                id="Path_706"
                data-name="Path 706"
                d="M778.97,307.878h1.9l-.317-.986,2.854-1.644.951-3.946,1.9-1.973c-4.608-.287-7.535,4.268-7.294,8.549M936.582,299l.317.329Z"
                transform="translate(-531.929 -200.681)"
                fill="#4e3b36"
            />
            <path
                id="Path_707"
                data-name="Path 707"
                d="M775,300l.317.329L775,300m159.2,0,.317.329Z"
                transform="translate(-529.227 -201.352)"
                fill="#774d44"
            />
            <path
                id="Path_708"
                data-name="Path 708"
                d="M1010.679,301v.986H1011l-.317-.986M887,301.658l.317.329Z"
                transform="translate(-605.709 -202.023)"
                fill="#4e3b36"
            />
            <path
                id="Path_709"
                data-name="Path 709"
                d="M934.515,305l.317.329-.317-.329M775,305.329l.317.329Z"
                transform="translate(-529.227 -204.708)"
                fill="#774d44"
            />
            <path
                id="Path_710"
                data-name="Path 710"
                d="M1278,306l.951.658v-.329Z"
                transform="translate(-872.713 -205.379)"
                fill="#4e3b36"
            />
            <path
                id="Path_711"
                data-name="Path 711"
                d="M1279,306v.329h.951Z"
                transform="translate(-873.396 -205.379)"
                fill="#9f9c9a"
            />
            <path
                id="Path_712"
                data-name="Path 712"
                d="M775,307l.317.329Z"
                transform="translate(-529.227 -206.05)"
                fill="#4e3b36"
            />
            <path
                id="Path_713"
                data-name="Path 713"
                d="M1281,307v.329h3.488Z"
                transform="translate(-874.761 -206.05)"
                fill="#774d44"
            />
            <path
                id="Path_714"
                data-name="Path 714"
                d="M936.906,307v.329l1.586.329v-.329L936.906,307M772,307.329l.317.329Z"
                transform="translate(-527.179 -206.05)"
                fill="#9f9c9a"
            />
            <path
                id="Path_715"
                data-name="Path 715"
                d="M773,308l.317.329Z"
                transform="translate(-527.862 -206.721)"
                fill="#774d44"
            />
            <path
                id="Path_716"
                data-name="Path 716"
                d="M774,308l.317.329L774,308m163.954,0v.329l1.9.329v-.329Z"
                transform="translate(-528.544 -206.721)"
                fill="#4e3b36"
            />
            <path
                id="Path_717"
                data-name="Path 717"
                d="M1293,308l.317.329Z"
                transform="translate(-882.956 -206.721)"
                fill="#774d44"
            />
            <path
                id="Path_718"
                data-name="Path 718"
                d="M768,309v.329h.951Z"
                transform="translate(-524.447 -207.393)"
                fill="#9f9c9a"
            />
            <path
                id="Path_719"
                data-name="Path 719"
                d="M771,309l.317.329Z"
                transform="translate(-526.496 -207.393)"
                fill="#774d44"
            />
            <path
                id="Path_720"
                data-name="Path 720"
                d="M772,309l.317.329Z"
                transform="translate(-527.179 -207.393)"
                fill="#4e3b36"
            />
            <path
                id="Path_721"
                data-name="Path 721"
                d="M1297,309l.317.329Z"
                transform="translate(-885.687 -207.393)"
                fill="#774d44"
            />
            <path
                id="Path_722"
                data-name="Path 722"
                d="M931.509,309.333l.209.11-.209-.11m-168.924.219-1.586.986v.329Z"
                transform="translate(-519.667 -207.616)"
                fill="#9f9c9a"
            />
            <path
                id="Path_723"
                data-name="Path 723"
                d="M765,311.658l1.268-.658Z"
                transform="translate(-522.399 -208.735)"
                fill="#774d44"
            />
            <path
                id="Path_724"
                data-name="Path 724"
                d="M766,310.658l1.268.658.634-.329c-.26-1.252-1-.845-1.9-.329M802.787,310l.317.329-.317-.329m132.242,0v.329l1.268.658v-.329Z"
                transform="translate(-523.081 -208.064)"
                fill="#4e3b36"
            />
            <path
                id="Path_725"
                data-name="Path 725"
                d="M1300,310v.329l1.269.658Z"
                transform="translate(-887.736 -208.064)"
                fill="#774d44"
            />
            <path
                id="Path_726"
                data-name="Path 726"
                d="M1302,310l.317.329Z"
                transform="translate(-889.102 -208.064)"
                fill="#9f9c9a"
            />
            <path
                id="Path_727"
                data-name="Path 727"
                d="M773,311l.317.329Z"
                transform="translate(-527.862 -208.735)"
                fill="#4e3b36"
            />
            <path
                id="Path_728"
                data-name="Path 728"
                d="M1303,311l.317.329Z"
                transform="translate(-889.785 -208.735)"
                fill="#9f9c9a"
            />
            <path
                id="Path_729"
                data-name="Path 729"
                d="M877,312l.317.329Z"
                transform="translate(-598.88 -209.406)"
                fill="#4e3b36"
            />
            <path
                id="Path_730"
                data-name="Path 730"
                d="M1304,312v.329c2.651,1.969,3.9,4.5,5.074,7.563h.317C1308.522,316.729,1307.019,313.46,1304,312Z"
                transform="translate(-890.468 -209.406)"
                fill="#9f9c9a"
            />
            <path
                id="Path_731"
                data-name="Path 731"
                d="M763,313l.317.329Z"
                transform="translate(-521.033 -210.077)"
                fill="#774d44"
            />
            <path
                id="Path_732"
                data-name="Path 732"
                d="M764.667,313.109l.211.11-.211-.11M935.7,313l.951.986Z"
                transform="translate(-522.171 -210.077)"
                fill="#4e3b36"
            />
            <path
                id="Path_733"
                data-name="Path 733"
                d="M1305,313l.317.329Z"
                transform="translate(-891.15 -210.077)"
                fill="#774d44"
            />
            <path
                id="Path_734"
                data-name="Path 734"
                d="M756.269,314,755,315.644Z"
                transform="translate(-515.57 -210.748)"
                fill="#9f9c9a"
            />
            <path
                id="Path_735"
                data-name="Path 735"
                d="M760,314l.317.329Z"
                transform="translate(-518.984 -210.748)"
                fill="#774d44"
            />
            <path
                id="Path_736"
                data-name="Path 736"
                d="M761,314v.329h.951L761,314m1.586,0,.317.329-.317-.329m34.567,0,.317.329-.317-.329m.951,0-.634,1.315C798.181,314.9,798.53,314.75,798.1,314Z"
                transform="translate(-519.667 -210.748)"
                fill="#4e3b36"
            />
            <path
                id="Path_737"
                data-name="Path 737"
                d="M932.468,314l.317.329-.317-.329M759,314.329l.317.329Z"
                transform="translate(-518.301 -210.748)"
                fill="#774d44"
            />
            <path
                id="Path_738"
                data-name="Path 738"
                d="M1211.22,316.975l-.317.987-1.268,1.315.634.986-1.268-.329.317.986,1.586,1.973-.951-.658,1.269,2.3h-.951v.986h1.269l-.951.987,1.269.987,1.586-.329-.317-.658.951.329,1.269-.329,8.562-6.577C1222.313,313.609,1215.368,316.709,1211.22,316.975Z"
                transform="translate(-825.595 -212.079)"
                fill="#4e3b36"
            />
            <path
                id="Path_739"
                data-name="Path 739"
                d="M758,316l.317.329Z"
                transform="translate(-517.618 -212.091)"
                fill="#774d44"
            />
            <path
                id="Path_740"
                data-name="Path 740"
                d="M1307,316l.317.329Z"
                transform="translate(-892.516 -212.091)"
                fill="#4e3b36"
            />
            <path
                id="Path_741"
                data-name="Path 741"
                d="M931.737,316l.317.329-.317-.329M757,316.329l.317.329-.317-.329m175.054,0,.317.329Z"
                transform="translate(-516.936 -212.091)"
                fill="#774d44"
            />
            <path
                id="Path_742"
                data-name="Path 742"
                d="M756,318l.317.329Z"
                transform="translate(-516.253 -213.433)"
                fill="#4e3b36"
            />
            <path
                id="Path_743"
                data-name="Path 743"
                d="M931.005,318l.317.329-.317-.329M755,318.329l.317.329Z"
                transform="translate(-515.57 -213.433)"
                fill="#774d44"
            />
            <path
                id="Path_744"
                data-name="Path 744"
                d="M788,319l.317.329Z"
                transform="translate(-538.105 -214.104)"
                fill="#31231e"
            />
            <path
                id="Path_745"
                data-name="Path 745"
                d="M1311,319l.317.329Z"
                transform="translate(-895.248 -214.104)"
                fill="#774d44"
            />
            <path
                id="Path_746"
                data-name="Path 746"
                d="M754.333,320.667l.106.219Z"
                transform="translate(-515.114 -215.223)"
                fill="#9f9c9a"
            />
            <path
                id="Path_747"
                data-name="Path 747"
                d="M755,320l.317.329Z"
                transform="translate(-515.57 -214.775)"
                fill="#4e3b36"
            />
            <path
                id="Path_748"
                data-name="Path 748"
                d="M868.951,320,868,321.315h.317l.951-.987Z"
                transform="translate(-592.735 -214.775)"
                fill="#31231e"
            />
            <path
                id="Path_749"
                data-name="Path 749"
                d="M930.956,320l.317.329-.317-.329m.317.329.317.329-.317-.329M754,320.658l.317.329Z"
                transform="translate(-514.887 -214.775)"
                fill="#774d44"
            />
            <path
                id="Path_750"
                data-name="Path 750"
                d="M1313,322l.317.329Z"
                transform="translate(-896.614 -216.118)"
                fill="#4e3b36"
            />
            <path
                id="Path_751"
                data-name="Path 751"
                d="M753,323l.317.329Z"
                transform="translate(-514.204 -216.789)"
                fill="#9f9c9a"
            />
            <path
                id="Path_752"
                data-name="Path 752"
                d="M1314,323l.317.329Z"
                transform="translate(-897.296 -216.789)"
                fill="#774d44"
            />
            <path
                id="Path_753"
                data-name="Path 753"
                d="M753,324v1.315h.317L753,324m177.908,0,.317.329-.317-.329m-139.853.329.317.329-.317-.329m106.554,0,.317.329Z"
                transform="translate(-514.204 -217.46)"
                fill="#4e3b36"
            />
            <path
                id="Path_754"
                data-name="Path 754"
                d="M1315,325l.317.329Z"
                transform="translate(-897.979 -218.131)"
                fill="#774d44"
            />
            <path
                id="Path_755"
                data-name="Path 755"
                d="M864,326l.317.329Z"
                transform="translate(-590.003 -218.803)"
                fill="#31231e"
            />
            <path
                id="Path_756"
                data-name="Path 756"
                d="M876,326l.317.329L876,326m139.218,0,.634.986Z"
                transform="translate(-598.198 -218.803)"
                fill="#4e3b36"
            />
            <path
                id="Path_757"
                data-name="Path 757"
                d="M749.951,327l-.951.987v.329Z"
                transform="translate(-511.473 -219.474)"
                fill="#9f9c9a"
            />
            <path
                id="Path_758"
                data-name="Path 758"
                d="M870,327l.317.329Z"
                transform="translate(-594.1 -219.474)"
                fill="#4e3b36"
            />
            <path
                id="Path_759"
                data-name="Path 759"
                d="M1316,327l.317.329Z"
                transform="translate(-898.662 -219.474)"
                fill="#774d44"
            />
            <path
                id="Path_760"
                data-name="Path 760"
                d="M752,329l.317.329Z"
                transform="translate(-513.521 -220.816)"
                fill="#4e3b36"
            />
            <path
                id="Path_761"
                data-name="Path 761"
                d="M1008,329l.317.329Z"
                transform="translate(-688.337 -220.816)"
                fill="#31231e"
            />
            <path
                id="Path_762"
                data-name="Path 762"
                d="M1317.33,329.667l.108.219Z"
                transform="translate(-899.57 -221.264)"
                fill="#4e3b36"
            />
            <path
                id="Path_763"
                data-name="Path 763"
                d="M737,331v.329l1.9-.329Z"
                transform="translate(-503.278 -222.158)"
                fill="#9f9c9a"
            />
            <path
                id="Path_764"
                data-name="Path 764"
                d="M751,330l.317.329L751,330m38.055,0,.317.329Z"
                transform="translate(-512.838 -221.487)"
                fill="#4e3b36"
            />
            <path
                id="Path_765"
                data-name="Path 765"
                d="M968,330l.317.329L968,330m77.379,0,.317.329Z"
                transform="translate(-661.022 -221.487)"
                fill="#31231e"
            />
            <path
                id="Path_766"
                data-name="Path 766"
                d="M739,331v.329h1.586Z"
                transform="translate(-504.644 -222.158)"
                fill="#774d44"
            />
            <path
                id="Path_767"
                data-name="Path 767"
                d="M744,331v.329h1.9Z"
                transform="translate(-508.058 -222.158)"
                fill="#4e3b36"
            />
            <path
                id="Path_768"
                data-name="Path 768"
                d="M1318.33,331.667l.108.219Z"
                transform="translate(-900.253 -222.606)"
                fill="#774d44"
            />
            <path
                id="Path_769"
                data-name="Path 769"
                d="M732,332v.329h1.269Z"
                transform="translate(-499.864 -222.83)"
                fill="#9f9c9a"
            />
            <path
                id="Path_770"
                data-name="Path 770"
                d="M736.667,332.333l.211.11Z"
                transform="translate(-503.051 -223.053)"
                fill="#774d44"
            />
            <path
                id="Path_771"
                data-name="Path 771"
                d="M738,332l.317.329L738,332m41.226,0,.317.329Z"
                transform="translate(-503.961 -222.83)"
                fill="#4e3b36"
            />
            <path
                id="Path_772"
                data-name="Path 772"
                d="M970,332l.317.329Z"
                transform="translate(-662.388 -222.83)"
                fill="#31231e"
            />
            <path
                id="Path_773"
                data-name="Path 773"
                d="M722.171,333,719,337.6h.317Z"
                transform="translate(-490.986 -223.501)"
                fill="#9f9c9a"
            />
            <path
                id="Path_774"
                data-name="Path 774"
                d="M730,333l.317.329Z"
                transform="translate(-498.498 -223.501)"
                fill="#774d44"
            />
            <path
                id="Path_775"
                data-name="Path 775"
                d="M728.951,333v.329h2.22l-2.22-.329m89.217.219.108.219-.108-.219M881.489,333l.317.329-.317-.329m33.615,0,.317.329L915.1,333m-186.787.329.317.329-.317-.329m117.971,0,.317.329-.317-.329M728,333.658l.317.329-.317-.329m89.43,0,.951,1.644.317-.986-1.268-.658m97.992,0,.317.329Z"
                transform="translate(-497.132 -223.501)"
                fill="#4e3b36"
            />
            <path
                id="Path_776"
                data-name="Path 776"
                d="M726.317,336l-.317.658Z"
                transform="translate(-495.766 -225.514)"
                fill="#774d44"
            />
            <path
                id="Path_777"
                data-name="Path 777"
                d="M722.22,336.987l-1.586.658v.329l.634.658-.951-.329L720,339.617l1.586,1.644h.317l1.268-.986-.317-.987c1.254-.206.943-2.295.634-3.288Z"
                transform="translate(-491.669 -225.514)"
                fill="#4e3b36"
            />
            <path
                id="Path_778"
                data-name="Path 778"
                d="M971,336v.329l1.9,1.315v-.329L971,336m44.081,0,.317.329Z"
                transform="translate(-663.071 -225.514)"
                fill="#31231e"
            />
            <path
                id="Path_779"
                data-name="Path 779"
                d="M1320,336l.317.329Z"
                transform="translate(-901.393 -225.514)"
                fill="#774d44"
            />
            <path
                id="Path_780"
                data-name="Path 780"
                d="M977,337l.317.329Z"
                transform="translate(-667.168 -226.185)"
                fill="#31231e"
            />
            <path
                id="Path_781"
                data-name="Path 781"
                d="M1320,337v1.973h.317Z"
                transform="translate(-901.393 -226.185)"
                fill="#4e3b36"
            />
            <path
                id="Path_782"
                data-name="Path 782"
                d="M1321,337c.422,2.35.282,4.318,2.537,5.59Z"
                transform="translate(-902.076 -226.185)"
                fill="#9f9c9a"
            />
            <path
                id="Path_783"
                data-name="Path 783"
                d="M723.951,338l.317.329-.317-.329m-.317.329-.634.987Z"
                transform="translate(-493.718 -226.857)"
                fill="#31231e"
            />
            <path
                id="Path_784"
                data-name="Path 784"
                d="M1117,339l.317.329Z"
                transform="translate(-762.77 -227.528)"
                fill="#4e3b36"
            />
            <path
                id="Path_785"
                data-name="Path 785"
                d="M1321,339v1.644h.317Z"
                transform="translate(-902.076 -227.528)"
                fill="#774d44"
            />
            <path
                id="Path_786"
                data-name="Path 786"
                d="M1014,341l.317.329Z"
                transform="translate(-692.434 -228.87)"
                fill="#4e3b36"
            />
            <path
                id="Path_787"
                data-name="Path 787"
                d="M721,342l.317.329Z"
                transform="translate(-492.352 -229.541)"
                fill="#774d44"
            />
            <path
                id="Path_788"
                data-name="Path 788"
                d="M722,342v.658h.634L722,342m81.184,0,3.488,2.959v-.329L803.184,342m75.159.329.317.329Z"
                transform="translate(-493.035 -229.541)"
                fill="#31231e"
            />
            <path
                id="Path_789"
                data-name="Path 789"
                d="M1321,344l.317.329Z"
                transform="translate(-902.076 -230.884)"
                fill="#4e3b36"
            />
            <path
                id="Path_790"
                data-name="Path 790"
                d="M720,345l.317.329L720,345m190.7.219.108.219Z"
                transform="translate(-491.669 -231.555)"
                fill="#774d44"
            />
            <path
                id="Path_791"
                data-name="Path 791"
                d="M1011,346l.634.658V346Z"
                transform="translate(-690.385 -232.226)"
                fill="#4e3b36"
            />
            <path
                id="Path_792"
                data-name="Path 792"
                d="M719,347l.317.329Z"
                transform="translate(-490.986 -232.897)"
                fill="#774d44"
            />
            <path
                id="Path_793"
                data-name="Path 793"
                d="M1017,347l.317.329L1017,347m96.406,0,.317.329Z"
                transform="translate(-694.483 -232.897)"
                fill="#4e3b36"
            />
            <path
                id="Path_794"
                data-name="Path 794"
                d="M716.981,348c-1.528,5.358.972,10.3,2.854,15.126h.317l-3.048-8.221Z"
                transform="translate(-489.285 -233.568)"
                fill="#9f9c9a"
            />
            <path
                id="Path_795"
                data-name="Path 795"
                d="M719,348l.317.329Z"
                transform="translate(-490.986 -233.568)"
                fill="#4e3b36"
            />
            <path
                id="Path_796"
                data-name="Path 796"
                d="M909.544,348l.634.658-.634-.658M718,348.329l.317.329Z"
                transform="translate(-490.303 -233.568)"
                fill="#774d44"
            />
            <path
                id="Path_797"
                data-name="Path 797"
                d="M1322,349l.317.329L1322,349m.317.329.317.329Z"
                transform="translate(-902.759 -234.24)"
                fill="#4e3b36"
            />
            <path
                id="Path_798"
                data-name="Path 798"
                d="M1011,351l.317.329Z"
                transform="translate(-690.385 -235.582)"
                fill="#31231e"
            />
            <path
                id="Path_799"
                data-name="Path 799"
                d="M910.406,351l.317.329-.317-.329m-192.073.548.106.219-.106-.219m83.933-.219.317.329Z"
                transform="translate(-490.531 -235.582)"
                fill="#4e3b36"
            />
            <path
                id="Path_800"
                data-name="Path 800"
                d="M990,352l.317.329Z"
                transform="translate(-676.045 -236.253)"
                fill="#31231e"
            />
            <path
                id="Path_801"
                data-name="Path 801"
                d="M1325,352l.317.329Z"
                transform="translate(-904.808 -236.253)"
                fill="#4e3b36"
            />
            <path
                id="Path_802"
                data-name="Path 802"
                d="M993,353l.317.329Z"
                transform="translate(-678.094 -236.924)"
                fill="#31231e"
            />
            <path
                id="Path_803"
                data-name="Path 803"
                d="M1326,353l.317.329Z"
                transform="translate(-905.491 -236.924)"
                fill="#4e3b36"
            />
            <path
                id="Path_804"
                data-name="Path 804"
                d="M911.13,353l.317.329L911.13,353M718,353.329l.317.329Z"
                transform="translate(-490.303 -236.924)"
                fill="#774d44"
            />
            <path
                id="Path_805"
                data-name="Path 805"
                d="M991,354l.317.329L991,354m2.431.109.211.11Z"
                transform="translate(-676.728 -237.595)"
                fill="#31231e"
            />
            <path
                id="Path_806"
                data-name="Path 806"
                d="M1019,354.658l1.269-.329-1.269.329m98.309-.658.317.329Z"
                transform="translate(-695.849 -237.595)"
                fill="#4e3b36"
            />
            <path
                id="Path_807"
                data-name="Path 807"
                d="M1330,354l.634.658Z"
                transform="translate(-908.222 -237.595)"
                fill="#774d44"
            />
            <path
                id="Path_808"
                data-name="Path 808"
                d="M1331,354v.329c3.84,2.5,2.854,4.431,2.537,8.549h.317C1334.333,359.034,1335.424,355.58,1331,354Z"
                transform="translate(-908.905 -237.595)"
                fill="#9f9c9a"
            />
            <path
                id="Path_809"
                data-name="Path 809"
                d="M718,355v4.275h.317L718,355m188.056,2.3.634.329v.329c-1.874,1.015-1.265,3.12-.951,4.932h-.317l-.951-1.315,1.268,2.3,2.537.329.951-.329-.634-.658h1.269c1.211-1.48,3.707-3.69,3.355-5.888C912.636,353.725,907.28,355.246,906.056,357.3Z"
                transform="translate(-490.303 -238.267)"
                fill="#4e3b36"
            />
            <path
                id="Path_810"
                data-name="Path 810"
                d="M997,356l.317.329L997,356m5.391,0-.317.658h.634Z"
                transform="translate(-680.825 -238.938)"
                fill="#31231e"
            />
            <path
                id="Path_811"
                data-name="Path 811"
                d="M1023,356l.951.987v-.329L1023,356m97.992,0,.951.658v-.329Z"
                transform="translate(-698.58 -238.938)"
                fill="#4e3b36"
            />
            <path
                id="Path_812"
                data-name="Path 812"
                d="M1333,356l.317.329Z"
                transform="translate(-910.271 -238.938)"
                fill="#774d44"
            />
            <path
                id="Path_813"
                data-name="Path 813"
                d="M994,357v.987h.634V357Z"
                transform="translate(-678.777 -239.609)"
                fill="#31231e"
            />
            <path
                id="Path_814"
                data-name="Path 814"
                d="M1020,357l.317.329Z"
                transform="translate(-696.531 -239.609)"
                fill="#4e3b36"
            />
            <path
                id="Path_815"
                data-name="Path 815"
                d="M1335,357l.317.329Z"
                transform="translate(-911.637 -239.609)"
                fill="#774d44"
            />
            <path
                id="Path_816"
                data-name="Path 816"
                d="M986,358l.317.329Z"
                transform="translate(-673.314 -240.28)"
                fill="#4e3b36"
            />
            <path
                id="Path_817"
                data-name="Path 817"
                d="M992,358l.317.329Z"
                transform="translate(-677.411 -240.28)"
                fill="#31231e"
            />
            <path
                id="Path_818"
                data-name="Path 818"
                d="M1120.212,358l.317.329-.317-.329M1020,358.329l.317.329-.317-.329m100.529,0,.317.329-.317-.329m-98.626.329.317.329-.317-.329m98.943,0,.634.658Z"
                transform="translate(-696.531 -240.28)"
                fill="#4e3b36"
            />
            <path
                id="Path_819"
                data-name="Path 819"
                d="M1339,360l.317.329Z"
                transform="translate(-914.368 -241.622)"
                fill="#774d44"
            />
            <path
                id="Path_820"
                data-name="Path 820"
                d="M983,361l.317.329Z"
                transform="translate(-671.265 -242.294)"
                fill="#4e3b36"
            />
            <path
                id="Path_821"
                data-name="Path 821"
                d="M1015.67,361.333l.209.11Z"
                transform="translate(-693.575 -242.517)"
                fill="#31231e"
            />
            <path
                id="Path_822"
                data-name="Path 822"
                d="M1024.67,362.11l.209.11-.209-.11m1.056-.11-.952.658v.329l1.9-.329.317.986h.317Z"
                transform="translate(-699.72 -242.965)"
                fill="#4e3b36"
            />
            <path
                id="Path_823"
                data-name="Path 823"
                d="M1340,362l.317.329Z"
                transform="translate(-915.051 -242.965)"
                fill="#774d44"
            />
            <path
                id="Path_824"
                data-name="Path 824"
                d="M998,363v.987h.317L998,363m5.074,0,.317.329Z"
                transform="translate(-681.508 -243.636)"
                fill="#31231e"
            />
            <path
                id="Path_825"
                data-name="Path 825"
                d="M1113.015,364l.317.329-.317-.329m9.831,0v1.644h.317l-.317-1.644M1022,364.658l.317.329-.317-.329m2.325.219.108.219Z"
                transform="translate(-697.897 -244.307)"
                fill="#4e3b36"
            />
            <path
                id="Path_826"
                data-name="Path 826"
                d="M718,368v.987h.317Z"
                transform="translate(-490.303 -246.992)"
                fill="#774d44"
            />
            <path
                id="Path_827"
                data-name="Path 827"
                d="M992,368v.329l1.9.329V368Z"
                transform="translate(-677.411 -246.992)"
                fill="#4e3b36"
            />
            <path
                id="Path_828"
                data-name="Path 828"
                d="M1025,368l.634.987.317-.329Z"
                transform="translate(-699.946 -246.992)"
                fill="#31231e"
            />
            <path
                id="Path_829"
                data-name="Path 829"
                d="M719,369v.987h.317Z"
                transform="translate(-490.986 -247.663)"
                fill="#4e3b36"
            />
            <path
                id="Path_830"
                data-name="Path 830"
                d="M1309,370l.317.329Z"
                transform="translate(-893.882 -248.334)"
                fill="#31231e"
            />
            <path
                id="Path_831"
                data-name="Path 831"
                d="M1340,370l.317.329Z"
                transform="translate(-915.051 -248.334)"
                fill="#4e3b36"
            />
            <path
                id="Path_832"
                data-name="Path 832"
                d="M990,371l.317.329Z"
                transform="translate(-676.045 -249.005)"
                fill="#31231e"
            />
            <path
                id="Path_833"
                data-name="Path 833"
                d="M915.935,371l.317.329-.317-.329M719,371.329l.317.329Z"
                transform="translate(-490.986 -249.005)"
                fill="#774d44"
            />
            <path
                id="Path_834"
                data-name="Path 834"
                d="M1020,372l.317.329Z"
                transform="translate(-696.531 -249.676)"
                fill="#31231e"
            />
            <path
                id="Path_835"
                data-name="Path 835"
                d="M916.3,372v1.315h.317L916.3,372m-196.3.329.317.329Z"
                transform="translate(-491.669 -249.676)"
                fill="#4e3b36"
            />
            <path
                id="Path_836"
                data-name="Path 836"
                d="M989,373l.317.329L989,373m2.749.109.211.11Z"
                transform="translate(-675.362 -250.348)"
                fill="#31231e"
            />
            <path
                id="Path_837"
                data-name="Path 837"
                d="M720,374l.317.329Z"
                transform="translate(-491.669 -251.019)"
                fill="#774d44"
            />
            <path
                id="Path_838"
                data-name="Path 838"
                d="M820.682,374.219l.108.219-.108-.219m1.164-.219.317.329-.317-.329m-46.3.329.317.329-.317-.329M721,374.658l.317.329Z"
                transform="translate(-492.352 -251.019)"
                fill="#4e3b36"
            />
            <path
                id="Path_839"
                data-name="Path 839"
                d="M1339,376l.317.329Z"
                transform="translate(-914.368 -252.361)"
                fill="#774d44"
            />
            <path
                id="Path_840"
                data-name="Path 840"
                d="M722,377l.634.658L722,377m53.594,0,.317.329-.317-.329m30.761,0-.951.329v.329l.634.329Z"
                transform="translate(-493.035 -253.032)"
                fill="#4e3b36"
            />
            <path
                id="Path_841"
                data-name="Path 841"
                d="M991.268,377l-1.268.658,1.268.658v-.329l-.634-.329.951-.329Z"
                transform="translate(-676.045 -253.032)"
                fill="#31231e"
            />
            <path
                id="Path_842"
                data-name="Path 842"
                d="M1034,377l.317.329L1034,377m.634,0,.317.329Z"
                transform="translate(-706.092 -253.032)"
                fill="#4e3b36"
            />
            <path
                id="Path_843"
                data-name="Path 843"
                d="M722,378l.317.329Z"
                transform="translate(-493.035 -253.704)"
                fill="#774d44"
            />
            <path
                id="Path_844"
                data-name="Path 844"
                d="M895.667,378.333l.211.11-.211-.11m140.38.11.108.219Z"
                transform="translate(-611.628 -253.927)"
                fill="#4e3b36"
            />
            <path
                id="Path_845"
                data-name="Path 845"
                d="M723,379l.317.329Z"
                transform="translate(-493.718 -254.375)"
                fill="#774d44"
            />
            <path
                id="Path_846"
                data-name="Path 846"
                d="M891.634,379l-.634.987h1.268l-.634-.987m28.541,0,.317.329-.317-.329m16.386.109.209.11Z"
                transform="translate(-608.441 -254.375)"
                fill="#4e3b36"
            />
            <path
                id="Path_847"
                data-name="Path 847"
                d="M1046,379l.317.329Z"
                transform="translate(-714.286 -254.375)"
                fill="#31231e"
            />
            <path
                id="Path_848"
                data-name="Path 848"
                d="M724.333,380.219l.106.219-.106-.219m52.22-.219.317.329-.317-.329m2.22,0,.317.329-.317-.329m.846.109.211.11Z"
                transform="translate(-494.628 -255.046)"
                fill="#4e3b36"
            />
            <path
                id="Path_849"
                data-name="Path 849"
                d="M1027.67,380.333l.209.11Z"
                transform="translate(-701.769 -255.269)"
                fill="#31231e"
            />
            <path
                id="Path_850"
                data-name="Path 850"
                d="M1032,380l.317.329Z"
                transform="translate(-704.726 -255.046)"
                fill="#4e3b36"
            />
            <path
                id="Path_851"
                data-name="Path 851"
                d="M1048,380l.317.329Z"
                transform="translate(-715.652 -255.046)"
                fill="#31231e"
            />
            <path
                id="Path_852"
                data-name="Path 852"
                d="M1307,380l.634.658Z"
                transform="translate(-892.516 -255.046)"
                fill="#4e3b36"
            />
            <path
                id="Path_853"
                data-name="Path 853"
                d="M1312,380l.317.329Z"
                transform="translate(-895.931 -255.046)"
                fill="#31231e"
            />
            <path
                id="Path_854"
                data-name="Path 854"
                d="M1338.33,380.667l.108.219Z"
                transform="translate(-913.911 -255.494)"
                fill="#774d44"
            />
            <path
                id="Path_855"
                data-name="Path 855"
                d="M1060,382l.317.329L1060,382m.739.219.108.219Z"
                transform="translate(-723.846 -256.388)"
                fill="#4e3b36"
            />
            <path
                id="Path_856"
                data-name="Path 856"
                d="M1338.33,382.667l.108.219Z"
                transform="translate(-913.911 -256.836)"
                fill="#9f9c9a"
            />
            <path
                id="Path_857"
                data-name="Path 857"
                d="M724,383l.317.329L724,383m55.814,0,.317.329-.317-.329m131.5.109.209.11-.209-.11m7.186.11.108.219Z"
                transform="translate(-494.401 -257.059)"
                fill="#4e3b36"
            />
            <path
                id="Path_858"
                data-name="Path 858"
                d="M724,384l.634.986Z"
                transform="translate(-494.401 -257.731)"
                fill="#774d44"
            />
            <path
                id="Path_859"
                data-name="Path 859"
                d="M889.667,384.109l.211.11-.211-.11M914.508,384l.317.329Z"
                transform="translate(-607.53 -257.731)"
                fill="#4e3b36"
            />
            <path
                id="Path_860"
                data-name="Path 860"
                d="M992,384l.317.329Z"
                transform="translate(-677.411 -257.731)"
                fill="#31231e"
            />
            <path
                id="Path_861"
                data-name="Path 861"
                d="M725,385l.317.329L725,385m185.836,0,.317.329Z"
                transform="translate(-495.084 -258.402)"
                fill="#4e3b36"
            />
            <path
                id="Path_862"
                data-name="Path 862"
                d="M1337,385v1.315h.317Z"
                transform="translate(-913.002 -258.402)"
                fill="#774d44"
            />
            <path
                id="Path_863"
                data-name="Path 863"
                d="M887,386l.317.329L887,386m.951,0,.317.329-.317-.329m.634,0,.317.329Z"
                transform="translate(-605.709 -259.073)"
                fill="#4e3b36"
            />
            <path
                id="Path_864"
                data-name="Path 864"
                d="M896.317,386l-.317.658v.329l.634.658.951-.329-.634-.986,1.268.329v-.329l-1.9-.329m26.956,0,.317.329-.317-.329m2.431.109.211.11-.211-.11M948.643,386l.317.329-.317-.329m1.269,0-.317.658Z"
                transform="translate(-611.855 -259.073)"
                fill="#31231e"
            />
            <path
                id="Path_865"
                data-name="Path 865"
                d="M726,387l.317.329L726,387m57.717,0,.317.329Z"
                transform="translate(-495.766 -259.744)"
                fill="#4e3b36"
            />
            <path
                id="Path_866"
                data-name="Path 866"
                d="M972,387l.317.329L972,387m2.537,0-1.9.658v.329l2.22-.658Z"
                transform="translate(-663.753 -259.744)"
                fill="#31231e"
            />
            <path
                id="Path_867"
                data-name="Path 867"
                d="M726,388l.317.329Z"
                transform="translate(-495.766 -260.415)"
                fill="#774d44"
            />
            <path
                id="Path_868"
                data-name="Path 868"
                d="M892,388l.317.329L892,388m12.051.329.317.329-.317-.329m129.07,0,.952.986Z"
                transform="translate(-609.124 -260.415)"
                fill="#4e3b36"
            />
            <path
                id="Path_869"
                data-name="Path 869"
                d="M1338,389l.317.329Z"
                transform="translate(-913.685 -261.086)"
                fill="#9f9c9a"
            />
            <path
                id="Path_870"
                data-name="Path 870"
                d="M727.333,390.667l.106.219Z"
                transform="translate(-496.677 -262.205)"
                fill="#4e3b36"
            />
            <path
                id="Path_871"
                data-name="Path 871"
                d="M1070,390l.634.658Z"
                transform="translate(-730.675 -261.758)"
                fill="#31231e"
            />
            <path
                id="Path_872"
                data-name="Path 872"
                d="M1080,390l.634.658V390Z"
                transform="translate(-737.504 -261.758)"
                fill="#4e3b36"
            />
            <path
                id="Path_873"
                data-name="Path 873"
                d="M1339,390v.329l4.44.329v-.329Z"
                transform="translate(-914.368 -261.758)"
                fill="#9f9c9a"
            />
            <path
                id="Path_874"
                data-name="Path 874"
                d="M895.317,391l-.317.987h.317V391m16.491,0,.317.329Z"
                transform="translate(-611.172 -262.429)"
                fill="#31231e"
            />
            <path
                id="Path_875"
                data-name="Path 875"
                d="M1340,391l.317.329L1340,391m4.123,0,.317.329Z"
                transform="translate(-915.051 -262.429)"
                fill="#774d44"
            />
            <path
                id="Path_876"
                data-name="Path 876"
                d="M1354,391v.329a8.148,8.148,0,0,1,5.074,4.275C1359.271,393.119,1356.061,391.22,1354,391Z"
                transform="translate(-924.611 -262.429)"
                fill="#9f9c9a"
            />
            <path
                id="Path_877"
                data-name="Path 877"
                d="M727,392l.317.329Z"
                transform="translate(-496.449 -263.1)"
                fill="#774d44"
            />
            <path
                id="Path_878"
                data-name="Path 878"
                d="M891,392l.317.329Z"
                transform="translate(-608.441 -263.1)"
                fill="#4e3b36"
            />
            <path
                id="Path_879"
                data-name="Path 879"
                d="M919,392v.329h.951L919,392m6.343,0,.317.329-.317-.329m6.66,0v.329h1.269L932,392m35.835,0,.317.329Z"
                transform="translate(-627.561 -263.1)"
                fill="#31231e"
            />
            <path
                id="Path_880"
                data-name="Path 880"
                d="M1084,392l.317.329L1084,392m81.5,0v.329h1.269L1165.5,392m2.537,0,.317.329-.317-.329m1.9,0v.329l1.586.658v-.329Z"
                transform="translate(-740.235 -263.1)"
                fill="#4e3b36"
            />
            <path
                id="Path_881"
                data-name="Path 881"
                d="M1356,392l.317.329Z"
                transform="translate(-925.977 -263.1)"
                fill="#774d44"
            />
            <path
                id="Path_882"
                data-name="Path 882"
                d="M728,393l.317.329Z"
                transform="translate(-497.132 -263.771)"
                fill="#4e3b36"
            />
            <path
                id="Path_883"
                data-name="Path 883"
                d="M923.667,393.333l.211.11Z"
                transform="translate(-630.748 -263.995)"
                fill="#31231e"
            />
            <path
                id="Path_884"
                data-name="Path 884"
                d="M928.107,393l.317.329-.317-.329M728,393.329l.317.329Z"
                transform="translate(-497.132 -263.771)"
                fill="#774d44"
            />
            <path
                id="Path_885"
                data-name="Path 885"
                d="M1071,394l.634.658Z"
                transform="translate(-731.358 -264.442)"
                fill="#31231e"
            />
            <path
                id="Path_886"
                data-name="Path 886"
                d="M1101,394l.317.329Z"
                transform="translate(-751.844 -264.442)"
                fill="#4e3b36"
            />
            <path
                id="Path_887"
                data-name="Path 887"
                d="M1360,394l.317.329Z"
                transform="translate(-928.708 -264.442)"
                fill="#774d44"
            />
            <path
                id="Path_888"
                data-name="Path 888"
                d="M728,395v.986h.317Z"
                transform="translate(-497.132 -265.113)"
                fill="#9f9c9a"
            />
            <path
                id="Path_889"
                data-name="Path 889"
                d="M729,395l.317.329L729,395m200.741,0,.317.329Z"
                transform="translate(-497.815 -265.113)"
                fill="#4e3b36"
            />
            <path
                id="Path_890"
                data-name="Path 890"
                d="M729,396v1.315h.317Z"
                transform="translate(-497.815 -265.785)"
                fill="#774d44"
            />
            <path
                id="Path_891"
                data-name="Path 891"
                d="M895.333,396.667l.106.219-.106-.219m57.082,0,.108.219Z"
                transform="translate(-611.4 -266.232)"
                fill="#31231e"
            />
            <path
                id="Path_892"
                data-name="Path 892"
                d="M1096,396l.317.329L1096,396m84.673,0,.317.329Z"
                transform="translate(-748.43 -265.785)"
                fill="#4e3b36"
            />
            <path
                id="Path_893"
                data-name="Path 893"
                d="M1084,397v.329l1.586.329v-.329L1084,397m1.9.329v.329l2.22.658v-.329l-.951-.987Z"
                transform="translate(-740.235 -266.456)"
                fill="#31231e"
            />
            <path
                id="Path_894"
                data-name="Path 894"
                d="M1101.67,397.109l.209.11-.209-.11m1.056-.109.317.329-.317-.329m6.342,0-.317.658.317-.658m75.793,0,.317.329-.317-.329m-81.5.329.317.329-.317-.329m81.819,0,.317.329Z"
                transform="translate(-752.302 -266.456)"
                fill="#4e3b36"
            />
            <path
                id="Path_895"
                data-name="Path 895"
                d="M896,399v.329l.951.329L896,399m59.3,0,.317.329Z"
                transform="translate(-611.855 -267.798)"
                fill="#31231e"
            />
            <path
                id="Path_896"
                data-name="Path 896"
                d="M1110,399l.317.329L1110,399m2.22,0,.317.329-.317-.329m78.964,0,.317.329Z"
                transform="translate(-757.99 -267.798)"
                fill="#4e3b36"
            />
            <path
                id="Path_897"
                data-name="Path 897"
                d="M729,400l.951,1.315Z"
                transform="translate(-497.815 -268.469)"
                fill="#9f9c9a"
            />
            <path
                id="Path_898"
                data-name="Path 898"
                d="M730,400l.317.329L730,400m119.874,0,.317.329Z"
                transform="translate(-498.498 -268.469)"
                fill="#4e3b36"
            />
            <path
                id="Path_899"
                data-name="Path 899"
                d="M1367,400l.317.329Z"
                transform="translate(-933.489 -268.469)"
                fill="#774d44"
            />
            <path
                id="Path_900"
                data-name="Path 900"
                d="M731,401l.317.329L731,401m201.692,0,.317.329Z"
                transform="translate(-499.181 -269.141)"
                fill="#4e3b36"
            />
            <path
                id="Path_901"
                data-name="Path 901"
                d="M731,402l.317.329Z"
                transform="translate(-499.181 -269.812)"
                fill="#774d44"
            />
            <path
                id="Path_902"
                data-name="Path 902"
                d="M1093,402l.317.329L1093,402m12.368,0-.317.658Z"
                transform="translate(-746.381 -269.812)"
                fill="#31231e"
            />
            <path
                id="Path_903"
                data-name="Path 903"
                d="M1146,402v.329h.951Z"
                transform="translate(-782.573 -269.812)"
                fill="#4e3b36"
            />
            <path
                id="Path_904"
                data-name="Path 904"
                d="M1368,402l.634.658Z"
                transform="translate(-934.172 -269.812)"
                fill="#774d44"
            />
            <path
                id="Path_905"
                data-name="Path 905"
                d="M732,403l.317.329L732,403m51.374,0,.317.329Z"
                transform="translate(-499.864 -270.483)"
                fill="#4e3b36"
            />
            <path
                id="Path_906"
                data-name="Path 906"
                d="M899,403v.658h.634Z"
                transform="translate(-613.904 -270.483)"
                fill="#31231e"
            />
            <path
                id="Path_907"
                data-name="Path 907"
                d="M1368,403l.317.329Z"
                transform="translate(-934.172 -270.483)"
                fill="#4e3b36"
            />
            <path
                id="Path_908"
                data-name="Path 908"
                d="M732,404l.317.329Z"
                transform="translate(-499.864 -271.154)"
                fill="#774d44"
            />
            <path
                id="Path_909"
                data-name="Path 909"
                d="M934.237,404l.317.329-.317-.329m-201.9.548.106.219Z"
                transform="translate(-500.091 -271.154)"
                fill="#4e3b36"
            />
            <path
                id="Path_910"
                data-name="Path 910"
                d="M1110,405l.317.329L1110,405m7.824.109.209.11Z"
                transform="translate(-757.99 -271.825)"
                fill="#31231e"
            />
            <path
                id="Path_911"
                data-name="Path 911"
                d="M1167,405l.317.329Z"
                transform="translate(-796.914 -271.825)"
                fill="#4e3b36"
            />
            <path
                id="Path_912"
                data-name="Path 912"
                d="M1370,405v3.617h.317Z"
                transform="translate(-935.537 -271.825)"
                fill="#774d44"
            />
            <path
                id="Path_913"
                data-name="Path 913"
                d="M727.586,406,726,408.631Z"
                transform="translate(-495.766 -272.496)"
                fill="#9f9c9a"
            />
            <path
                id="Path_914"
                data-name="Path 914"
                d="M897,406l1.268,1.644v-.329Z"
                transform="translate(-612.538 -272.496)"
                fill="#31231e"
            />
            <path
                id="Path_915"
                data-name="Path 915"
                d="M1160,406v.329h1.586Z"
                transform="translate(-792.134 -272.496)"
                fill="#4e3b36"
            />
            <path
                id="Path_916"
                data-name="Path 916"
                d="M1371,406v4.6h.317Z"
                transform="translate(-936.22 -272.496)"
                fill="#9f9c9a"
            />
            <path
                id="Path_917"
                data-name="Path 917"
                d="M731,408l.317.329Z"
                transform="translate(-499.181 -273.839)"
                fill="#774d44"
            />
            <path
                id="Path_918"
                data-name="Path 918"
                d="M1165,408l.317.329Z"
                transform="translate(-795.548 -273.839)"
                fill="#4e3b36"
            />
            <path
                id="Path_919"
                data-name="Path 919"
                d="M902,409l.317.329L902,409m79.6,0,.317.329L981.6,409m.634,0v1.644l1.9,1.973h.317l.634-2.3Z"
                transform="translate(-615.952 -274.51)"
                fill="#31231e"
            />
            <path
                id="Path_920"
                data-name="Path 920"
                d="M866.316,409l.317.329-.317-.329m-137,.329.317.329-.317-.329m137.633,0,.317.329-.317-.329M729,409.658l.317.329Z"
                transform="translate(-497.815 -274.51)"
                fill="#4e3b36"
            />
            <path
                id="Path_921"
                data-name="Path 921"
                d="M1152,411l.317.329Z"
                transform="translate(-786.671 -275.852)"
                fill="#31231e"
            />
            <path
                id="Path_922"
                data-name="Path 922"
                d="M727.317,412l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-496.449 -276.523)"
                fill="#4e3b36"
            />
            <path
                id="Path_923"
                data-name="Path 923"
                d="M723.667,414.333l.211.11Z"
                transform="translate(-494.173 -278.089)"
                fill="#9f9c9a"
            />
            <path
                id="Path_924"
                data-name="Path 924"
                d="M725,414l.317.329Z"
                transform="translate(-495.084 -277.866)"
                fill="#774d44"
            />
            <path
                id="Path_925"
                data-name="Path 925"
                d="M726,414l.317.329Z"
                transform="translate(-495.766 -277.866)"
                fill="#4e3b36"
            />
            <path
                id="Path_926"
                data-name="Path 926"
                d="M904,414v.987h1.268v-.329Z"
                transform="translate(-617.318 -277.866)"
                fill="#31231e"
            />
            <path
                id="Path_927"
                data-name="Path 927"
                d="M717,416v.329l1.586-.329Z"
                transform="translate(-489.621 -279.208)"
                fill="#9f9c9a"
            />
            <path
                id="Path_928"
                data-name="Path 928"
                d="M722,415l.317.329Z"
                transform="translate(-493.035 -278.537)"
                fill="#774d44"
            />
            <path
                id="Path_929"
                data-name="Path 929"
                d="M723,415l.317.329L723,415m138.9,0,.634.658V415Z"
                transform="translate(-493.718 -278.537)"
                fill="#4e3b36"
            />
            <path
                id="Path_930"
                data-name="Path 930"
                d="M720,416l.317.329Z"
                transform="translate(-491.669 -279.208)"
                fill="#774d44"
            />
            <path
                id="Path_931"
                data-name="Path 931"
                d="M721,416l.317.329L721,416m205.919.219.108.219Z"
                transform="translate(-492.352 -279.208)"
                fill="#4e3b36"
            />
            <path
                id="Path_932"
                data-name="Path 932"
                d="M695,422.545h.317l5.074-4.6C698.246,417.581,695.81,420.745,695,422.545Z"
                transform="translate(-474.597 -280.492)"
                fill="#9f9c9a"
            />
            <path
                id="Path_933"
                data-name="Path 933"
                d="M712,417v.329h1.268Z"
                transform="translate(-486.206 -279.879)"
                fill="#774d44"
            />
            <path
                id="Path_934"
                data-name="Path 934"
                d="M716,417v.329h1.268Z"
                transform="translate(-488.938 -279.879)"
                fill="#4e3b36"
            />
            <path
                id="Path_935"
                data-name="Path 935"
                d="M710,418l.317.329Z"
                transform="translate(-484.84 -280.55)"
                fill="#774d44"
            />
            <path
                id="Path_936"
                data-name="Path 936"
                d="M711,418l.317.329Z"
                transform="translate(-485.523 -280.55)"
                fill="#4e3b36"
            />
            <path
                id="Path_937"
                data-name="Path 937"
                d="M1370,418v.986h.317Z"
                transform="translate(-935.537 -280.55)"
                fill="#774d44"
            />
            <path
                id="Path_938"
                data-name="Path 938"
                d="M708,419l.317.329Z"
                transform="translate(-483.475 -281.222)"
                fill="#4e3b36"
            />
            <path
                id="Path_939"
                data-name="Path 939"
                d="M704.634,420l-.634.987Z"
                transform="translate(-480.743 -281.893)"
                fill="#774d44"
            />
            <path
                id="Path_940"
                data-name="Path 940"
                d="M707,420l.317.329Z"
                transform="translate(-482.792 -281.893)"
                fill="#4e3b36"
            />
            <path
                id="Path_941"
                data-name="Path 941"
                d="M1163,420v1.315h.317Z"
                transform="translate(-794.182 -281.893)"
                fill="#31231e"
            />
            <path
                id="Path_942"
                data-name="Path 942"
                d="M706,421l.317.329L706,421m210.359.219.108.219Z"
                transform="translate(-482.109 -282.564)"
                fill="#4e3b36"
            />
            <path
                id="Path_943"
                data-name="Path 943"
                d="M1369.317,421l-.317,1.315h.317Z"
                transform="translate(-934.854 -282.564)"
                fill="#9f9c9a"
            />
            <path
                id="Path_944"
                data-name="Path 944"
                d="M705,422l.317.329L705,422m63.108,0,.317.329Z"
                transform="translate(-481.426 -283.235)"
                fill="#4e3b36"
            />
            <path
                id="Path_945"
                data-name="Path 945"
                d="M703,423l.317.329Z"
                transform="translate(-480.06 -283.906)"
                fill="#774d44"
            />
            <path
                id="Path_946"
                data-name="Path 946"
                d="M1161,423l.317.329Z"
                transform="translate(-792.817 -283.906)"
                fill="#31231e"
            />
            <path
                id="Path_947"
                data-name="Path 947"
                d="M913.523,423l.317.329-.317-.329M702,423.329l.317.329Z"
                transform="translate(-479.378 -283.906)"
                fill="#774d44"
            />
            <path
                id="Path_948"
                data-name="Path 948"
                d="M1368,424l.317.329Z"
                transform="translate(-934.172 -284.577)"
                fill="#4e3b36"
            />
            <path
                id="Path_949"
                data-name="Path 949"
                d="M701,425l.317.329Z"
                transform="translate(-478.695 -285.249)"
                fill="#774d44"
            />
            <path
                id="Path_950"
                data-name="Path 950"
                d="M702,425.986l2.22.986v-1.315c-1.018-.438-1.418-.466-2.22.329M767.328,425l.317.329Z"
                transform="translate(-479.378 -285.249)"
                fill="#4e3b36"
            />
            <path
                id="Path_951"
                data-name="Path 951"
                d="M918,425l.317.329L918,425m77.379,0-.634,1.973Z"
                transform="translate(-626.878 -285.249)"
                fill="#31231e"
            />
            <path
                id="Path_952"
                data-name="Path 952"
                d="M1368,425l.317.329Z"
                transform="translate(-934.172 -285.249)"
                fill="#774d44"
            />
            <path
                id="Path_953"
                data-name="Path 953"
                d="M700,426l.317.329Z"
                transform="translate(-478.012 -285.92)"
                fill="#4e3b36"
            />
            <path
                id="Path_954"
                data-name="Path 954"
                d="M921,426l.317.329Z"
                transform="translate(-628.927 -285.92)"
                fill="#31231e"
            />
            <path
                id="Path_955"
                data-name="Path 955"
                d="M1368,426v1.644h.317Z"
                transform="translate(-934.172 -285.92)"
                fill="#9f9c9a"
            />
            <path
                id="Path_956"
                data-name="Path 956"
                d="M698.317,427l.317.329-.317-.329m-.317.329.317.329-.317-.329m67.548,0,.317.329Z"
                transform="translate(-476.646 -286.591)"
                fill="#4e3b36"
            />
            <path
                id="Path_957"
                data-name="Path 957"
                d="M697,429l.317.329Z"
                transform="translate(-475.963 -287.933)"
                fill="#774d44"
            />
            <path
                id="Path_958"
                data-name="Path 958"
                d="M1165.33,429.667l.108.219Z"
                transform="translate(-795.773 -288.381)"
                fill="#4e3b36"
            />
            <path
                id="Path_959"
                data-name="Path 959"
                d="M695.317,430,695,431.315h.317Z"
                transform="translate(-474.597 -288.605)"
                fill="#774d44"
            />
            <path
                id="Path_960"
                data-name="Path 960"
                d="M1157,431l.317,2.631h.317Z"
                transform="translate(-790.085 -289.276)"
                fill="#31231e"
            />
            <path
                id="Path_961"
                data-name="Path 961"
                d="M909.019,431l.317.329-.317-.329m-212.686.548.106.219-.106-.219m68.711-.219.317.329Z"
                transform="translate(-475.508 -289.276)"
                fill="#4e3b36"
            />
            <path
                id="Path_962"
                data-name="Path 962"
                d="M924.667,432.333l.211.11Z"
                transform="translate(-631.431 -290.17)"
                fill="#31231e"
            />
            <path
                id="Path_963"
                data-name="Path 963"
                d="M1367,432l.317.329Z"
                transform="translate(-933.489 -289.947)"
                fill="#774d44"
            />
            <path
                id="Path_964"
                data-name="Path 964"
                d="M915,433l.317.329L915,433m.951,0,.634.658Z"
                transform="translate(-624.83 -290.618)"
                fill="#4e3b36"
            />
            <path
                id="Path_965"
                data-name="Path 965"
                d="M906.06,433l-.317,3.288h.317V433m-213.426.329L692,435.959h.317Z"
                transform="translate(-472.549 -290.618)"
                fill="#9f9c9a"
            />
            <path
                id="Path_966"
                data-name="Path 966"
                d="M695,434v1.315h.317Z"
                transform="translate(-474.597 -291.289)"
                fill="#4e3b36"
            />
            <path
                id="Path_967"
                data-name="Path 967"
                d="M939,434l.317.329Z"
                transform="translate(-641.219 -291.289)"
                fill="#31231e"
            />
            <path
                id="Path_968"
                data-name="Path 968"
                d="M1366,434l.317.329Z"
                transform="translate(-932.806 -291.289)"
                fill="#4e3b36"
            />
            <path
                id="Path_969"
                data-name="Path 969"
                d="M934,435v.329h.951Z"
                transform="translate(-637.804 -291.96)"
                fill="#31231e"
            />
            <path
                id="Path_970"
                data-name="Path 970"
                d="M1061.8,435l.317.329L1061.8,435m-140.8.329v.329l.951.329Z"
                transform="translate(-628.927 -291.96)"
                fill="#4e3b36"
            />
            <path
                id="Path_971"
                data-name="Path 971"
                d="M943,436l.317.329Z"
                transform="translate(-643.95 -292.632)"
                fill="#31231e"
            />
            <path
                id="Path_972"
                data-name="Path 972"
                d="M1365,436l.317.329Z"
                transform="translate(-932.123 -292.632)"
                fill="#774d44"
            />
            <path
                id="Path_973"
                data-name="Path 973"
                d="M925,437l.317.329Z"
                transform="translate(-631.658 -293.303)"
                fill="#4e3b36"
            />
            <path
                id="Path_974"
                data-name="Path 974"
                d="M950,437l.317.329Z"
                transform="translate(-648.73 -293.303)"
                fill="#31231e"
            />
            <path
                id="Path_975"
                data-name="Path 975"
                d="M694,438l.317.329Z"
                transform="translate(-473.914 -293.974)"
                fill="#774d44"
            />
            <path
                id="Path_976"
                data-name="Path 976"
                d="M937.333,438.667l.106.219Z"
                transform="translate(-640.08 -294.422)"
                fill="#31231e"
            />
            <path
                id="Path_977"
                data-name="Path 977"
                d="M694,439l.317.329Z"
                transform="translate(-473.914 -294.645)"
                fill="#4e3b36"
            />
            <path
                id="Path_978"
                data-name="Path 978"
                d="M947,439l.317.329Z"
                transform="translate(-646.682 -294.645)"
                fill="#31231e"
            />
            <path
                id="Path_979"
                data-name="Path 979"
                d="M1364,439l.317.329Z"
                transform="translate(-931.44 -294.645)"
                fill="#4e3b36"
            />
            <path
                id="Path_980"
                data-name="Path 980"
                d="M693,440l.317.329Z"
                transform="translate(-473.232 -295.316)"
                fill="#774d44"
            />
            <path
                id="Path_981"
                data-name="Path 981"
                d="M931,440l.317.329Z"
                transform="translate(-635.756 -295.316)"
                fill="#4e3b36"
            />
            <path
                id="Path_982"
                data-name="Path 982"
                d="M956,440l.317.329L956,440m63.742,0-.317.658h.634l-.317-.658m.951,0,.317.329Z"
                transform="translate(-652.827 -295.316)"
                fill="#31231e"
            />
            <path
                id="Path_983"
                data-name="Path 983"
                d="M693,441v.987h.317L693,441m76.11,0,.317.329Z"
                transform="translate(-473.232 -295.987)"
                fill="#4e3b36"
            />
            <path
                id="Path_984"
                data-name="Path 984"
                d="M905.653,441l.317.329-.317-.329m-213.32.548.106.219Z"
                transform="translate(-472.776 -295.987)"
                fill="#774d44"
            />
            <path
                id="Path_985"
                data-name="Path 985"
                d="M1365,442l.317.329Z"
                transform="translate(-932.123 -296.659)"
                fill="#4e3b36"
            />
            <path
                id="Path_986"
                data-name="Path 986"
                d="M944,443l.317.658h.317l.317-.658H944m2.537,0,.317.329-.317-.329m.951,0,.317.329Z"
                transform="translate(-644.633 -297.33)"
                fill="#31231e"
            />
            <path
                id="Path_987"
                data-name="Path 987"
                d="M1366,443l.317.329Z"
                transform="translate(-932.806 -297.33)"
                fill="#774d44"
            />
            <path
                id="Path_988"
                data-name="Path 988"
                d="M691,444l.951,2.959h.317Z"
                transform="translate(-471.866 -298.001)"
                fill="#9f9c9a"
            />
            <path
                id="Path_989"
                data-name="Path 989"
                d="M1153,444l.317.329Z"
                transform="translate(-787.354 -298.001)"
                fill="#31231e"
            />
            <path
                id="Path_990"
                data-name="Path 990"
                d="M1160,444l.317.329L1160,444m65.328,0v1.315h.317Z"
                transform="translate(-792.134 -298.001)"
                fill="#4e3b36"
            />
            <path
                id="Path_991"
                data-name="Path 991"
                d="M1367,444l.317,2.631h.317Z"
                transform="translate(-933.489 -298.001)"
                fill="#9f9c9a"
            />
            <path
                id="Path_992"
                data-name="Path 992"
                d="M693.333,445.667l.106.219Z"
                transform="translate(-473.459 -299.12)"
                fill="#4e3b36"
            />
            <path
                id="Path_993"
                data-name="Path 993"
                d="M945.317,446l-.317.658Z"
                transform="translate(-645.316 -299.343)"
                fill="#31231e"
            />
            <path
                id="Path_994"
                data-name="Path 994"
                d="M693,447l.317.329Z"
                transform="translate(-473.232 -300.014)"
                fill="#774d44"
            />
            <path
                id="Path_995"
                data-name="Path 995"
                d="M1150.33,447.667l.108.219Z"
                transform="translate(-785.53 -300.462)"
                fill="#31231e"
            />
            <path
                id="Path_996"
                data-name="Path 996"
                d="M841.464,447l1.268,1.315L841.464,447M694,447.329l.317.329Z"
                transform="translate(-473.914 -300.014)"
                fill="#4e3b36"
            />
            <path
                id="Path_997"
                data-name="Path 997"
                d="M907.426,448v2.631h.317L907.426,448M694,448.329l.317.329Z"
                transform="translate(-473.914 -300.686)"
                fill="#774d44"
            />
            <path
                id="Path_998"
                data-name="Path 998"
                d="M968.667,449.333l.211.11Z"
                transform="translate(-661.477 -301.58)"
                fill="#31231e"
            />
            <path
                id="Path_999"
                data-name="Path 999"
                d="M955.333,450.667l.106.219Z"
                transform="translate(-652.372 -302.476)"
                fill="#4e3b36"
            />
            <path
                id="Path_1000"
                data-name="Path 1000"
                d="M960,450l.317.329L960,450m58.985.987,1.269-.987-1.269.987m-58.034-.658.951.986Z"
                transform="translate(-655.559 -302.028)"
                fill="#31231e"
            />
            <path
                id="Path_1001"
                data-name="Path 1001"
                d="M953,452l.317.329Z"
                transform="translate(-650.779 -303.37)"
                fill="#4e3b36"
            />
            <path
                id="Path_1002"
                data-name="Path 1002"
                d="M967,452l.317.329L967,452m3.277.219.106.219Z"
                transform="translate(-660.339 -303.37)"
                fill="#31231e"
            />
            <path
                id="Path_1003"
                data-name="Path 1003"
                d="M958.667,453.333l.211.11Z"
                transform="translate(-654.649 -304.265)"
                fill="#4e3b36"
            />
            <path
                id="Path_1004"
                data-name="Path 1004"
                d="M984,454l.634.658Z"
                transform="translate(-671.948 -304.713)"
                fill="#31231e"
            />
            <path
                id="Path_1005"
                data-name="Path 1005"
                d="M694,455v3.617h.317Z"
                transform="translate(-473.914 -305.384)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1006"
                data-name="Path 1006"
                d="M695,455v.987h.317L695,455m82.453,0,.317.329-.317-.329m1.586,0-.317.987,3.171.986-2.854-1.315Z"
                transform="translate(-474.597 -305.384)"
                fill="#4e3b36"
            />
            <path
                id="Path_1007"
                data-name="Path 1007"
                d="M1129,455l.317.329Z"
                transform="translate(-770.965 -305.384)"
                fill="#31231e"
            />
            <path
                id="Path_1008"
                data-name="Path 1008"
                d="M1143,455l.317.329Z"
                transform="translate(-780.525 -305.384)"
                fill="#4e3b36"
            />
            <path
                id="Path_1009"
                data-name="Path 1009"
                d="M1132.586,456l.317.658H1131v.329l2.537.329Z"
                transform="translate(-772.331 -306.055)"
                fill="#31231e"
            />
            <path
                id="Path_1010"
                data-name="Path 1010"
                d="M1094.638,456.667l.108.219-.108-.219M968,456.776l1.268,1.315L968,456.776m57.4,0,.317.329Z"
                transform="translate(-661.022 -306.503)"
                fill="#4e3b36"
            />
            <path
                id="Path_1011"
                data-name="Path 1011"
                d="M695,458l.317.329Z"
                transform="translate(-474.597 -307.397)"
                fill="#774d44"
            />
            <path
                id="Path_1012"
                data-name="Path 1012"
                d="M1144,458.658h.951l-.317-.658Z"
                transform="translate(-781.208 -307.397)"
                fill="#4e3b36"
            />
            <path
                id="Path_1013"
                data-name="Path 1013"
                d="M1367,458v.987h.317Z"
                transform="translate(-933.489 -307.397)"
                fill="#774d44"
            />
            <path
                id="Path_1014"
                data-name="Path 1014"
                d="M696,459v1.644h.317Z"
                transform="translate(-475.28 -308.069)"
                fill="#4e3b36"
            />
            <path
                id="Path_1015"
                data-name="Path 1015"
                d="M1118,460l.317.329Z"
                transform="translate(-763.453 -308.74)"
                fill="#31231e"
            />
            <path
                id="Path_1016"
                data-name="Path 1016"
                d="M1098.191,460.667l.108.219-.108-.219m-124.524.219.211.11Z"
                transform="translate(-664.892 -309.187)"
                fill="#4e3b36"
            />
            <path
                id="Path_1017"
                data-name="Path 1017"
                d="M1121,461v.329l.951.329Z"
                transform="translate(-765.502 -309.411)"
                fill="#31231e"
            />
            <path
                id="Path_1018"
                data-name="Path 1018"
                d="M1366.25,461c.032,4.171-1.684,7.011,2.22,9.865l-2.344-3.617Z"
                transform="translate(-932.738 -309.411)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1019"
                data-name="Path 1019"
                d="M695,462v1.973h.317Z"
                transform="translate(-474.597 -310.082)"
                fill="#774d44"
            />
            <path
                id="Path_1020"
                data-name="Path 1020"
                d="M976,462v.658h.634L976,462m50.423.987.951-.987Z"
                transform="translate(-666.485 -310.082)"
                fill="#4e3b36"
            />
            <path
                id="Path_1021"
                data-name="Path 1021"
                d="M1106.67,463.333l.209.11Z"
                transform="translate(-755.716 -310.977)"
                fill="#31231e"
            />
            <path
                id="Path_1022"
                data-name="Path 1022"
                d="M1127.317,463l-.317,1.315h.317V463m3.488,0,.317.329-.317-.329m1.586,0,.317.329Z"
                transform="translate(-769.599 -310.753)"
                fill="#4e3b36"
            />
            <path
                id="Path_1023"
                data-name="Path 1023"
                d="M988.22,464l.317.329L988.22,464m38.689,0,.317.329-.317-.329M986,464.329l.317.329-.317-.329m2.854,0,.317.329Z"
                transform="translate(-673.314 -311.424)"
                fill="#31231e"
            />
            <path
                id="Path_1024"
                data-name="Path 1024"
                d="M831.957,465l-.634.987.634-.987m-42.495.329.634.658-.634-.658m-93.129.548.106.219Z"
                transform="translate(-475.508 -312.096)"
                fill="#4e3b36"
            />
            <path
                id="Path_1025"
                data-name="Path 1025"
                d="M1103,467l.317.986.951-.329v-.329L1103,467m3.806,0-.317.658Z"
                transform="translate(-753.21 -313.438)"
                fill="#31231e"
            />
            <path
                id="Path_1026"
                data-name="Path 1026"
                d="M1366,467v1.315h.317Z"
                transform="translate(-932.806 -313.438)"
                fill="#4e3b36"
            />
            <path
                id="Path_1027"
                data-name="Path 1027"
                d="M695,468l.317,1.315h.317Z"
                transform="translate(-474.597 -314.109)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1028"
                data-name="Path 1028"
                d="M1011,468l.317.329Z"
                transform="translate(-690.385 -314.109)"
                fill="#31231e"
            />
            <path
                id="Path_1029"
                data-name="Path 1029"
                d="M1367,468v.986h.317Z"
                transform="translate(-933.489 -314.109)"
                fill="#774d44"
            />
            <path
                id="Path_1030"
                data-name="Path 1030"
                d="M982.667,469.333l.211.11-.211-.11m3.488,0,.211.11Z"
                transform="translate(-671.038 -315.004)"
                fill="#4e3b36"
            />
            <path
                id="Path_1031"
                data-name="Path 1031"
                d="M1004,469l.317.329Z"
                transform="translate(-685.605 -314.78)"
                fill="#31231e"
            />
            <path
                id="Path_1032"
                data-name="Path 1032"
                d="M835.812,469l.317.329-.317-.329m-138.479.548.106.219Z"
                transform="translate(-476.191 -314.78)"
                fill="#4e3b36"
            />
            <path
                id="Path_1033"
                data-name="Path 1033"
                d="M1006.67,470.109l.209.11-.209-.11m27.06.877.951-.987Z"
                transform="translate(-687.429 -315.451)"
                fill="#31231e"
            />
            <path
                id="Path_1034"
                data-name="Path 1034"
                d="M1033.884,470l-.634.987c.714-.156.99-.283.634-.987M999,470.329l.634.658v-.658Z"
                transform="translate(-682.191 -315.451)"
                fill="#4e3b36"
            />
            <path
                id="Path_1035"
                data-name="Path 1035"
                d="M909.157,471l.317.329-.317-.329M697,471.329l.317.329Z"
                transform="translate(-475.963 -316.123)"
                fill="#774d44"
            />
            <path
                id="Path_1036"
                data-name="Path 1036"
                d="M995,472l.317.329Z"
                transform="translate(-679.459 -316.794)"
                fill="#4e3b36"
            />
            <path
                id="Path_1037"
                data-name="Path 1037"
                d="M1089.317,472l-.317.658h.634Z"
                transform="translate(-743.65 -316.794)"
                fill="#31231e"
            />
            <path
                id="Path_1038"
                data-name="Path 1038"
                d="M1103,472v.658h.634V472H1103m83.087,0,.317.329Z"
                transform="translate(-753.21 -316.794)"
                fill="#4e3b36"
            />
            <path
                id="Path_1039"
                data-name="Path 1039"
                d="M697,473a15.384,15.384,0,0,0,4.44,6.248Z"
                transform="translate(-475.963 -317.465)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1040"
                data-name="Path 1040"
                d="M1002,473l.317.329L1002,473m3.91.219.108.219Z"
                transform="translate(-684.24 -317.465)"
                fill="#4e3b36"
            />
            <path
                id="Path_1041"
                data-name="Path 1041"
                d="M1087,473l.317.329Z"
                transform="translate(-742.284 -317.465)"
                fill="#31231e"
            />
            <path
                id="Path_1042"
                data-name="Path 1042"
                d="M909.523,473l.317.329-.317-.329M698,473.329l.317.329Z"
                transform="translate(-476.646 -317.465)"
                fill="#774d44"
            />
            <path
                id="Path_1043"
                data-name="Path 1043"
                d="M1011.317,474l-.317.987Z"
                transform="translate(-690.385 -318.136)"
                fill="#4e3b36"
            />
            <path
                id="Path_1044"
                data-name="Path 1044"
                d="M1022,474v.658l.634-.658H1022m2.854,0,.317.329-.317-.329m13.953.987,1.9-.658Z"
                transform="translate(-697.897 -318.136)"
                fill="#31231e"
            />
            <path
                id="Path_1045"
                data-name="Path 1045"
                d="M699,475l.317.329Z"
                transform="translate(-477.329 -318.807)"
                fill="#774d44"
            />
            <path
                id="Path_1046"
                data-name="Path 1046"
                d="M1061,477v.329l2.537-.329Z"
                transform="translate(-724.529 -320.15)"
                fill="#31231e"
            />
            <path
                id="Path_1047"
                data-name="Path 1047"
                d="M700,476l.317.329Z"
                transform="translate(-478.012 -319.478)"
                fill="#4e3b36"
            />
            <path
                id="Path_1048"
                data-name="Path 1048"
                d="M1025,476v.329h1.9L1025,476m4.44,0,.317.329Z"
                transform="translate(-699.946 -319.478)"
                fill="#31231e"
            />
            <path
                id="Path_1049"
                data-name="Path 1049"
                d="M700,477l.317.329Z"
                transform="translate(-478.012 -320.15)"
                fill="#774d44"
            />
            <path
                id="Path_1050"
                data-name="Path 1050"
                d="M1082,477l.317.329L1082,477m1.268,0,.317.329Z"
                transform="translate(-738.87 -320.15)"
                fill="#4e3b36"
            />
            <path
                id="Path_1051"
                data-name="Path 1051"
                d="M701,479l.317.329L701,479m.317.329.317.329Z"
                transform="translate(-478.695 -321.492)"
                fill="#774d44"
            />
            <path
                id="Path_1052"
                data-name="Path 1052"
                d="M1033.67,480.109l.209.11-.209-.11m.739-.109v.329h1.269l-1.269-.329m4.757,0,.317.329-.317-.329m.634,0,.317.329L1039.8,480m.951,0,.317.329-.317-.329m1.9,0,.317.329-.317-.329m1.8.109.209.11-.209-.11m93.974-.109.317.329Z"
                transform="translate(-705.866 -322.163)"
                fill="#4e3b36"
            />
            <path
                id="Path_1053"
                data-name="Path 1053"
                d="M703,481l.317.329L703,481m209.725.219.108.219-.108-.219m-209.408.109.317.329Z"
                transform="translate(-480.06 -322.834)"
                fill="#774d44"
            />
            <path
                id="Path_1054"
                data-name="Path 1054"
                d="M705,483l.317.329Z"
                transform="translate(-481.426 -324.177)"
                fill="#4e3b36"
            />
            <path
                id="Path_1055"
                data-name="Path 1055"
                d="M914.986,483l.317.329-.317-.329M706,483.329l.317.329-.317-.329m209.3,0,.317.329Z"
                transform="translate(-482.109 -324.177)"
                fill="#774d44"
            />
            <path
                id="Path_1056"
                data-name="Path 1056"
                d="M707,485l.317.329Z"
                transform="translate(-482.792 -325.519)"
                fill="#4e3b36"
            />
            <path
                id="Path_1057"
                data-name="Path 1057"
                d="M916.3,485l.317.329L916.3,485m-209.3.329.317.329-.317-.329m209.62,0,.317.329Z"
                transform="translate(-482.792 -325.519)"
                fill="#774d44"
            />
            <path
                id="Path_1058"
                data-name="Path 1058"
                d="M708,487l.317.329L708,487m209.62,0,.317.329L917.62,487m-209.3.329.317.329-.317-.329m209.62,0,.317.329Z"
                transform="translate(-483.475 -326.861)"
                fill="#4e3b36"
            />
            <path
                id="Path_1059"
                data-name="Path 1059"
                d="M709,489l.317.329Z"
                transform="translate(-484.158 -328.204)"
                fill="#774d44"
            />
            <path
                id="Path_1060"
                data-name="Path 1060"
                d="M1371,489l.317.329Z"
                transform="translate(-936.22 -328.204)"
                fill="#4e3b36"
            />
            <path
                id="Path_1061"
                data-name="Path 1061"
                d="M710,490l.317.329L710,490m209.938,0,.317.329Z"
                transform="translate(-484.84 -328.875)"
                fill="#774d44"
            />
            <path
                id="Path_1062"
                data-name="Path 1062"
                d="M711,491l.317.329Z"
                transform="translate(-485.523 -329.546)"
                fill="#4e3b36"
            />
            <path
                id="Path_1063"
                data-name="Path 1063"
                d="M920.938,491l.317.329-.317-.329M711,491.329l.317.329Z"
                transform="translate(-485.523 -329.546)"
                fill="#774d44"
            />
            <path
                id="Path_1064"
                data-name="Path 1064"
                d="M1373,492l.317.329Z"
                transform="translate(-937.586 -330.217)"
                fill="#4e3b36"
            />
            <path
                id="Path_1065"
                data-name="Path 1065"
                d="M921.255,492l.634,1.644h.317L921.255,492M711,492.329l.317.329Z"
                transform="translate(-485.523 -330.217)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1066"
                data-name="Path 1066"
                d="M712,493l.317.329Z"
                transform="translate(-486.206 -330.888)"
                fill="#4e3b36"
            />
            <path
                id="Path_1067"
                data-name="Path 1067"
                d="M921.938,493l.317.329-.317-.329M712,493.329l.951.986Z"
                transform="translate(-486.206 -330.888)"
                fill="#774d44"
            />
            <path
                id="Path_1068"
                data-name="Path 1068"
                d="M1374,494l.317.329Z"
                transform="translate(-938.269 -331.56)"
                fill="#4e3b36"
            />
            <path
                id="Path_1069"
                data-name="Path 1069"
                d="M712,495l.317.329Z"
                transform="translate(-486.206 -332.231)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1070"
                data-name="Path 1070"
                d="M1375,495l.317.329Z"
                transform="translate(-938.952 -332.231)"
                fill="#774d44"
            />
            <path
                id="Path_1071"
                data-name="Path 1071"
                d="M713,496l.317.329Z"
                transform="translate(-486.889 -332.902)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1072"
                data-name="Path 1072"
                d="M1375.33,496.667l.108.219Z"
                transform="translate(-939.177 -333.35)"
                fill="#4e3b36"
            />
            <path
                id="Path_1073"
                data-name="Path 1073"
                d="M714,497l1.586,1.973Z"
                transform="translate(-487.572 -333.573)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1074"
                data-name="Path 1074"
                d="M715,497l.317.329Z"
                transform="translate(-488.255 -333.573)"
                fill="#4e3b36"
            />
            <path
                id="Path_1075"
                data-name="Path 1075"
                d="M1376,497v1.973h.317Z"
                transform="translate(-939.634 -333.573)"
                fill="#774d44"
            />
            <path
                id="Path_1076"
                data-name="Path 1076"
                d="M716,498l.634.658Z"
                transform="translate(-488.938 -334.244)"
                fill="#4e3b36"
            />
            <path
                id="Path_1077"
                data-name="Path 1077"
                d="M716,499l.317.329L716,499m.317.329.317.329Z"
                transform="translate(-488.938 -334.915)"
                fill="#774d44"
            />
            <path
                id="Path_1078"
                data-name="Path 1078"
                d="M718,501l.317.329L718,501m208.352,0v.987h.317Z"
                transform="translate(-490.303 -336.258)"
                fill="#4e3b36"
            />
            <path
                id="Path_1079"
                data-name="Path 1079"
                d="M719,503l1.268,1.315Z"
                transform="translate(-490.986 -337.6)"
                fill="#774d44"
            />
            <path
                id="Path_1080"
                data-name="Path 1080"
                d="M927.352,503l-.634,2.3h.317l.317-2.3M719,503.329l.317.329Z"
                transform="translate(-490.986 -337.6)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1081"
                data-name="Path 1081"
                d="M1375,504l.317.329Z"
                transform="translate(-938.952 -338.271)"
                fill="#774d44"
            />
            <path
                id="Path_1082"
                data-name="Path 1082"
                d="M720,505l.317.329Z"
                transform="translate(-491.669 -338.943)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1083"
                data-name="Path 1083"
                d="M1374,505l.317.329Z"
                transform="translate(-938.269 -338.943)"
                fill="#774d44"
            />
            <path
                id="Path_1084"
                data-name="Path 1084"
                d="M721,506l.317.329Z"
                transform="translate(-492.352 -339.614)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1085"
                data-name="Path 1085"
                d="M1373,506l.317.329Z"
                transform="translate(-937.586 -339.614)"
                fill="#4e3b36"
            />
            <path
                id="Path_1086"
                data-name="Path 1086"
                d="M722,507l2.22,4.6h.317Z"
                transform="translate(-493.035 -340.285)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1087"
                data-name="Path 1087"
                d="M723,507l.317.329Z"
                transform="translate(-493.718 -340.285)"
                fill="#4e3b36"
            />
            <path
                id="Path_1088"
                data-name="Path 1088"
                d="M929.132,507v1.315h.317L929.132,507M723,507.329l.317.329-.317-.329m.317.658.317.329Z"
                transform="translate(-493.718 -340.285)"
                fill="#774d44"
            />
            <path
                id="Path_1089"
                data-name="Path 1089"
                d="M1373.33,511.667l.108.219Z"
                transform="translate(-937.811 -343.417)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1090"
                data-name="Path 1090"
                d="M725,512l.317.329Z"
                transform="translate(-495.084 -343.641)"
                fill="#774d44"
            />
            <path
                id="Path_1091"
                data-name="Path 1091"
                d="M930.864,512l.317.329-.317-.329M726,512.329l.317.329Z"
                transform="translate(-495.766 -343.641)"
                fill="#4e3b36"
            />
            <path
                id="Path_1092"
                data-name="Path 1092"
                d="M1372,513l.317.329Z"
                transform="translate(-936.903 -344.312)"
                fill="#774d44"
            />
            <path
                id="Path_1093"
                data-name="Path 1093"
                d="M727,514l.317.329L727,514m204.229,0,.317.329Z"
                transform="translate(-496.449 -344.983)"
                fill="#4e3b36"
            />
            <path
                id="Path_1094"
                data-name="Path 1094"
                d="M1372,514l.317.329Z"
                transform="translate(-936.903 -344.983)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1095"
                data-name="Path 1095"
                d="M727,515l.317.329Z"
                transform="translate(-496.449 -345.654)"
                fill="#774d44"
            />
            <path
                id="Path_1096"
                data-name="Path 1096"
                d="M1368.951,515l-.951,1.973h.317Z"
                transform="translate(-934.172 -345.654)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1097"
                data-name="Path 1097"
                d="M728,516l.317.329Z"
                transform="translate(-497.132 -346.325)"
                fill="#4e3b36"
            />
            <path
                id="Path_1098"
                data-name="Path 1098"
                d="M1370,516l.317.329Z"
                transform="translate(-935.537 -346.325)"
                fill="#774d44"
            />
            <path
                id="Path_1099"
                data-name="Path 1099"
                d="M729,517l.317.329Z"
                transform="translate(-497.815 -346.997)"
                fill="#4e3b36"
            />
            <path
                id="Path_1100"
                data-name="Path 1100"
                d="M931.961,517l.317.329-.317-.329M729,517.329l.317.329-.317-.329m202.644,0,.317.329Z"
                transform="translate(-497.815 -346.997)"
                fill="#774d44"
            />
            <path
                id="Path_1101"
                data-name="Path 1101"
                d="M730.333,518.644l.106.219-.106-.219m14.8,44.83.951-.329v8.878h.317l-.951.986.634.987v.329c-1.075.972-1.052,4.965,0,5.919v.658l-1.586,5.59.951,2.3-1.9-.986v.329c2.965.4-.559,9.948.634,10.194v.329l-1.269.329.317,1.973h.634l-1.268,4.6.634,1.315-1.586-.986.634.658c-.3.918-.6,1.126.317,1.315l-.634,1.644V612.8l.951-.329-.951,1.644.951,2.631h-.634l.951,11.838-1.9-6.905V617.4l-.028-8.55-.289-4.6c-.6-.557-.7-2.485,0-2.959v-4.275c-2.881-3.943,1.451-11.772-1.269-15.784-1.053,3.728-.026,8.271-.392,12.154a134.467,134.467,0,0,0,1.606,35.2c1.045,5.928,2.7,12.091,6.678,16.7,4.1,4.757,8.931,4.777,14.4,6.385,2.185.643,3.847,2.284,5.936,2.89l.634.658.317.987.634-1.973h.317c4.8,8.3,6.225,18.312,9.889,27.289,2.786,6.826,5.776,13.567,8.629,20.391.995,2.377,2.721,4.788,3.363,7.234l.951-.329c1.82,3.065,8.508,3.943,11.734,4.331a137.693,137.693,0,0,0,31.4-.056l-.317-.658c3.051-.352,4.51-3.088,5.921-5.59,2.2-3.916,4.37-8.349,7.018-11.933,1.322-1.786,3.948-4.89,3.869-7.139l2.22-1.315v-1.644l3.3-5.893,6.216-15.152,1.269.329v-.986l1.586.986c1.23-1.4,2.864-2.93,4.757-2.959,2.331-2.11,7.633-.94,10.6-1.428,5.724-.942,12.254-8.725,12.552-14.684H894.5l-.634.986-.951-.658c.339,1.274.447,2.259-.951,2.631l.634.986-.317.658-1.9,1.315,1.269-2.631-.317-.658.634-1.973.634-2.3.951.329c-.089-2.241.767-8.55,2.22-10.194l-.634-2.3,1.268-2.959v-.329l.317-3.617c-.885-1.367-.358-5.212-.333-6.935.086-5.678-1.329-11.885.333-17.4H896.4l-.634.658-.317-2.3c.872-.491,1.113-4.832.634-5.59h1.268c-.3-1.109-.06-2.966-1.268-2.959l.951-.658c.254-1,1.43-2.122,0-2.3v-.329l.951-1.644-.634-.986h.317l.634.658a12.031,12.031,0,0,1,1.269-7.563V570.38l.634.329.634-2.3h-.634c1.215-1.8.374-3.925.133-5.919-.441-3.63-.086-7.227-.666-10.851-1.091-6.834-.637-13.875-5.55-19.388-3.076-3.45-7.307-3.588-11.359-4.668-10.554-2.813-22.706-4.04-33.615-4.54-14.914-.683-29.816-2.543-44.715-3.6-6.433-.457-12.917.048-19.345-.387-8.219-.557-20.483-3.04-26.943,3.659-10.049,10.42-6.55,28.592-13.015,40.762M931.92,518.425v1.644h.317Z"
                transform="translate(-498.725 -347.764)"
                fill="#4e3b36"
            />
            <path
                id="Path_1102"
                data-name="Path 1102"
                d="M932.009,519v1.315h.317L932.009,519M730,519.658l.951.658Z"
                transform="translate(-498.498 -348.339)"
                fill="#774d44"
            />
            <path
                id="Path_1103"
                data-name="Path 1103"
                d="M732,521l.317.329Z"
                transform="translate(-499.864 -349.681)"
                fill="#4e3b36"
            />
            <path
                id="Path_1104"
                data-name="Path 1104"
                d="M730,522l1.268,3.617h.317Z"
                transform="translate(-498.498 -350.352)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1105"
                data-name="Path 1105"
                d="M807.491,524.821H805.9l.317,1.644-.634,1.315h1.269l-.317,1.315.951-.658.634,1.315-.634-.658h-.317l.317.986-.951-.329.317.658h-.317l-.634-.658V531.4h.317l-.317-.986.634.658,1.586-.658v.329h-.951l.317,6.248-.951-.658c-.227.713-.41,1,.317.986l-.317,3.946h-.951v.329l1.9-.329-.317.986-1.586-.329.317.986.634-.329.317,9.865c4.944-1.024,9.5-3.481,14.588-4.19,5.133-.715,10.609.463,15.539,1.853,4.7,1.326,12.406,6.373,6.025,11.544l.317.986-.951-.329,4.757,2.631-.317.658,1.586,1.644,2.537-.329c-1.211,2.491,1.651,6.727,2.262,9.4,1.19,5.2.855,10.945.908,16.252.02,2.038-.539,4.3,0,6.248h-.634l-.951,5.919.634-.329v.329l-1.268,1.315h.634c-2.2,2.537-2.451,3.25-5.708,3.288.022-1.064-.247-1.271-1.268-1.315l.317-.658c-1.4,0-.112-1.8,0-2.631.238-1.776.53-5.582-.951-6.577a19.5,19.5,0,0,1,.621,4.932c-.394,7.322-8.724,5.148-12.989,3.946,1.579-3.155,4.563-5,4.757-8.878h-.317l-1.586,4.275-1.268.329.317-1.315c-3.206-.256-4.678,2.614-7.611,3.357-2.837.719-7.676-1.444-10.465-2.17-1.2-.311-2.631.071-3.551-.962-1.851-2.08-1.84-5.821-1.84-8.445h-.317l.951,8.878c-3.055-.757-10.034-1.849-10.688-5.919-.248-1.545.816-3.723,1.174-5.261h-.317l-1.586,5.261h-.317l-1.268-1.644-.143-4.6,3.314-5.59c1.648-.452,2.523-2.061,3.805-3.16a30.431,30.431,0,0,1,7.611-4.686c.943-.408,3.2-1.032,2.537-2.019l.951-.329c-.023-1.138.047-2.114,1.268-2.3a5.3,5.3,0,0,1,3.171-3.288l1.586-1.644-.317-.987.317-.329.951.329a4.27,4.27,0,0,1,2.854-2.959l-.634-.658,9.2-1.644v-.987l-4.44-1.644h-2.854l-7.928-.986-10.465,3.288-5.708,3.617.634,1.973-1.269-.329.634,1.644-1.586-1.315.951,2.3v.329h-1.268l.317,1.973h-.634l.317.986h-.951l.317.987-1.268.987,1.268-.658-1.586,2.631.634-.658h.317l-.951.986.317,2.3-.951.329c.144.808.264,1.315-.634,1.315l.317.987c-1.17.659-.338,2.142.317,2.959l-1.268-.329.317,2.3-1.268,3.617c.532.276.7,2.894-.317,2.631v.986l.951-.329-1.9,3.617.634.987h-.951v.329l.951.658v.329l-.951.986.634-.329v.329l-.951,6.248.634.329.951-.658v.986l-1.268,1.315h.317v-.658h.317v1.315l-.951-.329.951.987-.317,2.959-.951-.329v.329l.634,1.315h-1.269l.634,1.973-1.268-.329v.329c.782.405.369,1.164-.317.987l.634.658v.329l-1.586.658.951.986-.951.329v.329l.951.658-.634.987L791,621.5l.951.658v.329l-.951.658,1.268.329v.329h-.951L791,627.744l1.268,4.275h-.951v.329l1.268.329-.634,1.644,1.9,2.631-.317,1.315.634,1.973h.317l.634-.658c-.066,1.2.658,3.757,1.9,3.946l-.317.987.634.658,4.123,3.617a2.71,2.71,0,0,0,2.22,2.3v-.329h-.634v-.329l6.343,1.973,4.219,6.248,4.251,14.8,6.435,14.468.951-.329v2.3l2.854.986-.317-.658h.317l1.586.658-.634-2.3,1.269-.658-.634-.986.951.329v-.329c-1.235-1.351-2.222-4.7-2.22-6.577h-.634c-.125-1.793-1.534-6.786-2.854-7.892l-.317-5.59.634,1.644.951-.329c1.9,4.29,6.711,8.046,10.123,11.088,4.218,3.762,8.379,7.339,13.661,9.378,17.2,6.642,35-5.034,45.667-18.493v1.973h-.634c.193,5.249-3.682,11.742-5.708,16.441h1.268l-.951.658v.329l.951-.329-.317,1.315,2.537-.329c1.081-3.394,3.993-6.129,5.705-9.207,3.276-5.88,4.687-16.829,11.1-20.058l.317-1.644-.634-.329-.951.329.317-.658h-.317l-.317.658.634.986c-2.058.164-3.65,1.708-5.708,1.668-1.408-.028-2.991-1.422-4.294-.437-1.725,1.3-2.848,3.9-4.3,5.543A52.092,52.092,0,0,1,882.779,677.2c-2.16,1.33-4.823,3.2-7.424,2.823.863-1.12,2.144-3.42.27-4.31-3.993-1.9-10-.4-14.223-.3-4.649.115-9.672-1.444-14.271-2.216-2.652-.445-7.4-1.68-7.611,2.221-6.443-2.163-11.476-9.247-15.157-14.8-1.049-1.582-1.627-3.722-2.9-5.114-1.217-1.325-3.8-.061-5.406-.5-2.226-.613-3.511-3.023-5.074-4.578.74-.334.289-.467-.317-.658v-.329h.951v-.329c-.783-1.149-.536-2.525.951-2.631,1.617-3.279,7.793-3.185,10.782-2.989,8.912.583,20.468,7.23,29.176,3.647v-.329c-3.778-.979-6-3.083-8.245-6.248l-.253-2.947.571-6.589h.634l1.586-3.288c-.072-2.081,3.768-5.318,5.391-6.248h1.586l-.634.658v.329c1.553,2.724-2.09,5.015-1.9,7.892-2.832,2.476.426,6.774,2.537,8.295a13.733,13.733,0,0,0,11.1,1.746c1.627-.536,3.089-1.938,4.757-2.149l1.218-6.811-1.535-6.013v-.329H868.7v-.329c.739-.334.289-.467-.317-.658v-.986l.634.658h.317l1.268-1.973v.986c3.378-.934,3.444,3.752,5.391,5.261.038,1.9,1.265,3.711,1.678,5.59a13.86,13.86,0,0,1-.726,8.221h.634l-1.586,1.973c-.368,2.047-3.206,3.161-4.757,4.275.768,2.426,4.678,1.644,6.66,1.644,3.948,0,7.8-.8,11.734-.974,3.143-.143,6.4.348,9.514-.013,1.05,1.246,7.265,2.286,8.88,1.973l3.488,5.261h.951l-1.586.658v.329h.634v.329h-.951v.329l.634.329-1.9.329v.329l.951.987.951.329,1.586-.329.317-3.288,1.586.658.634,1.315V658l-.634-.329,3.488-1.315-.317-.658.951.329.634-.658c.124-1.044.955-1.283,1.9-1.315l.951-1.315.634-1.315-.317.658h.317l.317-1.973.634.329h.317l-.317-.986,1.269-.658h.317l-.317-.986.317-.986,2.22-.987.317-1.644-.634-.329v-.329l.634-1.644.951-.329v-4.6h.634v-.329l-.634-.658.634.329v-.329l-.634-2.631-.634-2.3.951-.658L928,630.046v-3.617l-.951.329-.317-1.315,1.269.329-1.586-2.959.951.329-.317-1.315H928V621.5l-1.269-.329v-.658l.951-.987c-1.31.272-.482-1.851.317-1.644-.146-1.08-.352-2.761.951-2.959L928,613.6h1.268l-.951-1.315.951-.329-.634-.986c1.167-2.026-.159-5.4-.634-7.563h-.317l-1.9,2.631-.951-6.248h-.317c.127,2.065,1.551,4.483.761,6.547-1.177,3.07-8.518,4.16-11.226,3.647.945-4.234,2.385-7.7,1.586-12.167h-.317a23.376,23.376,0,0,1-2.22,12.167l-1.268-.329c.615-1.376.029-2.57-1.586-1.867-1.256.547-2.175,1.645-3.488,2.114-2.768.987-6.593.989-9.514,1.073-1.2.034-2.7.745-3.8.095-6.216-3.657-4.186-14.911.022-19.114,3.526-3.522,7.418-3.674,12.022-3.674v-.329c-2.648,0-5.4-.276-7.928.688-5.9,2.246-9.143,9.125-8.417,15.424.349,3.023,2.461,5.128,3.342,7.892-3.644.7-10.154,1.209-11.816-3.288-.7-1.9-.067-4.3.082-6.248h-.317c-.767,2.392.748,10.388-2.537,9.536l-.317,1.315-2.854-1.644H874.4l.317.658H874.4a23.645,23.645,0,0,1-2.2-10.194c.006-2.261.831-4.7.295-6.905h.634l.951-12.167c.831.006.466-.505,0-.986v-.329l.951-2.631c.771-.525,2.239-3.722.951-3.946l.317-1.315,1.586.329.317-1.644h-1.269v-.658l2.22.329.317-.658,3.171-4.275a5.752,5.752,0,0,0,4.44-2.959V565.6h.317l.634-1.644-.634.329v-.329l-.317-2.631c.561-1.541.831-3.233,2.023-4.43,1.95-1.956,5.543-2.677,8.125-3.161,5.87-1.1,11.864-1.888,17.759-.415,3.114.778,6.327,2.973,9.514,3.073l-.634-.658v-1.644h1.586v-.329h-.951l.634-1.315.317.658h.317l-1.268-1.644,1.586.329-1.269-1.315,1.269-3.288-.951.658-.951-.329.634-2.959.317,1.973h.317l.634-1.315-.634.329-.317-1.644h.634l-.951-2.3h.317v.658h.317l-.317-1.315.951.329-1.269-.658v-1.644l1.269-1.644-.951.658h-.317l-.634-.986.951.329v-1.644l1.268.329h.317l-.634-1.973.951-.658h-.317l-.317.658-3.171-1.973c-2.3.105-4.433-1.117-6.66-1.558-6.054-1.2-12.108-2.846-18.209-3.623-11.854-1.51-23.794-2.223-35.7-3.069-9.188-.653-18.373-1.771-27.59-1.632-6.838.1-13.745-.613-20.613-.3C812.044,521.986,808.488,522.269,807.491,524.821Z"
                transform="translate(-540.153 -350.214)"
                fill="#774d44"
            />
            <path
                id="Path_1106"
                data-name="Path 1106"
                d="M732,523v1.315h.317Z"
                transform="translate(-499.864 -351.024)"
                fill="#4e3b36"
            />
            <path
                id="Path_1107"
                data-name="Path 1107"
                d="M1356.074,523,1351,531.549h.317C1352.6,529.5,1356.274,525.394,1356.074,523Z"
                transform="translate(-922.563 -351.024)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1108"
                data-name="Path 1108"
                d="M1365.317,524l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-932.123 -351.695)"
                fill="#774d44"
            />
            <path
                id="Path_1109"
                data-name="Path 1109"
                d="M846.667,526.109l.211.11-.211-.11m164.06-.109.317.329Z"
                transform="translate(-578.167 -353.037)"
                fill="#4e3b36"
            />
            <path
                id="Path_1110"
                data-name="Path 1110"
                d="M732,527l.317.329L732,527m34.567,0-.317.658h.634l-.317-.658m165.857,0,.317.329Z"
                transform="translate(-499.864 -353.708)"
                fill="#774d44"
            />
            <path
                id="Path_1111"
                data-name="Path 1111"
                d="M733,528l.317.329L733,528m199.789,0,.317.329Z"
                transform="translate(-500.547 -354.38)"
                fill="#4e3b36"
            />
            <path
                id="Path_1112"
                data-name="Path 1112"
                d="M733,529l.317.329Z"
                transform="translate(-500.547 -355.051)"
                fill="#774d44"
            />
            <path
                id="Path_1113"
                data-name="Path 1113"
                d="M1362,529l.317.329Z"
                transform="translate(-930.074 -355.051)"
                fill="#4e3b36"
            />
            <path
                id="Path_1114"
                data-name="Path 1114"
                d="M734,530l.317.329L734,530m199.155,0,.317.329Z"
                transform="translate(-501.229 -355.722)"
                fill="#774d44"
            />
            <path
                id="Path_1115"
                data-name="Path 1115"
                d="M735,531l.317.329L735,531m198.521,0-.317.658Z"
                transform="translate(-501.912 -356.393)"
                fill="#4e3b36"
            />
            <path
                id="Path_1116"
                data-name="Path 1116"
                d="M735.333,532.667l.106.219Z"
                transform="translate(-502.14 -357.512)"
                fill="#774d44"
            />
            <path
                id="Path_1117"
                data-name="Path 1117"
                d="M838.634,532.329l.634.986-1.268.329v.329l.951-.329.634,1.644h.317L839.269,532l-.634.329M839.9,532l.317.329Z"
                transform="translate(-572.248 -357.064)"
                fill="#4e3b36"
            />
            <path
                id="Path_1118"
                data-name="Path 1118"
                d="M1361,532l.317.329Z"
                transform="translate(-929.391 -357.064)"
                fill="#774d44"
            />
            <path
                id="Path_1119"
                data-name="Path 1119"
                d="M838,533l.317.329Z"
                transform="translate(-572.248 -357.735)"
                fill="#4e3b36"
            />
            <path
                id="Path_1120"
                data-name="Path 1120"
                d="M1360,533l.317.329Z"
                transform="translate(-928.708 -357.735)"
                fill="#774d44"
            />
            <path
                id="Path_1121"
                data-name="Path 1121"
                d="M735,534l1.586,9.536h.317Z"
                transform="translate(-501.912 -358.407)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1122"
                data-name="Path 1122"
                d="M736,534l.317.329L736,534m34.25,0,.317.329L770.25,534m163,0-.317.658Z"
                transform="translate(-502.595 -358.407)"
                fill="#4e3b36"
            />
            <path
                id="Path_1123"
                data-name="Path 1123"
                d="M933.8,534l.317.329L933.8,534m-197.464.548.106.219-.106-.219m197.147-.219.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-502.823 -358.407)"
                fill="#774d44"
            />
            <path
                id="Path_1124"
                data-name="Path 1124"
                d="M736,537v.987h.317L736,537m34.25,0,.317.329Z"
                transform="translate(-502.595 -360.42)"
                fill="#4e3b36"
            />
            <path
                id="Path_1125"
                data-name="Path 1125"
                d="M1356,537l.317.329Z"
                transform="translate(-925.977 -360.42)"
                fill="#774d44"
            />
            <path
                id="Path_1126"
                data-name="Path 1126"
                d="M1355,538v.987h.317Z"
                transform="translate(-925.294 -361.091)"
                fill="#4e3b36"
            />
            <path
                id="Path_1127"
                data-name="Path 1127"
                d="M736,540l.317.329Z"
                transform="translate(-502.595 -362.434)"
                fill="#774d44"
            />
            <path
                id="Path_1128"
                data-name="Path 1128"
                d="M737,541l.317.329L737,541m34.25,0,.317.329Z"
                transform="translate(-503.278 -363.105)"
                fill="#4e3b36"
            />
            <path
                id="Path_1129"
                data-name="Path 1129"
                d="M1354.317,541l.317.329-.317-.329m-.317.658.317.329Z"
                transform="translate(-924.611 -363.105)"
                fill="#774d44"
            />
            <path
                id="Path_1130"
                data-name="Path 1130"
                d="M738,544l.317,1.973h.317Z"
                transform="translate(-503.961 -365.118)"
                fill="#4e3b36"
            />
            <path
                id="Path_1131"
                data-name="Path 1131"
                d="M838,544l.317.329L838,544m163.32,0,.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-572.248 -365.118)"
                fill="#774d44"
            />
            <path
                id="Path_1132"
                data-name="Path 1132"
                d="M1351,546l.317.329Z"
                transform="translate(-922.563 -366.461)"
                fill="#4e3b36"
            />
            <path
                id="Path_1133"
                data-name="Path 1133"
                d="M738,547v1.315h.317Z"
                transform="translate(-503.961 -367.132)"
                fill="#774d44"
            />
            <path
                id="Path_1134"
                data-name="Path 1134"
                d="M1349.317,547l-.317.986h.317Z"
                transform="translate(-921.197 -367.132)"
                fill="#4e3b36"
            />
            <path
                id="Path_1135"
                data-name="Path 1135"
                d="M932.764,548v2.631h.317L932.764,548M739,549.315l.317.329-.317-.329m.317.329.317.329-.317-.329m30.761,0,.951,1.315-.951-1.315m.951,0,.317.329-.317-.329m-31.4.329v.986h.317Z"
                transform="translate(-504.644 -367.803)"
                fill="#774d44"
            />
            <path
                id="Path_1136"
                data-name="Path 1136"
                d="M1350.33,556.667l.108.219Z"
                transform="translate(-922.105 -373.62)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1137"
                data-name="Path 1137"
                d="M741,557l.317,2.3h.317Z"
                transform="translate(-506.01 -373.844)"
                fill="#4e3b36"
            />
            <path
                id="Path_1138"
                data-name="Path 1138"
                d="M837,558v.987h.317l.317-.987H837m162.369,0-.317.658Z"
                transform="translate(-571.565 -374.515)"
                fill="#774d44"
            />
            <path
                id="Path_1139"
                data-name="Path 1139"
                d="M1211.634,559l-.634.658v.329l.317.986h.317l.951-.658v-.329l-.317-.987Z"
                transform="translate(-826.96 -375.186)"
                fill="#4e3b36"
            />
            <path
                id="Path_1140"
                data-name="Path 1140"
                d="M1342.171,559,1339,566.234h.317C1340.392,564.466,1342.6,561.126,1342.171,559Z"
                transform="translate(-914.368 -375.186)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1141"
                data-name="Path 1141"
                d="M741,560v2.3h.317Z"
                transform="translate(-506.01 -375.857)"
                fill="#774d44"
            />
            <path
                id="Path_1142"
                data-name="Path 1142"
                d="M1347,560l.317.329Z"
                transform="translate(-919.831 -375.857)"
                fill="#4e3b36"
            />
            <path
                id="Path_1143"
                data-name="Path 1143"
                d="M837,561.329v1.315l1.268-1.315H837M998.734,561v.986h.317Z"
                transform="translate(-571.565 -376.528)"
                fill="#774d44"
            />
            <path
                id="Path_1144"
                data-name="Path 1144"
                d="M1003.2,562v.986h.317L1003.2,562m-159.2.329.317.329Z"
                transform="translate(-576.346 -377.199)"
                fill="#4e3b36"
            />
            <path
                id="Path_1145"
                data-name="Path 1145"
                d="M1346,565l.317.329Z"
                transform="translate(-919.148 -379.213)"
                fill="#774d44"
            />
            <path
                id="Path_1146"
                data-name="Path 1146"
                d="M740,566l.951,9.536h.317C741.268,572.611,742.115,568.248,740,566Z"
                transform="translate(-505.327 -379.884)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1147"
                data-name="Path 1147"
                d="M890.579,566.109l.209.11-.209-.11M932.544,566l.317.329-.317-.329M741,566.329l.317.329-.317-.329m31.4,0,.317.329-.317-.329m1.586,0,.317.329Z"
                transform="translate(-506.01 -379.884)"
                fill="#4e3b36"
            />
            <path
                id="Path_1148"
                data-name="Path 1148"
                d="M1345,567l.317.329Z"
                transform="translate(-918.465 -380.555)"
                fill="#774d44"
            />
            <path
                id="Path_1149"
                data-name="Path 1149"
                d="M742,568l.317.329Z"
                transform="translate(-506.692 -381.226)"
                fill="#4e3b36"
            />
            <path
                id="Path_1150"
                data-name="Path 1150"
                d="M837.333,568.667l.106.219Z"
                transform="translate(-571.793 -381.674)"
                fill="#774d44"
            />
            <path
                id="Path_1151"
                data-name="Path 1151"
                d="M933.593,568l.317.329-.317-.329M743,568.329l.317.329-.317-.329m31.4,0,.634.658v-.658Z"
                transform="translate(-507.375 -381.226)"
                fill="#4e3b36"
            />
            <path
                id="Path_1152"
                data-name="Path 1152"
                d="M1344,569l.317.329Z"
                transform="translate(-917.782 -381.898)"
                fill="#774d44"
            />
            <path
                id="Path_1153"
                data-name="Path 1153"
                d="M1214.317,570l-.317.658Z"
                transform="translate(-829.009 -382.569)"
                fill="#4e3b36"
            />
            <path
                id="Path_1154"
                data-name="Path 1154"
                d="M997.466,570l.317.329-.317-.329m-160.149.329-.317.986Z"
                transform="translate(-571.565 -382.569)"
                fill="#774d44"
            />
            <path
                id="Path_1155"
                data-name="Path 1155"
                d="M774.761,571l.317.329-.317-.329M744,571.329l.317,7.234h.317L744,571.329m148.1,0,.634.658-.634-.658m41.544,0-.317.986h.317Z"
                transform="translate(-508.058 -383.24)"
                fill="#4e3b36"
            />
            <path
                id="Path_1156"
                data-name="Path 1156"
                d="M743,573l.317.329L743,573m189.959,0,.317.329Z"
                transform="translate(-507.375 -384.582)"
                fill="#774d44"
            />
            <path
                id="Path_1157"
                data-name="Path 1157"
                d="M842.317,574l-.317.987h.317Z"
                transform="translate(-574.98 -385.254)"
                fill="#4e3b36"
            />
            <path
                id="Path_1158"
                data-name="Path 1158"
                d="M1216,575v.987h.317L1216,575m39.641,0,.317.329Z"
                transform="translate(-830.375 -385.925)"
                fill="#774d44"
            />
            <path
                id="Path_1159"
                data-name="Path 1159"
                d="M839.317,576l-.317.658h.634l-.317-.658m117.654,0,.317.329-.317-.329m40.909,0,.317.329Z"
                transform="translate(-572.931 -386.596)"
                fill="#4e3b36"
            />
            <path
                id="Path_1160"
                data-name="Path 1160"
                d="M1339,578l.317.329Z"
                transform="translate(-914.368 -387.938)"
                fill="#774d44"
            />
            <path
                id="Path_1161"
                data-name="Path 1161"
                d="M843,580l.317.329L843,580m156.977,0,.317.329-.317-.329m-40.275.329.317.329Z"
                transform="translate(-575.663 -389.281)"
                fill="#4e3b36"
            />
            <path
                id="Path_1162"
                data-name="Path 1162"
                d="M1254.689,581l-.317.658.317-.658m-38.689.329.317.329Z"
                transform="translate(-830.375 -389.952)"
                fill="#774d44"
            />
            <path
                id="Path_1163"
                data-name="Path 1163"
                d="M1338,582l.317.329Z"
                transform="translate(-913.685 -390.623)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1164"
                data-name="Path 1164"
                d="M1209,583v.658l.634.329h.317L1209,583m40.275,0-.317.658Z"
                transform="translate(-825.595 -391.294)"
                fill="#4e3b36"
            />
            <path
                id="Path_1165"
                data-name="Path 1165"
                d="M1334.269,583l.317.329-.317-.329m-.317.329L1333,585.3Z"
                transform="translate(-910.271 -391.294)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1166"
                data-name="Path 1166"
                d="M993.563,585l.317.329-.317-.329M835,585.329l.317.329Z"
                transform="translate(-570.2 -392.636)"
                fill="#774d44"
            />
            <path
                id="Path_1167"
                data-name="Path 1167"
                d="M841.667,586.109l.211.11-.211-.11M997.8,586l.317.329Z"
                transform="translate(-574.753 -393.308)"
                fill="#4e3b36"
            />
            <path
                id="Path_1168"
                data-name="Path 1168"
                d="M838,587l.634.658Z"
                transform="translate(-572.248 -393.979)"
                fill="#774d44"
            />
            <path
                id="Path_1169"
                data-name="Path 1169"
                d="M1210,587l.317.329L1210,587m.951,0-.317.658h.634l-.317-.658m38.055,0,.317.329Z"
                transform="translate(-826.278 -393.979)"
                fill="#4e3b36"
            />
            <path
                id="Path_1170"
                data-name="Path 1170"
                d="M744,588v3.946h.317L744,588m186.787,0,.317.329Z"
                transform="translate(-508.058 -394.65)"
                fill="#774d44"
            />
            <path
                id="Path_1171"
                data-name="Path 1171"
                d="M1210,589l.317.329L1210,589m38.689,0,.317.329Z"
                transform="translate(-826.278 -395.321)"
                fill="#4e3b36"
            />
            <path
                id="Path_1172"
                data-name="Path 1172"
                d="M837,590l.317.329L837,590m156.977,0,.317.329Z"
                transform="translate(-571.565 -395.992)"
                fill="#774d44"
            />
            <path
                id="Path_1173"
                data-name="Path 1173"
                d="M1332.33,591.667l.108.219Z"
                transform="translate(-909.813 -397.111)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1174"
                data-name="Path 1174"
                d="M1209,592l.317.329Z"
                transform="translate(-825.595 -397.335)"
                fill="#4e3b36"
            />
            <path
                id="Path_1175"
                data-name="Path 1175"
                d="M1331,592l.317.329Z"
                transform="translate(-908.905 -397.335)"
                fill="#774d44"
            />
            <path
                id="Path_1176"
                data-name="Path 1176"
                d="M841,593l.317.329L841,593m154.758,0-.317.658Z"
                transform="translate(-574.297 -398.006)"
                fill="#4e3b36"
            />
            <path
                id="Path_1177"
                data-name="Path 1177"
                d="M1330,593l.317.329Z"
                transform="translate(-908.222 -398.006)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1178"
                data-name="Path 1178"
                d="M837.333,594.667l.106.219Z"
                transform="translate(-571.793 -399.125)"
                fill="#774d44"
            />
            <path
                id="Path_1179"
                data-name="Path 1179"
                d="M1329,594l.317.329Z"
                transform="translate(-907.539 -398.677)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1180"
                data-name="Path 1180"
                d="M1209,595l.317.329L1209,595m37.1,0-.317.658Z"
                transform="translate(-825.595 -399.348)"
                fill="#4e3b36"
            />
            <path
                id="Path_1181"
                data-name="Path 1181"
                d="M1325.634,595l-.634.987Z"
                transform="translate(-904.808 -399.348)"
                fill="#774d44"
            />
            <path
                id="Path_1182"
                data-name="Path 1182"
                d="M1327.317,595l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-906.174 -399.348)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1183"
                data-name="Path 1183"
                d="M745.333,597.667l.106.219Z"
                transform="translate(-508.968 -401.138)"
                fill="#4e3b36"
            />
            <path
                id="Path_1184"
                data-name="Path 1184"
                d="M927.885,597l.317.329-.317-.329M743,597.329l.317.329Z"
                transform="translate(-507.375 -400.69)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1185"
                data-name="Path 1185"
                d="M837,598l.317.329Z"
                transform="translate(-571.565 -401.362)"
                fill="#774d44"
            />
            <path
                id="Path_1186"
                data-name="Path 1186"
                d="M1323.317,598l-.317.658Z"
                transform="translate(-903.442 -401.362)"
                fill="#4e3b36"
            />
            <path
                id="Path_1187"
                data-name="Path 1187"
                d="M1325,598v.986h.317Z"
                transform="translate(-904.808 -401.362)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1188"
                data-name="Path 1188"
                d="M1324,599v.987h.317Z"
                transform="translate(-904.125 -402.033)"
                fill="#774d44"
            />
            <path
                id="Path_1189"
                data-name="Path 1189"
                d="M744,600l.317,6.248h.317Z"
                transform="translate(-508.058 -402.704)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1190"
                data-name="Path 1190"
                d="M837,600l.317.329Z"
                transform="translate(-571.565 -402.704)"
                fill="#774d44"
            />
            <path
                id="Path_1191"
                data-name="Path 1191"
                d="M745,601l.317.329L745,601m147.781,0,.317.329Z"
                transform="translate(-508.741 -403.375)"
                fill="#4e3b36"
            />
            <path
                id="Path_1192"
                data-name="Path 1192"
                d="M745,602l.317.329L745,602m29.281.219.106.219Z"
                transform="translate(-508.741 -404.046)"
                fill="#774d44"
            />
            <path
                id="Path_1193"
                data-name="Path 1193"
                d="M1320.586,602,1319,607.261h.317Z"
                transform="translate(-900.711 -404.046)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1194"
                data-name="Path 1194"
                d="M746.333,603.219l.106.219-.106-.219M893.057,603v.987h.317l.317-.987h-.634m.951,0,.317.329Z"
                transform="translate(-509.651 -404.718)"
                fill="#4e3b36"
            />
            <path
                id="Path_1195"
                data-name="Path 1195"
                d="M895.049,603v1.644h.317L895.049,603M746,603.658l.317.329Z"
                transform="translate(-509.424 -404.718)"
                fill="#774d44"
            />
            <path
                id="Path_1197"
                data-name="Path 1197"
                d="M1247.2,605l-.951,1.644h.317L1247.2,605m-35.2.329.317.329Z"
                transform="translate(-827.643 -406.06)"
                fill="#4e3b36"
            />
            <path
                id="Path_1198"
                data-name="Path 1198"
                d="M1322.317,606l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-902.759 -406.731)"
                fill="#774d44"
            />
            <path
                id="Path_1199"
                data-name="Path 1199"
                d="M747.333,608.219l.106.219-.106-.219M894.374,608l.317.987h.317Z"
                transform="translate(-510.334 -408.073)"
                fill="#4e3b36"
            />
            <path
                id="Path_1200"
                data-name="Path 1200"
                d="M928.348,608v.987h.317l-.317-.987M746,608.329v2.959h.317Z"
                transform="translate(-509.424 -408.073)"
                fill="#774d44"
            />
            <path
                id="Path_1201"
                data-name="Path 1201"
                d="M1214,610l.317.329Z"
                transform="translate(-829.009 -409.416)"
                fill="#4e3b36"
            />
            <path
                id="Path_1202"
                data-name="Path 1202"
                d="M836,612l.317.329Z"
                transform="translate(-570.883 -410.758)"
                fill="#774d44"
            />
            <path
                id="Path_1203"
                data-name="Path 1203"
                d="M1245.567,612l.317.329-.317-.329m-34.567.329v.986h.634Z"
                transform="translate(-826.96 -410.758)"
                fill="#4e3b36"
            />
            <path
                id="Path_1204"
                data-name="Path 1204"
                d="M1320,613l.317.329Z"
                transform="translate(-901.393 -411.429)"
                fill="#774d44"
            />
            <path
                id="Path_1205"
                data-name="Path 1205"
                d="M747.333,614.667l.106.219Z"
                transform="translate(-510.334 -412.548)"
                fill="#4e3b36"
            />
            <path
                id="Path_1206"
                data-name="Path 1206"
                d="M834,614l.317,1.315h.317l.317-1.315Z"
                transform="translate(-569.517 -412.1)"
                fill="#774d44"
            />
            <path
                id="Path_1207"
                data-name="Path 1207"
                d="M1319,614l.317.329Z"
                transform="translate(-900.711 -412.1)"
                fill="#4e3b36"
            />
            <path
                id="Path_1208"
                data-name="Path 1208"
                d="M1319,615l.317.329Z"
                transform="translate(-900.711 -412.772)"
                fill="#774d44"
            />
            <path
                id="Path_1209"
                data-name="Path 1209"
                d="M1244.25,616l-.317,1.315h.317V616m-34.25.329v.658l.634-.658Z"
                transform="translate(-826.278 -413.443)"
                fill="#4e3b36"
            />
            <path
                id="Path_1210"
                data-name="Path 1210"
                d="M1318,617v.987h.317Z"
                transform="translate(-900.028 -414.114)"
                fill="#774d44"
            />
            <path
                id="Path_1211"
                data-name="Path 1211"
                d="M746.333,618.667l.106.219Z"
                transform="translate(-509.651 -415.233)"
                fill="#4e3b36"
            />
            <path
                id="Path_1213"
                data-name="Path 1213"
                d="M746,620v.986h.317Z"
                transform="translate(-509.424 -416.127)"
                fill="#774d44"
            />
            <path
                id="Path_1214"
                data-name="Path 1214"
                d="M1316.634,620l-.634,2.959h.317Z"
                transform="translate(-898.662 -416.127)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1215"
                data-name="Path 1215"
                d="M1213,621l.317.329Z"
                transform="translate(-828.326 -416.799)"
                fill="#774d44"
            />
            <path
                id="Path_1216"
                data-name="Path 1216"
                d="M1317.33,622.667l.108.219Z"
                transform="translate(-899.57 -417.917)"
                fill="#4e3b36"
            />
            <path
                id="Path_1217"
                data-name="Path 1217"
                d="M746,623v16.77h.317C746.317,635.064,747.747,627.317,746,623Z"
                transform="translate(-509.424 -418.141)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1218"
                data-name="Path 1218"
                d="M1213,623l.317.329L1213,623m32.981.329.317.329Z"
                transform="translate(-828.326 -418.141)"
                fill="#774d44"
            />
            <path
                id="Path_1219"
                data-name="Path 1219"
                d="M1315.317,625l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-897.979 -419.483)"
                fill="#4e3b36"
            />
            <path
                id="Path_1220"
                data-name="Path 1220"
                d="M1213,627l.317.329L1213,627m32.347,0v.986h.317Z"
                transform="translate(-828.326 -420.826)"
                fill="#774d44"
            />
            <path
                id="Path_1221"
                data-name="Path 1221"
                d="M1314,630l.317.329Z"
                transform="translate(-897.296 -422.839)"
                fill="#4e3b36"
            />
            <path
                id="Path_1222"
                data-name="Path 1222"
                d="M1313.634,630l-.634,2.631h.317Z"
                transform="translate(-896.614 -422.839)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1223"
                data-name="Path 1223"
                d="M1314,631l.317.329Z"
                transform="translate(-897.296 -423.51)"
                fill="#774d44"
            />
            <path
                id="Path_1224"
                data-name="Path 1224"
                d="M747,633v1.315h.317L747,633m179.493,0,.317.329-.317-.329m-126.533.329.317.329-.317-.329m.74.219.106.219Z"
                transform="translate(-510.107 -424.853)"
                fill="#4e3b36"
            />
            <path
                id="Path_1225"
                data-name="Path 1225"
                d="M1313,634l.317.329Z"
                transform="translate(-896.614 -425.524)"
                fill="#774d44"
            />
            <path
                id="Path_1226"
                data-name="Path 1226"
                d="M1312.33,635.667l.108.219Z"
                transform="translate(-896.156 -426.643)"
                fill="#4e3b36"
            />
            <path
                id="Path_1227"
                data-name="Path 1227"
                d="M1312,637v.987h.317Z"
                transform="translate(-895.931 -427.537)"
                fill="#774d44"
            />
            <path
                id="Path_1228"
                data-name="Path 1228"
                d="M910.333,638.219l.106.219-.106-.219M1037.4,638v1.315h.317Z"
                transform="translate(-621.643 -428.209)"
                fill="#4e3b36"
            />
            <path
                id="Path_1229"
                data-name="Path 1229"
                d="M1310.634,640l-.634,2.3h.317Z"
                transform="translate(-894.565 -429.551)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1230"
                data-name="Path 1230"
                d="M747,641v.986h.317L747,641m66.6,0,.317.329L813.6,641m.634.329.317.329Z"
                transform="translate(-510.107 -430.222)"
                fill="#4e3b36"
            />
            <path
                id="Path_1231"
                data-name="Path 1231"
                d="M1311,642l.317.329Z"
                transform="translate(-895.248 -430.893)"
                fill="#774d44"
            />
            <path
                id="Path_1232"
                data-name="Path 1232"
                d="M900.667,643.333l.211.11Z"
                transform="translate(-615.042 -431.788)"
                fill="#4e3b36"
            />
            <path
                id="Path_1233"
                data-name="Path 1233"
                d="M910,642.706l.317.329-.317-.329m73.573.329v.329l6.025.987-.317,4.6-.951-.329v.329c1.021.981,1.161,1.882-.317,2.3v.329H989.6l1.586,1.973-.951,1.315h1.9l-.634,2.3h.317l.317-.658.634.329c-.162,1.045.323,8.238,2.22,6.577h.317c.733,2.588,4.351,3.84,6.289,5.451,3.355,2.79,5.033,6.684,7.982,9.675l.317-5.261-1.268-.329.634-.658-.317-.658h.634v-2.3l-1.268-.658.951-.986-1.268-.658.634-1.315h-.634l.317-2.3-1.269-.658v-.329l.951-1.644v-.329l-.634-.658c-1.034,0-.387-.713,0-1.315l-1.9-.986.951-.987-1.586-2.959V652.9l.634-.658-1.586-.329h1.268v-.329h-1.586V649.94l.951.329v-.329l-.317-.986h-.317l-1.268.658.634-1.644-.951-1.315-.951.329.634-.986-6.977-2.3C993.125,641.48,986.294,643.233,983.573,643.035Z"
                transform="translate(-621.415 -431.271)"
                fill="#774d44"
            />
            <path
                id="Path_1234"
                data-name="Path 1234"
                d="M1310,643l.317.329Z"
                transform="translate(-894.565 -431.564)"
                fill="#4e3b36"
            />
            <path
                id="Path_1235"
                data-name="Path 1235"
                d="M908,644l.317.329Z"
                transform="translate(-620.049 -432.236)"
                fill="#774d44"
            />
            <path
                id="Path_1236"
                data-name="Path 1236"
                d="M959,644v1.315c.55-.623.664-.8,0-1.315m62.686.109.209.11-.209-.11m2.007-.109.317.329Z"
                transform="translate(-654.876 -432.236)"
                fill="#4e3b36"
            />
            <path
                id="Path_1237"
                data-name="Path 1237"
                d="M1310,644l.317.329Z"
                transform="translate(-894.565 -432.236)"
                fill="#774d44"
            />
            <path
                id="Path_1238"
                data-name="Path 1238"
                d="M897.667,645.333l.211.11-.211-.11m130.549.11.108.219-.108-.219m-48.52.329.108.219-.108-.219m.742-.11.209.11-.209-.11m1.69-.109.317.329-.317-.329m5.074,0,.317.329-.317-.329m-68.711.548.106.219Z"
                transform="translate(-612.993 -433.13)"
                fill="#4e3b36"
            />
            <path
                id="Path_1239"
                data-name="Path 1239"
                d="M1144.67,647.109l.209.11-.209-.11m1.056-.109.317.329Z"
                transform="translate(-781.665 -434.249)"
                fill="#774d44"
            />
            <path
                id="Path_1240"
                data-name="Path 1240"
                d="M1167,647l.317.329Z"
                transform="translate(-796.914 -434.249)"
                fill="#4e3b36"
            />
            <path
                id="Path_1241"
                data-name="Path 1241"
                d="M1309.33,647.667l.108.219Z"
                transform="translate(-894.107 -434.697)"
                fill="#774d44"
            />
            <path
                id="Path_1242"
                data-name="Path 1242"
                d="M1308.317,649l-.317,2.3h.317Z"
                transform="translate(-893.199 -435.591)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1243"
                data-name="Path 1243"
                d="M833.634,650l.317.329-.317-.329m150,0L983,652.959h.317l.317-2.959M833,650.329l.317.329Z"
                transform="translate(-568.834 -436.263)"
                fill="#4e3b36"
            />
            <path
                id="Path_1244"
                data-name="Path 1244"
                d="M897.317,651l-.317.658.317-.658m130.022,0,.317.329-.317-.329m-.317.329.317.329-.317-.329m-65.645.329.317.329Z"
                transform="translate(-612.538 -436.934)"
                fill="#774d44"
            />
            <path
                id="Path_1245"
                data-name="Path 1245"
                d="M1085.317,654l-.317.987h.317Z"
                transform="translate(-740.918 -438.947)"
                fill="#4e3b36"
            />
            <path
                id="Path_1246"
                data-name="Path 1246"
                d="M1155,654.987l.951-.987Z"
                transform="translate(-788.719 -438.947)"
                fill="#774d44"
            />
            <path
                id="Path_1247"
                data-name="Path 1247"
                d="M1196.67,654.333l.209.11Z"
                transform="translate(-817.175 -439.171)"
                fill="#4e3b36"
            />
            <path
                id="Path_1248"
                data-name="Path 1248"
                d="M1307,655v.986h.317Z"
                transform="translate(-892.516 -439.619)"
                fill="#774d44"
            />
            <path
                id="Path_1249"
                data-name="Path 1249"
                d="M879,656l.317.329Z"
                transform="translate(-600.246 -440.29)"
                fill="#4e3b36"
            />
            <path
                id="Path_1250"
                data-name="Path 1250"
                d="M1203.33,656.667l.108.219Z"
                transform="translate(-821.723 -440.737)"
                fill="#774d44"
            />
            <path
                id="Path_1251"
                data-name="Path 1251"
                d="M780,658l.317.329Z"
                transform="translate(-532.642 -441.632)"
                fill="#31231e"
            />
            <path
                id="Path_1252"
                data-name="Path 1252"
                d="M1154,658.987l.951-.987Z"
                transform="translate(-788.037 -441.632)"
                fill="#774d44"
            />
            <path
                id="Path_1253"
                data-name="Path 1253"
                d="M1307,658l.317.329Z"
                transform="translate(-892.516 -441.632)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1254"
                data-name="Path 1254"
                d="M969.667,659.333l.211.11-.211-.11m107.082.11.108.219Z"
                transform="translate(-662.16 -442.527)"
                fill="#774d44"
            />
            <path
                id="Path_1255"
                data-name="Path 1255"
                d="M831,660l.317.329Z"
                transform="translate(-567.468 -442.974)"
                fill="#4e3b36"
            />
            <path
                id="Path_1256"
                data-name="Path 1256"
                d="M976,661l.317.329L976,661m34.25,0-.634.329v.329Z"
                transform="translate(-666.485 -443.646)"
                fill="#774d44"
            />
            <path
                id="Path_1257"
                data-name="Path 1257"
                d="M1307.33,661.667l.108.219Z"
                transform="translate(-892.742 -444.093)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1258"
                data-name="Path 1258"
                d="M780.333,662.667l.106.219Z"
                transform="translate(-532.869 -444.764)"
                fill="#31231e"
            />
            <path
                id="Path_1259"
                data-name="Path 1259"
                d="M825,662l.317.329Z"
                transform="translate(-563.371 -444.317)"
                fill="#774d44"
            />
            <path
                id="Path_1260"
                data-name="Path 1260"
                d="M875,662l.317.329L875,662m64.272.109.209.11-.209-.11m72.514.11.108.219-.108-.219m-103.593.548.211.11Z"
                transform="translate(-597.515 -444.317)"
                fill="#4e3b36"
            />
            <path
                id="Path_1261"
                data-name="Path 1261"
                d="M1306.33,664.667l.108.219Z"
                transform="translate(-892.059 -446.107)"
                fill="#774d44"
            />
            <path
                id="Path_1262"
                data-name="Path 1262"
                d="M880,665l.317.329Z"
                transform="translate(-600.929 -446.33)"
                fill="#4e3b36"
            />
            <path
                id="Path_1263"
                data-name="Path 1263"
                d="M929.465,665l-.317.987h.634l-.317-.987m-106.132.548.106.219Z"
                transform="translate(-562.233 -446.33)"
                fill="#774d44"
            />
            <path
                id="Path_1264"
                data-name="Path 1264"
                d="M1202.67,666.333l.209.11Z"
                transform="translate(-821.272 -447.225)"
                fill="#4e3b36"
            />
            <path
                id="Path_1265"
                data-name="Path 1265"
                d="M1302.586,666,1301,674.878h.317Z"
                transform="translate(-888.419 -447.001)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1266"
                data-name="Path 1266"
                d="M826,667l.317.329L826,667m151.9,0,.317.329Z"
                transform="translate(-564.054 -447.673)"
                fill="#4e3b36"
            />
            <path
                id="Path_1267"
                data-name="Path 1267"
                d="M1266,668l.317.329Z"
                transform="translate(-864.518 -448.344)"
                fill="#31231e"
            />
            <path
                id="Path_1268"
                data-name="Path 1268"
                d="M873,669l.317.329Z"
                transform="translate(-596.149 -449.015)"
                fill="#4e3b36"
            />
            <path
                id="Path_1269"
                data-name="Path 1269"
                d="M1154,669l.317.329Z"
                transform="translate(-788.037 -449.015)"
                fill="#774d44"
            />
            <path
                id="Path_1270"
                data-name="Path 1270"
                d="M1304,669l.317.329Z"
                transform="translate(-890.468 -449.015)"
                fill="#4e3b36"
            />
            <path
                id="Path_1271"
                data-name="Path 1271"
                d="M780,670l.317.329Z"
                transform="translate(-532.642 -449.686)"
                fill="#31231e"
            />
            <path
                id="Path_1272"
                data-name="Path 1272"
                d="M984.667,670.109l.211.11-.211-.11m26.11-.109.317.329-.317-.329m30.339.109.209.11Z"
                transform="translate(-672.403 -449.686)"
                fill="#4e3b36"
            />
            <path
                id="Path_1273"
                data-name="Path 1273"
                d="M1211,670l.317.329L1211,670m29.493,0,.317.329Z"
                transform="translate(-826.96 -449.686)"
                fill="#774d44"
            />
            <path
                id="Path_1274"
                data-name="Path 1274"
                d="M903.208,671l.317.329-.317-.329M829,671.329l.317.329-.317-.329m75.476,0,.317.329-.317-.329m30.444,0,.317.329Z"
                transform="translate(-566.102 -450.357)"
                fill="#4e3b36"
            />
            <path
                id="Path_1275"
                data-name="Path 1275"
                d="M1263.317,672l-.317.987Z"
                transform="translate(-862.47 -451.028)"
                fill="#31231e"
            />
            <path
                id="Path_1276"
                data-name="Path 1276"
                d="M942.547,673.667l.108.219-.108-.219M775,673.776l.317.329Z"
                transform="translate(-529.227 -452.147)"
                fill="#4e3b36"
            />
            <path
                id="Path_1277"
                data-name="Path 1277"
                d="M779,674l.634.658Z"
                transform="translate(-531.959 -452.371)"
                fill="#31231e"
            />
            <path
                id="Path_1278"
                data-name="Path 1278"
                d="M960.5,674l.317.329L960.5,674m-94.5.329.634.658Z"
                transform="translate(-591.369 -452.371)"
                fill="#4e3b36"
            />
            <path
                id="Path_1279"
                data-name="Path 1279"
                d="M981,675l.317.329Z"
                transform="translate(-669.899 -453.042)"
                fill="#774d44"
            />
            <path
                id="Path_1280"
                data-name="Path 1280"
                d="M747,676v.987h.317L747,676m9.2.329.317.329-.317-.329m123.679,0,.317.329Z"
                transform="translate(-510.107 -453.713)"
                fill="#4e3b36"
            />
            <path
                id="Path_1281"
                data-name="Path 1281"
                d="M1303,677l.317.329Z"
                transform="translate(-889.785 -454.384)"
                fill="#774d44"
            />
            <path
                id="Path_1282"
                data-name="Path 1282"
                d="M780,678l.317.329Z"
                transform="translate(-532.642 -455.056)"
                fill="#31231e"
            />
            <path
                id="Path_1283"
                data-name="Path 1283"
                d="M1302,678v.986h.317Z"
                transform="translate(-889.102 -455.056)"
                fill="#774d44"
            />
            <path
                id="Path_1284"
                data-name="Path 1284"
                d="M973.9,679v1.315h.317L973.9,679m-151.9.329.317.329Z"
                transform="translate(-561.322 -455.727)"
                fill="#4e3b36"
            />
            <path
                id="Path_1285"
                data-name="Path 1285"
                d="M1263.33,680.667l.108.219Z"
                transform="translate(-862.695 -456.846)"
                fill="#31231e"
            />
            <path
                id="Path_1286"
                data-name="Path 1286"
                d="M755.985,681.219l.106.219-.106-.219M822.793,681l.317.329-.317-.329M747,681.329l.317.329-.317-.329m37.209.219.106.219Z"
                transform="translate(-510.107 -457.069)"
                fill="#4e3b36"
            />
            <path
                id="Path_1287"
                data-name="Path 1287"
                d="M747,683v1.315h.317L747,683m175.688,0,.317.329Z"
                transform="translate(-510.107 -458.411)"
                fill="#774d44"
            />
            <path
                id="Path_1288"
                data-name="Path 1288"
                d="M1300,684v1.644h.317Z"
                transform="translate(-887.736 -459.083)"
                fill="#4e3b36"
            />
            <path
                id="Path_1289"
                data-name="Path 1289"
                d="M738.488,685,735,690.261C736.485,689.176,739.258,687.136,738.488,685Z"
                transform="translate(-501.912 -459.754)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1291"
                data-name="Path 1291"
                d="M845.309,685l.634.658V685h-.634M747,685.658v.987h.317Z"
                transform="translate(-510.107 -459.754)"
                fill="#4e3b36"
            />
            <path
                id="Path_1292"
                data-name="Path 1292"
                d="M1215,687l.317.329Z"
                transform="translate(-829.692 -461.096)"
                fill="#774d44"
            />
            <path
                id="Path_1293"
                data-name="Path 1293"
                d="M820,688l.317.329L820,688m75.054.438.209.11Z"
                transform="translate(-559.957 -461.767)"
                fill="#4e3b36"
            />
            <path
                id="Path_1294"
                data-name="Path 1294"
                d="M745.317,690l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-508.741 -463.11)"
                fill="#774d44"
            />
            <path
                id="Path_1295"
                data-name="Path 1295"
                d="M877,691.658l.951-.329-.951.329m1.268-.658v.329h6.343L878.268,691m93.235,0v2.631h.317l.634-1.973L971.5,691m39.745.219.108.219Z"
                transform="translate(-598.88 -463.781)"
                fill="#4e3b36"
            />
            <path
                id="Path_1296"
                data-name="Path 1296"
                d="M744,692l.317.329L744,692m41.861.329v.329l2.22-.329Z"
                transform="translate(-508.058 -464.452)"
                fill="#774d44"
            />
            <path
                id="Path_1298"
                data-name="Path 1298"
                d="M899,692v.329l1.268.329v-.329Z"
                transform="translate(-613.904 -464.452)"
                fill="#774d44"
            />
            <path
                id="Path_1299"
                data-name="Path 1299"
                d="M902,692l.317.329Z"
                transform="translate(-615.952 -464.452)"
                fill="#4e3b36"
            />
            <path
                id="Path_1300"
                data-name="Path 1300"
                d="M743,693l.317.329Z"
                transform="translate(-507.375 -465.123)"
                fill="#774d44"
            />
            <path
                id="Path_1301"
                data-name="Path 1301"
                d="M903,693l.317.329L903,693m97.992,0,.634.658V693Z"
                transform="translate(-616.635 -465.123)"
                fill="#4e3b36"
            />
            <path
                id="Path_1302"
                data-name="Path 1302"
                d="M1261,693l.317.329Z"
                transform="translate(-861.104 -465.123)"
                fill="#31231e"
            />
            <path
                id="Path_1303"
                data-name="Path 1303"
                d="M918.956,693l.317.329-.317-.329M742,693.329l.317.329Z"
                transform="translate(-506.692 -465.123)"
                fill="#774d44"
            />
            <path
                id="Path_1304"
                data-name="Path 1304"
                d="M864,695.658l2.22-.658Z"
                transform="translate(-590.003 -466.465)"
                fill="#4e3b36"
            />
            <path
                id="Path_1305"
                data-name="Path 1305"
                d="M871,694v.329h1.268Z"
                transform="translate(-594.783 -465.794)"
                fill="#774d44"
            />
            <path
                id="Path_1307"
                data-name="Path 1307"
                d="M904,694v.329h1.586Z"
                transform="translate(-617.318 -465.794)"
                fill="#774d44"
            />
            <path
                id="Path_1308"
                data-name="Path 1308"
                d="M909,694v.329h1.269L909,694m25.053,0,.317.329-.317-.329m98.626,0,.317.329Z"
                transform="translate(-620.732 -465.794)"
                fill="#4e3b36"
            />
            <path
                id="Path_1309"
                data-name="Path 1309"
                d="M1299.317,694l-.317,3.617h.317Z"
                transform="translate(-887.053 -465.794)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1310"
                data-name="Path 1310"
                d="M741,695l.317.329L741,695m39.641,0v.329h1.269L780.641,695m14.271,0v.329l1.269.329v-.329Z"
                transform="translate(-506.01 -466.465)"
                fill="#774d44"
            />
            <path
                id="Path_1311"
                data-name="Path 1311"
                d="M914,695l.317.329Z"
                transform="translate(-624.147 -466.465)"
                fill="#4e3b36"
            />
            <path
                id="Path_1312"
                data-name="Path 1312"
                d="M917.273,695l.317.329-.317-.329M740,695.329l.317.329Z"
                transform="translate(-505.327 -466.465)"
                fill="#774d44"
            />
            <path
                id="Path_1313"
                data-name="Path 1313"
                d="M779.317,696l-.317.658Z"
                transform="translate(-531.959 -467.137)"
                fill="#31231e"
            />
            <path
                id="Path_1314"
                data-name="Path 1314"
                d="M865,696l.317.329Z"
                transform="translate(-590.686 -467.137)"
                fill="#774d44"
            />
            <path
                id="Path_1315"
                data-name="Path 1315"
                d="M1297.317,696l-.317,2.631h.317Z"
                transform="translate(-885.687 -467.137)"
                fill="#4e3b36"
            />
            <path
                id="Path_1316"
                data-name="Path 1316"
                d="M739,697l.317.329Z"
                transform="translate(-504.644 -467.808)"
                fill="#774d44"
            />
            <path
                id="Path_1317"
                data-name="Path 1317"
                d="M857,698.329v.329l1.9-.658Z"
                transform="translate(-585.223 -468.479)"
                fill="#4e3b36"
            />
            <path
                id="Path_1318"
                data-name="Path 1318"
                d="M863,697l.317.329L863,697m16.491,0v.329l1.9.658Z"
                transform="translate(-589.32 -467.808)"
                fill="#774d44"
            />
            <path
                id="Path_1319"
                data-name="Path 1319"
                d="M919,697l.317.329L919,697m93.869,0,.317.329Z"
                transform="translate(-627.561 -467.808)"
                fill="#4e3b36"
            />
            <path
                id="Path_1320"
                data-name="Path 1320"
                d="M915.908,697v.987h.317l-.317-.987M738,697.329l.317.329-.317-.329m38.689,0,.317.329Z"
                transform="translate(-503.961 -467.808)"
                fill="#774d44"
            />
            <path
                id="Path_1321"
                data-name="Path 1321"
                d="M920,698l.317.329Z"
                transform="translate(-628.244 -468.479)"
                fill="#4e3b36"
            />
            <path
                id="Path_1322"
                data-name="Path 1322"
                d="M1260,698l.317.329Z"
                transform="translate(-860.421 -468.479)"
                fill="#31231e"
            />
            <path
                id="Path_1323"
                data-name="Path 1323"
                d="M737,699l.317.329Z"
                transform="translate(-503.278 -469.15)"
                fill="#774d44"
            />
            <path
                id="Path_1324"
                data-name="Path 1324"
                d="M816,699l.317.329Z"
                transform="translate(-557.225 -469.15)"
                fill="#4e3b36"
            />
            <path
                id="Path_1325"
                data-name="Path 1325"
                d="M859,699l.317.329Z"
                transform="translate(-586.589 -469.15)"
                fill="#774d44"
            />
            <path
                id="Path_1326"
                data-name="Path 1326"
                d="M921,699l.317.329Z"
                transform="translate(-628.927 -469.15)"
                fill="#4e3b36"
            />
            <path
                id="Path_1327"
                data-name="Path 1327"
                d="M1219.33,699.667l.108.219Z"
                transform="translate(-832.649 -469.598)"
                fill="#774d44"
            />
            <path
                id="Path_1328"
                data-name="Path 1328"
                d="M712,707.177h.317c.537-2.879,2.962-4.991,5.391-6.248C714.985,700.471,712.16,704.7,712,707.177Z"
                transform="translate(-486.206 -470.422)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1329"
                data-name="Path 1329"
                d="M730,700l.317.329Z"
                transform="translate(-498.498 -469.821)"
                fill="#774d44"
            />
            <path
                id="Path_1330"
                data-name="Path 1330"
                d="M731,700v.329h.951Z"
                transform="translate(-499.181 -469.821)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1331"
                data-name="Path 1331"
                d="M736,700l.317.329Z"
                transform="translate(-502.595 -469.821)"
                fill="#774d44"
            />
            <path
                id="Path_1332"
                data-name="Path 1332"
                d="M779,700l.317.329Z"
                transform="translate(-531.959 -469.821)"
                fill="#31231e"
            />
            <path
                id="Path_1333"
                data-name="Path 1333"
                d="M854.667,700.333l.211.11Z"
                transform="translate(-583.63 -470.045)"
                fill="#4e3b36"
            />
            <path
                id="Path_1334"
                data-name="Path 1334"
                d="M856.667,700.109l.211.11-.211-.11M877.386,700v.329l1.268.329v-.329Z"
                transform="translate(-584.996 -469.821)"
                fill="#774d44"
            />
            <path
                id="Path_1335"
                data-name="Path 1335"
                d="M925,700l.317.329Z"
                transform="translate(-631.658 -469.821)"
                fill="#4e3b36"
            />
            <path
                id="Path_1336"
                data-name="Path 1336"
                d="M727.317,701l-.317.658Z"
                transform="translate(-496.449 -470.492)"
                fill="#774d44"
            />
            <path
                id="Path_1337"
                data-name="Path 1337"
                d="M729,701v.329h.951Z"
                transform="translate(-497.815 -470.492)"
                fill="#4e3b36"
            />
            <path
                id="Path_1338"
                data-name="Path 1338"
                d="M732,701v.329h1.269L732,701m38.689,0,.317.329-.317-.329m140.8,0v1.315h.317Z"
                transform="translate(-499.864 -470.492)"
                fill="#774d44"
            />
            <path
                id="Path_1339"
                data-name="Path 1339"
                d="M713.483,708.121c-1.138.193-.629,1.764-.317,2.631,4.5-2.571,8.916,8.023,9.514,11.509,1.413-.924,1.373-3,1.586-4.6a80.546,80.546,0,0,0,.951-10.851c-4.273-.121-6.639-7.037-10.957-1.162A3.7,3.7,0,0,0,713.483,708.121Z"
                transform="translate(-486.737 -472.023)"
                fill="#4e3b36"
            />
            <path
                id="Path_1340"
                data-name="Path 1340"
                d="M779,702l.317.329Z"
                transform="translate(-531.959 -471.164)"
                fill="#31231e"
            />
            <path
                id="Path_1341"
                data-name="Path 1341"
                d="M853,702l.317.329L853,702m23.15,0v.329l1.9.986Z"
                transform="translate(-582.491 -471.164)"
                fill="#774d44"
            />
            <path
                id="Path_1342"
                data-name="Path 1342"
                d="M927,702l.317.329Z"
                transform="translate(-633.024 -471.164)"
                fill="#4e3b36"
            />
            <path
                id="Path_1343"
                data-name="Path 1343"
                d="M723,703.658l.951-.658-.951.658M763.592,703l.317.329-.317-.329m12.368,0v.329h2.22Z"
                transform="translate(-493.718 -471.835)"
                fill="#774d44"
            />
            <path
                id="Path_1344"
                data-name="Path 1344"
                d="M930,703l.317.329Z"
                transform="translate(-635.073 -471.835)"
                fill="#4e3b36"
            />
            <path
                id="Path_1345"
                data-name="Path 1345"
                d="M724.913,704.329c-.512,3.855,3.943,11.576,6.66,14.14l1.268-9.536c-3.474-1.641-3.4-4.766-7.928-4.6M764.554,704l.317.329-.317-.329m1.269,11.18h.317a15.631,15.631,0,0,1,10.782-10.851C771.722,703.192,766.432,710.586,765.822,715.18Z"
                transform="translate(-494.996 -472.506)"
                fill="#774d44"
            />
            <path
                id="Path_1346"
                data-name="Path 1346"
                d="M884,705.059v.329c6.047-.764,8.788,1.394,13.953,4.275C894.848,705.29,888.859,703.726,884,705.059Z"
                transform="translate(-603.661 -472.907)"
                fill="#4e3b36"
            />
            <path
                id="Path_1347"
                data-name="Path 1347"
                d="M899,704v.329l5.074,1.315Z"
                transform="translate(-613.904 -472.506)"
                fill="#774d44"
            />
            <path
                id="Path_1348"
                data-name="Path 1348"
                d="M931,704l.317.329Z"
                transform="translate(-635.756 -472.506)"
                fill="#4e3b36"
            />
            <path
                id="Path_1349"
                data-name="Path 1349"
                d="M722,705l.317.329Z"
                transform="translate(-493.035 -473.177)"
                fill="#774d44"
            />
            <path
                id="Path_1350"
                data-name="Path 1350"
                d="M849,705l.317.329Z"
                transform="translate(-579.76 -473.177)"
                fill="#4e3b36"
            />
            <path
                id="Path_1352"
                data-name="Path 1352"
                d="M932,705l.317.329Z"
                transform="translate(-636.438 -473.177)"
                fill="#4e3b36"
            />
            <path
                id="Path_1354"
                data-name="Path 1354"
                d="M1298.33,705.667l.108.219Z"
                transform="translate(-886.596 -473.625)"
                fill="#4e3b36"
            />
            <path
                id="Path_1355"
                data-name="Path 1355"
                d="M721,706l.317.329Z"
                transform="translate(-492.352 -473.848)"
                fill="#774d44"
            />
            <path
                id="Path_1356"
                data-name="Path 1356"
                d="M814,706l.317.329L814,706m9.831,0,.317.329Z"
                transform="translate(-555.859 -473.848)"
                fill="#4e3b36"
            />
            <path
                id="Path_1357"
                data-name="Path 1357"
                d="M846.667,706.109l.211.11-.211-.11M874.045,706l.634.658Z"
                transform="translate(-578.167 -473.848)"
                fill="#774d44"
            />
            <path
                id="Path_1358"
                data-name="Path 1358"
                d="M934,706l.317.329Z"
                transform="translate(-637.804 -473.848)"
                fill="#4e3b36"
            />
            <path
                id="Path_1359"
                data-name="Path 1359"
                d="M845,707l.317.329Z"
                transform="translate(-577.028 -474.52)"
                fill="#774d44"
            />
            <path
                id="Path_1360"
                data-name="Path 1360"
                d="M877,707.658v.329l1.586-.987Z"
                transform="translate(-598.88 -474.52)"
                fill="#4e3b36"
            />
            <path
                id="Path_1361"
                data-name="Path 1361"
                d="M987.975,707v1.973h.317L987.975,707M844,707.329l.317.329Z"
                transform="translate(-576.346 -474.52)"
                fill="#774d44"
            />
            <path
                id="Path_1362"
                data-name="Path 1362"
                d="M935,708l.317.329Z"
                transform="translate(-638.487 -475.191)"
                fill="#4e3b36"
            />
            <path
                id="Path_1363"
                data-name="Path 1363"
                d="M718,709l.317.329Z"
                transform="translate(-490.303 -475.862)"
                fill="#774d44"
            />
            <path
                id="Path_1364"
                data-name="Path 1364"
                d="M837.22,709,835,711.631Z"
                transform="translate(-570.2 -475.862)"
                fill="#4e3b36"
            />
            <path
                id="Path_1365"
                data-name="Path 1365"
                d="M843,709l.317.329L843,709m23.045.109.211.11-.211-.11m6.448-.109.634.658Z"
                transform="translate(-575.663 -475.862)"
                fill="#774d44"
            />
            <path
                id="Path_1366"
                data-name="Path 1366"
                d="M937,709l.317.329Z"
                transform="translate(-639.853 -475.862)"
                fill="#4e3b36"
            />
            <path
                id="Path_1367"
                data-name="Path 1367"
                d="M1258,709l.317.329Z"
                transform="translate(-859.055 -475.862)"
                fill="#31231e"
            />
            <path
                id="Path_1368"
                data-name="Path 1368"
                d="M842,710l.317.329Z"
                transform="translate(-574.98 -476.533)"
                fill="#774d44"
            />
            <path
                id="Path_1369"
                data-name="Path 1369"
                d="M875.667,710.333l.211.11Z"
                transform="translate(-597.97 -476.757)"
                fill="#4e3b36"
            />
            <path
                id="Path_1370"
                data-name="Path 1370"
                d="M779.742,710l.317.329-.317-.329M716,710.329l.317.329-.317-.329m39.641,0,.317.329Z"
                transform="translate(-488.938 -476.533)"
                fill="#774d44"
            />
            <path
                id="Path_1371"
                data-name="Path 1371"
                d="M868,713.315,870.22,712Z"
                transform="translate(-592.735 -477.875)"
                fill="#4e3b36"
            />
            <path
                id="Path_1372"
                data-name="Path 1372"
                d="M918.667,711.333l.211.11Z"
                transform="translate(-627.334 -477.428)"
                fill="#774d44"
            />
            <path
                id="Path_1373"
                data-name="Path 1373"
                d="M938,711l.317.329L938,711m62.791,0v.329h5.391Z"
                transform="translate(-640.536 -477.204)"
                fill="#4e3b36"
            />
            <path
                id="Path_1374"
                data-name="Path 1374"
                d="M840,712l.317.329L840,712m25.37,0,1.268.987L865.37,712m6.025,0,.634.658Z"
                transform="translate(-573.614 -477.875)"
                fill="#774d44"
            />
            <path
                id="Path_1375"
                data-name="Path 1375"
                d="M940,712l.317.329L940,712m34.884,0,.317.329-.317-.329m24.948.109.209.11Z"
                transform="translate(-641.901 -477.875)"
                fill="#4e3b36"
            />
            <path
                id="Path_1376"
                data-name="Path 1376"
                d="M1127,713.329v.329l2.854-.658Z"
                transform="translate(-769.599 -478.547)"
                fill="#774d44"
            />
            <path
                id="Path_1378"
                data-name="Path 1378"
                d="M1152,712v.329l3.805.658Z"
                transform="translate(-786.671 -477.875)"
                fill="#774d44"
            />
            <path
                id="Path_1379"
                data-name="Path 1379"
                d="M1159,712l.317.329Z"
                transform="translate(-791.451 -477.875)"
                fill="#4e3b36"
            />
            <path
                id="Path_1380"
                data-name="Path 1380"
                d="M715,713l.317.329L715,713m39.324,0,.317.329Z"
                transform="translate(-488.255 -478.547)"
                fill="#774d44"
            />
            <path
                id="Path_1381"
                data-name="Path 1381"
                d="M1160,713l.317.329Z"
                transform="translate(-792.134 -478.547)"
                fill="#4e3b36"
            />
            <path
                id="Path_1382"
                data-name="Path 1382"
                d="M1295.268,713,1294,718.919h.317Z"
                transform="translate(-883.639 -478.547)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1383"
                data-name="Path 1383"
                d="M714,714l.317.329L714,714m39.324,0,.317.329Z"
                transform="translate(-487.572 -479.218)"
                fill="#774d44"
            />
            <path
                id="Path_1384"
                data-name="Path 1384"
                d="M941,714l.317.329L941,714m34.567,0,.317.329-.317-.329m22.833,0v.329h1.586Z"
                transform="translate(-642.584 -479.218)"
                fill="#4e3b36"
            />
            <path
                id="Path_1386"
                data-name="Path 1386"
                d="M1164,714v.329h1.586Z"
                transform="translate(-794.865 -479.218)"
                fill="#4e3b36"
            />
            <path
                id="Path_1387"
                data-name="Path 1387"
                d="M1222,714l.317.329Z"
                transform="translate(-834.472 -479.218)"
                fill="#774d44"
            />
            <path
                id="Path_1388"
                data-name="Path 1388"
                d="M715,715l.317.329Z"
                transform="translate(-488.255 -479.889)"
                fill="#31231e"
            />
            <path
                id="Path_1389"
                data-name="Path 1389"
                d="M837,715l.317.329L837,715m27.59,0,.317.329L864.59,715m5.708,0,.634.658Z"
                transform="translate(-571.565 -479.889)"
                fill="#774d44"
            />
            <path
                id="Path_1390"
                data-name="Path 1390"
                d="M943,715l.317.329L943,715m56.131,0-.317.658Z"
                transform="translate(-643.95 -479.889)"
                fill="#4e3b36"
            />
            <path
                id="Path_1391"
                data-name="Path 1391"
                d="M1121.67,715.109l.209.11-.209-.11m14.375-.109v.329l1.269.329v-.329Z"
                transform="translate(-765.959 -479.889)"
                fill="#774d44"
            />
            <path
                id="Path_1392"
                data-name="Path 1392"
                d="M1170,715l.317.329Z"
                transform="translate(-798.962 -479.889)"
                fill="#4e3b36"
            />
            <path
                id="Path_1393"
                data-name="Path 1393"
                d="M713,716l.317.329Z"
                transform="translate(-486.889 -480.56)"
                fill="#774d44"
            />
            <path
                id="Path_1394"
                data-name="Path 1394"
                d="M714.333,716.667l.106.219Z"
                transform="translate(-487.799 -481.008)"
                fill="#31231e"
            />
            <path
                id="Path_1395"
                data-name="Path 1395"
                d="M836,716l.317.329Z"
                transform="translate(-570.883 -480.56)"
                fill="#774d44"
            />
            <path
                id="Path_1396"
                data-name="Path 1396"
                d="M867,716l.317.329Z"
                transform="translate(-592.052 -480.56)"
                fill="#4e3b36"
            />
            <path
                id="Path_1397"
                data-name="Path 1397"
                d="M925,716l.317.329L925,716m61.84,0,.317.329Z"
                transform="translate(-631.658 -480.56)"
                fill="#774d44"
            />
            <path
                id="Path_1398"
                data-name="Path 1398"
                d="M1171,716l.317.329Z"
                transform="translate(-799.645 -480.56)"
                fill="#4e3b36"
            />
            <path
                id="Path_1399"
                data-name="Path 1399"
                d="M1257,716l.317.329Z"
                transform="translate(-858.373 -480.56)"
                fill="#31231e"
            />
            <path
                id="Path_1400"
                data-name="Path 1400"
                d="M1297,716l.317.329Z"
                transform="translate(-885.687 -480.56)"
                fill="#774d44"
            />
            <path
                id="Path_1401"
                data-name="Path 1401"
                d="M812,717l.317.329Z"
                transform="translate(-554.494 -481.231)"
                fill="#4e3b36"
            />
            <path
                id="Path_1402"
                data-name="Path 1402"
                d="M835,717l.317.329Z"
                transform="translate(-570.2 -481.231)"
                fill="#774d44"
            />
            <path
                id="Path_1403"
                data-name="Path 1403"
                d="M866,717l.317.329L866,717m3.171,0-1.9,2.3h.317Z"
                transform="translate(-591.369 -481.231)"
                fill="#4e3b36"
            />
            <path
                id="Path_1404"
                data-name="Path 1404"
                d="M875,718.208a3.535,3.535,0,0,1,3.806.329C877.684,717.141,876.275,716.859,875,718.208Z"
                transform="translate(-597.515 -481.453)"
                fill="#774d44"
            />
            <path
                id="Path_1405"
                data-name="Path 1405"
                d="M884,717l.634.658V717Z"
                transform="translate(-603.661 -481.231)"
                fill="#4e3b36"
            />
            <path
                id="Path_1406"
                data-name="Path 1406"
                d="M926,717l.317.329Z"
                transform="translate(-632.341 -481.231)"
                fill="#774d44"
            />
            <path
                id="Path_1407"
                data-name="Path 1407"
                d="M944,717v.329l1.586,1.973h.317L944,717m54.758.109.209.11Z"
                transform="translate(-644.633 -481.231)"
                fill="#4e3b36"
            />
            <path
                id="Path_1408"
                data-name="Path 1408"
                d="M1118,717l.317.329L1118,717m17.125,0,.317.329Z"
                transform="translate(-763.453 -481.231)"
                fill="#774d44"
            />
            <path
                id="Path_1409"
                data-name="Path 1409"
                d="M1173,717v.329l1.586.329L1173,717m39.006,0,.317.329Z"
                transform="translate(-801.011 -481.231)"
                fill="#4e3b36"
            />
            <path
                id="Path_1410"
                data-name="Path 1410"
                d="M829.22,718,827,722.6h.317Z"
                transform="translate(-564.737 -481.902)"
                fill="#774d44"
            />
            <path
                id="Path_1411"
                data-name="Path 1411"
                d="M865,718l.317.329Z"
                transform="translate(-590.686 -481.902)"
                fill="#4e3b36"
            />
            <path
                id="Path_1413"
                data-name="Path 1413"
                d="M927,718l.317.329L927,718m5.708,0,.317.329Z"
                transform="translate(-633.024 -481.902)"
                fill="#774d44"
            />
            <path
                id="Path_1414"
                data-name="Path 1414"
                d="M1113.317,718l-.317.658Z"
                transform="translate(-760.039 -481.902)"
                fill="#4e3b36"
            />
            <path
                id="Path_1415"
                data-name="Path 1415"
                d="M1115.67,718.109l.209.11-.209-.11M1134.8,718l.317.329Z"
                transform="translate(-761.862 -481.902)"
                fill="#774d44"
            />
            <path
                id="Path_1416"
                data-name="Path 1416"
                d="M979.512,718l.317.329-.317-.329M833,718.329l.317.329-.317-.329m9.831,0-.317.987Z"
                transform="translate(-568.834 -481.902)"
                fill="#4e3b36"
            />
            <path
                id="Path_1418"
                data-name="Path 1418"
                d="M780.727,719c1.53,3.846,3.31,6.86,2.537,11.18h.317c.994-3.485-.146-8.789-2.854-11.18m58.985,0,.317.329-.317-.329m19.979,0,.317.329-.317-.329m37.421,0,.317.329-.317-.329m-184.779.548.106.219Z"
                transform="translate(-486.434 -482.574)"
                fill="#774d44"
            />
            <path
                id="Path_1419"
                data-name="Path 1419"
                d="M779,720l.317.329Z"
                transform="translate(-531.959 -483.245)"
                fill="#31231e"
            />
            <path
                id="Path_1420"
                data-name="Path 1420"
                d="M813,720l.317.329Z"
                transform="translate(-555.176 -483.245)"
                fill="#4e3b36"
            />
            <path
                id="Path_1421"
                data-name="Path 1421"
                d="M873,720l.317.329Z"
                transform="translate(-596.149 -483.245)"
                fill="#774d44"
            />
            <path
                id="Path_1422"
                data-name="Path 1422"
                d="M887,720l.317.329Z"
                transform="translate(-605.709 -483.245)"
                fill="#4e3b36"
            />
            <path
                id="Path_1423"
                data-name="Path 1423"
                d="M946,720l.317.329Z"
                transform="translate(-645.999 -483.245)"
                fill="#774d44"
            />
            <path
                id="Path_1424"
                data-name="Path 1424"
                d="M1103,722.549l2.854-1.644C1104.614,720.631,1103.748,721.6,1103,722.549Z"
                transform="translate(-753.21 -483.82)"
                fill="#4e3b36"
            />
            <path
                id="Path_1425"
                data-name="Path 1425"
                d="M1112,720l.317.329L1112,720m20.93,0v.329h.951Z"
                transform="translate(-759.356 -483.245)"
                fill="#774d44"
            />
            <path
                id="Path_1426"
                data-name="Path 1426"
                d="M1181.67,720.109l.209.11-.209-.11m35.623-.109v1.315h.317Z"
                transform="translate(-806.932 -483.245)"
                fill="#4e3b36"
            />
            <path
                id="Path_1427"
                data-name="Path 1427"
                d="M708.951,721,708,722.973Z"
                transform="translate(-483.475 -483.916)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1428"
                data-name="Path 1428"
                d="M832,721l.317.329Z"
                transform="translate(-568.151 -483.916)"
                fill="#4e3b36"
            />
            <path
                id="Path_1429"
                data-name="Path 1429"
                d="M872,721l.317.329Z"
                transform="translate(-595.466 -483.916)"
                fill="#774d44"
            />
            <path
                id="Path_1430"
                data-name="Path 1430"
                d="M888,721l.317.329L888,721m12.685,0,.317.329Z"
                transform="translate(-606.392 -483.916)"
                fill="#4e3b36"
            />
            <path
                id="Path_1431"
                data-name="Path 1431"
                d="M947,721l.317.329L947,721m51.587.109.209.11-.209-.11m22.938-.109.317.329Z"
                transform="translate(-646.682 -483.916)"
                fill="#774d44"
            />
            <path
                id="Path_1432"
                data-name="Path 1432"
                d="M860.634,722,860,723.315Z"
                transform="translate(-587.272 -484.587)"
                fill="#4e3b36"
            />
            <path
                id="Path_1433"
                data-name="Path 1433"
                d="M871,722l.317.329L871,722m5.391,0,.317.329Z"
                transform="translate(-594.783 -484.587)"
                fill="#774d44"
            />
            <path
                id="Path_1434"
                data-name="Path 1434"
                d="M929,722l1.268,3.617h.317Z"
                transform="translate(-634.39 -484.587)"
                fill="#4e3b36"
            />
            <path
                id="Path_1435"
                data-name="Path 1435"
                d="M786.159,722l.317.329-.317-.329m50.74,0,.317.329L836.9,722m23.784,0,.317.329-.317-.329M711,722.329l.317.329Z"
                transform="translate(-485.523 -484.587)"
                fill="#774d44"
            />
            <path
                id="Path_1436"
                data-name="Path 1436"
                d="M830,723l.317.329L830,723m18.71,0,.634,2.3h.317Z"
                transform="translate(-566.785 -485.258)"
                fill="#4e3b36"
            />
            <path
                id="Path_1437"
                data-name="Path 1437"
                d="M1107,723l.317.329L1107,723m24.419,0,1.586,1.315v-.329Z"
                transform="translate(-755.941 -485.258)"
                fill="#774d44"
            />
            <path
                id="Path_1438"
                data-name="Path 1438"
                d="M861.318,723l.317.329-.317-.329M711,723.329l.317.329-.317-.329m37.421,0,.317.329Z"
                transform="translate(-485.523 -485.258)"
                fill="#4e3b36"
            />
            <path
                id="Path_1439"
                data-name="Path 1439"
                d="M870,724v2.631h.317L870,724m6.025,0,.317.329-.317-.329m19.028,0,.951.987v-.329l-.951-.658m49.472,0,.317.329Z"
                transform="translate(-594.1 -485.93)"
                fill="#774d44"
            />
            <path
                id="Path_1440"
                data-name="Path 1440"
                d="M1103.951,730.685c2.293-1.97,3.634-4.883,6.66-6.021,8.328-3.132,17.442,2.452,17.442,11.94l-1.269-.329-1.586-1.315c-1.167,9.523-8.746,12.107-16.808,9.536-2.255,2.955-4.129-1.619-5.074-3.617H1103c.406,1.842,1.747,4.726,3.495,5.568,1.091.526,2.359-.182,3.482-.276,3.206-.267,7.091-.008,10.148-1.1,1.316-.47,2.429-1.971,3.8-2.151,1.281-.169,1.183,1.046.958,1.9l1.269.329c4.23-6.739,2.826-15.686-3.806-20.162C1116.5,721.047,1106.5,723.823,1103.951,730.685Z"
                transform="translate(-753.21 -485.38)"
                fill="#4e3b36"
            />
            <path
                id="Path_1441"
                data-name="Path 1441"
                d="M1155.67,724.333l.209.11Z"
                transform="translate(-789.177 -486.153)"
                fill="#774d44"
            />
            <path
                id="Path_1442"
                data-name="Path 1442"
                d="M1186,724l.317.329Z"
                transform="translate(-809.888 -485.93)"
                fill="#4e3b36"
            />
            <path
                id="Path_1443"
                data-name="Path 1443"
                d="M710,725v1.973h.317Z"
                transform="translate(-484.84 -486.601)"
                fill="#774d44"
            />
            <path
                id="Path_1444"
                data-name="Path 1444"
                d="M773,725l.317.329Z"
                transform="translate(-527.862 -486.601)"
                fill="#4e3b36"
            />
            <path
                id="Path_1445"
                data-name="Path 1445"
                d="M778,725l.317.329Z"
                transform="translate(-531.276 -486.601)"
                fill="#31231e"
            />
            <path
                id="Path_1446"
                data-name="Path 1446"
                d="M828,725l.317.329Z"
                transform="translate(-565.42 -486.601)"
                fill="#4e3b36"
            />
            <path
                id="Path_1447"
                data-name="Path 1447"
                d="M890.333,725.667l.106.219Z"
                transform="translate(-607.985 -487.048)"
                fill="#774d44"
            />
            <path
                id="Path_1448"
                data-name="Path 1448"
                d="M950,725l.317.329Z"
                transform="translate(-648.73 -486.601)"
                fill="#4e3b36"
            />
            <path
                id="Path_1449"
                data-name="Path 1449"
                d="M1104,725l.317.329Z"
                transform="translate(-753.893 -486.601)"
                fill="#774d44"
            />
            <path
                id="Path_1451"
                data-name="Path 1451"
                d="M1157.67,725.333l.209.11Z"
                transform="translate(-790.543 -486.824)"
                fill="#774d44"
            />
            <path
                id="Path_1452"
                data-name="Path 1452"
                d="M941.165,725l.317.329-.317-.329M827,725.329v.987h.317l-.317-.987m10.148,0v.987h.317l-.317-.987m75.793.987,1.268-.658Z"
                transform="translate(-564.737 -486.601)"
                fill="#4e3b36"
            />
            <path
                id="Path_1453"
                data-name="Path 1453"
                d="M1102.67,726.109l.209.11-.209-.11m17.864-.109v.329h.951Z"
                transform="translate(-752.985 -487.272)"
                fill="#774d44"
            />
            <path
                id="Path_1454"
                data-name="Path 1454"
                d="M952,727l.317.329Z"
                transform="translate(-650.096 -487.943)"
                fill="#4e3b36"
            />
            <path
                id="Path_1455"
                data-name="Path 1455"
                d="M1100,727l.317.329L1100,727m19.874.109.209.11Z"
                transform="translate(-751.161 -487.943)"
                fill="#774d44"
            />
            <path
                id="Path_1456"
                data-name="Path 1456"
                d="M1189,727l.951.658v-.329L1189,727m10.465,0,.317.329-.317-.329m22.938.219.108.219Z"
                transform="translate(-811.937 -487.943)"
                fill="#4e3b36"
            />
            <path
                id="Path_1457"
                data-name="Path 1457"
                d="M709,728v1.315h.317Z"
                transform="translate(-484.158 -488.614)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1458"
                data-name="Path 1458"
                d="M952,728l.317.329L952,728m46.618,0,.317.329-.317-.329m20.613,0,1.9,1.644-1.9-1.644m7.928,0,.317.329Z"
                transform="translate(-650.096 -488.614)"
                fill="#774d44"
            />
            <path
                id="Path_1459"
                data-name="Path 1459"
                d="M855.951,729,855,731.959Z"
                transform="translate(-583.857 -489.285)"
                fill="#4e3b36"
            />
            <path
                id="Path_1460"
                data-name="Path 1460"
                d="M889.317,729l-.317.986Z"
                transform="translate(-607.075 -489.285)"
                fill="#774d44"
            />
            <path
                id="Path_1461"
                data-name="Path 1461"
                d="M953,729l.634.658V729H953m45.349,0-.317.986Z"
                transform="translate(-650.779 -489.285)"
                fill="#4e3b36"
            />
            <path
                id="Path_1462"
                data-name="Path 1462"
                d="M1097.67,729.109l.209.11-.209-.11m29.6-.109v.329l2.854,2.3Z"
                transform="translate(-749.57 -489.285)"
                fill="#774d44"
            />
            <path
                id="Path_1463"
                data-name="Path 1463"
                d="M1193,729l.317.329Z"
                transform="translate(-814.669 -489.285)"
                fill="#4e3b36"
            />
            <path
                id="Path_1464"
                data-name="Path 1464"
                d="M1294,729l.317.329Z"
                transform="translate(-883.639 -489.285)"
                fill="#774d44"
            />
            <path
                id="Path_1465"
                data-name="Path 1465"
                d="M710,731v13.153l.951-.329-.634-.986.634-3.288h1.9l.951,1.973.634,1.973.317,5.59,2.22,9.865,1.586,4.275c-.248,1.033-.209,2.11.951,2.3l-.634,3.617,1.268-.658.317,1.973-1.9-.658.317.658h-.317l-.634-.986h-.317l.317.658h-.317l-3.171-5.59c-1.261,0-1.986-4.934-2.22-6.248H711.9l1.9,10.851,1.9,2.631-.634-.329v.329l1.268.329c.969,1.708,4.38,3.609,5.517.916,1.045-2.475-.442-6.793-.443-9.466,0-2.554-.455-5.021-.607-7.563-.467-7.842-.125-20.962-9.541-23.676l.317-1.315Z"
                transform="translate(-484.84 -490.628)"
                fill="#4e3b36"
            />
            <path
                id="Path_1466"
                data-name="Path 1466"
                d="M953,730l.317.329Z"
                transform="translate(-650.779 -489.957)"
                fill="#774d44"
            />
            <path
                id="Path_1467"
                data-name="Path 1467"
                d="M942.475,730l.317.329-.317-.329m31.4,0-.317,1.644h.317V730m-148.2.438.211.11-.211-.11m20.4-.109.317.329Z"
                transform="translate(-563.826 -489.957)"
                fill="#4e3b36"
            />
            <path
                id="Path_1468"
                data-name="Path 1468"
                d="M954.333,731.219l.106.219-.106-.219M999.259,731l.317.329Z"
                transform="translate(-651.689 -490.628)"
                fill="#774d44"
            />
            <path
                id="Path_1469"
                data-name="Path 1469"
                d="M1195,731l.317.329Z"
                transform="translate(-816.034 -490.628)"
                fill="#4e3b36"
            />
            <path
                id="Path_1470"
                data-name="Path 1470"
                d="M894.2,731l-.317,3.288h.317V731m-185.2.329.317,3.946h.317Z"
                transform="translate(-484.158 -490.628)"
                fill="#774d44"
            />
            <path
                id="Path_1471"
                data-name="Path 1471"
                d="M824,732l.317.329L824,732m14.588,0,.951,1.315L838.588,732m6.025,0,.317.329-.317-.329m64.694,0-.317.986Z"
                transform="translate(-562.688 -491.299)"
                fill="#4e3b36"
            />
            <path
                id="Path_1472"
                data-name="Path 1472"
                d="M1094.67,732.333l.209.11Z"
                transform="translate(-747.522 -491.522)"
                fill="#774d44"
            />
            <path
                id="Path_1473"
                data-name="Path 1473"
                d="M1196,732l.317.329Z"
                transform="translate(-816.717 -491.299)"
                fill="#4e3b36"
            />
            <path
                id="Path_1474"
                data-name="Path 1474"
                d="M708,733v9.865h.317C708.532,739.939,709.139,735.737,708,733Z"
                transform="translate(-483.475 -491.97)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1475"
                data-name="Path 1475"
                d="M812.333,733.667l.106.219Z"
                transform="translate(-554.721 -492.418)"
                fill="#4e3b36"
            />
            <path
                id="Path_1476"
                data-name="Path 1476"
                d="M871,733l.317.329L871,733m5.391,0,.317.329Z"
                transform="translate(-594.783 -491.97)"
                fill="#774d44"
            />
            <path
                id="Path_1478"
                data-name="Path 1478"
                d="M1170,733l.317.329Z"
                transform="translate(-798.962 -491.97)"
                fill="#774d44"
            />
            <path
                id="Path_1479"
                data-name="Path 1479"
                d="M1197,733l.317.329Z"
                transform="translate(-817.4 -491.97)"
                fill="#4e3b36"
            />
            <path
                id="Path_1480"
                data-name="Path 1480"
                d="M777.333,734.667l.106.219Z"
                transform="translate(-530.82 -493.089)"
                fill="#31231e"
            />
            <path
                id="Path_1481"
                data-name="Path 1481"
                d="M823,734v1.973h.317Z"
                transform="translate(-562.005 -492.641)"
                fill="#4e3b36"
            />
            <path
                id="Path_1482"
                data-name="Path 1482"
                d="M872,734l.317.329Z"
                transform="translate(-595.466 -492.641)"
                fill="#774d44"
            />
            <path
                id="Path_1483"
                data-name="Path 1483"
                d="M888,734l.317.329Z"
                transform="translate(-606.392 -492.641)"
                fill="#4e3b36"
            />
            <path
                id="Path_1484"
                data-name="Path 1484"
                d="M955,734l.634,2.631h.317L955,734m43.763,0,.317.329-.317-.329m24.736,0,.634.658V734Z"
                transform="translate(-652.145 -492.641)"
                fill="#774d44"
            />
            <path
                id="Path_1485"
                data-name="Path 1485"
                d="M1198,734l.317.329Z"
                transform="translate(-818.083 -492.641)"
                fill="#4e3b36"
            />
            <path
                id="Path_1486"
                data-name="Path 1486"
                d="M873,735v.329l1.268.658L873,735m4.123,0,.317.329Z"
                transform="translate(-596.149 -493.312)"
                fill="#774d44"
            />
            <path
                id="Path_1487"
                data-name="Path 1487"
                d="M887,735l.317.329L887,735m21.882,0,.634.658V735h-.634m42.495,0-.951,2.3h.317Z"
                transform="translate(-605.709 -493.312)"
                fill="#4e3b36"
            />
            <path
                id="Path_1488"
                data-name="Path 1488"
                d="M1091.67,735.333l.209.11Z"
                transform="translate(-745.473 -493.536)"
                fill="#774d44"
            />
            <path
                id="Path_1489"
                data-name="Path 1489"
                d="M1125,735.329v.329h1.268l-1.268-.329m23.467-.329.317.329Z"
                transform="translate(-768.233 -493.312)"
                fill="#4e3b36"
            />
            <path
                id="Path_1490"
                data-name="Path 1490"
                d="M1293,735c.035,3.122,1.659,3.944,4.44,3.946v-.658C1294.487,738.409,1294.1,737.624,1293,735Z"
                transform="translate(-882.956 -493.312)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1491"
                data-name="Path 1491"
                d="M811,736l.317.329L811,736m19.979,0,.317.329Z"
                transform="translate(-553.811 -493.984)"
                fill="#4e3b36"
            />
            <path
                id="Path_1492"
                data-name="Path 1492"
                d="M884.317,736l-.317.658.317-.658m91.332,0,.317.329Z"
                transform="translate(-603.661 -493.984)"
                fill="#774d44"
            />
            <path
                id="Path_1493"
                data-name="Path 1493"
                d="M978.171,736.667l.108.219-.108-.219M875,736.776l.317.329-.317-.329m3.171,0,.317.329Z"
                transform="translate(-597.515 -494.431)"
                fill="#4e3b36"
            />
            <path
                id="Path_1494"
                data-name="Path 1494"
                d="M1090,737l.317.329Z"
                transform="translate(-744.333 -494.655)"
                fill="#774d44"
            />
            <path
                id="Path_1495"
                data-name="Path 1495"
                d="M1119,738v.329l1.268-.329Z"
                transform="translate(-764.136 -495.326)"
                fill="#4e3b36"
            />
            <path
                id="Path_1496"
                data-name="Path 1496"
                d="M1123,737v.329h.951Z"
                transform="translate(-766.867 -494.655)"
                fill="#774d44"
            />
            <path
                id="Path_1498"
                data-name="Path 1498"
                d="M1128,737v.329h.951Z"
                transform="translate(-770.282 -494.655)"
                fill="#774d44"
            />
            <path
                id="Path_1499"
                data-name="Path 1499"
                d="M1131,737v.329h.951Z"
                transform="translate(-772.331 -494.655)"
                fill="#4e3b36"
            />
            <path
                id="Path_1500"
                data-name="Path 1500"
                d="M1174,737l.951,1.315Z"
                transform="translate(-801.694 -494.655)"
                fill="#774d44"
            />
            <path
                id="Path_1501"
                data-name="Path 1501"
                d="M854,738v4.6h.317L854,738m7.294,0v.329h2.22Z"
                transform="translate(-583.174 -495.326)"
                fill="#4e3b36"
            />
            <path
                id="Path_1502"
                data-name="Path 1502"
                d="M1089,738l.317.329L1089,738m10.043.109.209.11-.209-.11m3.593-.109,1.268,2.3h.317l-1.586-2.3m21.565,0,1.268,1.644Z"
                transform="translate(-743.65 -495.326)"
                fill="#774d44"
            />
            <path
                id="Path_1503"
                data-name="Path 1503"
                d="M1222,738v.658l.634-.658H1222m21.986.219.108.219Z"
                transform="translate(-834.472 -495.326)"
                fill="#4e3b36"
            />
            <path
                id="Path_1504"
                data-name="Path 1504"
                d="M776,739l.317.329Z"
                transform="translate(-529.91 -495.997)"
                fill="#31231e"
            />
            <path
                id="Path_1505"
                data-name="Path 1505"
                d="M1088.33,739.219l.108.219-.108-.219m9.726-.219c-.974,1.835-1.386,3.461.317,4.932Z"
                transform="translate(-743.192 -495.997)"
                fill="#774d44"
            />
            <path
                id="Path_1507"
                data-name="Path 1507"
                d="M920.943,739l.317.329-.317-.329m21.247,0,.317.329-.317-.329M822,739.329l.317.329-.317-.329m93.869,0,.317.329-.317-.329m26.639,0,.317.329Z"
                transform="translate(-561.322 -495.997)"
                fill="#4e3b36"
            />
            <path
                id="Path_1508"
                data-name="Path 1508"
                d="M927.586,740l.317.329-.317-.329m-151.269.329-.317.987Z"
                transform="translate(-529.91 -496.668)"
                fill="#31231e"
            />
            <path
                id="Path_1509"
                data-name="Path 1509"
                d="M821,741l.317.329L821,741m43.552.219.106.219-.106-.219m50-.219v.658l.634-.658h-.634m6.025,0,.317.329Z"
                transform="translate(-560.64 -497.339)"
                fill="#4e3b36"
            />
            <path
                id="Path_1510"
                data-name="Path 1510"
                d="M1177,741l.634.987Z"
                transform="translate(-803.743 -497.339)"
                fill="#774d44"
            />
            <path
                id="Path_1511"
                data-name="Path 1511"
                d="M1203,741l.317.329L1203,741m28.224,0,.317.329Z"
                transform="translate(-821.497 -497.339)"
                fill="#4e3b36"
            />
            <path
                id="Path_1512"
                data-name="Path 1512"
                d="M1087,742l.317.329Z"
                transform="translate(-742.284 -498.011)"
                fill="#774d44"
            />
            <path
                id="Path_1513"
                data-name="Path 1513"
                d="M1136,742l.317.329L1136,742m26.639,0,.317.329Z"
                transform="translate(-775.745 -498.011)"
                fill="#4e3b36"
            />
            <path
                id="Path_1514"
                data-name="Path 1514"
                d="M1254,742l.317.329Z"
                transform="translate(-856.324 -498.011)"
                fill="#31231e"
            />
            <path
                id="Path_1515"
                data-name="Path 1515"
                d="M1064.237,742l.317.329-.317-.329M958,742.329l.317.329Z"
                transform="translate(-654.193 -498.011)"
                fill="#774d44"
            />
            <path
                id="Path_1516"
                data-name="Path 1516"
                d="M1086,743l.317.329Z"
                transform="translate(-741.601 -498.682)"
                fill="#4e3b36"
            />
            <path
                id="Path_1517"
                data-name="Path 1517"
                d="M1204,743l.634.986Z"
                transform="translate(-822.18 -498.682)"
                fill="#774d44"
            />
            <path
                id="Path_1518"
                data-name="Path 1518"
                d="M1205.33,743.667l.108.219Z"
                transform="translate(-823.088 -499.129)"
                fill="#4e3b36"
            />
            <path
                id="Path_1519"
                data-name="Path 1519"
                d="M1294,743l.317.329Z"
                transform="translate(-883.639 -498.682)"
                fill="#774d44"
            />
            <path
                id="Path_1520"
                data-name="Path 1520"
                d="M809,744l.317.329Z"
                transform="translate(-552.445 -499.353)"
                fill="#4e3b36"
            />
            <path
                id="Path_1521"
                data-name="Path 1521"
                d="M959,744l.317,2.3h.317Z"
                transform="translate(-654.876 -499.353)"
                fill="#774d44"
            />
            <path
                id="Path_1522"
                data-name="Path 1522"
                d="M960,744l.317.329L960,744m39.324,0-.951,2.3h.317Z"
                transform="translate(-655.559 -499.353)"
                fill="#4e3b36"
            />
            <path
                id="Path_1523"
                data-name="Path 1523"
                d="M1085,744l.317.329L1085,744m29.915.219.108.219Z"
                transform="translate(-740.918 -499.353)"
                fill="#774d44"
            />
            <path
                id="Path_1524"
                data-name="Path 1524"
                d="M1222,744l.317.329L1222,744m23.15,0,.317.329Z"
                transform="translate(-834.472 -499.353)"
                fill="#4e3b36"
            />
            <path
                id="Path_1525"
                data-name="Path 1525"
                d="M709.333,745.667l.106.219Z"
                transform="translate(-484.385 -500.472)"
                fill="#774d44"
            />
            <path
                id="Path_1526"
                data-name="Path 1526"
                d="M776,745l.317.329Z"
                transform="translate(-529.91 -500.024)"
                fill="#31231e"
            />
            <path
                id="Path_1527"
                data-name="Path 1527"
                d="M961.333,745.219l.106.219-.106-.219m55.709-.219v.986h.317l-.317-.986m21.986.219.108.219Z"
                transform="translate(-656.469 -500.024)"
                fill="#4e3b36"
            />
            <path
                id="Path_1528"
                data-name="Path 1528"
                d="M960.709,745l.317.329-.317-.329M805,745.329l.317.329-.317-.329m88.478,0,.317.329-.317-.329m30.549.219.108.219Z"
                transform="translate(-549.714 -500.024)"
                fill="#774d44"
            />
            <path
                id="Path_1529"
                data-name="Path 1529"
                d="M1220,746l.317.329Z"
                transform="translate(-833.106 -500.695)"
                fill="#4e3b36"
            />
            <path
                id="Path_1530"
                data-name="Path 1530"
                d="M1289.488,746l.317.329-.317-.329M1286,759.811c3.59-2.017,6.222-7.923,8.245-11.509l-.634-.329.634-.658L1292.977,746C1287.408,748.524,1286.45,754.2,1286,759.811Z"
                transform="translate(-878.176 -500.695)"
                fill="#774d44"
            />
            <path
                id="Path_1531"
                data-name="Path 1531"
                d="M1308,746v.329l3.488,1.973A4.343,4.343,0,0,0,1308,746Z"
                transform="translate(-893.199 -500.695)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1532"
                data-name="Path 1532"
                d="M777,747l.317.329Z"
                transform="translate(-530.593 -501.366)"
                fill="#31231e"
            />
            <path
                id="Path_1533"
                data-name="Path 1533"
                d="M1083,747l.317.329Z"
                transform="translate(-739.552 -501.366)"
                fill="#774d44"
            />
            <path
                id="Path_1534"
                data-name="Path 1534"
                d="M1105,747v.987h.317Z"
                transform="translate(-754.576 -501.366)"
                fill="#4e3b36"
            />
            <path
                id="Path_1535"
                data-name="Path 1535"
                d="M1206.33,747.667l.108.219Z"
                transform="translate(-823.771 -501.814)"
                fill="#774d44"
            />
            <path
                id="Path_1536"
                data-name="Path 1536"
                d="M1298,747l.317.329Z"
                transform="translate(-886.37 -501.366)"
                fill="#4e3b36"
            />
            <path
                id="Path_1537"
                data-name="Path 1537"
                d="M1299,747l.317.329Z"
                transform="translate(-887.053 -501.366)"
                fill="#774d44"
            />
            <path
                id="Path_1538"
                data-name="Path 1538"
                d="M1289.181,747c-.565,1.836-3.067,1.983-3.9,3.687-1.852,3.789-.856,9.622-.856,13.741,3.485-1.937,6.06-12.16,11.417-10.194l.634-1.644c-.942-2.345-1.979-4.722-4.44-5.59l.951.987-.634.658.634.329v.329l-8.245,11.18c1.221-5.327.91-9.835,6.025-13.153Z"
                transform="translate(-876.917 -501.366)"
                fill="#4e3b36"
            />
            <path
                id="Path_1539"
                data-name="Path 1539"
                d="M900.122,747.333l.209.11-.209-.11M709,747.552v2.3h.317l-.317-2.3m118.393.219.108.219-.108-.219m17.02-.219-.317.987.317-.987m14.375.219.108.219-.108-.219m41.756-.219.317.329Z"
                transform="translate(-484.158 -501.59)"
                fill="#774d44"
            />
            <path
                id="Path_1540"
                data-name="Path 1540"
                d="M961,749v1.644h.317L961,749m78.013,0,.634,1.315h.317Z"
                transform="translate(-656.242 -502.709)"
                fill="#4e3b36"
            />
            <path
                id="Path_1541"
                data-name="Path 1541"
                d="M1314,749l.317.329Z"
                transform="translate(-897.296 -502.709)"
                fill="#774d44"
            />
            <path
                id="Path_1542"
                data-name="Path 1542"
                d="M1103.317,750l-.317,3.288h.317V750m10.148,0,.317.329Z"
                transform="translate(-753.21 -503.38)"
                fill="#4e3b36"
            />
            <path
                id="Path_1543"
                data-name="Path 1543"
                d="M1182.33,750.219l.108.219-.108-.219m7.823-.219.317.329Z"
                transform="translate(-807.382 -503.38)"
                fill="#774d44"
            />
            <path
                id="Path_1544"
                data-name="Path 1544"
                d="M1309,750l.317.329Z"
                transform="translate(-893.882 -503.38)"
                fill="#4e3b36"
            />
            <path
                id="Path_1545"
                data-name="Path 1545"
                d="M1155.208,750l.317.329-.317-.329m-74.208.329.317.329Z"
                transform="translate(-738.187 -503.38)"
                fill="#774d44"
            />
            <path
                id="Path_1546"
                data-name="Path 1546"
                d="M1116,751v.658h.634L1116,751m6.025,0,.317.329Z"
                transform="translate(-762.087 -504.051)"
                fill="#4e3b36"
            />
            <path
                id="Path_1547"
                data-name="Path 1547"
                d="M1208,751l.317.329L1208,751m34.25,0,.317.329Z"
                transform="translate(-824.912 -504.051)"
                fill="#774d44"
            />
            <path
                id="Path_1548"
                data-name="Path 1548"
                d="M806,752l.317.329L806,752m15.539,0,.317,1.973h.317L821.539,752m71.036,0-.317,1.973h.317Z"
                transform="translate(-550.396 -504.722)"
                fill="#4e3b36"
            />
            <path
                id="Path_1549"
                data-name="Path 1549"
                d="M1079.317,752l.317.329-.317-.329m17.125,0-.317.987h.317V752m58.034,0,.317.329-.317-.329m-75.476.329.317.329Z"
                transform="translate(-736.821 -504.722)"
                fill="#774d44"
            />
            <path
                id="Path_1550"
                data-name="Path 1550"
                d="M1118,753l.317.329L1118,753m5.074,0,.317.329Z"
                transform="translate(-763.453 -505.394)"
                fill="#4e3b36"
            />
            <path
                id="Path_1551"
                data-name="Path 1551"
                d="M1209,753l.634,1.644h.317L1209,753m34.567,0,.634.987Z"
                transform="translate(-825.595 -505.394)"
                fill="#774d44"
            />
            <path
                id="Path_1552"
                data-name="Path 1552"
                d="M1119,754l.317.329L1119,754m28.858,0,.317.329Z"
                transform="translate(-764.136 -506.065)"
                fill="#4e3b36"
            />
            <path
                id="Path_1553"
                data-name="Path 1553"
                d="M1319,754l.317.329Z"
                transform="translate(-900.711 -506.065)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1554"
                data-name="Path 1554"
                d="M710,755v.987h.317Z"
                transform="translate(-484.84 -506.736)"
                fill="#774d44"
            />
            <path
                id="Path_1555"
                data-name="Path 1555"
                d="M1120,755l.317.329Z"
                transform="translate(-764.819 -506.736)"
                fill="#4e3b36"
            />
            <path
                id="Path_1556"
                data-name="Path 1556"
                d="M1121.67,755.333l.209.11-.209-.11m2.854,0,.209.11Z"
                transform="translate(-765.959 -506.959)"
                fill="#774d44"
            />
            <path
                id="Path_1557"
                data-name="Path 1557"
                d="M1132,755l.317.329L1132,755m25.053,0,.317.329Z"
                transform="translate(-773.013 -506.736)"
                fill="#4e3b36"
            />
            <path
                id="Path_1558"
                data-name="Path 1558"
                d="M1320,755l.951,2.96h.317Z"
                transform="translate(-901.393 -506.736)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1559"
                data-name="Path 1559"
                d="M1125,756l.634.658Z"
                transform="translate(-768.233 -507.407)"
                fill="#4e3b36"
            />
            <path
                id="Path_1560"
                data-name="Path 1560"
                d="M1126.67,756.333l.209.11Z"
                transform="translate(-769.374 -507.631)"
                fill="#774d44"
            />
            <path
                id="Path_1561"
                data-name="Path 1561"
                d="M1128,756l.317.329Z"
                transform="translate(-770.282 -507.407)"
                fill="#4e3b36"
            />
            <path
                id="Path_1562"
                data-name="Path 1562"
                d="M1319,756l.317.329Z"
                transform="translate(-900.711 -507.407)"
                fill="#31231e"
            />
            <path
                id="Path_1563"
                data-name="Path 1563"
                d="M710.951,757l-.634,3.288.634.986L710,761.6l1.028,5.78.557,10h.317v-1.644h.317c.171,1.451.741,6.036,2.22,6.248.144,2.03,1.915,4.427,3.488,5.59l-.317-.658h.317l.951.987-.317-.658h.317l1.586.658-.317-1.973-1.268.658.634-3.617-.951-.329v-1.973c-1.024-1.125-1.2-3.76-1.667-5.261a71.21,71.21,0,0,1-3.09-16.441L712.854,757Z"
                transform="translate(-484.84 -508.078)"
                fill="#774d44"
            />
            <path
                id="Path_1564"
                data-name="Path 1564"
                d="M1212.33,757.667l.108.219Z"
                transform="translate(-827.868 -508.526)"
                fill="#4e3b36"
            />
            <path
                id="Path_1565"
                data-name="Path 1565"
                d="M903.1,757.667l.108.219-.108-.219M709.333,758l.106.219-.106-.219m116.914-.219-.634,1.644Z"
                transform="translate(-484.385 -508.526)"
                fill="#774d44"
            />
            <path
                id="Path_1566"
                data-name="Path 1566"
                d="M983.216,758l-.317.658.317-.658M857,758.329c.589,3.142,5.206,3.557,7.928,3.617v-.329c-3.081-.567-5.74-.96-7.928-3.288m142.707,0,.317.329-.317-.329m-73.044.438.209.11-.209-.11m8.033-.109v4.932h.317l-.317-4.932m35.2,0,.317.329Z"
                transform="translate(-585.223 -508.749)"
                fill="#4e3b36"
            />
            <path
                id="Path_1567"
                data-name="Path 1567"
                d="M1321,760l.317.329Z"
                transform="translate(-902.076 -510.092)"
                fill="#774d44"
            />
            <path
                id="Path_1568"
                data-name="Path 1568"
                d="M1075,761v.986h.317Z"
                transform="translate(-734.089 -510.763)"
                fill="#4e3b36"
            />
            <path
                id="Path_1569"
                data-name="Path 1569"
                d="M709,762l.317.329Z"
                transform="translate(-484.158 -511.434)"
                fill="#31231e"
            />
            <path
                id="Path_1570"
                data-name="Path 1570"
                d="M1213.33,762.219l.108.219-.108-.219m12.9-.219.317.329Z"
                transform="translate(-828.551 -511.434)"
                fill="#4e3b36"
            />
            <path
                id="Path_1571"
                data-name="Path 1571"
                d="M1153.33,762l.317.329-.317-.329m-78.33.658v.987h.317Z"
                transform="translate(-734.089 -511.434)"
                fill="#774d44"
            />
            <path
                id="Path_1572"
                data-name="Path 1572"
                d="M1214,764l.317.329Z"
                transform="translate(-829.009 -512.776)"
                fill="#4e3b36"
            />
            <path
                id="Path_1573"
                data-name="Path 1573"
                d="M1323,764v1.973h.317Z"
                transform="translate(-903.442 -512.776)"
                fill="#774d44"
            />
            <path
                id="Path_1574"
                data-name="Path 1574"
                d="M1215,765v1.644h.317Z"
                transform="translate(-829.692 -513.448)"
                fill="#4e3b36"
            />
            <path
                id="Path_1575"
                data-name="Path 1575"
                d="M1324,765l.317.329Z"
                transform="translate(-904.125 -513.448)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1576"
                data-name="Path 1576"
                d="M1251,766l.317.329Z"
                transform="translate(-854.275 -514.119)"
                fill="#31231e"
            />
            <path
                id="Path_1577"
                data-name="Path 1577"
                d="M1321.317,767l-.317,4.6C1322.43,771.284,1322.062,768.043,1321.317,767Z"
                transform="translate(-902.076 -514.79)"
                fill="#4e3b36"
            />
            <path
                id="Path_1578"
                data-name="Path 1578"
                d="M709.333,768.667l.106.219Z"
                transform="translate(-484.385 -515.909)"
                fill="#774d44"
            />
            <path
                id="Path_1579"
                data-name="Path 1579"
                d="M773,769l.317.329Z"
                transform="translate(-527.862 -516.132)"
                fill="#31231e"
            />
            <path
                id="Path_1580"
                data-name="Path 1580"
                d="M904.033,769v1.644h.317L904.033,769M709,769.329v2.959h.317Z"
                transform="translate(-484.158 -516.132)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1581"
                data-name="Path 1581"
                d="M883,770v.329h1.586L883,770m1.586.329v.329l2.537.329v-.329Z"
                transform="translate(-602.978 -516.803)"
                fill="#4e3b36"
            />
            <path
                id="Path_1582"
                data-name="Path 1582"
                d="M1071,771v1.973h.317Z"
                transform="translate(-731.358 -517.475)"
                fill="#31231e"
            />
            <path
                id="Path_1583"
                data-name="Path 1583"
                d="M710,772a48.8,48.8,0,0,0,1.586,13.482h.317A43.1,43.1,0,0,0,710.634,772H710m30.127,0,.317.329-.317-.329m29.176.329v.329l3.488-.329H769.3M882.517,772l.317.329Z"
                transform="translate(-484.84 -518.146)"
                fill="#4e3b36"
            />
            <path
                id="Path_1584"
                data-name="Path 1584"
                d="M1181,773l.317.329Z"
                transform="translate(-806.474 -518.817)"
                fill="#31231e"
            />
            <path
                id="Path_1585"
                data-name="Path 1585"
                d="M805.317,774l-.317.658Z"
                transform="translate(-549.714 -519.488)"
                fill="#4e3b36"
            />
            <path
                id="Path_1587"
                data-name="Path 1587"
                d="M914.641,774v1.315h.317L914.641,774M725,774.329l.317.329Z"
                transform="translate(-495.084 -519.488)"
                fill="#774d44"
            />
            <path
                id="Path_1588"
                data-name="Path 1588"
                d="M769,775l.317.329Z"
                transform="translate(-525.13 -520.159)"
                fill="#4e3b36"
            />
            <path
                id="Path_1589"
                data-name="Path 1589"
                d="M726,778l.317.329Z"
                transform="translate(-495.766 -522.173)"
                fill="#774d44"
            />
            <path
                id="Path_1590"
                data-name="Path 1590"
                d="M1324,778v1.644h.317Z"
                transform="translate(-904.125 -522.173)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1591"
                data-name="Path 1591"
                d="M709,779l.317.329Z"
                transform="translate(-484.158 -522.844)"
                fill="#774d44"
            />
            <path
                id="Path_1592"
                data-name="Path 1592"
                d="M709,780v.987h.317Z"
                transform="translate(-484.158 -523.515)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1593"
                data-name="Path 1593"
                d="M1274,780l.317.329Z"
                transform="translate(-869.981 -523.515)"
                fill="#4e3b36"
            />
            <path
                id="Path_1594"
                data-name="Path 1594"
                d="M710,782v.987h.317Z"
                transform="translate(-484.84 -524.858)"
                fill="#31231e"
            />
            <path
                id="Path_1595"
                data-name="Path 1595"
                d="M1270.873,782l.317.329-.317-.329m13.319,1.315c-3.178,0-5.851,3.444-6.942,6.26-2.711,7.01-3.806,14.4-5.5,21.691-.479,2.056-2.937,8.246-1.319,9.954,2.321,2.445,5.594-2.025,7.1-3.378l-1.268,1.973a3.607,3.607,0,0,0,1.586-3.617c1.287-.181,1.722-2.637,2.2-3.81,1.386-3.384,3.859-9.605,3.5-13.289,1.027-.174.859-2.014,1.183-2.959.954-2.788,2.267-7.612,1.354-10.522C1288.21,784.067,1285.882,780.63,1284.192,783.315Z"
                transform="translate(-867.171 -524.858)"
                fill="#4e3b36"
            />
            <path
                id="Path_1596"
                data-name="Path 1596"
                d="M709.333,783.667l.106.219Z"
                transform="translate(-484.385 -525.976)"
                fill="#774d44"
            />
            <path
                id="Path_1597"
                data-name="Path 1597"
                d="M709,785l.317,1.973h.317Z"
                transform="translate(-484.158 -526.871)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1598"
                data-name="Path 1598"
                d="M806.333,785.667l.106.219Z"
                transform="translate(-550.624 -527.319)"
                fill="#4e3b36"
            />
            <path
                id="Path_1599"
                data-name="Path 1599"
                d="M1324,785v1.973h.317Z"
                transform="translate(-904.125 -526.871)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1600"
                data-name="Path 1600"
                d="M710.333,786.667l.106.219-.106-.219m83.933.109.317.329Z"
                transform="translate(-485.068 -527.99)"
                fill="#774d44"
            />
            <path
                id="Path_1601"
                data-name="Path 1601"
                d="M768,788l.317.329Z"
                transform="translate(-524.447 -528.885)"
                fill="#31231e"
            />
            <path
                id="Path_1602"
                data-name="Path 1602"
                d="M969,788l.317.329Z"
                transform="translate(-661.705 -528.885)"
                fill="#4e3b36"
            />
            <path
                id="Path_1603"
                data-name="Path 1603"
                d="M711.333,790.667l.106.219Z"
                transform="translate(-485.751 -530.675)"
                fill="#774d44"
            />
            <path
                id="Path_1604"
                data-name="Path 1604"
                d="M770,790l.317.329Z"
                transform="translate(-525.813 -530.227)"
                fill="#31231e"
            />
            <path
                id="Path_1605"
                data-name="Path 1605"
                d="M1323,791l.317.329Z"
                transform="translate(-903.442 -530.898)"
                fill="#774d44"
            />
            <path
                id="Path_1606"
                data-name="Path 1606"
                d="M711,792l.951,7.234h.317Z"
                transform="translate(-485.523 -531.569)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1607"
                data-name="Path 1607"
                d="M770,792l.317.329Z"
                transform="translate(-525.813 -531.569)"
                fill="#31231e"
            />
            <path
                id="Path_1608"
                data-name="Path 1608"
                d="M805,792l.317.329L805,792m148.415,0,.317.329Z"
                transform="translate(-549.714 -531.569)"
                fill="#4e3b36"
            />
            <path
                id="Path_1609"
                data-name="Path 1609"
                d="M1322.317,792l-.317,3.288h.317Z"
                transform="translate(-902.759 -531.569)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1610"
                data-name="Path 1610"
                d="M1321,793l.317.329Z"
                transform="translate(-902.076 -532.24)"
                fill="#31231e"
            />
            <path
                id="Path_1611"
                data-name="Path 1611"
                d="M916.373,793v.987h.317l-.317-.987M728,793.658l.317.329Z"
                transform="translate(-497.132 -532.24)"
                fill="#774d44"
            />
            <path
                id="Path_1612"
                data-name="Path 1612"
                d="M770.667,795.333l.211.11Z"
                transform="translate(-526.268 -533.806)"
                fill="#31231e"
            />
            <path
                id="Path_1613"
                data-name="Path 1613"
                d="M805,796l.317.329L805,796m148.1,0-1.6,9.207.647,2.959L953.1,796m-65.011.329.317.329-.317-.329m-3.805.329.317.329-.317-.329m3.171,0,.317.329Z"
                transform="translate(-549.714 -534.254)"
                fill="#4e3b36"
            />
            <path
                id="Path_1614"
                data-name="Path 1614"
                d="M768.667,799.333l.211.11Z"
                transform="translate(-524.903 -536.491)"
                fill="#31231e"
            />
            <path
                id="Path_1615"
                data-name="Path 1615"
                d="M712.333,800.667l.106.219Z"
                transform="translate(-486.434 -537.386)"
                fill="#774d44"
            />
            <path
                id="Path_1616"
                data-name="Path 1616"
                d="M802.634,800,802,801.315h.317l.317-1.315m81.184,0,.317.329Z"
                transform="translate(-547.665 -536.939)"
                fill="#4e3b36"
            />
            <path
                id="Path_1617"
                data-name="Path 1617"
                d="M1321.33,801.667l.108.219Z"
                transform="translate(-902.302 -538.057)"
                fill="#774d44"
            />
            <path
                id="Path_1618"
                data-name="Path 1618"
                d="M1321,803v3.288h.317Z"
                transform="translate(-902.076 -538.952)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1619"
                data-name="Path 1619"
                d="M712.333,806.667l.106.219Z"
                transform="translate(-486.434 -541.413)"
                fill="#774d44"
            />
            <path
                id="Path_1620"
                data-name="Path 1620"
                d="M800,808l.317.329Z"
                transform="translate(-546.299 -542.308)"
                fill="#4e3b36"
            />
            <path
                id="Path_1621"
                data-name="Path 1621"
                d="M713,809l.317.329L713,809m190.276,0-3.171,5.261-1.586,7.234h-.634l-2.854,7.234-.634,3.617-.951.329V833l2.22.658,1.269-.987-.317-1.315.951.329c0-1.1,1.862-3.359,2.378-4.6,1.529-3.681,1.668-7.7,3.067-11.235.606-1.536,1.541-5.583.263-6.85m-189.853.548.106.219Z"
                transform="translate(-486.889 -542.979)"
                fill="#774d44"
            />
            <path
                id="Path_1622"
                data-name="Path 1622"
                d="M1319,810v1.644h.317l.317-1.644Z"
                transform="translate(-900.711 -543.65)"
                fill="#31231e"
            />
            <path
                id="Path_1623"
                data-name="Path 1623"
                d="M1320,812l.317.329Z"
                transform="translate(-901.393 -544.993)"
                fill="#4e3b36"
            />
            <path
                id="Path_1624"
                data-name="Path 1624"
                d="M1320,813l.317.329Z"
                transform="translate(-901.393 -545.664)"
                fill="#774d44"
            />
            <path
                id="Path_1625"
                data-name="Path 1625"
                d="M1318.634,814l-.634,2.959h.317Z"
                transform="translate(-900.028 -546.335)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1626"
                data-name="Path 1626"
                d="M1319,815l.317.329Z"
                transform="translate(-900.711 -547.006)"
                fill="#774d44"
            />
            <path
                id="Path_1627"
                data-name="Path 1627"
                d="M714.333,817.667l.106.219-.106-.219m.211.438.317.329Z"
                transform="translate(-487.799 -548.796)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1628"
                data-name="Path 1628"
                d="M715.333,820.667l.106.219Z"
                transform="translate(-488.482 -550.81)"
                fill="#774d44"
            />
            <path
                id="Path_1629"
                data-name="Path 1629"
                d="M714,821l.634,2.631h.317Z"
                transform="translate(-487.572 -551.033)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1630"
                data-name="Path 1630"
                d="M793,821l.317.329L793,821m166.491,0,.317.329Z"
                transform="translate(-541.519 -551.033)"
                fill="#774d44"
            />
            <path
                id="Path_1631"
                data-name="Path 1631"
                d="M1316,822l.317.329Z"
                transform="translate(-898.662 -551.704)"
                fill="#31231e"
            />
            <path
                id="Path_1632"
                data-name="Path 1632"
                d="M905.91,823l-.317.658.317-.658M715,823.329l.317.329Z"
                transform="translate(-488.255 -552.376)"
                fill="#774d44"
            />
            <path
                id="Path_1633"
                data-name="Path 1633"
                d="M1317,824l.317.329Z"
                transform="translate(-899.345 -553.047)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1634"
                data-name="Path 1634"
                d="M1218.67,825.333l.209.11Z"
                transform="translate(-832.198 -553.942)"
                fill="#4e3b36"
            />
            <path
                id="Path_1635"
                data-name="Path 1635"
                d="M1316,825v1.644h.317Z"
                transform="translate(-898.662 -553.718)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1636"
                data-name="Path 1636"
                d="M716,826l.317.329Z"
                transform="translate(-488.938 -554.389)"
                fill="#774d44"
            />
            <path
                id="Path_1637"
                data-name="Path 1637"
                d="M794,826l.317.329L794,826m161.734,0,.317.329Z"
                transform="translate(-542.202 -554.389)"
                fill="#4e3b36"
            />
            <path
                id="Path_1638"
                data-name="Path 1638"
                d="M717,827l.317.329Z"
                transform="translate(-489.621 -555.06)"
                fill="#31231e"
            />
            <path
                id="Path_1639"
                data-name="Path 1639"
                d="M1038,827l.317.329L1038,827m2.854,0,.634.658-.634-.658m54.229,0,.317.329Z"
                transform="translate(-708.823 -555.06)"
                fill="#4e3b36"
            />
            <path
                id="Path_1640"
                data-name="Path 1640"
                d="M717,829l.317.329Z"
                transform="translate(-489.621 -556.403)"
                fill="#774d44"
            />
            <path
                id="Path_1641"
                data-name="Path 1641"
                d="M717,830v2.3h.317Z"
                transform="translate(-489.621 -557.074)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1642"
                data-name="Path 1642"
                d="M737,830l.317.329L737,830m183.4.219.108.219Z"
                transform="translate(-503.278 -557.074)"
                fill="#774d44"
            />
            <path
                id="Path_1643"
                data-name="Path 1643"
                d="M1034,831l.317.329L1034,831m58.456.548.108.219Z"
                transform="translate(-706.092 -557.745)"
                fill="#4e3b36"
            />
            <path
                id="Path_1644"
                data-name="Path 1644"
                d="M1315,832v.986h.317Z"
                transform="translate(-897.979 -558.416)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1645"
                data-name="Path 1645"
                d="M1267,834l.317.329Z"
                transform="translate(-865.201 -559.759)"
                fill="#4e3b36"
            />
            <path
                id="Path_1646"
                data-name="Path 1646"
                d="M1313.33,834.667l.108.219Z"
                transform="translate(-896.839 -560.206)"
                fill="#31231e"
            />
            <path
                id="Path_1647"
                data-name="Path 1647"
                d="M1264.317,835v3.617l-.317,1.315h.317C1264.685,838.352,1265.237,836.42,1264.317,835Z"
                transform="translate(-863.153 -560.43)"
                fill="#4e3b36"
            />
            <path
                id="Path_1648"
                data-name="Path 1648"
                d="M1314,835l.317.329Z"
                transform="translate(-897.296 -560.43)"
                fill="#774d44"
            />
            <path
                id="Path_1649"
                data-name="Path 1649"
                d="M719,836l.317.329Z"
                transform="translate(-490.986 -561.101)"
                fill="#31231e"
            />
            <path
                id="Path_1650"
                data-name="Path 1650"
                d="M1314,836l.317.329Z"
                transform="translate(-897.296 -561.101)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1651"
                data-name="Path 1651"
                d="M718,837l.634.658L718,837m188.69,0-.634,1.644Z"
                transform="translate(-490.303 -561.772)"
                fill="#774d44"
            />
            <path
                id="Path_1652"
                data-name="Path 1652"
                d="M718,838l.317.329L718,838m.423.548.106.219Z"
                transform="translate(-490.303 -562.443)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1653"
                data-name="Path 1653"
                d="M740,839l.317.329Z"
                transform="translate(-505.327 -563.114)"
                fill="#774d44"
            />
            <path
                id="Path_1654"
                data-name="Path 1654"
                d="M1310.951,839l-.951,3.946h.317Z"
                transform="translate(-894.565 -563.114)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1655"
                data-name="Path 1655"
                d="M720,840l.317,1.973h.317Z"
                transform="translate(-491.669 -563.786)"
                fill="#774d44"
            />
            <path
                id="Path_1656"
                data-name="Path 1656"
                d="M1037,840l.317.329L1037,840m58.351.658.317.329Z"
                transform="translate(-708.14 -563.786)"
                fill="#4e3b36"
            />
            <path
                id="Path_1657"
                data-name="Path 1657"
                d="M720,844l.951,2.631h.317Z"
                transform="translate(-491.669 -566.47)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1658"
                data-name="Path 1658"
                d="M722,845l.317.329Z"
                transform="translate(-493.035 -567.141)"
                fill="#31231e"
            />
            <path
                id="Path_1659"
                data-name="Path 1659"
                d="M983,845l.317.329L983,845m75.476.658.951-.658Z"
                transform="translate(-671.265 -567.141)"
                fill="#4e3b36"
            />
            <path
                id="Path_1660"
                data-name="Path 1660"
                d="M1311.33,845.667l.108.219Z"
                transform="translate(-895.473 -567.589)"
                fill="#774d44"
            />
            <path
                id="Path_1661"
                data-name="Path 1661"
                d="M723,846l.634.986Z"
                transform="translate(-493.718 -567.813)"
                fill="#31231e"
            />
            <path
                id="Path_1662"
                data-name="Path 1662"
                d="M722,847l.317.329Z"
                transform="translate(-493.035 -568.484)"
                fill="#774d44"
            />
            <path
                id="Path_1663"
                data-name="Path 1663"
                d="M793,847l.317.329Z"
                transform="translate(-541.519 -568.484)"
                fill="#4e3b36"
            />
            <path
                id="Path_1664"
                data-name="Path 1664"
                d="M909.38,847l.317.329L909.38,847m-186.047.548.106.219Z"
                transform="translate(-493.945 -568.484)"
                fill="#774d44"
            />
            <path
                id="Path_1665"
                data-name="Path 1665"
                d="M739,848l.317.329Z"
                transform="translate(-504.644 -569.155)"
                fill="#4e3b36"
            />
            <path
                id="Path_1666"
                data-name="Path 1666"
                d="M1309,849v.987h.317Z"
                transform="translate(-893.882 -569.826)"
                fill="#774d44"
            />
            <path
                id="Path_1667"
                data-name="Path 1667"
                d="M725.333,850.667l.106.219Z"
                transform="translate(-495.311 -570.945)"
                fill="#31231e"
            />
            <path
                id="Path_1668"
                data-name="Path 1668"
                d="M1261.634,851l-.634,3.288h.317Z"
                transform="translate(-861.104 -571.169)"
                fill="#4e3b36"
            />
            <path
                id="Path_1669"
                data-name="Path 1669"
                d="M724,852a6.043,6.043,0,0,0,4.123,4.6v-.329Z"
                transform="translate(-494.401 -571.84)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1670"
                data-name="Path 1670"
                d="M740,852v.329h.951Z"
                transform="translate(-505.327 -571.84)"
                fill="#774d44"
            />
            <path
                id="Path_1671"
                data-name="Path 1671"
                d="M1308.317,852l-.317,1.644h.317Z"
                transform="translate(-893.199 -571.84)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1672"
                data-name="Path 1672"
                d="M725,853l.317.329Z"
                transform="translate(-495.084 -572.511)"
                fill="#774d44"
            />
            <path
                id="Path_1673"
                data-name="Path 1673"
                d="M726,853l.634.658V853Z"
                transform="translate(-495.766 -572.511)"
                fill="#31231e"
            />
            <path
                id="Path_1674"
                data-name="Path 1674"
                d="M1308,853l.317.329Z"
                transform="translate(-893.199 -572.511)"
                fill="#774d44"
            />
            <path
                id="Path_1675"
                data-name="Path 1675"
                d="M770.317,854l-.317.987h.317Z"
                transform="translate(-525.813 -573.182)"
                fill="#31231e"
            />
            <path
                id="Path_1676"
                data-name="Path 1676"
                d="M726.333,855.667l.106.219Z"
                transform="translate(-495.994 -574.301)"
                fill="#774d44"
            />
            <path
                id="Path_1677"
                data-name="Path 1677"
                d="M1224,856l.634.987Z"
                transform="translate(-835.838 -574.524)"
                fill="#4e3b36"
            />
            <path
                id="Path_1678"
                data-name="Path 1678"
                d="M727,857l2.537,2.3v-.329L727,857m183.933,0-.634,1.973h.317Z"
                transform="translate(-496.449 -575.196)"
                fill="#774d44"
            />
            <path
                id="Path_1679"
                data-name="Path 1679"
                d="M728,858l.317.329Z"
                transform="translate(-497.132 -575.867)"
                fill="#4e3b36"
            />
            <path
                id="Path_1680"
                data-name="Path 1680"
                d="M771,858l.317.329Z"
                transform="translate(-526.496 -575.867)"
                fill="#31231e"
            />
            <path
                id="Path_1681"
                data-name="Path 1681"
                d="M729,859l.317.329Z"
                transform="translate(-497.815 -576.538)"
                fill="#4e3b36"
            />
            <path
                id="Path_1682"
                data-name="Path 1682"
                d="M1307,859l.317.329Z"
                transform="translate(-892.516 -576.538)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1683"
                data-name="Path 1683"
                d="M730,860l.317.329Z"
                transform="translate(-498.498 -577.209)"
                fill="#4e3b36"
            />
            <path
                id="Path_1684"
                data-name="Path 1684"
                d="M1306,860v.986h.317Z"
                transform="translate(-891.833 -577.209)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1685"
                data-name="Path 1685"
                d="M732,861l.317.329Z"
                transform="translate(-499.864 -577.88)"
                fill="#4e3b36"
            />
            <path
                id="Path_1686"
                data-name="Path 1686"
                d="M771,861v1.315h.317L771,861m62.474,0c-1.829,4.077.837,9.722,4.44,11.731,8.67,4.834,26.991,2.782,23.15-11.4h-.634c-1.253,2.768-2.1,5.516-4.757,7.236-7.3,4.726-19.184,1.464-21.247-7.565Z"
                transform="translate(-526.496 -577.88)"
                fill="#31231e"
            />
            <path
                id="Path_1687"
                data-name="Path 1687"
                d="M734,862l.317.329Z"
                transform="translate(-501.229 -578.551)"
                fill="#4e3b36"
            />
            <path
                id="Path_1688"
                data-name="Path 1688"
                d="M1302.951,863l-.951,4.6h.317Z"
                transform="translate(-889.102 -579.223)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1689"
                data-name="Path 1689"
                d="M735,864l.317.329Z"
                transform="translate(-501.912 -579.894)"
                fill="#774d44"
            />
            <path
                id="Path_1690"
                data-name="Path 1690"
                d="M744.667,864.333l.211.11Z"
                transform="translate(-508.514 -580.117)"
                fill="#4e3b36"
            />
            <path
                id="Path_1691"
                data-name="Path 1691"
                d="M746,864l.317.329Z"
                transform="translate(-509.424 -579.894)"
                fill="#774d44"
            />
            <path
                id="Path_1692"
                data-name="Path 1692"
                d="M747,864l.317.329Z"
                transform="translate(-510.107 -579.894)"
                fill="#4e3b36"
            />
            <path
                id="Path_1693"
                data-name="Path 1693"
                d="M917.371,864.667l.108.219-.108-.219m-179.7.219.211.11Z"
                transform="translate(-503.734 -580.341)"
                fill="#774d44"
            />
            <path
                id="Path_1694"
                data-name="Path 1694"
                d="M739,865v.658c4.628-.362,4.77,6,5.074,9.865.566-1.439-.127-2.827-.422-4.275C742.93,867.711,743.219,865,739,865Z"
                transform="translate(-504.644 -580.565)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1695"
                data-name="Path 1695"
                d="M748,865l.317.329L748,865m.317.329.317.329Z"
                transform="translate(-510.79 -580.565)"
                fill="#774d44"
            />
            <path
                id="Path_1696"
                data-name="Path 1696"
                d="M911.417,866l-.317,2.3a1.65,1.65,0,0,0,.317-2.3M750,866.329l.317.329Z"
                transform="translate(-512.155 -581.236)"
                fill="#4e3b36"
            />
            <path
                id="Path_1697"
                data-name="Path 1697"
                d="M750.333,868.667l.106.219Z"
                transform="translate(-512.383 -583.026)"
                fill="#774d44"
            />
            <path
                id="Path_1698"
                data-name="Path 1698"
                d="M797,868l.317.329Z"
                transform="translate(-544.25 -582.578)"
                fill="#4e3b36"
            />
            <path
                id="Path_1699"
                data-name="Path 1699"
                d="M774,869v1.644h.317Z"
                transform="translate(-528.544 -583.25)"
                fill="#31231e"
            />
            <path
                id="Path_1700"
                data-name="Path 1700"
                d="M751,870l.317.329L751,870m99.895,0,.317.329Z"
                transform="translate(-512.838 -583.921)"
                fill="#4e3b36"
            />
            <path
                id="Path_1701"
                data-name="Path 1701"
                d="M751,871l.317.329L751,871m175.054,0,.317.329Z"
                transform="translate(-512.838 -584.592)"
                fill="#774d44"
            />
            <path
                id="Path_1702"
                data-name="Path 1702"
                d="M752,872l.317,2.631h.317Z"
                transform="translate(-513.521 -585.263)"
                fill="#4e3b36"
            />
            <path
                id="Path_1703"
                data-name="Path 1703"
                d="M752,873l.317.329L752,873m174.524.219.108.219Z"
                transform="translate(-513.521 -585.934)"
                fill="#774d44"
            />
            <path
                id="Path_1704"
                data-name="Path 1704"
                d="M1225,874l.317.329Z"
                transform="translate(-836.521 -586.605)"
                fill="#4e3b36"
            />
            <path
                id="Path_1705"
                data-name="Path 1705"
                d="M1301,874l.317.329Z"
                transform="translate(-888.419 -586.605)"
                fill="#31231e"
            />
            <path
                id="Path_1706"
                data-name="Path 1706"
                d="M1293,875l.317.329Z"
                transform="translate(-882.956 -587.277)"
                fill="#4e3b36"
            />
            <path
                id="Path_1707"
                data-name="Path 1707"
                d="M1250.467,876l-.951,2.3h.317l.634-2.3m-23.467.986.317.329Z"
                transform="translate(-837.886 -587.948)"
                fill="#774d44"
            />
            <path
                id="Path_1708"
                data-name="Path 1708"
                d="M1256.317,879l-.317,1.644h.317V879m10.465,0,.317.329Z"
                transform="translate(-857.69 -589.961)"
                fill="#4e3b36"
            />
            <path
                id="Path_1709"
                data-name="Path 1709"
                d="M1300.317,879l-.317.987Z"
                transform="translate(-887.736 -589.961)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1710"
                data-name="Path 1710"
                d="M753,880v1.315h.317Z"
                transform="translate(-514.204 -590.633)"
                fill="#774d44"
            />
            <path
                id="Path_1711"
                data-name="Path 1711"
                d="M1299,882l.317.329Z"
                transform="translate(-887.053 -591.975)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1712"
                data-name="Path 1712"
                d="M1282.67,883.333l.209.11Z"
                transform="translate(-875.902 -592.87)"
                fill="#774d44"
            />
            <path
                id="Path_1713"
                data-name="Path 1713"
                d="M1287.074,883c-.923,3.349-3.067,4.982-5.074,7.563C1284.207,889.376,1287.851,885.935,1287.074,883Z"
                transform="translate(-875.444 -592.646)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1714"
                data-name="Path 1714"
                d="M754,885l.317.329L754,885m97.992,0,.317.329Z"
                transform="translate(-514.887 -593.988)"
                fill="#4e3b36"
            />
            <path
                id="Path_1715"
                data-name="Path 1715"
                d="M926.2,885l.317.329L926.2,885m-172.2.329.317,1.644h.317Z"
                transform="translate(-514.887 -593.988)"
                fill="#774d44"
            />
            <path
                id="Path_1716"
                data-name="Path 1716"
                d="M1295.33,886.667l.108.219Z"
                transform="translate(-884.547 -595.107)"
                fill="#31231e"
            />
            <path
                id="Path_1717"
                data-name="Path 1717"
                d="M755,887l.317.329Z"
                transform="translate(-515.57 -595.331)"
                fill="#4e3b36"
            />
            <path
                id="Path_1718"
                data-name="Path 1718"
                d="M1296,887l.317.329Z"
                transform="translate(-885.005 -595.331)"
                fill="#774d44"
            />
            <path
                id="Path_1719"
                data-name="Path 1719"
                d="M1253,888v2.3h.317l.317-2.3Z"
                transform="translate(-855.641 -596.002)"
                fill="#4e3b36"
            />
            <path
                id="Path_1720"
                data-name="Path 1720"
                d="M1295,889l.317.329Z"
                transform="translate(-884.322 -596.673)"
                fill="#774d44"
            />
            <path
                id="Path_1721"
                data-name="Path 1721"
                d="M756,893v.987h.317L756,893m34.25.329-.317.658Z"
                transform="translate(-516.253 -599.358)"
                fill="#4e3b36"
            />
            <path
                id="Path_1722"
                data-name="Path 1722"
                d="M926.207,895l.317.329-.317-.329m-169.874.548.106.219Z"
                transform="translate(-516.48 -600.7)"
                fill="#774d44"
            />
            <path
                id="Path_1723"
                data-name="Path 1723"
                d="M813,896l.317.329L813,896m.951,0,.317.329-.317-.329m77.062,0,.317.329-.317-.329m61.205,0-.634,2.3h.317Z"
                transform="translate(-555.176 -601.371)"
                fill="#4e3b36"
            />
            <path
                id="Path_1724"
                data-name="Path 1724"
                d="M1291,896l.317.329Z"
                transform="translate(-881.59 -601.371)"
                fill="#774d44"
            />
            <path
                id="Path_1725"
                data-name="Path 1725"
                d="M913.531,902.124c-10.136,2.13-20.406-3.457-30.444-3.933-2.485-.118-6.792-1.374-9.1-.716-.679.194-.718,1.074-.494,1.642,1.058,2.69,7.181.914,9.272,1.063,3.34.237,6.553,1.376,9.831,1.874,4.965.754,10.076,1,14.9,2.475C909.7,905.2,913.82,905.358,913.531,902.124Z"
                transform="translate(-596.405 -602.234)"
                fill="#31231e"
            />
            <path
                id="Path_1726"
                data-name="Path 1726"
                d="M1290,897l.317.329Z"
                transform="translate(-880.907 -602.042)"
                fill="#774d44"
            />
            <path
                id="Path_1727"
                data-name="Path 1727"
                d="M756,898l.317,1.644h.317Z"
                transform="translate(-516.253 -602.714)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1728"
                data-name="Path 1728"
                d="M757,898l.317.329Z"
                transform="translate(-516.936 -602.714)"
                fill="#4e3b36"
            />
            <path
                id="Path_1729"
                data-name="Path 1729"
                d="M925.711,898l.317.329-.317-.329M757,898.329l.317.329Z"
                transform="translate(-516.936 -602.714)"
                fill="#774d44"
            />
            <path
                id="Path_1730"
                data-name="Path 1730"
                d="M857,899l.317.329Z"
                transform="translate(-585.223 -603.385)"
                fill="#4e3b36"
            />
            <path
                id="Path_1731"
                data-name="Path 1731"
                d="M1288,899l.317.329Z"
                transform="translate(-879.542 -603.385)"
                fill="#774d44"
            />
            <path
                id="Path_1732"
                data-name="Path 1732"
                d="M758,900v1.315h.317L758,900m155.075,0,.317.987h.317V900Z"
                transform="translate(-517.618 -604.056)"
                fill="#4e3b36"
            />
            <path
                id="Path_1733"
                data-name="Path 1733"
                d="M1240.565,900l.317.329-.317-.329m-21.565.329.317.329Z"
                transform="translate(-832.423 -604.056)"
                fill="#774d44"
            />
            <path
                id="Path_1734"
                data-name="Path 1734"
                d="M1284.317,901l-.317.658Z"
                transform="translate(-876.81 -604.727)"
                fill="#4e3b36"
            />
            <path
                id="Path_1735"
                data-name="Path 1735"
                d="M1285.317,901l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-877.493 -604.727)"
                fill="#774d44"
            />
            <path
                id="Path_1736"
                data-name="Path 1736"
                d="M820,903l.317.329L820,903m146.829,0,.317.329Z"
                transform="translate(-559.957 -606.07)"
                fill="#4e3b36"
            />
            <path
                id="Path_1737"
                data-name="Path 1737"
                d="M758,904v.986h.317L758,904m71.671,0,.317.329Z"
                transform="translate(-517.618 -606.741)"
                fill="#774d44"
            />
            <path
                id="Path_1738"
                data-name="Path 1738"
                d="M1272.9,904l.317.329L1272.9,904m-4.227.438.209.11-.209-.11m3.488,0,.209.11Z"
                transform="translate(-866.342 -606.741)"
                fill="#4e3b36"
            />
            <path
                id="Path_1739"
                data-name="Path 1739"
                d="M1281,905l.317.329Z"
                transform="translate(-874.761 -607.412)"
                fill="#774d44"
            />
            <path
                id="Path_1740"
                data-name="Path 1740"
                d="M759,906l.634.987Z"
                transform="translate(-518.301 -608.083)"
                fill="#4e3b36"
            />
            <path
                id="Path_1741"
                data-name="Path 1741"
                d="M818,906l.317.329Z"
                transform="translate(-558.591 -608.083)"
                fill="#774d44"
            />
            <path
                id="Path_1742"
                data-name="Path 1742"
                d="M995.317,906l-.317.987C995.684,906.665,995.793,906.6,995.317,906Z"
                transform="translate(-679.459 -608.083)"
                fill="#31231e"
            />
            <path
                id="Path_1743"
                data-name="Path 1743"
                d="M1265.317,906l-.317.658Z"
                transform="translate(-863.835 -608.083)"
                fill="#4e3b36"
            />
            <path
                id="Path_1744"
                data-name="Path 1744"
                d="M1267,906v.329l1.9.329Z"
                transform="translate(-865.201 -608.083)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1745"
                data-name="Path 1745"
                d="M1271,906v.329h2.537Z"
                transform="translate(-867.933 -608.083)"
                fill="#774d44"
            />
            <path
                id="Path_1746"
                data-name="Path 1746"
                d="M923.435,906.333l.209.11-.209-.11M758,906.552l.951,2.959h.317Z"
                transform="translate(-517.618 -608.307)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1747"
                data-name="Path 1747"
                d="M1040.67,907.333l.209.11Z"
                transform="translate(-710.646 -608.978)"
                fill="#774d44"
            />
            <path
                id="Path_1748"
                data-name="Path 1748"
                d="M1264.634,907l-.634,1.973h.317l.317-1.973m2.537,0v.329h.951Z"
                transform="translate(-863.153 -608.754)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1749"
                data-name="Path 1749"
                d="M1245,908l.317.329Z"
                transform="translate(-850.178 -609.425)"
                fill="#31231e"
            />
            <path
                id="Path_1750"
                data-name="Path 1750"
                d="M1265,908l.317.329Z"
                transform="translate(-863.835 -609.425)"
                fill="#774d44"
            />
            <path
                id="Path_1752"
                data-name="Path 1752"
                d="M940.541,909c.181,4.5-3.38,4.276-6.66,3.852-7.25-.938-14.546-3.5-21.882-3.523,1.516,3.846,11.645,3.31,15.222,3.591,4.726.371,9.046,2.9,13.636,3.284,5.975.5,12.289-1.315,18.393-1.284,4.389.022,9.117,1.529,13.319-.329v-.329c-6.844-1.69-14.626-.364-21.565-.329-3.441.017-7.053.318-7.294-4.274Z"
                transform="translate(-622.781 -610.097)"
                fill="#774d44"
            />
            <path
                id="Path_1753"
                data-name="Path 1753"
                d="M1053.515,914.794c1.861-.4,3.1-1.561,2.854-3.617-3.739.72-7.345-.328-11.1-.329-5.93,0-11.813.843-17.759.646-3.048-.1-7.389.467-9.831-1.632h2.854V909.2c-1.23-.086-3.5-.838-4.57.009-1.5,1.185-.571,3.864,1.088,4.191,2.67.525,5.569-.12,8.239-.241,5.711-.259,11.391-.342,17.125-.342C1045.463,912.821,1051.029,912.832,1053.515,914.794Z"
                transform="translate(-693.26 -609.972)"
                fill="#31231e"
            />
            <path
                id="Path_1754"
                data-name="Path 1754"
                d="M920.514,909l.317.329-.317-.329M761,909.329v1.315h.317Z"
                transform="translate(-519.667 -610.097)"
                fill="#4e3b36"
            />
            <path
                id="Path_1755"
                data-name="Path 1755"
                d="M818,910l.317.329Z"
                transform="translate(-558.591 -610.768)"
                fill="#774d44"
            />
            <path
                id="Path_1756"
                data-name="Path 1756"
                d="M882,910l.317.329L882,910m1.586,0,.317.329Z"
                transform="translate(-602.295 -610.768)"
                fill="#4e3b36"
            />
            <path
                id="Path_1757"
                data-name="Path 1757"
                d="M1264,910l.317.329Z"
                transform="translate(-863.153 -610.768)"
                fill="#774d44"
            />
            <path
                id="Path_1758"
                data-name="Path 1758"
                d="M965.95,911v.987h.317L965.95,911M828,911.329l.317.329-.317-.329m32.981,0v.329h.951l-.951-.329m1.268,0v.329c4.933.953,10.232,2.285,15.222,2.639,2.12.15,4.484.929,5.391-1.652-2.786,2.08-4.873,1.016-7.928.419A68.574,68.574,0,0,0,862.25,911.329Z"
                transform="translate(-565.42 -611.439)"
                fill="#4e3b36"
            />
            <path
                id="Path_1759"
                data-name="Path 1759"
                d="M824,913l.317.329Z"
                transform="translate(-562.688 -612.781)"
                fill="#774d44"
            />
            <path
                id="Path_1760"
                data-name="Path 1760"
                d="M1065.39,913.333l.209.11-.209-.11m-42.39.219.317.329Z"
                transform="translate(-698.58 -613.005)"
                fill="#4e3b36"
            />
            <path
                id="Path_1761"
                data-name="Path 1761"
                d="M1263,914l.317.329Z"
                transform="translate(-862.47 -613.452)"
                fill="#774d44"
            />
            <path
                id="Path_1762"
                data-name="Path 1762"
                d="M762,915l.317.329Z"
                transform="translate(-520.35 -614.124)"
                fill="#4e3b36"
            />
            <path
                id="Path_1763"
                data-name="Path 1763"
                d="M1263.33,915.667l.108.219Z"
                transform="translate(-862.695 -614.571)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1764"
                data-name="Path 1764"
                d="M762,916v.986h.317Z"
                transform="translate(-520.35 -614.795)"
                fill="#774d44"
            />
            <path
                id="Path_1765"
                data-name="Path 1765"
                d="M1262,916l.317.329Z"
                transform="translate(-861.787 -614.795)"
                fill="#4e3b36"
            />
            <path
                id="Path_1766"
                data-name="Path 1766"
                d="M1262,917l.317.329Z"
                transform="translate(-861.787 -615.466)"
                fill="#774d44"
            />
            <path
                id="Path_1767"
                data-name="Path 1767"
                d="M761,918l.634,1.644h.317Z"
                transform="translate(-519.667 -616.137)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1768"
                data-name="Path 1768"
                d="M1166.317,918l-.317.658h.634l-.317-.658m29.81,0,.317.329Z"
                transform="translate(-796.231 -616.137)"
                fill="#4e3b36"
            />
            <path
                id="Path_1769"
                data-name="Path 1769"
                d="M1262,918l.317.329Z"
                transform="translate(-861.787 -616.137)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1770"
                data-name="Path 1770"
                d="M851,919l.634.658Z"
                transform="translate(-581.126 -616.808)"
                fill="#4e3b36"
            />
            <path
                id="Path_1771"
                data-name="Path 1771"
                d="M920.929,919l.317.329-.317-.329M763,919.329l.317.329Z"
                transform="translate(-521.033 -616.808)"
                fill="#774d44"
            />
            <path
                id="Path_1772"
                data-name="Path 1772"
                d="M1260,920v.987h.317Z"
                transform="translate(-860.421 -617.479)"
                fill="#4e3b36"
            />
            <path
                id="Path_1773"
                data-name="Path 1773"
                d="M1261,920v.987h.317Z"
                transform="translate(-861.104 -617.479)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1774"
                data-name="Path 1774"
                d="M764,921l.317.329Z"
                transform="translate(-521.716 -618.151)"
                fill="#4e3b36"
            />
            <path
                id="Path_1775"
                data-name="Path 1775"
                d="M764.333,922.667l.106.219Z"
                transform="translate(-521.943 -619.269)"
                fill="#774d44"
            />
            <path
                id="Path_1776"
                data-name="Path 1776"
                d="M1235,923l.317.329Z"
                transform="translate(-843.349 -619.493)"
                fill="#31231e"
            />
            <path
                id="Path_1777"
                data-name="Path 1777"
                d="M1260,923l.317.329Z"
                transform="translate(-860.421 -619.493)"
                fill="#774d44"
            />
            <path
                id="Path_1778"
                data-name="Path 1778"
                d="M764,924l1.9,4.6h.317Z"
                transform="translate(-521.716 -620.164)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1779"
                data-name="Path 1779"
                d="M765.333,924.507l.106.219-.106-.219m51.9,6.028v-.329c-2.177-.742-4.505-1.6-5.391-3.946l10.148,1.315c-1.263-1.815-7.278-2.147-9.514-2.622-.76-.162-2.266-.873-2.966-.314-.995.794.551,1.983,1.077,2.423C812.489,928.651,814.753,930.272,817.236,930.536Z"
                transform="translate(-522.626 -620.452)"
                fill="#4e3b36"
            />
            <path
                id="Path_1780"
                data-name="Path 1780"
                d="M1166,924l.317.329Z"
                transform="translate(-796.231 -620.164)"
                fill="#774d44"
            />
            <path
                id="Path_1781"
                data-name="Path 1781"
                d="M1233,924l.317.329Z"
                transform="translate(-841.984 -620.164)"
                fill="#31231e"
            />
            <path
                id="Path_1782"
                data-name="Path 1782"
                d="M1259,924l.317.329Z"
                transform="translate(-859.738 -620.164)"
                fill="#4e3b36"
            />
            <path
                id="Path_1783"
                data-name="Path 1783"
                d="M1254.537,924,1252,930.905C1253.24,929.771,1254.99,925.693,1254.537,924Z"
                transform="translate(-854.958 -620.164)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1784"
                data-name="Path 1784"
                d="M937,925l.317.329Z"
                transform="translate(-639.853 -620.835)"
                fill="#4e3b36"
            />
            <path
                id="Path_1785"
                data-name="Path 1785"
                d="M1259,925l.317.329Z"
                transform="translate(-859.738 -620.835)"
                fill="#774d44"
            />
            <path
                id="Path_1786"
                data-name="Path 1786"
                d="M944.667,926.333l.211.11Z"
                transform="translate(-645.088 -621.73)"
                fill="#31231e"
            />
            <path
                id="Path_1787"
                data-name="Path 1787"
                d="M1170,926l.317.329L1170,926m.634,0,.317.329Z"
                transform="translate(-798.962 -621.507)"
                fill="#4e3b36"
            />
            <path
                id="Path_1788"
                data-name="Path 1788"
                d="M1197.67,926.333l.209.11Z"
                transform="translate(-817.858 -621.73)"
                fill="#774d44"
            />
            <path
                id="Path_1789"
                data-name="Path 1789"
                d="M922.131,926.667l.108.219-.108-.219M766,926.776l.317.329Z"
                transform="translate(-523.081 -621.954)"
                fill="#4e3b36"
            />
            <path
                id="Path_1790"
                data-name="Path 1790"
                d="M954,927l.317.329L954,927m1.586,0,.317.329-.317-.329m56.766,0,.317.329Z"
                transform="translate(-651.462 -622.178)"
                fill="#31231e"
            />
            <path
                id="Path_1791"
                data-name="Path 1791"
                d="M1166,927l.317.329Z"
                transform="translate(-796.231 -622.178)"
                fill="#774d44"
            />
            <path
                id="Path_1792"
                data-name="Path 1792"
                d="M767,928l.317.329Z"
                transform="translate(-523.764 -622.849)"
                fill="#4e3b36"
            />
            <path
                id="Path_1793"
                data-name="Path 1793"
                d="M910,928l.317.329Z"
                transform="translate(-621.415 -622.849)"
                fill="#774d44"
            />
            <path
                id="Path_1794"
                data-name="Path 1794"
                d="M1177,928v.329h1.586L1177,928m2.75.109.209.11-.209-.11m1.269,0,.209.11Z"
                transform="translate(-803.743 -622.849)"
                fill="#4e3b36"
            />
            <path
                id="Path_1795"
                data-name="Path 1795"
                d="M922.709,928l.317.329-.317-.329M767,928.329l.317.329-.317-.329m45.983.329c.981,4.228,8.891,5.245,12.368,6.125,11.027,2.79,22.668,2.968,33.932,2.438,3.641-.171,10.323-.183,12.368-3.959l-8.88-.329-20.3-.034-18.71-2.7-10.782-1.537m80.55-.329.317.329Z"
                transform="translate(-523.764 -622.849)"
                fill="#774d44"
            />
            <path
                id="Path_1796"
                data-name="Path 1796"
                d="M768,930v1.315h.317Z"
                transform="translate(-524.447 -624.191)"
                fill="#4e3b36"
            />
            <path
                id="Path_1797"
                data-name="Path 1797"
                d="M1164,930l.317.329Z"
                transform="translate(-794.865 -624.191)"
                fill="#774d44"
            />
            <path
                id="Path_1798"
                data-name="Path 1798"
                d="M1257,930l.317.329Z"
                transform="translate(-858.373 -624.191)"
                fill="#4e3b36"
            />
            <path
                id="Path_1799"
                data-name="Path 1799"
                d="M1052,931l.317.329Z"
                transform="translate(-718.383 -624.862)"
                fill="#31231e"
            />
            <path
                id="Path_1800"
                data-name="Path 1800"
                d="M1174,931l.317.329Z"
                transform="translate(-801.694 -624.862)"
                fill="#4e3b36"
            />
            <path
                id="Path_1801"
                data-name="Path 1801"
                d="M1257,931l.317.329Z"
                transform="translate(-858.373 -624.862)"
                fill="#774d44"
            />
            <path
                id="Path_1802"
                data-name="Path 1802"
                d="M959,932c.09,1.787,2.157,1.315,3.488,1.315v-.329Z"
                transform="translate(-654.876 -625.534)"
                fill="#31231e"
            />
            <path
                id="Path_1803"
                data-name="Path 1803"
                d="M1256,932l.317.329Z"
                transform="translate(-857.69 -625.534)"
                fill="#4e3b36"
            />
            <path
                id="Path_1804"
                data-name="Path 1804"
                d="M1046.67,933.333l.209.11Z"
                transform="translate(-714.744 -626.428)"
                fill="#31231e"
            />
            <path
                id="Path_1805"
                data-name="Path 1805"
                d="M1056,933l.317.986h.317V933Z"
                transform="translate(-721.115 -626.205)"
                fill="#4e3b36"
            />
            <path
                id="Path_1806"
                data-name="Path 1806"
                d="M1166,933l.317.329L1166,933m3.171.329v.329h.951l-.951-.329m3.171-.329v.986h.634V933Z"
                transform="translate(-796.231 -626.205)"
                fill="#774d44"
            />
            <path
                id="Path_1807"
                data-name="Path 1807"
                d="M923.123,933l.317.329-.317-.329M769,933.329l.317.329Z"
                transform="translate(-525.13 -626.205)"
                fill="#4e3b36"
            />
            <path
                id="Path_1808"
                data-name="Path 1808"
                d="M849,934l.317.329L849,934m63.108,0,.317.329Z"
                transform="translate(-579.76 -626.876)"
                fill="#31231e"
            />
            <path
                id="Path_1809"
                data-name="Path 1809"
                d="M1172,934l.317.329Z"
                transform="translate(-800.328 -626.876)"
                fill="#4e3b36"
            />
            <path
                id="Path_1810"
                data-name="Path 1810"
                d="M1255,934l.317.329Z"
                transform="translate(-857.007 -626.876)"
                fill="#774d44"
            />
            <path
                id="Path_1811"
                data-name="Path 1811"
                d="M770,935l.317.329Z"
                transform="translate(-525.813 -627.547)"
                fill="#4e3b36"
            />
            <path
                id="Path_1812"
                data-name="Path 1812"
                d="M1042,935l.317.329Z"
                transform="translate(-711.555 -627.547)"
                fill="#31231e"
            />
            <path
                id="Path_1813"
                data-name="Path 1813"
                d="M1051,935v.329l1.269.329v-.329L1051,935m2.642.219.108.219Z"
                transform="translate(-717.7 -627.547)"
                fill="#4e3b36"
            />
            <path
                id="Path_1814"
                data-name="Path 1814"
                d="M1166,935l.317.329Z"
                transform="translate(-796.231 -627.547)"
                fill="#774d44"
            />
            <path
                id="Path_1815"
                data-name="Path 1815"
                d="M1253.317,935l-.317,1.973h.317Z"
                transform="translate(-855.641 -627.547)"
                fill="#4e3b36"
            />
            <path
                id="Path_1816"
                data-name="Path 1816"
                d="M770,936l.317.329Z"
                transform="translate(-525.813 -628.218)"
                fill="#774d44"
            />
            <path
                id="Path_1818"
                data-name="Path 1818"
                d="M1178.33,936.667l.108.219-.108-.219m1.9,0,.108.219-.108-.219m22.2,0,.108.219Z"
                transform="translate(-804.651 -628.666)"
                fill="#774d44"
            />
            <path
                id="Path_1819"
                data-name="Path 1819"
                d="M979,937l3.171.658v-.329Z"
                transform="translate(-668.534 -628.889)"
                fill="#31231e"
            />
            <path
                id="Path_1820"
                data-name="Path 1820"
                d="M770.333,938.667l.106.219Z"
                transform="translate(-526.04 -630.008)"
                fill="#774d44"
            />
            <path
                id="Path_1821"
                data-name="Path 1821"
                d="M771,938v1.315h.317Z"
                transform="translate(-526.496 -629.561)"
                fill="#4e3b36"
            />
            <path
                id="Path_1822"
                data-name="Path 1822"
                d="M994,938v.329h.951Z"
                transform="translate(-678.777 -629.561)"
                fill="#31231e"
            />
            <path
                id="Path_1823"
                data-name="Path 1823"
                d="M1167,938l.317.329L1167,938m.634,0,.317.329Z"
                transform="translate(-796.914 -629.561)"
                fill="#4e3b36"
            />
            <path
                id="Path_1824"
                data-name="Path 1824"
                d="M1178.128,938v.658h.634l-.634-.658m-1.8.548.108.219Z"
                transform="translate(-803.285 -629.561)"
                fill="#774d44"
            />
            <path
                id="Path_1825"
                data-name="Path 1825"
                d="M770,940l1.9,5.261h.317Z"
                transform="translate(-525.813 -630.903)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1826"
                data-name="Path 1826"
                d="M1163,941l.317.329Z"
                transform="translate(-794.182 -631.574)"
                fill="#4e3b36"
            />
            <path
                id="Path_1827"
                data-name="Path 1827"
                d="M900.387,941l.317.329-.317-.329m23.467,0,.317.329-.317-.329M771,941.329l.317.329Z"
                transform="translate(-526.496 -631.574)"
                fill="#774d44"
            />
            <path
                id="Path_1828"
                data-name="Path 1828"
                d="M1252,942l.317.329Z"
                transform="translate(-854.958 -632.245)"
                fill="#4e3b36"
            />
            <path
                id="Path_1829"
                data-name="Path 1829"
                d="M772,943l.317.329Z"
                transform="translate(-527.179 -632.916)"
                fill="#774d44"
            />
            <path
                id="Path_1830"
                data-name="Path 1830"
                d="M930.667,943.109l.211.11-.211-.11m73.362-.109.317.329Z"
                transform="translate(-635.528 -632.916)"
                fill="#4e3b36"
            />
            <path
                id="Path_1831"
                data-name="Path 1831"
                d="M1252,943l.317.329Z"
                transform="translate(-854.958 -632.916)"
                fill="#774d44"
            />
            <path
                id="Path_1832"
                data-name="Path 1832"
                d="M773,944l.317.329L773,944m50.423,0v.329l2.537.329L823.423,944m101.163,0-.317,1.315h.317Z"
                transform="translate(-527.862 -633.588)"
                fill="#4e3b36"
            />
            <path
                id="Path_1833"
                data-name="Path 1833"
                d="M773.333,945.219l.106.219-.106-.219M924.814,945l.317.329Z"
                transform="translate(-528.089 -634.259)"
                fill="#774d44"
            />
            <path
                id="Path_1834"
                data-name="Path 1834"
                d="M940.667,946.333l.211.11Z"
                transform="translate(-642.357 -635.154)"
                fill="#4e3b36"
            />
            <path
                id="Path_1835"
                data-name="Path 1835"
                d="M1216.856,946l-3.685,7.892L1201,972.306c5.873-4.38,8.9-12.333,12.688-18.414C1214.9,951.949,1217.754,948.455,1216.856,946Z"
                transform="translate(-820.132 -634.93)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1836"
                data-name="Path 1836"
                d="M774,947l.634.986L774,947m53.277,0v.329l2.854.329Z"
                transform="translate(-528.544 -635.601)"
                fill="#4e3b36"
            />
            <path
                id="Path_1837"
                data-name="Path 1837"
                d="M774,949l.317.329Z"
                transform="translate(-528.544 -636.943)"
                fill="#774d44"
            />
            <path
                id="Path_1838"
                data-name="Path 1838"
                d="M952,949v.329h.951L952,949m94.5,0-.317.658Z"
                transform="translate(-650.096 -636.943)"
                fill="#4e3b36"
            />
            <path
                id="Path_1839"
                data-name="Path 1839"
                d="M775.333,950.667l.106.219Z"
                transform="translate(-529.455 -638.062)"
                fill="#774d44"
            />
            <path
                id="Path_1840"
                data-name="Path 1840"
                d="M955,950v.329l3.805.329Z"
                transform="translate(-652.145 -637.615)"
                fill="#4e3b36"
            />
            <path
                id="Path_1841"
                data-name="Path 1841"
                d="M1250,950l.317.329Z"
                transform="translate(-853.592 -637.615)"
                fill="#774d44"
            />
            <path
                id="Path_1842"
                data-name="Path 1842"
                d="M776,951v.987h.317Z"
                transform="translate(-529.91 -638.286)"
                fill="#4e3b36"
            />
            <path
                id="Path_1843"
                data-name="Path 1843"
                d="M1249,951l.317.329Z"
                transform="translate(-852.909 -638.286)"
                fill="#774d44"
            />
            <path
                id="Path_1844"
                data-name="Path 1844"
                d="M968,952v.329h.951L968,952m88.8,0,.317.329L1056.8,952m-87.844.329v.329l5.391.329Z"
                transform="translate(-661.022 -638.957)"
                fill="#4e3b36"
            />
            <path
                id="Path_1845"
                data-name="Path 1845"
                d="M925.788,953.667l.108.219-.108-.219M776,953.776l.317.329Z"
                transform="translate(-529.91 -640.076)"
                fill="#774d44"
            />
            <path
                id="Path_1846"
                data-name="Path 1846"
                d="M926.154,954.667l.108.219-.108-.219M777,954.776l.634.658-.634-.658m67.865,0v.329h1.9l-1.9-.329m2.22.329v.329l24.736-.329-8.562.3Z"
                transform="translate(-530.593 -640.747)"
                fill="#4e3b36"
            />
            <path
                id="Path_1847"
                data-name="Path 1847"
                d="M777,956l.634.658Z"
                transform="translate(-530.593 -641.642)"
                fill="#774d44"
            />
            <path
                id="Path_1848"
                data-name="Path 1848"
                d="M1246,956l.317.329Z"
                transform="translate(-850.861 -641.642)"
                fill="#4e3b36"
            />
            <path
                id="Path_1849"
                data-name="Path 1849"
                d="M777,957l.317.329Z"
                transform="translate(-530.593 -642.313)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1850"
                data-name="Path 1850"
                d="M1246.33,957.667l.108.219Z"
                transform="translate(-851.086 -642.761)"
                fill="#774d44"
            />
            <path
                id="Path_1851"
                data-name="Path 1851"
                d="M778,958c2.219,5.754,6.554,14.373,11.417,18.085l-6.2-9.207Z"
                transform="translate(-531.276 -642.984)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1852"
                data-name="Path 1852"
                d="M779,958l.317.329Z"
                transform="translate(-531.959 -642.984)"
                fill="#4e3b36"
            />
            <path
                id="Path_1853"
                data-name="Path 1853"
                d="M1159,958l.317.329L1159,958m.951,0,.317.329Z"
                transform="translate(-791.451 -642.984)"
                fill="#31231e"
            />
            <path
                id="Path_1854"
                data-name="Path 1854"
                d="M779,959l.317.329Z"
                transform="translate(-531.959 -643.655)"
                fill="#774d44"
            />
            <path
                id="Path_1855"
                data-name="Path 1855"
                d="M927.464,959l.317.329-.317-.329M780,959.329l.317.329Z"
                transform="translate(-532.642 -643.655)"
                fill="#4e3b36"
            />
            <path
                id="Path_1856"
                data-name="Path 1856"
                d="M1245,960l.317.329Z"
                transform="translate(-850.178 -644.326)"
                fill="#774d44"
            />
            <path
                id="Path_1857"
                data-name="Path 1857"
                d="M781,961l.317.329L781,961m146.829.329.317.329-.317-.329m-146.512.329.317.329Z"
                transform="translate(-533.325 -644.998)"
                fill="#4e3b36"
            />
            <path
                id="Path_1858"
                data-name="Path 1858"
                d="M928.512,963l.317.329-.317-.329M782,963.329l.317.329-.317-.329m146.2,0,.317.329Z"
                transform="translate(-534.007 -646.34)"
                fill="#774d44"
            />
            <path
                id="Path_1859"
                data-name="Path 1859"
                d="M783,965l.634.658L783,965m145.561,0,.317.329Z"
                transform="translate(-534.69 -647.682)"
                fill="#4e3b36"
            />
            <path
                id="Path_1860"
                data-name="Path 1860"
                d="M783,966l.317.329Z"
                transform="translate(-534.69 -648.353)"
                fill="#774d44"
            />
            <path
                id="Path_1861"
                data-name="Path 1861"
                d="M1241,966l.317.329Z"
                transform="translate(-847.447 -648.353)"
                fill="#4e3b36"
            />
            <path
                id="Path_1862"
                data-name="Path 1862"
                d="M784.333,967.667l.106.219Z"
                transform="translate(-535.601 -649.472)"
                fill="#774d44"
            />
            <path
                id="Path_1863"
                data-name="Path 1863"
                d="M1018.749,967l.317.329-.317-.329M916,967.329l1.9,1.973Z"
                transform="translate(-625.513 -649.025)"
                fill="#4e3b36"
            />
            <path
                id="Path_1864"
                data-name="Path 1864"
                d="M1240,968l.317.329Z"
                transform="translate(-846.764 -649.696)"
                fill="#774d44"
            />
            <path
                id="Path_1865"
                data-name="Path 1865"
                d="M785,969l.317.329Z"
                transform="translate(-536.056 -650.367)"
                fill="#4e3b36"
            />
            <path
                id="Path_1866"
                data-name="Path 1866"
                d="M928.975,969l.317.329-.317-.329M785,969.329l.317.329Z"
                transform="translate(-536.056 -650.367)"
                fill="#774d44"
            />
            <path
                id="Path_1867"
                data-name="Path 1867"
                d="M1109,970l.317.329Z"
                transform="translate(-757.307 -651.038)"
                fill="#4e3b36"
            />
            <path
                id="Path_1868"
                data-name="Path 1868"
                d="M1238,970l.317.329Z"
                transform="translate(-845.398 -651.038)"
                fill="#774d44"
            />
            <path
                id="Path_1869"
                data-name="Path 1869"
                d="M786,971l.317.329L786,971m102.115,0-5.391,5.261c1.63-.726,5.432-3.274,5.391-5.261m40.909,0-.317,1.644h.317Z"
                transform="translate(-536.739 -651.709)"
                fill="#4e3b36"
            />
            <path
                id="Path_1870"
                data-name="Path 1870"
                d="M786,972l.317.329L786,972m.317.329.317.329-.317-.329m.317.329.317.329Z"
                transform="translate(-536.739 -652.38)"
                fill="#774d44"
            />
            <path
                id="Path_1871"
                data-name="Path 1871"
                d="M922,974v.658h.634Z"
                transform="translate(-629.61 -653.723)"
                fill="#4e3b36"
            />
            <path
                id="Path_1872"
                data-name="Path 1872"
                d="M1237,974l.317.329Z"
                transform="translate(-844.715 -653.723)"
                fill="#774d44"
            />
            <path
                id="Path_1873"
                data-name="Path 1873"
                d="M789,975l.317.329L789,975m47.886,3.288-3.171-1.315,4.44,2.63c.419-3.862,4.972-2.594,7.611-2.167,4.873.789,9.966,2.327,14.9,2.155,3.815-.132,10.1-1.651,13.589.445,1.719,1.032.444,2.925-.27,4.17l3.488-.329v-.329l-1.9-.329c1.205-1.778,1.954-4.139-.634-5-4.9-1.621-11.99.09-17.125.064-4.712-.024-9.924-1.9-14.588-2.808C840.679,974.985,835.692,973.936,836.886,978.288Z"
                transform="translate(-538.787 -654.394)"
                fill="#4e3b36"
            />
            <path
                id="Path_1874"
                data-name="Path 1874"
                d="M789,976l.317.329Z"
                transform="translate(-538.787 -655.065)"
                fill="#774d44"
            />
            <path
                id="Path_1875"
                data-name="Path 1875"
                d="M832.495,976l.317.329-.317-.329m98.626,0-.317.658.317-.658M790,976.329l.634.658-.634-.658m42.812,0,.317.329Z"
                transform="translate(-539.47 -655.065)"
                fill="#4e3b36"
            />
            <path
                id="Path_1876"
                data-name="Path 1876"
                d="M931.121,977l.317.329-.317-.329M790,977.329l.317.329Z"
                transform="translate(-539.47 -655.736)"
                fill="#774d44"
            />
            <path
                id="Path_1877"
                data-name="Path 1877"
                d="M926.667,978.333l.211.11Z"
                transform="translate(-632.797 -656.631)"
                fill="#4e3b36"
            />
            <path
                id="Path_1878"
                data-name="Path 1878"
                d="M931.487,978l.317.329-.317-.329M791,978.329l.317.329Z"
                transform="translate(-540.153 -656.407)"
                fill="#774d44"
            />
            <path
                id="Path_1879"
                data-name="Path 1879"
                d="M835.129,979v.658h.634l-.634-.658M792,979.329l.634.658Z"
                transform="translate(-540.836 -657.079)"
                fill="#4e3b36"
            />
            <path
                id="Path_1880"
                data-name="Path 1880"
                d="M792,981l.317.329Z"
                transform="translate(-540.836 -658.421)"
                fill="#774d44"
            />
            <path
                id="Path_1881"
                data-name="Path 1881"
                d="M1233,981l.317.329Z"
                transform="translate(-841.984 -658.421)"
                fill="#4e3b36"
            />
            <path
                id="Path_1882"
                data-name="Path 1882"
                d="M793.333,982.219l.106.219-.106-.219M932.763,982l.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-541.746 -659.092)"
                fill="#774d44"
            />
            <path
                id="Path_1883"
                data-name="Path 1883"
                d="M794,984l.317.329L794,984m138.584,0,.317.329Z"
                transform="translate(-542.202 -660.435)"
                fill="#4e3b36"
            />
            <path
                id="Path_1884"
                data-name="Path 1884"
                d="M794,985l.317.329Z"
                transform="translate(-542.202 -661.106)"
                fill="#774d44"
            />
            <path
                id="Path_1885"
                data-name="Path 1885"
                d="M1229.317,985l-.317.658Z"
                transform="translate(-839.252 -661.106)"
                fill="#4e3b36"
            />
            <path
                id="Path_1886"
                data-name="Path 1886"
                d="M795,986l.317.986h.317Z"
                transform="translate(-542.885 -661.777)"
                fill="#774d44"
            />
            <path
                id="Path_1887"
                data-name="Path 1887"
                d="M796,986l.317.329Z"
                transform="translate(-543.568 -661.777)"
                fill="#4e3b36"
            />
            <path
                id="Path_1888"
                data-name="Path 1888"
                d="M1230,986l.317.329Z"
                transform="translate(-839.935 -661.777)"
                fill="#774d44"
            />
            <path
                id="Path_1889"
                data-name="Path 1889"
                d="M1089.67,987.333l.209.11Z"
                transform="translate(-744.107 -662.672)"
                fill="#4e3b36"
            />
            <path
                id="Path_1890"
                data-name="Path 1890"
                d="M1229,987l.317.329Z"
                transform="translate(-839.252 -662.448)"
                fill="#774d44"
            />
            <path
                id="Path_1891"
                data-name="Path 1891"
                d="M889.284,988l-.317.658h.634l-.317-.658m44.4,0,.317.329-.317-.329M797,988.329l.317.329-.317-.329m46.617,0,.317.329Z"
                transform="translate(-544.25 -663.119)"
                fill="#4e3b36"
            />
            <path
                id="Path_1892"
                data-name="Path 1892"
                d="M1228,989l.317.329Z"
                transform="translate(-838.569 -663.79)"
                fill="#774d44"
            />
            <path
                id="Path_1893"
                data-name="Path 1893"
                d="M798,990l.951.986L798,990m91.228.109.209.11Z"
                transform="translate(-544.933 -664.462)"
                fill="#4e3b36"
            />
            <path
                id="Path_1894"
                data-name="Path 1894"
                d="M934.047,990l.317.329-.317-.329M798,990.329l.317.329Z"
                transform="translate(-544.933 -664.462)"
                fill="#774d44"
            />
            <path
                id="Path_1895"
                data-name="Path 1895"
                d="M1082.634,991l-.634.329v.329l.634-.658m45.032,0,.317.329Z"
                transform="translate(-738.87 -665.133)"
                fill="#4e3b36"
            />
            <path
                id="Path_1896"
                data-name="Path 1896"
                d="M799,992l.317.329L799,992m135.413,0,.317.329-.317-.329m-135.1.329.317.329Z"
                transform="translate(-545.616 -665.804)"
                fill="#774d44"
            />
            <path
                id="Path_1897"
                data-name="Path 1897"
                d="M889.691,993.109l.209.11-.209-.11M935.461,993l.317.329-.317-.329m-46.3.329-.634.329v.329l.634-.658M801,993.658l.317.329-.317-.329m134.144,0,.317.329-.317-.329m-133.827.329.317.329-.317-.329m86.788.109.209.11-.209-.11m46.722-.109-.317.658.317-.658m-133.193.329.317.329-.317-.329m85.941,0,.317.329Z"
                transform="translate(-546.982 -666.475)"
                fill="#4e3b36"
            />
            <path
                id="Path_1898"
                data-name="Path 1898"
                d="M936.193,997l.317.329-.317-.329M803,997.329l.317.329Z"
                transform="translate(-548.348 -669.16)"
                fill="#774d44"
            />
            <path
                id="Path_1899"
                data-name="Path 1899"
                d="M1072.67,998.333l.209.11Z"
                transform="translate(-732.498 -670.054)"
                fill="#4e3b36"
            />
            <path
                id="Path_1900"
                data-name="Path 1900"
                d="M936.559,998l.317.329-.317-.329M804,998.329l.317.329Z"
                transform="translate(-549.031 -669.831)"
                fill="#774d44"
            />
            <path
                id="Path_1901"
                data-name="Path 1901"
                d="M888.4,999.658l.951-.658-.951.658m48.52-.658.317.329-.317-.329M805,999.329l.317.329-.317-.329m131.607,0,.317.329-.317-.329m-131.29.329.317.329Z"
                transform="translate(-549.714 -670.502)"
                fill="#4e3b36"
            />
            <path
                id="Path_1902"
                data-name="Path 1902"
                d="M937.29,1001l.317.329-.317-.329m-131.29.329.317.329Z"
                transform="translate(-550.396 -671.844)"
                fill="#774d44"
            />
            <path
                id="Path_1904"
                data-name="Path 1904"
                d="M1060,1002l.317.329Z"
                transform="translate(-723.846 -672.516)"
                fill="#31231e"
            />
            <path
                id="Path_1905"
                data-name="Path 1905"
                d="M1217.317,1002l-.317.658Z"
                transform="translate(-831.058 -672.516)"
                fill="#4e3b36"
            />
            <path
                id="Path_1906"
                data-name="Path 1906"
                d="M937.656,1002l.317.329-.317-.329M807,1002.329l.317.329-.317-.329m130.339,0,.317.329-.317-.329m-.317.329.317.329Z"
                transform="translate(-551.079 -672.516)"
                fill="#774d44"
            />
            <path
                id="Path_1907"
                data-name="Path 1907"
                d="M808,1005l.317.329L808,1005m129.388,0,.317.329-.317-.329m-129.07.329.317.329Z"
                transform="translate(-551.762 -674.529)"
                fill="#4e3b36"
            />
            <path
                id="Path_1908"
                data-name="Path 1908"
                d="M1216,1006l.317.329Z"
                transform="translate(-830.375 -675.2)"
                fill="#774d44"
            />
            <path
                id="Path_1909"
                data-name="Path 1909"
                d="M810,1007l.317.329Z"
                transform="translate(-553.128 -675.872)"
                fill="#4e3b36"
            />
            <path
                id="Path_1910"
                data-name="Path 1910"
                d="M1215,1007l.317.329Z"
                transform="translate(-829.692 -675.872)"
                fill="#774d44"
            />
            <path
                id="Path_1911"
                data-name="Path 1911"
                d="M811,1008l.634.658Z"
                transform="translate(-553.811 -676.543)"
                fill="#4e3b36"
            />
            <path
                id="Path_1912"
                data-name="Path 1912"
                d="M934.667,1008.33l.211.112-.211-.112m49.156,0,.209.112Z"
                transform="translate(-638.26 -676.764)"
                fill="#31231e"
            />
            <path
                id="Path_1913"
                data-name="Path 1913"
                d="M1214,1008l.317.329Z"
                transform="translate(-829.009 -676.543)"
                fill="#4e3b36"
            />
            <path
                id="Path_1914"
                data-name="Path 1914"
                d="M811,1009l.317.329L811,1009m.317.329.317.329Z"
                transform="translate(-553.811 -677.214)"
                fill="#774d44"
            />
            <path
                id="Path_1916"
                data-name="Path 1916"
                d="M939.85,1010l.317.329-.317-.329m-126.85.329.317.329-.317-.329m126.533,0,.317.329-.317-.329m-126.216.329.317.329-.317-.329m125.9,0,.317.329Z"
                transform="translate(-555.176 -677.885)"
                fill="#4e3b36"
            />
            <path
                id="Path_1917"
                data-name="Path 1917"
                d="M814,1013l.634.658Z"
                transform="translate(-555.859 -679.899)"
                fill="#774d44"
            />
            <path
                id="Path_1918"
                data-name="Path 1918"
                d="M1085,1013l.317.329Z"
                transform="translate(-740.918 -679.899)"
                fill="#4e3b36"
            />
            <path
                id="Path_1919"
                data-name="Path 1919"
                d="M1210,1013l.317.329Z"
                transform="translate(-826.278 -679.899)"
                fill="#774d44"
            />
            <path
                id="Path_1920"
                data-name="Path 1920"
                d="M814,1014l.317.329Z"
                transform="translate(-555.859 -680.57)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1921"
                data-name="Path 1921"
                d="M1209,1014l.317.329Z"
                transform="translate(-825.595 -680.57)"
                fill="#4e3b36"
            />
            <path
                id="Path_1922"
                data-name="Path 1922"
                d="M815,1015l6.343,7.563h.317A23.034,23.034,0,0,0,815,1015Z"
                transform="translate(-556.542 -681.241)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1923"
                data-name="Path 1923"
                d="M816,1015l.317.329Z"
                transform="translate(-557.225 -681.241)"
                fill="#4e3b36"
            />
            <path
                id="Path_1924"
                data-name="Path 1924"
                d="M1209,1015l.317.329Z"
                transform="translate(-825.595 -681.241)"
                fill="#774d44"
            />
            <path
                id="Path_1925"
                data-name="Path 1925"
                d="M817,1016l.317.329Z"
                transform="translate(-557.908 -681.912)"
                fill="#4e3b36"
            />
            <path
                id="Path_1926"
                data-name="Path 1926"
                d="M1208,1016l.317.329Z"
                transform="translate(-824.912 -681.912)"
                fill="#774d44"
            />
            <path
                id="Path_1927"
                data-name="Path 1927"
                d="M818,1017l.317.329L818,1017m123.362,0,.317.329-.317-.329m-123.045.329.317.329-.317-.329m122.728,0,.317.329-.317-.329m-122.411.329.317.329-.317-.329m122.094,0,.317.329Z"
                transform="translate(-558.591 -682.583)"
                fill="#4e3b36"
            />
            <path
                id="Path_1928"
                data-name="Path 1928"
                d="M821,1020l.317.329Z"
                transform="translate(-560.64 -684.597)"
                fill="#774d44"
            />
            <path
                id="Path_1929"
                data-name="Path 1929"
                d="M943.142,1020l.317.329-.317-.329M822,1020.329l.317.329-.317-.329m.317.329.317.329Z"
                transform="translate(-561.322 -684.597)"
                fill="#4e3b36"
            />
            <path
                id="Path_1930"
                data-name="Path 1930"
                d="M1203,1022l.317.329Z"
                transform="translate(-821.497 -685.939)"
                fill="#774d44"
            />
            <path
                id="Path_1931"
                data-name="Path 1931"
                d="M824,1023l.317.329Z"
                transform="translate(-562.688 -686.61)"
                fill="#4e3b36"
            />
            <path
                id="Path_1932"
                data-name="Path 1932"
                d="M1202,1023l.317.329Z"
                transform="translate(-820.814 -686.61)"
                fill="#774d44"
            />
            <path
                id="Path_1933"
                data-name="Path 1933"
                d="M825,1024l.317.329Z"
                transform="translate(-563.371 -687.281)"
                fill="#4e3b36"
            />
            <path
                id="Path_1934"
                data-name="Path 1934"
                d="M1201,1024l.317.329Z"
                transform="translate(-820.132 -687.281)"
                fill="#774d44"
            />
            <path
                id="Path_1935"
                data-name="Path 1935"
                d="M826,1025l.317.329L826,1025m23.15,0,.317.329-.317-.329m95.455,0,.317.329-.317-.329m-118.288.329.317.329Z"
                transform="translate(-564.054 -687.953)"
                fill="#4e3b36"
            />
            <path
                id="Path_1936"
                data-name="Path 1936"
                d="M1121,1026l.317.329Z"
                transform="translate(-765.502 -688.624)"
                fill="#31231e"
            />
            <path
                id="Path_1937"
                data-name="Path 1937"
                d="M1196.586,1026l-1.586,1.973Z"
                transform="translate(-816.034 -688.624)"
                fill="#774d44"
            />
            <path
                id="Path_1938"
                data-name="Path 1938"
                d="M828,1027l.317.329L828,1027m26.321,0,.634.658Z"
                transform="translate(-565.42 -689.295)"
                fill="#4e3b36"
            />
            <path
                id="Path_1939"
                data-name="Path 1939"
                d="M1200,1027l.317.329Z"
                transform="translate(-819.449 -689.295)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1940"
                data-name="Path 1940"
                d="M829,1028l.317.329L829,1028m25.37,0,.317.329Z"
                transform="translate(-566.102 -689.966)"
                fill="#4e3b36"
            />
            <path
                id="Path_1941"
                data-name="Path 1941"
                d="M1199,1028l.317.329Z"
                transform="translate(-818.766 -689.966)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1942"
                data-name="Path 1942"
                d="M829,1029l.317.329Z"
                transform="translate(-566.102 -690.637)"
                fill="#774d44"
            />
            <path
                id="Path_1943"
                data-name="Path 1943"
                d="M1198,1029l.317.329Z"
                transform="translate(-818.083 -690.637)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1944"
                data-name="Path 1944"
                d="M830,1030l.317.329L830,1030m24.736,0,.317.329Z"
                transform="translate(-566.785 -691.309)"
                fill="#4e3b36"
            />
            <path
                id="Path_1945"
                data-name="Path 1945"
                d="M914,1030l.317.329Z"
                transform="translate(-624.147 -691.309)"
                fill="#774d44"
            />
            <path
                id="Path_1946"
                data-name="Path 1946"
                d="M1197,1030l.317.329Z"
                transform="translate(-817.4 -691.309)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1947"
                data-name="Path 1947"
                d="M831,1031l.317.329L831,1031m23.467,0,.317.329Z"
                transform="translate(-567.468 -691.98)"
                fill="#4e3b36"
            />
            <path
                id="Path_1948"
                data-name="Path 1948"
                d="M1196,1031l.317.329Z"
                transform="translate(-816.717 -691.98)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1949"
                data-name="Path 1949"
                d="M832,1032l.317.329Z"
                transform="translate(-568.151 -692.651)"
                fill="#774d44"
            />
            <path
                id="Path_1950"
                data-name="Path 1950"
                d="M1194,1032l.317.329Z"
                transform="translate(-815.351 -692.651)"
                fill="#4e3b36"
            />
            <path
                id="Path_1951"
                data-name="Path 1951"
                d="M1195,1032l.317.329Z"
                transform="translate(-816.034 -692.651)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1952"
                data-name="Path 1952"
                d="M833,1033l.317.329L833,1033m85.307,0,.317.329Z"
                transform="translate(-568.834 -693.322)"
                fill="#774d44"
            />
            <path
                id="Path_1953"
                data-name="Path 1953"
                d="M1194,1033l.317.329Z"
                transform="translate(-815.351 -693.322)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1954"
                data-name="Path 1954"
                d="M834,1034l.317.329L834,1034m113.531,0-.634.986Z"
                transform="translate(-569.517 -693.993)"
                fill="#4e3b36"
            />
            <path
                id="Path_1955"
                data-name="Path 1955"
                d="M1193,1034l.317.329Z"
                transform="translate(-814.669 -693.993)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1956"
                data-name="Path 1956"
                d="M835,1035l.317.329Z"
                transform="translate(-570.2 -694.664)"
                fill="#4e3b36"
            />
            <path
                id="Path_1957"
                data-name="Path 1957"
                d="M1108,1035l.317.329Z"
                transform="translate(-756.624 -694.664)"
                fill="#774d44"
            />
            <path
                id="Path_1958"
                data-name="Path 1958"
                d="M1192,1035l.317.329Z"
                transform="translate(-813.986 -694.664)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1959"
                data-name="Path 1959"
                d="M835,1036l.317.329L835,1036m20.93,0,.317.329-.317-.329m64.906.109.209.112Z"
                transform="translate(-570.2 -695.336)"
                fill="#774d44"
            />
            <path
                id="Path_1960"
                data-name="Path 1960"
                d="M1191,1036l.317.329Z"
                transform="translate(-813.303 -695.336)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1961"
                data-name="Path 1961"
                d="M836,1037l.317.329Z"
                transform="translate(-570.883 -696.007)"
                fill="#4e3b36"
            />
            <path
                id="Path_1962"
                data-name="Path 1962"
                d="M912,1037l.317.329L912,1037m87.844,0-.317.658Z"
                transform="translate(-622.781 -696.007)"
                fill="#774d44"
            />
            <path
                id="Path_1963"
                data-name="Path 1963"
                d="M1190,1037l.317.329Z"
                transform="translate(-812.62 -696.007)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1964"
                data-name="Path 1964"
                d="M836,1038l.634.658L836,1038m22.516,0,.317.329-.317-.329m.951,0,.317.329Z"
                transform="translate(-570.883 -696.678)"
                fill="#774d44"
            />
            <path
                id="Path_1965"
                data-name="Path 1965"
                d="M1185.634,1038l-.634.987Z"
                transform="translate(-809.206 -696.678)"
                fill="#4e3b36"
            />
            <path
                id="Path_1966"
                data-name="Path 1966"
                d="M947.946,1038l.317.329-.317-.329M836,1038.329l.317.329-.317-.329m105.92,5.59,6.025-5.59-6.025,5.59m-105.6-5.261,3.806,3.946Z"
                transform="translate(-570.883 -696.678)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1967"
                data-name="Path 1967"
                d="M838,1040l.317.329Z"
                transform="translate(-572.248 -698.02)"
                fill="#4e3b36"
            />
            <path
                id="Path_1968"
                data-name="Path 1968"
                d="M1013,1040l.317.329Z"
                transform="translate(-691.751 -698.02)"
                fill="#31231e"
            />
            <path
                id="Path_1969"
                data-name="Path 1969"
                d="M839,1041l.317.329L839,1041m.317.329.317.329-.317-.329m108.457,0-.317.658Z"
                transform="translate(-572.931 -698.691)"
                fill="#4e3b36"
            />
            <path
                id="Path_1970"
                data-name="Path 1970"
                d="M1183,1042l.317.329Z"
                transform="translate(-807.84 -699.363)"
                fill="#774d44"
            />
            <path
                id="Path_1971"
                data-name="Path 1971"
                d="M841,1043l.317.329Z"
                transform="translate(-574.297 -700.034)"
                fill="#4e3b36"
            />
            <path
                id="Path_1972"
                data-name="Path 1972"
                d="M1182,1043l.317.329Z"
                transform="translate(-807.157 -700.034)"
                fill="#774d44"
            />
            <path
                id="Path_1973"
                data-name="Path 1973"
                d="M842,1044l.317.329Z"
                transform="translate(-574.98 -700.705)"
                fill="#4e3b36"
            />
            <path
                id="Path_1974"
                data-name="Path 1974"
                d="M950.189,1044l.317.329-.317-.329M843,1044.329l.317.329-.317-.329m106.871,0,.317.329-.317-.329m-106.554.329.317.329-.317-.329m106.237,0,.317.329-.317-.329m-105.92.329.317.329-.317-.329m105.6,0,.317.329-.317-.329m-105.286.329.317.329Z"
                transform="translate(-575.663 -700.705)"
                fill="#774d44"
            />
            <path
                id="Path_1975"
                data-name="Path 1975"
                d="M1176,1048l.317.329Z"
                transform="translate(-803.06 -703.39)"
                fill="#4e3b36"
            />
            <path
                id="Path_1976"
                data-name="Path 1976"
                d="M951.652,1048l.317.329-.317-.329M847,1048.329l.317.329Z"
                transform="translate(-578.394 -703.39)"
                fill="#774d44"
            />
            <path
                id="Path_1977"
                data-name="Path 1977"
                d="M951.7,1049l.317.329L951.7,1049m-103.7.329.317.329-.317-.329m103.383,0,.317.329Z"
                transform="translate(-579.077 -704.061)"
                fill="#4e3b36"
            />
            <path
                id="Path_1978"
                data-name="Path 1978"
                d="M849,1051l.317.329L849,1051m102.749,0,.317.329-.317-.329m-102.432.329.951.986-.951-.986m102.115,0,.317.329Z"
                transform="translate(-579.76 -705.403)"
                fill="#774d44"
            />
            <path
                id="Path_1979"
                data-name="Path 1979"
                d="M850,1053l.317.329Z"
                transform="translate(-580.443 -706.746)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1980"
                data-name="Path 1980"
                d="M1171,1053l.317.329Z"
                transform="translate(-799.645 -706.746)"
                fill="#774d44"
            />
            <path
                id="Path_1981"
                data-name="Path 1981"
                d="M851,1054l.317.329Z"
                transform="translate(-581.126 -707.417)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1982"
                data-name="Path 1982"
                d="M1170,1054l.317.329Z"
                transform="translate(-798.962 -707.417)"
                fill="#774d44"
            />
            <path
                id="Path_1983"
                data-name="Path 1983"
                d="M852,1055l9.2,9.592,6.025,4.877v-.329Z"
                transform="translate(-581.809 -708.088)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1984"
                data-name="Path 1984"
                d="M853,1055l.317.329L853,1055m99.895,0-.951,1.315Z"
                transform="translate(-582.491 -708.088)"
                fill="#4e3b36"
            />
            <path
                id="Path_1985"
                data-name="Path 1985"
                d="M1169,1055l.317.329Z"
                transform="translate(-798.28 -708.088)"
                fill="#774d44"
            />
            <path
                id="Path_1986"
                data-name="Path 1986"
                d="M854,1056l.317.329Z"
                transform="translate(-583.174 -708.759)"
                fill="#4e3b36"
            />
            <path
                id="Path_1987"
                data-name="Path 1987"
                d="M1168,1056l.317.329Z"
                transform="translate(-797.597 -708.759)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1988"
                data-name="Path 1988"
                d="M855,1057l.317.329Z"
                transform="translate(-583.857 -709.43)"
                fill="#4e3b36"
            />
            <path
                id="Path_1989"
                data-name="Path 1989"
                d="M1167,1057l.317.329Z"
                transform="translate(-796.914 -709.43)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1990"
                data-name="Path 1990"
                d="M856,1058l.317.329Z"
                transform="translate(-584.54 -710.101)"
                fill="#4e3b36"
            />
            <path
                id="Path_1991"
                data-name="Path 1991"
                d="M1166,1058l.317.329Z"
                transform="translate(-796.231 -710.101)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1992"
                data-name="Path 1992"
                d="M857,1059l.317.329L857,1059m97.041,0,.317.329Z"
                transform="translate(-585.223 -710.773)"
                fill="#4e3b36"
            />
            <path
                id="Path_1993"
                data-name="Path 1993"
                d="M1164,1059l.317.329Z"
                transform="translate(-794.865 -710.773)"
                fill="#774d44"
            />
            <path
                id="Path_1994"
                data-name="Path 1994"
                d="M1165,1059l.317.329Z"
                transform="translate(-795.548 -710.773)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1995"
                data-name="Path 1995"
                d="M858,1060l.317.329Z"
                transform="translate(-585.906 -711.444)"
                fill="#774d44"
            />
            <path
                id="Path_1996"
                data-name="Path 1996"
                d="M1161,1060l.317.329Z"
                transform="translate(-792.817 -711.444)"
                fill="#4e3b36"
            />
            <path
                id="Path_1997"
                data-name="Path 1997"
                d="M1155.854,1060l-2.854,2.631v.329l3.488-2.959Z"
                transform="translate(-787.354 -711.444)"
                fill="#9f9c9a"
            />
            <path
                id="Path_1998"
                data-name="Path 1998"
                d="M859,1061l.317.329L859,1061m95.772,0,.317.329-.317-.329m-95.455.329.317.329Z"
                transform="translate(-586.589 -712.115)"
                fill="#774d44"
            />
            <path
                id="Path_1999"
                data-name="Path 1999"
                d="M1159,1062l.317.329Z"
                transform="translate(-791.451 -712.786)"
                fill="#4e3b36"
            />
            <path
                id="Path_2000"
                data-name="Path 2000"
                d="M955.821,1062l.317.329-.317-.329m-94.821.329.317.329Z"
                transform="translate(-587.954 -712.786)"
                fill="#774d44"
            />
            <path
                id="Path_2001"
                data-name="Path 2001"
                d="M1158,1063l.317.329Z"
                transform="translate(-790.768 -713.457)"
                fill="#4e3b36"
            />
            <path
                id="Path_2002"
                data-name="Path 2002"
                d="M862,1064l.317.329L862,1064m93.552,0,.317.329-.317-.329m-93.235.329.317.329-.317-.329m92.918,0,.317.329-.317-.329m-92.6.329.317.329Z"
                transform="translate(-588.637 -714.128)"
                fill="#774d44"
            />
            <path
                id="Path_2003"
                data-name="Path 2003"
                d="M1154,1066l.317.329Z"
                transform="translate(-788.037 -715.471)"
                fill="#4e3b36"
            />
            <path
                id="Path_2004"
                data-name="Path 2004"
                d="M956.967,1066l.317.329-.317-.329m-91.967.329.317.329Z"
                transform="translate(-590.686 -715.471)"
                fill="#774d44"
            />
            <path
                id="Path_2005"
                data-name="Path 2005"
                d="M1153,1067l.317.329Z"
                transform="translate(-787.354 -716.142)"
                fill="#4e3b36"
            />
            <path
                id="Path_2006"
                data-name="Path 2006"
                d="M866,1068l.317.329L866,1068m90.7,0,.317.329L956.7,1068m-90.381.329.317.329-.317-.329m90.064,0,.317.329Z"
                transform="translate(-591.369 -716.813)"
                fill="#774d44"
            />
            <path
                id="Path_2007"
                data-name="Path 2007"
                d="M868,1070l.317.329L868,1070m89.43,0-.317.658Z"
                transform="translate(-592.735 -718.155)"
                fill="#4e3b36"
            />
            <path
                id="Path_2008"
                data-name="Path 2008"
                d="M1151,1070l.317.329Z"
                transform="translate(-785.988 -718.155)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2009"
                data-name="Path 2009"
                d="M869,1071l.317.329Z"
                transform="translate(-593.417 -718.827)"
                fill="#4e3b36"
            />
            <path
                id="Path_2010"
                data-name="Path 2010"
                d="M1150,1071l.317.329Z"
                transform="translate(-785.305 -718.827)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2011"
                data-name="Path 2011"
                d="M870,1072l.317.329L870,1072m87.844,0-.317.658Z"
                transform="translate(-594.1 -719.498)"
                fill="#4e3b36"
            />
            <path
                id="Path_2012"
                data-name="Path 2012"
                d="M1148.67,1072.33l.209.112Z"
                transform="translate(-784.397 -719.719)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2013"
                data-name="Path 2013"
                d="M871,1073l.317.329Z"
                transform="translate(-594.783 -720.169)"
                fill="#4e3b36"
            />
            <path
                id="Path_2014"
                data-name="Path 2014"
                d="M1147,1073l.317.329Z"
                transform="translate(-783.256 -720.169)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2015"
                data-name="Path 2015"
                d="M872,1074l.317.329Z"
                transform="translate(-595.466 -720.84)"
                fill="#774d44"
            />
            <path
                id="Path_2016"
                data-name="Path 2016"
                d="M1144,1074l.317.329Z"
                transform="translate(-781.208 -720.84)"
                fill="#4e3b36"
            />
            <path
                id="Path_2017"
                data-name="Path 2017"
                d="M1145,1074l.317.329Z"
                transform="translate(-781.891 -720.84)"
                fill="#774d44"
            />
            <path
                id="Path_2018"
                data-name="Path 2018"
                d="M1146,1074l.317.329Z"
                transform="translate(-782.573 -720.84)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2019"
                data-name="Path 2019"
                d="M873,1075l.317.329L873,1075m85.624,0-.634.986Z"
                transform="translate(-596.149 -721.511)"
                fill="#774d44"
            />
            <path
                id="Path_2020"
                data-name="Path 2020"
                d="M1144.67,1075.33l.209.112Z"
                transform="translate(-781.665 -721.733)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2021"
                data-name="Path 2021"
                d="M874,1076l.317.329Z"
                transform="translate(-596.832 -722.182)"
                fill="#4e3b36"
            />
            <path
                id="Path_2022"
                data-name="Path 2022"
                d="M1143,1076l.317.329Z"
                transform="translate(-780.525 -722.182)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2023"
                data-name="Path 2023"
                d="M875,1077l.317.329Z"
                transform="translate(-597.515 -722.854)"
                fill="#4e3b36"
            />
            <path
                id="Path_2024"
                data-name="Path 2024"
                d="M1142,1077l.317.329Z"
                transform="translate(-779.842 -722.854)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2025"
                data-name="Path 2025"
                d="M876,1078l.317.329L876,1078m83.4,0,.317.329Z"
                transform="translate(-598.198 -723.525)"
                fill="#4e3b36"
            />
            <path
                id="Path_2026"
                data-name="Path 2026"
                d="M1140,1078l.317.329Z"
                transform="translate(-778.476 -723.525)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2027"
                data-name="Path 2027"
                d="M877,1079l.317.329Z"
                transform="translate(-598.88 -724.196)"
                fill="#4e3b36"
            />
            <path
                id="Path_2028"
                data-name="Path 2028"
                d="M1137.317,1079l-.317.658Z"
                transform="translate(-776.428 -724.196)"
                fill="#774d44"
            />
            <path
                id="Path_2029"
                data-name="Path 2029"
                d="M1139,1079l.317.329Z"
                transform="translate(-777.793 -724.196)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2030"
                data-name="Path 2030"
                d="M878,1080l.317.329Z"
                transform="translate(-599.563 -724.867)"
                fill="#774d44"
            />
            <path
                id="Path_2031"
                data-name="Path 2031"
                d="M1136,1080l.317.329Z"
                transform="translate(-775.745 -724.867)"
                fill="#4e3b36"
            />
            <path
                id="Path_2032"
                data-name="Path 2032"
                d="M1138,1080l.317.329Z"
                transform="translate(-777.11 -724.867)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2033"
                data-name="Path 2033"
                d="M880,1081l.317.329L880,1081m80.55,0,.317.329Z"
                transform="translate(-600.929 -725.538)"
                fill="#4e3b36"
            />
            <path
                id="Path_2034"
                data-name="Path 2034"
                d="M1135,1081l.317.329Z"
                transform="translate(-775.062 -725.538)"
                fill="#774d44"
            />
            <path
                id="Path_2035"
                data-name="Path 2035"
                d="M1136,1081l.317.329Z"
                transform="translate(-775.745 -725.538)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2036"
                data-name="Path 2036"
                d="M881,1082l.317.329Z"
                transform="translate(-601.612 -726.21)"
                fill="#774d44"
            />
            <path
                id="Path_2037"
                data-name="Path 2037"
                d="M882,1082l.317.329L882,1082m79.282,0-.634.987Z"
                transform="translate(-602.295 -726.21)"
                fill="#4e3b36"
            />
            <path
                id="Path_2038"
                data-name="Path 2038"
                d="M1133,1082l.317.329Z"
                transform="translate(-773.696 -726.21)"
                fill="#774d44"
            />
            <path
                id="Path_2039"
                data-name="Path 2039"
                d="M1134.67,1082.33l.209.112Z"
                transform="translate(-774.837 -726.431)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2040"
                data-name="Path 2040"
                d="M883,1083l.317.329Z"
                transform="translate(-602.978 -726.881)"
                fill="#4e3b36"
            />
            <path
                id="Path_2041"
                data-name="Path 2041"
                d="M1132.67,1083.33l.209.112Z"
                transform="translate(-773.471 -727.102)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2042"
                data-name="Path 2042"
                d="M884,1084l.317.329Z"
                transform="translate(-603.661 -727.552)"
                fill="#4e3b36"
            />
            <path
                id="Path_2043"
                data-name="Path 2043"
                d="M1131,1084l.317.329Z"
                transform="translate(-772.331 -727.552)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2044"
                data-name="Path 2044"
                d="M884,1085l.317.329L884,1085m77.7,0-1.586,1.973Z"
                transform="translate(-603.661 -728.223)"
                fill="#774d44"
            />
            <path
                id="Path_2045"
                data-name="Path 2045"
                d="M1130,1085l.317.329Z"
                transform="translate(-771.648 -728.223)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2046"
                data-name="Path 2046"
                d="M885,1086l.317.329Z"
                transform="translate(-604.343 -728.894)"
                fill="#774d44"
            />
            <path
                id="Path_2047"
                data-name="Path 2047"
                d="M1129,1086l.317.329Z"
                transform="translate(-770.965 -728.894)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2048"
                data-name="Path 2048"
                d="M886,1087l.317.329Z"
                transform="translate(-605.026 -729.565)"
                fill="#774d44"
            />
            <path
                id="Path_2049"
                data-name="Path 2049"
                d="M1128,1087l.317.329Z"
                transform="translate(-770.282 -729.565)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2050"
                data-name="Path 2050"
                d="M887,1088l.317.329Z"
                transform="translate(-605.709 -730.237)"
                fill="#774d44"
            />
            <path
                id="Path_2051"
                data-name="Path 2051"
                d="M1125,1088l.317.329Z"
                transform="translate(-768.233 -730.237)"
                fill="#4e3b36"
            />
            <path
                id="Path_2052"
                data-name="Path 2052"
                d="M1127,1088l.317.329Z"
                transform="translate(-769.599 -730.237)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2053"
                data-name="Path 2053"
                d="M888,1089l.317.329Z"
                transform="translate(-606.392 -730.908)"
                fill="#774d44"
            />
            <path
                id="Path_2054"
                data-name="Path 2054"
                d="M1124,1089l.317.329Z"
                transform="translate(-767.55 -730.908)"
                fill="#4e3b36"
            />
            <path
                id="Path_2055"
                data-name="Path 2055"
                d="M1126,1089l.317.329Z"
                transform="translate(-768.916 -730.908)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2056"
                data-name="Path 2056"
                d="M889,1090l.317.329Z"
                transform="translate(-607.075 -731.579)"
                fill="#774d44"
            />
            <path
                id="Path_2057"
                data-name="Path 2057"
                d="M1122.317,1090l-.317.658Z"
                transform="translate(-766.185 -731.579)"
                fill="#4e3b36"
            />
            <path
                id="Path_2058"
                data-name="Path 2058"
                d="M1125,1090l.317.329Z"
                transform="translate(-768.233 -731.579)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2059"
                data-name="Path 2059"
                d="M890,1091l.317.329Z"
                transform="translate(-607.758 -732.25)"
                fill="#774d44"
            />
            <path
                id="Path_2060"
                data-name="Path 2060"
                d="M1119,1092.329v.329l1.9-.658Z"
                transform="translate(-764.136 -732.921)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2061"
                data-name="Path 2061"
                d="M891,1092l.317.329L891,1092m72.622,0,.317.329-.317-.329m-71.988.329.317.329-.317-.329m.317.329.317.329Z"
                transform="translate(-608.441 -732.921)"
                fill="#774d44"
            />
            <path
                id="Path_2062"
                data-name="Path 2062"
                d="M895,1094l.317.329L895,1094m70.4,0,.317.329Z"
                transform="translate(-611.172 -734.264)"
                fill="#4e3b36"
            />
            <path
                id="Path_2063"
                data-name="Path 2063"
                d="M1118,1094l.317.329Z"
                transform="translate(-763.453 -734.264)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2064"
                data-name="Path 2064"
                d="M896,1095l.317.329Z"
                transform="translate(-611.855 -734.935)"
                fill="#774d44"
            />
            <path
                id="Path_2065"
                data-name="Path 2065"
                d="M1112.269,1095l-1.269.987v.329Z"
                transform="translate(-758.673 -734.935)"
                fill="#4e3b36"
            />
            <path
                id="Path_2066"
                data-name="Path 2066"
                d="M1113.951,1095l-.951,1.315Z"
                transform="translate(-760.039 -734.935)"
                fill="#774d44"
            />
            <path
                id="Path_2067"
                data-name="Path 2067"
                d="M1117,1095l.317.329Z"
                transform="translate(-762.77 -734.935)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2068"
                data-name="Path 2068"
                d="M897,1096l.317.329Z"
                transform="translate(-612.538 -735.606)"
                fill="#774d44"
            />
            <path
                id="Path_2069"
                data-name="Path 2069"
                d="M1116,1096l.317.329Z"
                transform="translate(-762.087 -735.606)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2070"
                data-name="Path 2070"
                d="M898,1097l.317.329Z"
                transform="translate(-613.221 -736.277)"
                fill="#774d44"
            />
            <path
                id="Path_2071"
                data-name="Path 2071"
                d="M1115,1097l.317.329Z"
                transform="translate(-761.404 -736.277)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2072"
                data-name="Path 2072"
                d="M900,1098l.317.329Z"
                transform="translate(-614.586 -736.948)"
                fill="#774d44"
            />
            <path
                id="Path_2073"
                data-name="Path 2073"
                d="M901,1098l.317.329Z"
                transform="translate(-615.269 -736.948)"
                fill="#4e3b36"
            />
            <path
                id="Path_2074"
                data-name="Path 2074"
                d="M968.548,1098l.317.329-.317-.329m-67.548.329v.329l6.977,3.946Z"
                transform="translate(-615.269 -736.948)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2075"
                data-name="Path 2075"
                d="M902,1099l.317.329Z"
                transform="translate(-615.952 -737.62)"
                fill="#774d44"
            />
            <path
                id="Path_2076"
                data-name="Path 2076"
                d="M1109,1099l.317.329Z"
                transform="translate(-757.307 -737.62)"
                fill="#4e3b36"
            />
            <path
                id="Path_2077"
                data-name="Path 2077"
                d="M1110.67,1099.33l.209.112Z"
                transform="translate(-758.448 -737.841)"
                fill="#774d44"
            />
            <path
                id="Path_2078"
                data-name="Path 2078"
                d="M1112.67,1099.33l.209.112Z"
                transform="translate(-759.813 -737.841)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2079"
                data-name="Path 2079"
                d="M904,1100l.317.329L904,1100m64.694,0-.951,1.315Z"
                transform="translate(-617.318 -738.291)"
                fill="#774d44"
            />
            <path
                id="Path_2080"
                data-name="Path 2080"
                d="M1109.67,1100.33l.209.112Z"
                transform="translate(-757.765 -738.512)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2081"
                data-name="Path 2081"
                d="M905,1101l.317.329Z"
                transform="translate(-618.001 -738.962)"
                fill="#774d44"
            />
            <path
                id="Path_2082"
                data-name="Path 2082"
                d="M906,1101l.317.329Z"
                transform="translate(-618.684 -738.962)"
                fill="#4e3b36"
            />
            <path
                id="Path_2083"
                data-name="Path 2083"
                d="M1108,1101l.317.329Z"
                transform="translate(-756.624 -738.962)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2084"
                data-name="Path 2084"
                d="M907,1102l.317.329Z"
                transform="translate(-619.367 -739.633)"
                fill="#4e3b36"
            />
            <path
                id="Path_2085"
                data-name="Path 2085"
                d="M1107,1102l.317.329Z"
                transform="translate(-755.941 -739.633)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2086"
                data-name="Path 2086"
                d="M908,1103l.317.329Z"
                transform="translate(-620.049 -740.304)"
                fill="#774d44"
            />
            <path
                id="Path_2087"
                data-name="Path 2087"
                d="M909.667,1103.109l.211.112-.211-.112M971.3,1103l-.317.658Z"
                transform="translate(-621.188 -740.304)"
                fill="#4e3b36"
            />
            <path
                id="Path_2088"
                data-name="Path 2088"
                d="M1106,1103l.317.329Z"
                transform="translate(-755.258 -740.304)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2089"
                data-name="Path 2089"
                d="M911,1104l.951.986Z"
                transform="translate(-622.098 -740.975)"
                fill="#4e3b36"
            />
            <path
                id="Path_2090"
                data-name="Path 2090"
                d="M1099,1105.658v.329l2.22-.986Z"
                transform="translate(-750.478 -741.647)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2091"
                data-name="Path 2091"
                d="M911,1105l.317.329Z"
                transform="translate(-622.098 -741.647)"
                fill="#774d44"
            />
            <path
                id="Path_2092"
                data-name="Path 2092"
                d="M1101,1105l.317.329Z"
                transform="translate(-751.844 -741.647)"
                fill="#4e3b36"
            />
            <path
                id="Path_2093"
                data-name="Path 2093"
                d="M972.254,1105l.317.329-.317-.329m-60.254.329.317.329Z"
                transform="translate(-622.781 -741.647)"
                fill="#774d44"
            />
            <path
                id="Path_2094"
                data-name="Path 2094"
                d="M1097.317,1106l-.317.658Z"
                transform="translate(-749.113 -742.318)"
                fill="#4e3b36"
            />
            <path
                id="Path_2095"
                data-name="Path 2095"
                d="M972.881,1106.33l.209.112-.209-.112m-58.881.22.317.329Z"
                transform="translate(-624.147 -742.539)"
                fill="#774d44"
            />
            <path
                id="Path_2096"
                data-name="Path 2096"
                d="M915,1107l.317.329Z"
                transform="translate(-624.83 -742.989)"
                fill="#4e3b36"
            />
            <path
                id="Path_2097"
                data-name="Path 2097"
                d="M974.172,1107l.317.329-.317-.329m-57.505.437.211.112Z"
                transform="translate(-625.968 -742.989)"
                fill="#774d44"
            />
            <path
                id="Path_2098"
                data-name="Path 2098"
                d="M918,1108l.317.329L918,1108m56.131,0-.317.658Z"
                transform="translate(-626.878 -743.66)"
                fill="#4e3b36"
            />
            <path
                id="Path_2099"
                data-name="Path 2099"
                d="M1095.317,1108l-.317.658Z"
                transform="translate(-747.747 -743.66)"
                fill="#774d44"
            />
            <path
                id="Path_2100"
                data-name="Path 2100"
                d="M1097,1108l.317.329Z"
                transform="translate(-749.113 -743.66)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2101"
                data-name="Path 2101"
                d="M919,1109l.317.329Z"
                transform="translate(-627.561 -744.331)"
                fill="#774d44"
            />
            <path
                id="Path_2102"
                data-name="Path 2102"
                d="M920,1109l.317.329Z"
                transform="translate(-628.244 -744.331)"
                fill="#4e3b36"
            />
            <path
                id="Path_2103"
                data-name="Path 2103"
                d="M1096,1109l.317.329Z"
                transform="translate(-748.43 -744.331)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2104"
                data-name="Path 2104"
                d="M923,1110l.317.329Z"
                transform="translate(-630.293 -745.002)"
                fill="#774d44"
            />
            <path
                id="Path_2105"
                data-name="Path 2105"
                d="M924,1110l.317.329Z"
                transform="translate(-630.976 -745.002)"
                fill="#4e3b36"
            />
            <path
                id="Path_2106"
                data-name="Path 2106"
                d="M925,1110l.317.329Z"
                transform="translate(-631.658 -745.002)"
                fill="#774d44"
            />
            <path
                id="Path_2107"
                data-name="Path 2107"
                d="M924,1111v.329l3.805.658Z"
                transform="translate(-630.976 -745.674)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2108"
                data-name="Path 2108"
                d="M929,1110l.317.329Z"
                transform="translate(-634.39 -745.002)"
                fill="#774d44"
            />
            <path
                id="Path_2109"
                data-name="Path 2109"
                d="M1091.67,1110.33l.209.112Z"
                transform="translate(-745.473 -745.224)"
                fill="#4e3b36"
            />
            <path
                id="Path_2110"
                data-name="Path 2110"
                d="M1093,1110l.317.329Z"
                transform="translate(-746.381 -745.002)"
                fill="#774d44"
            />
            <path
                id="Path_2111"
                data-name="Path 2111"
                d="M1094.67,1110.33l.209.112Z"
                transform="translate(-747.522 -745.224)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2112"
                data-name="Path 2112"
                d="M930,1111l.317.329Z"
                transform="translate(-635.073 -745.674)"
                fill="#774d44"
            />
            <path
                id="Path_2113"
                data-name="Path 2113"
                d="M1054.67,1111.33l.209.112Z"
                transform="translate(-720.207 -745.895)"
                fill="#31231e"
            />
            <path
                id="Path_2114"
                data-name="Path 2114"
                d="M1084.9,1111l-1.9,1.315v.329Z"
                transform="translate(-739.552 -745.674)"
                fill="#4e3b36"
            />
            <path
                id="Path_2115"
                data-name="Path 2115"
                d="M1090,1111l.317.329Z"
                transform="translate(-744.333 -745.674)"
                fill="#774d44"
            />
            <path
                id="Path_2116"
                data-name="Path 2116"
                d="M1087,1112.658v.329l1.9-.987Z"
                transform="translate(-742.284 -746.345)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2117"
                data-name="Path 2117"
                d="M931,1112v.329l2.22.329Z"
                transform="translate(-635.756 -746.345)"
                fill="#774d44"
            />
            <path
                id="Path_2118"
                data-name="Path 2118"
                d="M936,1112l.317.329L936,1112m.634.329.317.329Z"
                transform="translate(-639.17 -746.345)"
                fill="#4e3b36"
            />
            <path
                id="Path_2119"
                data-name="Path 2119"
                d="M1023,1113l.317.329Z"
                transform="translate(-698.58 -747.016)"
                fill="#31231e"
            />
            <path
                id="Path_2120"
                data-name="Path 2120"
                d="M1088,1113l.317.329Z"
                transform="translate(-742.967 -747.016)"
                fill="#774d44"
            />
            <path
                id="Path_2121"
                data-name="Path 2121"
                d="M937,1114v.329l4.123,1.644v-.329Z"
                transform="translate(-639.853 -747.687)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2122"
                data-name="Path 2122"
                d="M939,1114l.317.329L939,1114m.634.329v.329h.951Z"
                transform="translate(-641.219 -747.687)"
                fill="#774d44"
            />
            <path
                id="Path_2123"
                data-name="Path 2123"
                d="M944,1115l.317.329Z"
                transform="translate(-644.633 -748.358)"
                fill="#4e3b36"
            />
            <path
                id="Path_2124"
                data-name="Path 2124"
                d="M1086,1115l.317.329Z"
                transform="translate(-741.601 -748.358)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2125"
                data-name="Path 2125"
                d="M945.667,1116.33l.211.112Z"
                transform="translate(-645.771 -749.251)"
                fill="#774d44"
            />
            <path
                id="Path_2126"
                data-name="Path 2126"
                d="M1080.317,1116l-.317.658Z"
                transform="translate(-737.504 -749.029)"
                fill="#4e3b36"
            />
            <path
                id="Path_2127"
                data-name="Path 2127"
                d="M1082,1116l.317.329Z"
                transform="translate(-738.87 -749.029)"
                fill="#774d44"
            />
            <path
                id="Path_2128"
                data-name="Path 2128"
                d="M1083,1116v.329h.951Z"
                transform="translate(-739.552 -749.029)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2129"
                data-name="Path 2129"
                d="M947,1117l.317.329Z"
                transform="translate(-646.682 -749.701)"
                fill="#774d44"
            />
            <path
                id="Path_2130"
                data-name="Path 2130"
                d="M1081.67,1117.33l.209.112Z"
                transform="translate(-738.644 -749.922)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2131"
                data-name="Path 2131"
                d="M949.667,1118.33l.211.112Z"
                transform="translate(-648.503 -750.593)"
                fill="#774d44"
            />
            <path
                id="Path_2132"
                data-name="Path 2132"
                d="M951,1118v.329l9.2,1.973v-.329Z"
                transform="translate(-649.413 -750.372)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2133"
                data-name="Path 2133"
                d="M953,1118l.317.329Z"
                transform="translate(-650.779 -750.372)"
                fill="#774d44"
            />
            <path
                id="Path_2134"
                data-name="Path 2134"
                d="M954,1118l.317.329L954,1118m39.324,0,.317.329Z"
                transform="translate(-651.462 -750.372)"
                fill="#4e3b36"
            />
            <path
                id="Path_2135"
                data-name="Path 2135"
                d="M1079,1118l.317.329Z"
                transform="translate(-736.821 -750.372)"
                fill="#774d44"
            />
            <path
                id="Path_2136"
                data-name="Path 2136"
                d="M1080,1118l.317.329Z"
                transform="translate(-737.504 -750.372)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2137"
                data-name="Path 2137"
                d="M956.667,1119.33l.211.112Z"
                transform="translate(-653.283 -751.264)"
                fill="#774d44"
            />
            <path
                id="Path_2138"
                data-name="Path 2138"
                d="M1074.67,1119.33l.209.112Z"
                transform="translate(-733.864 -751.264)"
                fill="#4e3b36"
            />
            <path
                id="Path_2139"
                data-name="Path 2139"
                d="M1076,1119l.317.329Z"
                transform="translate(-734.772 -751.043)"
                fill="#774d44"
            />
            <path
                id="Path_2140"
                data-name="Path 2140"
                d="M1077,1119v.329h.951Z"
                transform="translate(-735.455 -751.043)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2141"
                data-name="Path 2141"
                d="M959,1120v.329l1.586.329v-.329Z"
                transform="translate(-654.876 -751.714)"
                fill="#774d44"
            />
            <path
                id="Path_2142"
                data-name="Path 2142"
                d="M962,1120l.317.329L962,1120m34.884,0,.317.329Z"
                transform="translate(-656.925 -751.714)"
                fill="#4e3b36"
            />
            <path
                id="Path_2143"
                data-name="Path 2143"
                d="M1073,1120l.317.329Z"
                transform="translate(-732.724 -751.714)"
                fill="#774d44"
            />
            <path
                id="Path_2144"
                data-name="Path 2144"
                d="M1061,1121.329v.329l4.757-.658Z"
                transform="translate(-724.529 -752.385)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2145"
                data-name="Path 2145"
                d="M964,1121v.329h.951L964,1121m25.37.658v.329l5.074-.658Z"
                transform="translate(-658.29 -752.385)"
                fill="#4e3b36"
            />
            <path
                id="Path_2146"
                data-name="Path 2146"
                d="M1058,1122v.329l2.22-.329Z"
                transform="translate(-722.481 -753.057)"
                fill="#774d44"
            />
            <path
                id="Path_2147"
                data-name="Path 2147"
                d="M1065,1121v.329h1.586Z"
                transform="translate(-727.261 -752.385)"
                fill="#4e3b36"
            />
            <path
                id="Path_2148"
                data-name="Path 2148"
                d="M1001.713,1121l.317.329-.317-.329m-31.713.329.317.329Z"
                transform="translate(-662.388 -752.385)"
                fill="#774d44"
            />
            <path
                id="Path_2149"
                data-name="Path 2149"
                d="M1051,1122v.329h2.22Z"
                transform="translate(-717.7 -753.057)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2150"
                data-name="Path 2150"
                d="M977.667,1123.33l.211.112Z"
                transform="translate(-667.623 -753.949)"
                fill="#774d44"
            />
            <path
                id="Path_2151"
                data-name="Path 2151"
                d="M979,1123l.317.329L979,1123m.951,0v.329h.951Z"
                transform="translate(-668.534 -753.728)"
                fill="#4e3b36"
            />
            <path
                id="Path_2152"
                data-name="Path 2152"
                d="M1050,1123l.317.329Z"
                transform="translate(-717.018 -753.728)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2153"
                data-name="Path 2153"
                d="M980.667,1124.33l.211.112Z"
                transform="translate(-669.672 -754.62)"
                fill="#774d44"
            />
            <path
                id="Path_2154"
                data-name="Path 2154"
                d="M982,1124v.329h1.586Z"
                transform="translate(-670.582 -754.399)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2155"
                data-name="Path 2155"
                d="M987,1124l.317.329Z"
                transform="translate(-673.997 -754.399)"
                fill="#774d44"
            />
            <path
                id="Path_2156"
                data-name="Path 2156"
                d="M988,1124l.317.329Z"
                transform="translate(-674.679 -754.399)"
                fill="#4e3b36"
            />
            <path
                id="Path_2157"
                data-name="Path 2157"
                d="M1027,1125.658l1.9-.658Z"
                transform="translate(-701.311 -755.07)"
                fill="#774d44"
            />
            <path
                id="Path_2158"
                data-name="Path 2158"
                d="M1033,1124l.317.329L1033,1124m1.481.109.209.112Z"
                transform="translate(-705.409 -754.399)"
                fill="#4e3b36"
            />
            <path
                id="Path_2159"
                data-name="Path 2159"
                d="M1039,1124v.329h1.269Z"
                transform="translate(-709.506 -754.399)"
                fill="#774d44"
            />
            <path
                id="Path_2160"
                data-name="Path 2160"
                d="M1006.125,1124v.329h2.22l-2.22-.329m-17.125.329v.329l2.854.329Z"
                transform="translate(-675.362 -754.399)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2161"
                data-name="Path 2161"
                d="M996,1125l.317.329Z"
                transform="translate(-680.142 -755.07)"
                fill="#774d44"
            />
            <path
                id="Path_2162"
                data-name="Path 2162"
                d="M1007.831,1125l.317.329-.317-.329m.951,0v.329h1.586l-1.586-.329m2.854,0,.317.329-.317-.329m-4.123.329.317.329-.317-.329m-9.514.329.317.329Z"
                transform="translate(-681.508 -755.07)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2163"
                data-name="Path 2163"
                d="M999,1127v.329h6.343Z"
                transform="translate(-682.191 -756.412)"
                fill="#774d44"
            />
            <path
                id="Path_2164"
                data-name="Path 2164"
                d="M1019,1127v.329h.951Z"
                transform="translate(-695.849 -756.412)"
                fill="#9f9c9a"
            />
            <path
                id="Path_2165"
                data-name="Path 2165"
                d="M1022.67,1127.33l.209.112Z"
                transform="translate(-698.355 -756.634)"
                fill="#774d44"
            />
            <path
                id="Path_2166"
                data-name="Path 2166"
                d="M1024,1127v.329h.951Z"
                transform="translate(-699.263 -756.412)"
                fill="#9f9c9a"
            />
            </g>

            <motion.path
            id="LeftEyebrow"
            d="M820.741,618.543c5.659-1.215,10.307-5.447,16.173-6.187,4.628-.584,9.051-1.128,13.636.1,3.019.806,7.4,3.888,10.519,3.337,2.158-.382,3.9-3.383,2.767-5.454-1.267-2.317-4.177-2.494-6.309-3.457-8.4-3.8-19.458-2.5-27.59,1.346C826.542,609.829,817.832,613.656,820.741,618.543Z"
            transform="translate(-560.063 -405.792)"
            fill="#31231e"
            initial={{
                translateX: -560.063,
                translateY: -405.792,
            }}
            animate={{
                y: hovered ? -20 : 0,
            }}
            />
            <motion.path
            id="RightEyebrow"
            d="M1115.6,618.207c-4.522.509-10.221.587-14.258,3.046a3.553,3.553,0,0,0,.939,6.485c1.976.452,4.453-1.063,6.343-1.542,5.125-1.3,9.986-2.539,15.222-1.006a38.44,38.44,0,0,1,12.672,6.428c1.437,1.055,3.358,3.73,5.344,3.369,1.392-.253,1.4-2.082,1.012-3.149-.92-2.555-3.422-5.041-5.391-6.761A29.178,29.178,0,0,0,1115.6,618.207Z"
            transform="translate(-750.908 -414.815)"
            fill="#31231e"
            initial={{
                translateX: -750.908,
                translateY: -414.815,
            }}
            animate={{
                y: hovered ? -20 : 0,
            }}
            />

            {isTyping ? (
                <>
                    <g id="LeftEye" transform="translate(264 -14)">
                        <path id="Path_2167" data-name="Path 2167" d="M1073.523,718.287c1.357-6.1,9.476-11.423,18.715-12.5,4.485-.526,9.621,1.054,13.816,2.343a20.644,20.644,0,0,1,13.283,11.426c1.239-.951.6-2.03.3-3.164-.858-3.155-4.291-5.765-8.04-7.682-4.75-2.429-12.795-5.706-19.064-5.372-4.984.263-8.521,2.737-12.529,5.017-2.878,1.636-4.987,4.874-6.391,7.194C1073.088,716.409,1072.175,717.621,1073.523,718.287Z" transform="matrix(0.966, 0.259, -0.259, 0.966, -850.031, -725.682)" fill="#31231e"/>
                        <path id="Path_2169" data-name="Path 2169" d="M15.951,2.944c13.255,0,23.8,10.81,23.8,16.056s-10.549-9.862-23.8-9.862-21.485,5.247-21.485,0S2.7,2.944,15.951,2.944Z" transform="translate(5.534 240.839)" fill="#3b2a2a"/>
                    </g>
                    <g id="RightEye" transform="translate(264 -14)">
                        <path id="Path_1353" data-name="Path 1353" d="M1073.511,725.416c2.046-14.578,20.125-21.615,31.976-15.841,7.221,3.517,10.709,10.329,13.056,17.814,1.218-1.483.593-3.166.292-4.932-.844-4.919-4.218-8.988-7.9-11.977-8.81-7.146-22.38-6.375-30.761,1.188a24.981,24.981,0,0,0-6.574,9.474C1073.083,722.488,1072.186,724.378,1073.511,725.416Z" transform="translate(-995.052 -466.443)" fill="#31231e"/>
                        <path id="Path_2168" data-name="Path 2168" d="M17.109,7.425c13.255,0,22.647,6.328,22.647,11.575s-7.069-5.381-20.324-5.381S-6.261,22.754-6.261,17.507,3.854,7.425,17.109,7.425Z" transform="translate(84.029 241.935)" fill="#3b2a2a"/>
                    </g>
                </>
            ) : (
                <>
                <g id="LeftEye" transform="translate(75.053 -43.141)">
            <path
                id="Path_1290"
                data-name="Path 1290"
                d="M819,703.99c2.617-2.258,3.745-7.1,6.354-9.852,7.8-8.218,21.248-9.865,30.02-2.187a30.075,30.075,0,0,1,6.518,7.853c.863,1.557,1.015,3.826,2.456,4.843-.25,1.185-.377,2.664.951,2.959-1.934-12.432-10.274-21.036-22.516-22.595C832.359,683.685,819.007,692.36,819,703.99Z"
                transform="translate(-634.855 -416.56)"
                fill="#31231e"
            />
            <path
                id="Path_1306"
                data-name="Path 1306"
                d="M856.7,722.074c-.37-3.852,7.455-12.306,2.553-17.635s-22.332-3.78-20.861-5.293c3.37-3.466-3.558,1.969,0,2.491,9.33,1.353,26.588,9.856,15.879,18.837,2.44,1.738,10.513,4.148,12.53,1.223,1.234-1.789.925-5.438.614-7.515-1.2-8-6.406-15.654-13.886-18.481a22.106,22.106,0,0,0-20.613,2.357,21.757,21.757,0,0,0-7.486,9.877c-.5,1.214-1.321,3.218-.674,4.518.663,1.333,4.1,3.429,11.457,5.374C843.759,719.823,855.323,721.628,856.7,722.074Z"
                transform="translate(-638.622 -422.807)"
                fill="#fff"
            />
            <motion.g
                id="LeftEyeBall"
                transform="matrix(0.829, -0.559, 0.559, 0.829, -121.879, 162.463)"
                initial={{
                translateX: 5,
                translateY: 0,
                rotate: -10,
                }}
                animate={{
                rotate: rotation,
                }}
            >
                <circle
                id="LeftEyeball-2"
                data-name="LeftEyeball"
                cx="11.5"
                cy="11.5"
                r="11.5"
                transform="matrix(-0.891, -0.454, 0.454, -0.891, 208.902, 300.26)"
                fill="#2e0f0f"
                />
                <circle
                id="LeftEyeball-3"
                data-name="LeftEyeball"
                cx="2.5"
                cy="2.5"
                r="2.5"
                transform="matrix(-0.891, -0.454, 0.454, -0.891, 204.969, 288.155)"
                />
                <ellipse
                id="LeftEyeball-4"
                data-name="LeftEyeball"
                cx="21"
                cy="17.5"
                rx="21"
                ry="17.5"
                transform="matrix(-0.996, -0.087, 0.087, -0.996, 226.666, 304.245)"
                fill="none"
                />
            </motion.g>
            </g>
            <g id="RightEye" transform="translate(-74.67 15.53)">
            <path
                id="Path_1353"
                data-name="Path 1353"
                d="M1073.511,725.416c2.046-14.578,20.125-21.615,31.976-15.841,7.221,3.517,10.709,10.329,13.056,17.814,1.218-1.483.593-3.166.292-4.932-.844-4.919-4.218-8.988-7.9-11.977-8.81-7.146-22.38-6.375-30.761,1.188a24.981,24.981,0,0,0-6.574,9.474C1073.083,722.488,1072.186,724.378,1073.511,725.416Z"
                transform="translate(-658.336 -489.241)"
                fill="#31231e"
            />
            <path
                id="Path_1385"
                data-name="Path 1385"
                d="M1109.348,738.211c-.219-2.215-27.359-3.948-27.359-3.948s25.573,5.682,26.959,2.763c5.118-10.767-6.593-23.822-.717-13.613,2.721,4.728,1.754,9.54.4,14.468l.317.329c2.493-.48,6.936-.447,8.645-2.743,1.639-2.2-.679-7.316-1.7-9.423a21.1,21.1,0,0,0-21.536-12.111,22.069,22.069,0,0,0-16.49,10.8c-1.95,3.436-6.26,11.488-1.874,14.553.994.7,4.657,1.236,12.995.969S1107.916,738.211,1109.348,738.211Z"
                transform="translate(-659.206 -494.801)"
                fill="#fff"
            />
            <motion.g
                id="RightEyeBall"
                transform="translate(182.984 -12.392) rotate(-10)"
                initial={{
                translateX: 230,
                translateY: -55,
                rotate: -10,
                }}
                animate={{
                rotate: rotation,
                }}
            >
                <circle
                id="LeftEyeball-5"
                data-name="LeftEyeball"
                cx="11.5"
                cy="11.5"
                r="11.5"
                transform="matrix(-0.891, -0.454, 0.454, -0.891, 208.902, 300.26)"
                fill="#2e0f0f"
                />
                <circle
                id="LeftEyeball-6"
                data-name="LeftEyeball"
                cx="2.5"
                cy="2.5"
                r="2.5"
                transform="matrix(-0.891, -0.454, 0.454, -0.891, 204.969, 288.155)"
                />
                <ellipse
                id="LeftEyeball-7"
                data-name="LeftEyeball"
                cx="21"
                cy="17.5"
                rx="21"
                ry="17.5"
                transform="matrix(-0.996, -0.087, 0.087, -0.996, 226.666, 304.245)"
                fill="none"
                />
            </motion.g>
            </g>
                </>
            )}

            {hovered || isTyping ? (
            <g id="Mouth">
                <path
                id="Path_1751"
                data-name="Path 1751"
                d="M881.859,909c-.507,2.162,2.065,4.57,2.972,6.577a47.866,47.866,0,0,0,9.4,14.463c1.656,1.683,3.653,3.624,6.025,3.951-.834-4.149,3.454-3.307,6.025-2.808,4.663.9,9.876,2.784,14.588,2.808,5.09.026,12.286-1.648,17.125-.064,2.765.9,1.982,2.957.951,5,2.518.7,5.274-1.6,7.294-2.985,6.073-4.16,12.384-10.905,14.271-18.388l1.268-.658.951.329-.317-.986v-.329h.951v-.329c-1.012-.466-2.3-1.277-3.171-.329l-.951-.329c0,1.984-4.364,1.644-5.708,1.644-5.705,0-13.468-1.531-18.71.329l.634.986v.329c-4.373,1.926-9.894.986-14.588.986v-.329h.634v-.329h-1.268v1.315l19.028-.018,13.954-.64c-1.392,4.157-8.718,4.987-12.368,5.5-12.507,1.747-26.469.292-38.689-2.711-3.624-.89-7.8-2.11-10.782-4.487-.573-.456-3.117-1.986-2.273-3,.733-.883,3.585.4,4.493.606,3.684.824,8,2.513,11.734,1.794v-.329l-5.391-1.644.951-.658c-5.069-1.563-13.607-.721-17.125-5.261Z"
                transform="translate(-600.185 -609.548)"
                fill="#31231e"
                />
                <path
                id="Path_1817"
                data-name="Path 1817"
                d="M932,937.959c2.687.251,5.255,1.7,7.928,2.194a132.02,132.02,0,0,0,24.419,2.081c3.606,0,7.953.4,11.417-.658-1.535-2.955-6.146-2.532-8.88-2.655a225.169,225.169,0,0,1-25.37-2.087C938.955,936.431,932.936,934.614,932,937.959Z"
                transform="translate(-636.438 -627.968)"
                fill="#9f9c9a"
                />
                <path
                id="Path_1903"
                data-name="Path 1903"
                d="M978,1003c2.56,4.232,11.4,3.732,15.222,1.973v-1.315l-7.294.273Z"
                transform="translate(-667.851 -672.951)"
                fill="#9f9c9a"
                />
                <path
                id="Path_1915"
                data-name="Path 1915"
                d="M938,1010c.528,1.667,2.455,3.019,3.805,4.022,3.564,2.647,7.868,5.169,12.368,5.186v-.329c-5.731-.608-11.751-5.376-16.173-8.878m24.419,9.865v.329l12.051-1.315,5.391-2.959,6.343-5.59c-1.947-.552-5.9,2.894-7.611,3.946A41.5,41.5,0,0,1,962.419,1019.865Z"
                transform="translate(-640.536 -677.649)"
                fill="#31231e"
                />
            </g>
            ) : (
            <g id="Mouth">
                <path
                id="Path_2173"
                data-name="Path 2173"
                d="M816.625,619.528c7.819-1.215,18.58-6.433,26.686-7.173,6.395-.584,7.94-3.741,14.276-2.517,4.172.806,12.827,1.739,19.911,2.789,2.982-.382,11.746,3.3,10.181,1.224-1.75-2.317-12.941-6.01-15.887-6.973-11.61-3.8-19.805-3.624-31.041.22C836.06,608.7,812.606,614.641,816.625,619.528Z"
                transform="matrix(-0.985, -0.174, 0.174, -0.985, 1051.819, 1064.155)"
                fill="#31231e"
                />
                <path
                id="Path_1915"
                data-name="Path 1915"
                d="M938,1010c.528,1.667,2.455,3.019,3.805,4.022,3.564,2.647,7.868,5.169,12.368,5.186v-.329c-5.731-.608-11.751-5.376-16.173-8.878m24.419,9.865v.329l12.051-1.315,5.391-2.959,6.343-5.59c-1.947-.552-5.9,2.894-7.611,3.946A41.5,41.5,0,0,1,962.419,1019.865Z"
                transform="translate(-643.11 -682.512)"
                fill="#31231e"
                />
            </g>
            )}
        </svg>
        </Box>
    );
    };
