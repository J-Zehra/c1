import { Box, Container } from '@chakra-ui/react';
import React from 'react'

import { motion } from 'framer-motion'

export const HomeHero = ({width, height}) => {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            as={motion.div}
            whileHover={{
                x: -3
            }}

            initial={{
                opacity: 0,
                x:30
            }}

            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    type: 'tween',
                    ease: 'easeInOut'
                }
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 218.815 185.98"
            >
                <g id="HomeImage" transform="translate(0 0)">
                <motion.g id="LeftArm" transform="translate(111.463 27.463)"
                    initial={{
                        translateX: 111.463,
                        translateY: 27.463,
                    }}
                    animate={{
                        rotate: 20,
                        y: -10,
                        x: -3
                    }}

                    transition={{
                        repeat: Infinity,
                        repeatType:'reverse',
                        duration: 2,
                        type: 'tween'
                    }}

                >
                    <path
                    id="Path_27"
                    dataname="Path 27"
                    d="M330.112,213.226c-.963,2.038-.782,4.233.4,4.9s2.93-.439,3.893-2.477a6.168,6.168,0,0,0,.619-2.625l3.983-8.691-3.772-1.955-3.526,8.775a5.638,5.638,0,0,0-1.6,2.071Z"
                    transform="translate(-329.493 -157.689)"
                    fill="#a0616a"
                    />
                    <path
                    id="Path_28"
                    dataname="Path 28"
                    d="M365.882,74.5s-7.29,4.293-9.6,6.6c-1.229,1.225-9.473,22.929-9.473,22.929l-11.45,21.788,5.952,2.47L353.483,108.2l8.275-11.155L365.882,74.5h0Z"
                    transform="translate(-333.481 -74.503)"
                    fill="#2f2e41"
                    />
                    <g
                    id="Group_9"
                    dataname="Group 9"
                    transform="translate(-2.985 41.742)"
                    >
                    <path
                        id="Path_40"
                        dataname="Path 40"
                        d="M344.572,202.2l-7.827,7.682a2.289,2.289,0,0,1-3.451-.223,33.929,33.929,0,0,1-7.847-9.741,2.9,2.9,0,0,1,.2-3.809l7.827-7.682a2.289,2.289,0,0,1,3.451.223l7.847,9.741a2.9,2.9,0,0,1-.2,3.809h0Z"
                        transform="translate(-324.831 -187.744)"
                        fill="#fff"
                    />
                    <path
                        id="Path_41"
                        dataname="Path 41"
                        d="M344.572,202.2l-7.827,7.682a2.289,2.289,0,0,1-3.451-.223,18.945,18.945,0,0,1-7.847-9.741,2.9,2.9,0,0,1,.2-3.809l7.827-7.682a2.289,2.289,0,0,1,3.451.223l7.847,9.741a2.9,2.9,0,0,1-.2,3.809h0Zm-18.7-5.816a2.5,2.5,0,0,0-.175,3.288,25.247,25.247,0,0,0,7.847,9.741,1.977,1.977,0,0,0,2.979.193l7.827-7.682a2.5,2.5,0,0,0,.175-3.288l-7.847-9.741a1.977,1.977,0,0,0-2.979-.193l-7.827,7.682Z"
                        transform="translate(-324.831 -187.744)"
                        fill="#3f3d56"
                    />
                    <path
                        id="Path_42"
                        dataname="Path 42"
                        d="M347.574,205.571l-6.449,6.33a.622.622,0,0,1-.937-.061.788.788,0,0,1,.055-1.034l6.449-6.33a.622.622,0,0,1,.937.061.788.788,0,0,1-.055,1.034Z"
                        transform="translate(-334.948 -198.191)"
                        fill="#cdc9c3"
                    />
                    <path
                        id="Path_43"
                        dataname="Path 43"
                        d="M354.883,213.791l-6.449,6.33a.622.622,0,0,1-.937-.061.788.788,0,0,1,.055-1.034L354,212.7a.622.622,0,0,1,.937.061.788.788,0,0,1-.055,1.034Z"
                        transform="translate(-339.816 -203.381)"
                        fill="#cdc9c3"
                    />
                    <path
                        id="Path_44"
                        dataname="Path 44"
                        d="M340.264,197.351l-6.449,6.33a.622.622,0,0,1-.937-.061.788.788,0,0,1,.055-1.034l6.449-6.33a.622.622,0,0,1,.937.061A.788.788,0,0,1,340.264,197.351Z"
                        transform="translate(-330.079 -193.001)"
                        fill="#cdc9c3"
                    />
                    </g>
                </motion.g>
                <g id="Rest">
                    <g
                    id="Group_1"
                    dataname="Group 1"
                    transform="translate(143.231 163.582)"
                    >
                    <path
                        id="Path_10"
                        dataname="Path 10"
                        d="M431.993,462.815h4.471l2.127-19.037h-6.6Z"
                        transform="translate(-430.958 -443.778)"
                        fill="#a0616a"
                    />
                    <path
                        id="Path_11"
                        dataname="Path 11"
                        d="M445.251,485.583h0a4.637,4.637,0,0,1,.213,1.4h0a1.6,1.6,0,0,1-1.518,1.675H430.1a1.093,1.093,0,0,1-1.035-1.143v-.636a5.32,5.32,0,0,1,.725-4.27s1.753,1.846,4.372-1.045l.772-1.544,5.591,4.513,3.1.421c.678.092,1.279-.014,1.628.634h0Z"
                        transform="translate(-428.897 -466.657)"
                        fill="#2f2e41"
                    />
                    </g>
                    <g
                    id="Group_2"
                    dataname="Group 2"
                    transform="translate(156.484 159.621)"
                    >
                    <path
                        id="Path_12"
                        dataname="Path 12"
                        d="M472.831,451.01l4.222,1.624,7.687-17.2-6.232-2.4Z"
                        transform="translate(-471.412 -433.034)"
                        fill="#a0616a"
                    />
                    <path
                        id="Path_13"
                        dataname="Path 13"
                        d="M484.5,481.188h0a4.637,4.637,0,0,1-.215,1.395h0a1.486,1.486,0,0,1-1.933,1.03l-13.075-5.032a1.176,1.176,0,0,1-.637-1.455l.19-.6a5.079,5.079,0,0,1,1.958-3.768s1.1,2.38,4.44.6l1.19-1.178,3.933,6.293,2.8,1.524c.613.333,1.212.451,1.348,1.19h0Z"
                        transform="translate(-468.581 -457.751)"
                        fill="#2f2e41"
                    />
                    </g>
                    <path
                    id="Path_14"
                    dataname="Path 14"
                    d="M18.782,171.949H1.417a1.482,1.482,0,0,1,0-2.949H18.782a1.482,1.482,0,0,1,0,2.949Z"
                    transform="translate(-0.054 -106.705)"
                    fill="#e6e6e6"
                    />
                    <rect
                    id="Rectangle_8"
                    dataname="Rectangle 8"
                    width="65.148"
                    height="0.369"
                    transform="translate(0 51.079)"
                    fill="#e6e6e6"
                    />
                    <path
                    id="Path_15"
                    dataname="Path 15"
                    d="M97.782,241.949H80.417a1.482,1.482,0,0,1,0-2.949H97.782a1.482,1.482,0,0,1,0,2.949Z"
                    transform="translate(-52.672 -150.902)"
                    fill="#e6e6e6"
                    />
                    <rect
                    id="Rectangle_9"
                    dataname="Rectangle 9"
                    width="65.148"
                    height="0.369"
                    transform="translate(26.382 76.882)"
                    fill="#e6e6e6"
                    />
                    <path
                    id="Path_16"
                    dataname="Path 16"
                    d="M24.782,333.949H7.417a1.482,1.482,0,0,1,0-2.949H24.782a1.482,1.482,0,0,1,0,2.949Z"
                    transform="translate(-4.05 -208.99)"
                    fill="#e6e6e6"
                    />
                    <rect
                    id="Rectangle_10"
                    dataname="Rectangle 10"
                    width="65.148"
                    height="0.369"
                    transform="translate(2.004 110.794)"
                    fill="#e6e6e6"
                    />
                    <g
                    id="Group_3"
                    dataname="Group 3"
                    transform="translate(55.675 92.89)"
                    >
                    <path
                        id="Path_17"
                        dataname="Path 17"
                        d="M173.354,275.387l-2.748-1.437a23.513,23.513,0,0,1,2.619,6.606,22.461,22.461,0,0,1,3.7-5.939l-2.9.825c1.79-9.683,8.522-16.634,16.232-16.634v-.737c-8.053,0-15.074,7.242-16.9,17.316Z"
                        transform="translate(-167.303 -258.071)"
                        fill="#3f3d56"
                    />
                    <path
                        id="Path_18"
                        dataname="Path 18"
                        d="M179.416,340.02H162.051a1.482,1.482,0,0,1,0-2.949h17.365a1.482,1.482,0,0,1,0,2.949Z"
                        transform="translate(-160.715 -307.951)"
                        fill="#555"
                    />
                    </g>
                    <g
                    id="Group_4"
                    dataname="Group 4"
                    transform="translate(178.965 81.894)"
                    >
                    <path
                        id="Path_19"
                        dataname="Path 19"
                        d="M548.539,239.484l-2.748-1.437a23.514,23.514,0,0,1,2.619,6.606,22.46,22.46,0,0,1,3.7-5.939l-2.9.825c1.79-9.683,8.522-16.634,16.232-16.634v-.737c-8.053,0-15.074,7.242-16.9,17.316Z"
                        transform="translate(-542.488 -222.168)"
                        fill="#3f3d56"
                    />
                    <path
                        id="Path_20"
                        dataname="Path 20"
                        d="M554.6,304.117H537.236a1.482,1.482,0,0,1,0-2.949H554.6a1.482,1.482,0,0,1,0,2.949Z"
                        transform="translate(-535.9 -272.048)"
                        fill="#555"
                    />
                    </g>
                    <path
                    id="Path_21"
                    dataname="Path 21"
                    d="M437.62,193,407.9,197.792l7.347,98.419,8.349-.369,2.672-67.087,11.02,29.858-6.679,36.861,8.349-.36,10.019-36.87L442.3,216.223Z"
                    transform="translate(-271.68 -121.858)"
                    fill="#2f2e41"
                    />
                    <path
                    id="Path_22"
                    dataname="Path 22"
                    d="M431.817,62H421l-8.777,53.8s5.226,7.911,15.583.462,15.141-1.2,15.141-1.2L431.817,62h0Z"
                    transform="translate(-274.559 -39.146)"
                    fill="#cdc9c3"
                    />
                    <path
                    id="Path_23"
                    dataname="Path 23"
                    d="M409.349,155.242l10.245-20.626.668-60.452L415.455,62l-2.874,5.161L403.9,73.1l1.683,26.138-.6,16.978-.31,8.8c-1.082,5.276.842,26.855,4.675,30.226Z"
                    transform="translate(-269.015 -39.146)"
                    fill="#2f2e41"
                    />
                    <path
                    id="Path_24"
                    dataname="Path 24"
                    d="M464.532,65.653l10.559,9.9,6.178,58.425.108-.017c.567,2.454.607,17.421-.669,19.526l-15.3-17.113L460.9,76.1l3.634-10.449Z"
                    transform="translate(-306.98 -41.452)"
                    fill="#2f2e41"
                    />
                    <g
                    id="Group_5"
                    dataname="Group 5"
                    transform="translate(159.414 25.752)"
                    >
                    <path
                        id="Path_25"
                        dataname="Path 25"
                        d="M558.835,207.82c1.006,2.149.817,4.464-.422,5.171s-3.059-.463-4.065-2.612a6.561,6.561,0,0,1-.646-2.769l-4.159-9.166,3.938-2.062,3.682,9.255a5.938,5.938,0,0,1,1.672,2.184Z"
                        transform="translate(-525.435 -149.744)"
                        fill="#a0616a"
                    />
                    <path
                        id="Path_26"
                        dataname="Path 26"
                        d="M477.355,69.861s7.828,6.976,10.243,9.408c1.283,1.292,9.89,21.235,9.89,21.235l11.954,22.98-6.214,2.605L490.517,104.9,479.54,90.923l-2.185-21.062h0Z"
                        transform="translate(-477.355 -69.861)"
                        fill="#2f2e41"
                    />
                    </g>
                    <ellipse
                    id="Ellipse_2"
                    dataname="Ellipse 2"
                    cx="8.721"
                    cy="9.626"
                    rx="8.721"
                    ry="9.626"
                    transform="translate(143.367 1.613)"
                    fill="#a0616a"
                    />
                    <path
                    id="Path_29"
                    dataname="Path 29"
                    d="M439.779,0s.624,2.754-2.183.344c-1.024-.879-2.333.536-3.431.689-1.914.266-3.431.065-3.431,1.377,0,.839-1.01-.438-1.56-.344-.8.137-1.248,1.377-1.248,1.377-1.218.856-2.183,2.754-.312,3.443-1.872,2.41-.137,3.638-.137,3.638l1.7-2.261c.879.529,2.072,1.9,2.509,1.129,1.234-2.162,4.865.092,6.369-.816s2.351,2.785,2.351,2.785l.694.4s-.382-.743,1.489-1.431c.936-.344,1.17.689,1.17,1.807a7.963,7.963,0,0,1-.89,3.608L441.1,19.205l.777-.547a8.991,8.991,0,0,0,3.28-5.024,1.012,1.012,0,0,1,.113-.264l-.185-1.665.611.791a1.086,1.086,0,0,0,.013-.791c-1.124-2.335.624-3.787-1.248-6.886C441.684.228,439.779,0,439.779,0h0Z"
                    transform="translate(-284.113)"
                    fill="#2f2e41"
                    />
                    <path
                    id="Path_30"
                    dataname="Path 30"
                    d="M289.56,502.6a.418.418,0,0,0,.4.439H411.279a.441.441,0,0,0,0-.877H289.957a.418.418,0,0,0-.4.439Z"
                    transform="translate(-192.861 -317.06)"
                    fill="#ccc"
                    />
                </g>
                <motion.g id="Note2" transform="translate(68.525 75.538)"
                    initial={{
                        translateX: 68.525,
                        translateY: 75.538,
                    }}
                    animate={{
                        y: -50
                    }}
                    
                    whileHover={{
                        scale: 1.2,
                        rotate: 180,
                        transition: {
                            duration: 1,
                            type:'tween'
                        }
                    }}

                    transition={{
                        repeat: Infinity,
                        repeatType:'reverse',
                        duration: 2,
                        type: 'tween'
                    }}
                >
                    <path
                    id="Path_31"
                    dataname="Path 31"
                    d="M221.315,217.931H210.842a2.583,2.583,0,0,1-2.444-2.7V202.2a2.583,2.583,0,0,1,2.444-2.7h10.474a2.583,2.583,0,0,1,2.444,2.7v13.035A2.583,2.583,0,0,1,221.315,217.931Z"
                    transform="translate(-208.398 -199.5)"
                    fill="#fff"
                    />
                    <path
                    id="Path_32"
                    dataname="Path 32"
                    d="M221.315,217.931H210.842a2.583,2.583,0,0,1-2.444-2.7V202.2a2.583,2.583,0,0,1,2.444-2.7h10.474a2.583,2.583,0,0,1,2.444,2.7,25.817,25.817,0,0,1,0,13.035A2.583,2.583,0,0,1,221.315,217.931Zm-10.474-18.062a2.23,2.23,0,0,0-2.11,2.329v13.035a2.23,2.23,0,0,0,2.11,2.329h10.474a2.23,2.23,0,0,0,2.11-2.329V202.2a2.23,2.23,0,0,0-2.11-2.329Z"
                    transform="translate(-208.398 -199.5)"
                    fill="#3f3d56"
                    />
                    <path
                    id="Path_33"
                    dataname="Path 33"
                    d="M225.375,218.49h-8.63a.736.736,0,0,1,0-1.465h8.63a.736.736,0,0,1,0,1.465Z"
                    transform="translate(-213.515 -210.565)"
                    fill="#cdc9c3"
                    />
                    <path
                    id="Path_34"
                    dataname="Path 34"
                    d="M225.375,229.49h-8.63a.736.736,0,0,1,0-1.465h8.63a.736.736,0,0,1,0,1.465Z"
                    transform="translate(-213.515 -217.51)"
                    fill="#cdc9c3"
                    />
                </motion.g>
                <motion.g id="Note1" transform="translate(3.094 38.591)"
                    initial={{
                        translateX: 3.094,
                        translateY: 38.591,
                    }}
                    animate={{
                        y: 20
                    }}

                    transition={{
                        repeat: Infinity,
                        repeatType:'reverse',
                        duration: 2,
                        type: 'tween'
                    }}

                    whileHover={{
                        scale: 1,
                        rotate: 100,
                        transition: {
                            duration: 1.5,
                            type:'tween'
                        }
                    }}
                >
                    <path
                    id="Path_35"
                    dataname="Path 35"
                    d="M23.532,123.124H13.058a2.583,2.583,0,0,1-2.444-2.7V107.391a2.583,2.583,0,0,1,2.444-2.7H23.532a2.583,2.583,0,0,1,2.444,2.7v13.035a2.583,2.583,0,0,1-2.444,2.7Z"
                    transform="translate(-10.163 -104.693)"
                    fill="#fff"
                    />
                    <path
                    id="Path_102"
                    dataname="Path 102"
                    d="M22.632,123.124H12.159a2.583,2.583,0,0,1-2.444-2.7,47.319,47.319,0,0,1,0-13.035,2.583,2.583,0,0,1,2.444-2.7H22.632a2.583,2.583,0,0,1,2.444,2.7v13.035a2.583,2.583,0,0,1-2.444,2.7ZM12.159,105.062a2.23,2.23,0,0,0-2.11,2.329v13.035a2.23,2.23,0,0,0,2.11,2.329H22.632a2.23,2.23,0,0,0,2.11-2.329V107.391a2.23,2.23,0,0,0-2.11-2.329Z"
                    transform="translate(-9.264 -104.693)"
                    fill="#3f3d56"
                    />
                    <path
                    id="Path_103"
                    dataname="Path 103"
                    d="M27.591,123.683h-8.63a.736.736,0,0,1,0-1.465h8.63a.736.736,0,0,1,0,1.465Z"
                    transform="translate(-15.281 -115.758)"
                    fill="#cdc9c3"
                    />
                    <path
                    id="Path_104"
                    dataname="Path 104"
                    d="M27.591,134.683h-8.63a.736.736,0,0,1,0-1.465h8.63a.736.736,0,0,1,0,1.465Z"
                    transform="translate(-15.281 -122.703)"
                    fill="#cdc9c3"
                    />
                    <path
                    id="Path_105"
                    dataname="Path 105"
                    d="M27.591,112.683h-8.63a.736.736,0,0,1,0-1.465h8.63a.736.736,0,0,1,0,1.465Z"
                    transform="translate(-15.281 -108.812)"
                    fill="#cdc9c3"
                    />
                </motion.g>
                <motion.g id="Note3" transform="translate(24.584 103.098)"
                    initial={{
                        translateX: 24.584,
                        translateY: 103.098,
                    }}
                    animate={{
                        y: 40
                    }}

                    transition={{
                        repeat: Infinity,
                        repeatType:'reverse',
                        duration: 3,
                        type: 'tween'
                    }}

                    whileHover={{
                        scale: 1.2,
                        rotate: 90,
                        transition: {
                            duration: 1,
                            type:'tween'
                        }
                    }}

                >
                    <path
                    id="Path_45"
                    dataname="Path 45"
                    d="M88.531,298.124H78.058a2.583,2.583,0,0,1-2.444-2.7V282.391a2.583,2.583,0,0,1,2.444-2.7H88.531a2.583,2.583,0,0,1,2.444,2.7v13.035A2.583,2.583,0,0,1,88.531,298.124Z"
                    transform="translate(-74.946 -279.693)"
                    fill="#fff"
                    />
                    <path
                    id="Path_46"
                    dataname="Path 46"
                    d="M87.2,298.124H76.726a2.583,2.583,0,0,1-2.444-2.7,32.149,32.149,0,0,1,0-13.035,2.583,2.583,0,0,1,2.444-2.7H87.2a2.583,2.583,0,0,1,2.444,2.7v13.035A2.583,2.583,0,0,1,87.2,298.124ZM76.726,280.062a2.23,2.23,0,0,0-2.11,2.329v13.035a2.23,2.23,0,0,0,2.11,2.329H87.2a2.23,2.23,0,0,0,2.11-2.329V282.391a2.23,2.23,0,0,0-2.11-2.329Z"
                    transform="translate(-73.614 -279.693)"
                    fill="#3f3d56"
                    />
                    <path
                    id="Path_47"
                    dataname="Path 47"
                    d="M92.591,298.683h-8.63a.736.736,0,0,1,0-1.465h8.63a.736.736,0,0,1,0,1.465Z"
                    transform="translate(-80.063 -290.758)"
                    fill="#cdc9c3"
                    />
                </motion.g>
                </g>
            </svg>
        </Box>
        );
}
