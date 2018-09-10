export const options = {
					grid:{
						left:'10%',
						right:'10%',
						top:80,
						bottom:20
					},
					title:{
						show:true,
						text:"测试用例",
						textStyle:{
							color:"#333",
							fontFamily:"sans-serif",
							fontSize:"18"
						}
					},
					tooltip: {
				        trigger: 'axis',
				        axisPointer:{
				        	type:"shadow",
				        	z:1,
				        	shadowStyle: {
				        		color: {
				        			type: 'linear',
								    x: 0,
								    y: 0,
								    x2: 1,
								    y2: 1,
								    colorStops: [{
								        offset: 0, color: 'rgba(243,245,253,0)' // 0% 处的颜色
								    }, {
								        offset: 1, color: 'rgba(237,246,255,1)' // 100% 处的颜色
								    }],
								    globalCoord: false // 缺省为 false
				        		}
				        	}
				        },
			            backgroundColor:"transparent",
			           
				    },
				    xAxis: {
				        type: 'category',
				        data: [1,2,3,4,4,5,6,6,7],
				        splitLine: {
				            show: false,
				            triggerOn:"none",
				            lineStyle: {
				        		color: "#E6EAEF"
				        	}
				        },
				        axisLine: {
				        	lineStyle: {
				        		color: "#E4E8EC"
				        	}
				        },
				        axisTick: {
				        	show: false
				        },
				        axisLabel:{
				        	show: true,
				        	fontFamily:'PingFangSC-Regular',
				        	fontSize:"8px",
				        	color:"#8D99BD"
				        }
				    },
				    yAxis: {
				        type: 'value',
				        splitLine: {
				            show: true,
				            lineStyle: {
				        		color: "#E6EAEF"
				        	}
				        },
				        axisLine: {
				            show: false,
				            
				        },
				        axisTick: {
				        	show: false
				        },
				        axisLabel:{
				        	show: true,
				        	fontFamily:'PingFangSC-Regular',
				        	fontSize:"8px",
				        	color:"#8D99BD",
				        	formatter:'{value}万元'
				        },
				    },
				    series: [{
				        data: [1,2,3,3,4,5,6,7,7],
				        type: 'line',
				        smooth: true,
				        symbolSize:6,
				        legendHoverLink:false,
				        itemStyle : {  
                            normal : {  
                                color:'rgba(77,168,254,1)',  
                                
                            }  
                        },  
				        label:{
			        		show:true,
			        		color: "rgba(73,80,86,1)",
			        		fontSize: 12,
			        		fontFamily: 'BebasNeueBold',
			        		shadowColor: '#E2ECFA',
    						shadowBlur: 13
			        	},
			        	markPoint:{
			            	itemStyle: {
			            		color:"rgba(69,165,255,1)"
			            	}
			            },
				        lineStyle: {
				        	color: {
				        		type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: 'rgba(77,168,254,1)' // 0% 处的颜色
							    }, {
							        offset: 1, color: 'rgba(43,152,255,1)' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
				        	},
				        	shadowColor: 'rgba(194,220,245,1)',
    						shadowBlur: 10,
    						shadowOffsetX:0,
    						shadowOffsetY:3
				        }
				    },
					{
				        data: [11,12,13,13,14,15,16,17,17],
				        type: 'line',
				        smooth: true,
				        symbolSize:6,
				        legendHoverLink:false,
				        itemStyle : {  
                            normal : {  
                                color:'rgba(29,218,153,1)',  
                                
                            }  
                        },  
				        label:{
			        		show:true,
			        		color: "rgba(73,80,86,1)",
			        		fontSize: 12,
			        		fontFamily: 'BebasNeueBold',
			        		shadowColor: '#E2ECFA',
    						shadowBlur: 13
			        	},
			        	markPoint:{
			            	itemStyle: {
			            		color:"rgba(69,165,255,1)"
			            	}
			            },
				        lineStyle: {
				        	color: {
				        		type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: 'rgba(29,218,153,1)' // 0% 处的颜色
							    }, {
							        offset: 1, color: 'rgba(29,218,153,1)' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
				        	},
				        	shadowColor: 'rgba(210, 232, 253, 1)',
    						shadowBlur: 10,
    						shadowOffsetX:0,
    						shadowOffsetY:3
				        }
				    },
				    {
				        data: [21,22,23,23,24,25,26,27,27],
				        type: 'line',
				        smooth: true,
				        symbolSize:6,
				        legendHoverLink:false,
				        itemStyle : {  
                            normal : {  
                                color:'rgba(255,185,124,1)',  
                                
                            }  
                        },  
				        label:{
			        		show:true,
			        		color: "rgba(73,80,86,1)",
			        		fontSize: 12,
			        		fontFamily: 'BebasNeueBold',
			        		shadowColor: '#E2ECFA',
    						shadowBlur: 13
			        	},
			        	markPoint:{
			            	itemStyle: {
			            		color:"rgba(69,165,255,1)"
			            	}
			            },
				        lineStyle: {
				        	color: {
				        		type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: 'rgba(255,185,124,1)' // 0% 处的颜色
							    }, {
							        offset: 1, color: 'rgba(245,157,96,1)' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
				        	},
				        	shadowColor: 'rgba(210, 232, 253, 1)',
    						shadowBlur: 10,
    						shadowOffsetX:0,
    						shadowOffsetY:3
				        }
				    }]
				}
