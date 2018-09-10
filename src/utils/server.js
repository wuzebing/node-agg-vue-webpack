export const configArray = [
	{
		title:"布局配置",
		keys:[
			{
				key: "grid.left",
				title: "左侧间距",
				defaultValue: '10%',
				message:'组件离容器左侧的距离，20（表示像素）或者20%'
			},
			{
				key: "grid.right",
				title: "右侧间距",
				defaultValue: '10%',
				message:'组件离容器右侧的距离，20（表示像素）或者20%'
			},
			{
				key: "grid.top",
				title: "头部间距",
				defaultValue: '60',
				message:'组件离容器头部的距离，20（表示像素）或者20%'
			},
			{
				key: "grid.bottom",
				title: "底部间距",
				defaultValue: '60',
				message:'组件离容器底部的距离，20（表示像素）或者20%'
			},
		]
	},

	{
		title:"头部配置",
		keys:[
			{
				key: "title.show",
				title: "标题",
				defaultValue: 'true',
				message:'是否显示标题组件，false/true'
			},
			{
				key: "title.textStyle.color",
				title: "标题颜色",
				defaultValue: "#333",
				message:'标题文字的颜色。'
			},
			{
				key: "title.textStyle.fontFamily",
				title: "标题字体系列",
				defaultValue: 'sans-serif',
				message:"还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ..."
			},
			{
				key: "title.textStyle.fontSize",
				title: "标题字体大小",
				defaultValue: '18',
				message:'数值'
			},
		]
	}
]